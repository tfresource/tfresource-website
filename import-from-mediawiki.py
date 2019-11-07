# fetch each page and extract the page source in mediawiki format

import csv, re, os
from subprocess import check_output

all_categories = set()

# create dirs
if not os.path.exists('output/topics'): os.makedirs('output/topics')
if not os.path.exists('output/resources'): os.makedirs('output/resources')

# loop for every page
with open('pages.csv') as rows:
    for row in csv.reader(rows):
        page,title = row[0],row[1]

        print()
        print(title)

        # -----------------------------------------
        # fetch raw mediawiki content
        url = 'http://tfresource.org/index.php?title=' + page + '&action=edit'
        output = check_output(['wget', '-qO-', url])
        content = output[output.find(b'wpTextbox1">') + 12 : output.find(b'</textarea>')]


        # -----------------------------------------
        # strip out useless garbage
        useless_garbage = [
          b'{{Incubator}}',
          b'&lt;!-- This tag includes the incubator notice template, do not remove unless you are a Curator/Admin -->',
          b'[[Category:Incubator topics]]',
          b'[[Category:Incubator_topics]]',
          b'&lt;!-- This tag adds a placeholder for references to this page, do not remove unless you are a Curator/Admin -->',
          b'&lt;!-- Below are the default topic categories. You can add more, but should not remove these defaults unless you are a Curator/Admin -->',
          b'&lt;comments /> &lt;!-- This tag enables commenting on this page, do not remove unless you are a Curator/Admin -->',
          b'&lt;!-- This is a sample heading, you can remove this if it doesn\'t pertain to your posting -->',
          b'&lt;!-- Below is an infobox, on this page it is used to highlight the resource link, -->',
          b'&lt;!-- please add the link to the resource in place of http://link_to_file -->',
          b'&lt;!-- COMMENT: note the format of the table and can insert additional lines as needed -->',
          b'<comments />',
          b'{{Start date|',
        ]
        for garbage in useless_garbage: content = content.replace(garbage, b'')


        # -----------------------------------------
        # replace some things
        replace_list = [
          (b'&lt;br /&gt;', b'\n'),
          (b'&lt;br />', b'\n'),
          (b'<br />', b'\n'),
          (b'&lt;', b'<'),
          (b'&gt;', b'>'),
        ]
        for ffrom,tto in replace_list: content = content.replace(ffrom,tto)


        utf8 = content.decode('utf-8')


        # -----------------------------------------
        # Check for links on resource pages
        resources = []
        res_type = None
        res_label = None
        res_url = None
        for line in utf8.split('\n'):
            if line.startswith('|label'): res_type = line[3+line.find(' = ') :]

            if line.startswith('|data'):
              res_url = line[1+line.find('[') : line.find(' ', line.find('['))]
              res_label = line[1+line.find(' ', line.find('[')): -1]
              if res_label.startswith('|'): res_label = 'Link'

            if res_url and res_type and res_label:
              resources.append( (res_label, res_type, res_url) )
              res_label = res_type = res_url = None


        # -----------------------------------------
        # build category set
        categories = set()
        for category in re.finditer(r'Category:', utf8):
          cat_end = utf8.index(']]', category.start())
          cat_name = utf8[category.start()+9 : cat_end]

          # now clean up the category name mess
          pipe = cat_name.find('|')
          if (pipe > -1): cat_name = cat_name[:pipe]
          pipe = cat_name.find('#')
          if (pipe > -1): cat_name = cat_name[:pipe]
          cat_name = cat_name.strip()

          cat_name = cat_name.replace('_',' ')
          cat_name = cat_name.replace('-',' ')
          cat_name = cat_name.title()

          categories.add(cat_name)
          all_categories.add(cat_name)

        if len(categories): print('   ---categories:', sorted(categories))


        # -----------------------------------------
        # Remove all category tags from raw text now that we've captured them
        things = []
        for category in re.finditer(b'Category:', content):
          things.insert(0,category)
        # Need to remove in reverse order or string offsets get broken
        for category in things:
          cat_end = content.index(b']]', category.start())
          content = content[: category.start()-2] + content[cat_end+2 :]


        # -----------------------------------------
        '''
        # Fetch all attachments
        folder = 'Resources' in categories and 'resources' or 'topics'

        for attachment in re.finditer(r'File:', utf8):
          att_end = utf8.index(']]', attachment.start())
          filename = utf8[attachment.start()+5 : att_end]
          pipe = filename.find('|')
          if pipe > -1: filename = filename[:pipe]
          print('   ---file:', filename)

          url = 'http://tfresource.org/File:' + filename

          try:
            filepagehtml = check_output(['wget', '-qO-', url])
            find_current_loc = filepagehtml.find(b'<td>current</td>')
            find_url_start = filepagehtml.find(b'<a href="', find_current_loc)
            find_url_end = filepagehtml.find(b'">', find_url_start)

            file_url = filepagehtml[find_url_start+10 : find_url_end]
            file_url = file_url.replace(b' ', b'_')
            true_file_url = b'http://tfresource.org/' + file_url
            filepagehtml = check_output(['wget', '-q', '--restrict-file-names=ascii,nocontrol',
                                       '-P', 'output/'+folder, true_file_url])
          except:
            print('   ### ERR:', url)
        '''


        # -----------------------------------------
        # convert mwiki -> markdown using PanDoc
        output = check_output(['pandoc', '-',
          '--from', 'mediawiki',
          '--to', 'markdown-simple_tables-implicit_figures',
          '--wrap=preserve',
          ], input=content)
        markdown = output.decode('utf-8')


        # -----------------------------------------
        # generate md headers
        headers = ['---']
        headers.append('title: "' + title + '"')

        if markdown.find(r'\_\_NOTOC\_\_') > -1:
          headers.append('noTOC: true')
          markdown = markdown.replace('\\_\\_NOTOC\\_\\_\n','')
          markdown = markdown.replace('\\_\\_NOTOC\\_\\_','')

        headers.append('categories:')
        headers.append('  - Needs Review')
        for category in sorted(categories): headers.append('  - ' + category)

        if resources:
          headers.append('links:')
          for rlabel, rtype, rurl in resources:
            print('    LINKS:', rlabel, rtype, rurl)
            headers.append('  - type: ' + rtype)
            headers.append('    label: "' + rlabel.strip() + '"')
            headers.append('    url: ' + rurl)


        # -----------------------------------------
        # fix pandoc markup
        cleanlines = []
        for line in markdown.split('\n'):
          # clean up $$ equations
          if r'\$\$' in line:
            line = line.replace('\\\\','@BILLY@')
            line = line.replace('\\','')
            line = line.replace('@BILLY@', '\\')
            if line.endswith(' $$'): line = line[:-3] + '$$'

          # remove random image dimensions
          line = re.sub(r'\{width="[0-9]*"\}', r'', line)
          line = re.sub(r'\{width="[0-9]*" height="[0-9]*"\}', r'', line)

          # remove random wikilink comments
          line = re.sub(r' "wikilink"', r'', line)

          # remove comment plugin
          line = re.sub(r'\<comments \/\>', r'', line)

          # remove resource link attributes
          if line.startswith('|label'): continue
          if line.startswith('|data'): continue

          # clean up date lines
          if re.match(r'^[0-9]*\|.*\|[0-9]*\}\}$', line):
            line = line[:-2].replace('|','-')

          # clean up links
          replacements = []
          for link in re.finditer(r'\[.*?\]\(.*?[\)\#]', line):

            linkurl = line[2+line.find('](', link.start()) : link.end() - 1]
            if linkurl.startswith('http'): continue
            if not linkurl: continue
            if linkurl.find('"') > -1: continue

            newlink = re.sub(r'[^0-9a-zA-Z\#_]', '_', linkurl) # windows hates colons
            newlink = newlink.replace('__','_').rstrip()

            # save in reverse order so we don't mangle the line
            replacements.insert(0, (linkurl, newlink) )
            print('   -link:', linkurl)
            print('         ', newlink)

          # finally do the replacements
          for r2old,r2new in replacements: line = line.replace(r2old, r2new)

          cleanlines.append(line)


        # -----------------------------------------
        # write output
        title = re.sub(r'[^0-9a-zA-Z\-]', '_', title) # windows hates colons
        title = title.replace('__','_').rstrip()
        fname = "".join([c for c in title if c.isalpha() or c.isdigit() or c in '_-']).rstrip()
        folder = 'Resources' in categories and 'resources' or 'topics'
        with open('output/' + folder + '/' + fname + '.md', 'w') as out:
          out.writelines("%s\n" % header for header in headers)
          out.writelines("---\n\n")
          out.writelines("%s\n" % line for line in cleanlines)

print('\n----\nAll Categories:')
print(sorted(all_categories))

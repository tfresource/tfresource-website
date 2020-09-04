<template>
  <main class="page">
    <slot name="top" />

    <div class="nav-headings">
      <div v-if="$page.headers && $page.headers.length > 1">
        <b class="toc">Contents</b>
        <p>
          <a href="#">{{ $page.title }}</a>
        </p>
        <span v-for="header in $page.headers" :key="header.title">
          <p v-if="header.level <= 3" :class="{ lev3: header.level == 3 }">
            <a :href="'#' + header.slug"> {{ header.title }}</a>
          </p>
        </span>
      </div>

      <div v-if="categories">
        <p class="categories"><b>Page categories</b></p>
        <span v-for="category in categories" :key="'cat-' + category">
          <p>
            <a :href="circleLookup[category.toLowerCase()]"> {{ category }} </a>
          </p>
        </span>
      </div>
    </div>

    <PageEdit />

    <div class="theme-default-content">
      <h1>{{ $page.title }}</h1>

      <div class="div-links" v-if="$page.frontmatter.links">
        <p>
          <b>ATTACHED LINKS:</b>
        </p>
        <table class="table-links">
          <tr v-for="link in $page.frontmatter.links" :key="link.label">
            <td>
              <b>{{ link.type }}</b>
            </td>
            <td>
              <a :href="link.url" target="_blank">{{ link.label }}</a>
            </td>
          </tr>
        </table>
      </div>

      <Content />
    </div>

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
  computed: {
    categories() {
      const { frontmatter } = this.$page
      if (!frontmatter.categories) return null
      return frontmatter.categories.sort((a, b) => (a < b ? -1 : 1))
    },
    circleLookup() {
      const circles = this.$site.pages
        .filter(page => page.frontmatter.categories && page.frontmatter.categories.indexOf('Topic Circles') > -1)
        .sort((a, b) => (a.frontmatter.title < b.frontmatter.title ? -1 : 1))
      const lookup = {}
      for (const page of circles) {
        const title = page.frontmatter.title.toLowerCase()
        lookup[title] = page.path
        // hyphens confuse things, but this is easier than going thru every page:
        if (title.indexOf('-') > -1) lookup[title.replace(/-/g, ' ')] = page.path
      }
      lookup['topic circles'] = '/topics/'
      lookup['needs review'] = '/topics/'
      return lookup
    },
  },
}
</script>

<style scoped lang="stylus">
@require '../styles/wrapper.styl';
@import '~html-hint/dist/html-hint.min.css'

.page {
  padding-bottom: 2rem;
  display: block;
}

.div-links {
  color: #24a;
  text-align: center;
  margin: 0px 0px;
  padding: 0rem 0rem 1rem 2rem;
  float: right;
}

.div-links p {
  margin: 0.25rem 0px;
}

.table-links {
  margin: 0px 0px;
  padding: 0px 0px;
  border: 1px dotted #24a;
}

.nav-headings {
  position: sticky;
  flex: 0 0 240px;
  top: 7rem;
  right: 1rem;
  display: block;
  width: 20%;
  float: right;
  border-left: 1px solid #ccc;
  padding-left: 1rem;
}

.nav-headings p,a {
  font-size: 0.8rem;
  line-height: 1.3;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.nav-headings b {
  font-size: 0.8rem;
  color: #575;
}

.nav-headings .toc {
  margin-top 0px;
}

.categories {
  padding-top 3rem;
}

.nav-headings a:hover {
  color: #060;
}

.lev3 { margin-left: 1rem;}

@media (max-width: 85rem) {
  .theme-default-content {
    max-width: 34rem;
    padding-left: 0.5rem;
    padding-right: 1rem;
  }
}

@media (max-width: 77rem) {
  .nav-headings {
    display: none;
  }
}
</style>

<style lang="stylus">
.hint--html {
  font-weight: bold;
  color: $accentColor;
}

.hint__content {
  border-left: solid 1rem $accentColor;
  background-color: white;
  box-shadow: 0px 2px 13px rgba(0.0,0.0,0.0,0.2);

  h3 {
    color: $accentColor;
    margin: 0 0;
    padding-top: 0;
  }

  p {font-size: 0.9rem; color: #777; margin: 0 0; width: max-content; font-weight: normal;}

  .hint__tiny { margin-top: 0.5rem; color: #aaa; font-size: 0.7rem; text-align: right; margin-left: auto;}
}
</style>

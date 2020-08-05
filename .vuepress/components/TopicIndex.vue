<template lang="pug">
.main-content
  .category
  h2 Main Categories
  .category.boop
    .topics(v-for="topic in topicCircle('Topic Circles')" :key="'tc+' + topic.path")
      .entry
        router-link.link-text(:to="topic.path") {{ topic.frontmatter.title }}
        Badge.badge(v-if="topic.frontmatter.categories.includes('Needs Review')"
            text="Needs Review"
            type="warn"
            vertical="top")
        p(v-if="topic.frontmatter.description") {{ topic.frontmatter.description }}

  hr
  h1 Big List of all pages by category
  .category(v-for="category in categories" :key="category" )
    h2 {{ category }}:
    .boop
      .topics(v-for="topic in topicCircle(category)" :key="topic.path")
        .entry(style="columns: 2;" )
          router-link.link-text(:to="topic.path") {{ topic.frontmatter.title }}
          Badge.badge(v-if="topic.frontmatter.categories.includes('Needs Review')"
              text="Needs Review"
              type="warn"
              vertical="top")
          p(v-if="topic.frontmatter.description") {{ topic.frontmatter.description }}

</template>

<script>
'use strict'
export default {
  props: ['root'],
  computed: {
    topics() {
      return this.$site.pages
        .filter(x => x.path.startsWith(this.root) && !x.frontmatter.no_index)
        .map(x => {
          if (!x.frontmatter.title) x.frontmatter.title = x.title
          return x
        })
        .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title))
      // new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    },
    categories() {
      const all = Object.keys(this.pageLookup).sort()
      // all.splice(0, 0, 'Uncategorized')
      // .filter(a => a != 'Needs Review')
      return all
    },
  },
  data: function() {
    return {
      pageLookup: {},
    }
  },
  created: function() {
    // uncategorized:
    /*
    const uncategorized = this.$site.pages.filter(p => p.frontmatter && p.frontmatter.categories === ['Needs Review'])
    for (const page of uncategorized) {
      page.frontmatter.categories = ['!Uncategorized', 'Needs Review']
    }
    */

    this.pageLookup['Uncategorized'] = []

    for (const page of this.$site.pages) {
      if (!page.frontmatter || !page.frontmatter.categories) continue

      if (!page.path.startsWith(this.root)) continue

      for (const category of page.frontmatter.categories) {
        if (!this.pageLookup[category]) this.pageLookup[category] = []
        this.pageLookup[category].push(page)
      }

      if (page.frontmatter.categories.length < 2) {
        this.pageLookup['Uncategorized'].push(page)
      }
    }

    delete this.pageLookup['Needs Review']
    // console.log({ all: this.pageLookup })
  },
  methods: {
    topicCircle: function(category) {
      if (!this.pageLookup[category]) return []
      return this.pageLookup[category].sort((a, b) => (a.title < b.title ? -1 : 1))
    },
  },
}
</script>

<style scoped>
.topic-card {
  margin-right: 0.5rem;
}

.topic-card-detail {
  color: #223;
}

.card-container {
  display: flex;
  flex-direction: row;
}

.page-title {
  margin: 0.25rem 0px;
}

.entry {
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  margin: 0.75rem 0rem;
}

.badge {
  padding-left: 1rem;
}

.link-text {
  margin-top: 0.25rem;
  margin-right: 0.5rem;
}

.boop {
  columns: 2;
}

@media (max-width: 600px) {
  .boop {
    columns: 1;
  }
}
</style>

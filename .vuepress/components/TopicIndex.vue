<template lang="pug">
.main-content
  .category(v-for="category in categories" :key="category" )
    h3 {{ category }}:
    .topics(v-for="topic in topicCircle(category)" :key="topic.path")
      .entry
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
  computed: {
    topics() {
      return this.$site.pages
        .filter(x => x.path.startsWith('/topics/') && !x.frontmatter.no_index)
        .map(x => {
          if (!x.frontmatter.title) x.frontmatter.title = x.title
          return x
        })
        .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title))
      // new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    },
    categories() {
      const all = Object.keys(this.pageLookup).sort()
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
    for (const page of this.$site.pages) {
      if (!page.frontmatter || !page.frontmatter.categories) continue

      for (const category of page.frontmatter.categories) {
        if (!this.pageLookup[category]) this.pageLookup[category] = []
        this.pageLookup[category].push(page)
      }
    }
    // console.log({ all: this.pageLookup })
  },
  methods: {
    topicCircle: function(category) {
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
  font-size: 1.1rem;
  display: flex;
  flex-direction: row;
  margin: 0.75rem 2rem;
}

.badge {
  padding-left: 1rem;
}

.link-text {
  margin-top: 0.25rem;
  margin-right: 0.5rem;
}
</style>
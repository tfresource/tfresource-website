<template lang="pug">
.custom-block.tip(v-if="circleTopics.length")
  h4 More pages in this category:
  .boop
    .topics(v-for="topic of circleTopics" :key="topic.path")
      .entry
        router-link.link-text(:to="topic.path") {{ topic.frontmatter.title }}
        p(v-if="topic.frontmatter.description") {{ topic.frontmatter.description }}

</template>

<script>
'use strict'
export default {
  computed: {
    circleTopics() {
      return this.$site.pages
        .filter(
          page => page.frontmatter.categories &&
          page.frontmatter.categories.indexOf(this.category) > -1 )
        .sort((a,b) => a.frontmatter.title < b.frontmatter.title ? -1 : 1)
    },
  },
  data: function() {
    return {
      pageLookup: {},
      category: this.$attrs.category,
    }
  },
  created: function() {
  },
  methods: {
  },
}
</script>

<style scoped>
.tip {
  margin-top: 2rem;
}

h4 {
  padding: 0 0;
  margin: 1rem 0;
}

.entry {
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  margin: 0.25rem 0rem;
}

.link-text {
  margin-top: 0.25rem;
  margin-right: 0.5rem;
}

.boop {
  margin: 1rem 0;
  columns: 2;
}

@media (max-width: 600px) {
  .boop { columns: 1;}
}

</style>
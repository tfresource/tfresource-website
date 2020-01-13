<template lang="pug">
.category
  h4 More Pages in this Category:
  .boop
    .topics(v-for="topic in circleTopics" :key="topic.path")
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
    console.log({hey: this})
  },
  methods: {
  },
}
</script>

<style scoped>
.category {
  background: white;
  padding: 1rem;
  border: 1px dashed green;
  margin: 2rem 0rem;
}

h4 {
  padding: 0 0;
  margin: 0 0 1rem 0;
}

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
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  margin: 0.25rem 0rem;
}

.badge {
  padding-left: 1rem;
}

.link-text {
  margin-top: 0.25rem;
  margin-right: 0.5rem;
}

.boop { columns: 2;}

@media (max-width: 600px) {
  .boop { columns: 1;}
}

</style>
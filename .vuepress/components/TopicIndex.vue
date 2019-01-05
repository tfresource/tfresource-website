<template lang="pug">
.topic-index-content

    .topics(v-for="topic in topics")
      router-link.topic-card(:to="topic.path")
        .topic-card.custom-block.tip
          .card-container
            .left-stuff
              p.custom-block-title {{ topic.frontmatter.title }}
              p.topic-card-detail {{ topic.frontmatter.description }}
              .badges
                .badge-tag(v-for="tag in topic.frontmatter.tags" :key="topic.title+tag")
                  Badge(
                    :text="tag"
                    :type="tag==='archive' ? 'warn':''"
                    vertical="top"
                  )

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
  },
}
</script>
<style scoped>
.topic-card-detail {
  color: #223;
}

.topic-card:hover {
  text-decoration: none;
  box-shadow: 2px 5px 8px rgba(20, 0, 80, 0.4);
}

a.topic-card:hover {
  text-decoration: none;
}

.topic-card {
  max-width: 300px;
}

.card-container {
  display: flex;
  flex-direction: row;
}

.left-stuff {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 0.85rem;
  margin-top: -0.5rem;
}

.badges {
  display: flex;
  flex-direction: row;
  margin: -0.5rem -27px 1px auto;
  font-size: 0.7rem;
}
</style>
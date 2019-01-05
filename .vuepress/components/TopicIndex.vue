<template>
  <div>
    <div v-for="topic in topics">
      <router-link :to="topic.path" class="topic-card">
        <div class="tip custom-block topic-card">
          <p class="custom-block-title">
            {{ topic.frontmatter.title }}
            <span v-if="topic.frontmatter.tags">
              <Badge v-for="tag in topic.frontmatter.tags" :key="topic.title+tag" :text="tag"/>
            </span>
          </p>
          <p class="topic-card-detail">{{ topic.frontmatter.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
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
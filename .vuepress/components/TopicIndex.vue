<template>
  <div>
    <div v-for="topic in topics">
      <router-link :to="topic.path">
        <div class="tip custom-block">
          <p class="custom-block-title">
            {{ topic.frontmatter.title }}
            <span v-if="topic.frontmatter.tags">
              <Badge v-for="tag in topic.frontmatter.tags" :key="topic.title+tag" :text="tag"/>
            </span>
          </p>
          <p>{{ topic.frontmatter.description }}</p>
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
      console.log(this.$site)
      console.log(this)
      return this.$site.pages
        .filter(x => x.path.startsWith('/topics/') && !x.frontmatter.no_index)
        .map(x => {
          if (!x.frontmatter.title) x.frontmatter.title = x.title
          //if (!x.frontmatter.description) x.frontmatter.description = ''
          return x
        })
        .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title))
      // new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    },
  },
}
</script>
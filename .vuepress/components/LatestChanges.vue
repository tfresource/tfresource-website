<template lang="pug">
.latest-changes

  h4 {{changeList.length}} pages in the topics folder.

  p.topics(v-for="page in changeList" :key="page.url")
    span {{ page.date}}
    router-link(:to="page.url") {{ page.title }}
    span {{ page.author }}

</template>

<script>
'use strict'
export default {
  data() {
    return {
      changeList: [],
    }
  },
  mounted: async function () {
    console.log('reading change-list')
    const response = await fetch('/latest-changes.csv')
    const data = await response.text()
    for (const line of data.split('\n').slice(1)) {
      const [date, author, page] = line.split(',')
      // skip any non-markdown pages
      if (!page.endsWith('.md')) continue

      const title = page.substring(0, page.length - 3).replace(/_/g, ' ')
      const url = `/topics/${page.substring(0, page.length - 3)}.html`

      if (date) {
        this.changeList.push({
          date,
          author,
          title,
          url,
        })
      }
    }
  },
}
</script>

<style scoped>
.topics {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 1fr auto;
  grid-gap: 0.5rem;
  font-size: 0.9rem;
  margin: 0 0;
  margin-top: 0.5rem;
}

@media (max-width: 600px) {
}
</style>

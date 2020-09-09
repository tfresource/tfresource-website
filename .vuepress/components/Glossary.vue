<template lang="pug">
.main-content
  .topics(v-for="topic in acronyms" :key="topic + terms[topic].definition")
    .title
      h3 {{ topic }}
    .details
      p {{ terms[topic].definition}}
      p: router-link.link-text(:to="terms[topic].link") {{ terms[topic].link }}
</template>

<script>
'use strict'
export default {
  data() {
    return {
      acronyms: [],
      terms: {},
    }
  },
  mounted: async function() {
    console.log('reading acronyms')
    const response = await fetch('/acronyms.csv')
    const data = await response.text()
    for (const line of data.split('\n').slice(1)) {
      const [acronym, definition, link] = line.split(',')
      console.log(acronym, definition, link)
      if (acronym) {
        this.acronyms.push(acronym.trim())
        this.terms[acronym.trim()] = { definition: definition.trim(), link: link ? link.trim() : '' }
      }
    }
    this.acronyms.sort()
  },
}
</script>

<style scoped>
.topics {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
}

.title {
  grid-column: 1 / 2;
}

.title h3 {
  padding: 0 0 2rem 0;
  margin: 0 0;
}

.details {
  grid-column: 2 / 3;
}

.details p {
  margin: 0 0;
  line-height: 1.2rem;
}

.details a {
  font-size: 0.9rem;
  margin-top: -0.5rem;
}

.link-text {
  margin-top: 0.25rem;
  margin-right: 0.5rem;
}

@media (max-width: 600px) {
}
</style>

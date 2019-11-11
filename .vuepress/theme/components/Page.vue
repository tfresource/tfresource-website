<template>
  <main class="page">
    <slot name="top" />

    <PageEdit />

    <div class="theme-default-content">
      <h1>{{ $page.title}}</h1>

      <div class="div-links" v-if="$page.frontmatter.links">
        <p>
          <b>ATTACHED FILES:</b>
        </p>
        <table class="table-links">
          <tr v-for="link in $page.frontmatter.links" :key="link.label">
            <td>
              <b>{{ link.type }}</b>
            </td>
            <td>
              <a :href="link.url" target="_blank">{{link.label}}</a>
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
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

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
</style>

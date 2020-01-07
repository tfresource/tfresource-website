<template>
  <main class="page">
    <slot name="top" />

    <div class="nav-headings" v-if="$page.headers && $page.headers.length > 1">
      <span v-for="header in $page.headers" :key="header.title">
        <p v-if="header.level <= 3" :class="{'lev3': header.level==3}">
           <a :href="'#' + header.slug"> {{ header.title }}</a>
        </p>
      </span>
    </div>

    <PageEdit />

    <div class="theme-default-content">
      <h1>{{ $page.title}}</h1>

      <div class="div-links" v-if="$page.frontmatter.links">
        <p>
          <b>ATTACHED LINKS:</b>
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

<style scoped lang="stylus">
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

.nav-headings {
  position: sticky;
  flex: 0 0 240px;
  top: 8rem;
  right: 1rem;
  display: block;
  width: 20%;
  float: right;
  border-left: 1px solid #ccc;
  padding-left: 1rem;
}

.nav-headings p,a {
  font-size: 0.8rem;
  line-height: 1.3;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.nav-headings a:hover {
  color: #060;
}

.lev3 { margin-left: 1rem;}

@media (max-width: 85rem) {
  .nav-headings {
    display: none;
  }
}

</style>

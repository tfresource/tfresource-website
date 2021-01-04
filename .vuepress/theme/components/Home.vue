<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" :alt="data.heroAlt || 'hero'" />

      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>

      <p class="action" v-if="actionLinks.length > 0">
        <NavLink v-for="item in actionLinks" :key="item.link" class="action-button" :item="item" />
      </p>
    </header>

    <div class="feature-band">
      <div class="features" v-if="data.features && data.features.length">
        <div class="feature" v-for="(feature, index) in data.features" :key="index">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </div>

    <Content class="theme-default-content custom squish" />

    <div class="feature-band">
      <div class="squish">
        <h1>Acknowledgements</h1>
        <p>
          Thank you to the Transportation Research Board and to the volunteers of the ADB45 Travel Forecasting Resources
          committee, without whom none of this content would exist.
        </p>
        <p>
          This website graciously funded by the USDOT-sponsored Tier-1
          <a href="https://www.tomnet-utc.org/">TOMNET University Transportation Center</a> at Arizona State University.
        </p>
        <p>
          Website design by Billy Charlton from <a href="http://okbecause.com">Because LLC</a> using
          <a href="https://vuepress.vuejs.org">VuePress</a>
        </p>
      </div>
    </div>

    <div class="footer" v-if="data.footer">{{ data.footer }}</div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter
    },

    actionLinks() {
      return [
        {
          link: '/topics/00_Table_Contents',
          text: 'Table of Contents',
        },
        /*
        {
          link: '/surveymanual/',
          text: 'Survey Manual →',
        },
        */
      ]
    },
  },
}
</script>

<style lang="stylus">

.home {
  padding: 0 0;
  max-width: 100%;
  margin: 0px auto;
  display: block;

  .squish {
    padding: 1rem 2rem 2rem 2rem;
    max-width: 45rem;
    margin: 0px auto;
    text-align: right;
    font-size: 1.25rem;
  }

  .action-button {
    margin-right: 1rem;
  }

  .squish h1 { text-align: center;}

  .hero {
    text-align: center;

    img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .feature-band {
    margin: 5rem 0rem 0rem 0rem;
    padding: 2rem 0rem;
    background: white;
  }

  .features {
    border: none;
    padding: 1.2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
      font-size: 1rem;
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>

<template lang="pug">
.gdpr-banner(v-if="cookie === 'unset'")
  .gdpr-content
    p This site uses cookies to learn which topics interest our readers.
    button.button(@click="gdprNo") No
    button.button(@click="gdprYes") OK
</template>

<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.$cookies.config('365d')

export default {
  data() {
    return {
      cookie: 'unset',
    }
  },
  mounted() {
    if (Vue.$cookies.isKey('gdpr')) {
      this.cookie = Vue.$cookies.get('gdpr')
    }
  },
  methods: {
    gdprNo: function () {
      Vue.$cookies.set('gdpr', 'no')
      this.cookie = 'no'
    },
    gdprYes: function () {
      Vue.$cookies.set('gdpr', 'ok')
      this.cookie = 'ok'
    },
    sendAnalytics: function (context, trackingId, options) {
      console.log('analytics consent received:', trackingId)

      const history = context.history
      const doc = document
      const nav = navigator || {}
      const storage = localStorage
      const encode = encodeURIComponent
      const pushState = history.pushState
      const typeException = 'exception'
      const generateId = () => Math.random().toString(36)
      const getId = () => {
        if (!storage.cid) {
          storage.cid = generateId()
        }
        return storage.cid
      }
      const serialize = (obj) => {
        var str = []
        for (var p in obj) {
          if (obj.hasOwnProperty(p)) {
            if (obj[p] !== undefined) {
              str.push(encode(p) + '=' + encode(obj[p]))
            }
          }
        }
        return str.join('&')
      }
      const track = (
        type,
        eventCategory,
        eventAction,
        eventLabel,
        eventValue,
        exceptionDescription,
        exceptionFatal
      ) => {
        const url = 'https://www.google-analytics.com/collect'
        const data = serialize({
          v: '1',
          ds: 'web',
          aip: options.anonymizeIp ? 1 : undefined,
          tid: trackingId,
          cid: getId(),
          t: type || 'pageview',
          sd: options.colorDepth && screen.colorDepth ? `${screen.colorDepth}-bits` : undefined,
          dr: doc.referrer || undefined,
          dt: doc.title,
          dl: doc.location.origin + doc.location.pathname + doc.location.search,
          ul: options.language ? (nav.language || '').toLowerCase() : undefined,
          de: options.characterSet ? doc.characterSet : undefined,
          sr: options.screenSize ? `${(context.screen || {}).width}x${(context.screen || {}).height}` : undefined,
          vp:
            options.screenSize && context.visualViewport
              ? `${(context.visualViewport || {}).width}x${(context.visualViewport || {}).height}`
              : undefined,
          ec: eventCategory || undefined,
          ea: eventAction || undefined,
          el: eventLabel || undefined,
          ev: eventValue || undefined,
          exd: exceptionDescription || undefined,
          exf: typeof exceptionFatal !== 'undefined' && !!exceptionFatal === false ? 0 : undefined,
        })

        if (nav.sendBeacon) {
          nav.sendBeacon(url, data)
        } else {
          var xhr = new XMLHttpRequest()
          xhr.open('POST', url, true)
          xhr.send(data)
        }
      }
      const trackEvent = (category, action, label, value) => track('event', category, action, label, value)
      const trackException = (description, fatal) => track(typeException, null, null, null, null, description, fatal)
      history.pushState = function (state) {
        if (typeof history.onpushstate == 'function') {
          history.onpushstate({ state: state })
        }
        setTimeout(track, options.delay || 10)
        return pushState.apply(history, arguments)
      }
      track()
      context.ma = {
        trackEvent,
        trackException,
      }
    },
  },
}
</script>

<style scoped>
.gdpr-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background-color: #204448e4;
  color: rgb(223, 223, 232);
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
  font-weight: bold;
}

.gdpr-content {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}

p {
  flex: 1;
  margin-right: 1rem;
}

button {
  margin: 0.75rem 0.2rem;
  padding: 0 0.75rem;
}
</style>

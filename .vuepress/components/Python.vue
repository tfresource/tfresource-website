<template lang="pug">
.interactive-python-panel
  h5 Run Python in Your Browser

  .panels
    .code-panel(:ref="id")
      <slot></slot>
    pre.output-panel
      | {{ output }}

  .action-bar
    button.run-button(:disabled="!ready" @click="clickedRun") Run
    button.clear-button(@click="clickedClear") Clear History
</template>

<script lang="ts">
// // Buefy widgets: https://buefy.org/documentation
// import Vue from 'vue'
// import Buefy from 'buefy'
// Vue.use(Buefy)

export default {
  data: () => {
    return {
      acronyms: [],
      output: '>>>',
      ready: false,
      pyodide: {},
      id: `id-${Math.floor(1e12 * Math.random())}`,
    }
  },
  async mounted() {
    console.log('i am here')
    //@ts-ignore
    this.pyodide = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.22.0/full/' })

    this.output = this.pyodide.runPython(`
    import sys
    sys.version
  `)
    let version = this.output.slice(0, this.output.indexOf(' '))
    this.output = `Python ${version} ready.\n`

    this.ready = true
  },
  methods: {
    async clickedRun() {
      console.log('click!')

      const code = this.$refs[this.id].innerText
      console.log({ code })

      this.evaluatePython(code)
      // this.pyodide.runPython(code)
    },

    clickedClear() {
      this.output = ''
    },

    evaluatePython(code) {
      console.log(code)
      try {
        this.pyodide.runPython(`
          import io
          sys.stdout = io.StringIO()
        `)

        let result = this.pyodide.runPython(code)
        let stdout = this.pyodide.runPython('sys.stdout.getvalue()')
        this.addToOutput(stdout)
      } catch (err) {
        this.addToOutput('' + err)
      }
    },

    addToOutput(text) {
      this.output += text
    },
  },
}
</script>

<style scoped>
.interactive-python-panel {
  display: flex;
  flex-direction: column;
  background-color: #222239;
  padding: 0.25rem 0.5rem 0.5rem 0.5rem;
  border-radius: 5px;
}

h5 {
  margin: 0;
  padding: 0;
  margin-bottom: 0.25rem;
  color: white;
}

.panels {
  display: flex;
}

.code-panel {
  background-color: #455;
  font-size: 0.65rem;
  color: #ddd;
  flex: 4;
  padding: 0;
  margin: 0;
  padding-top: 0.25rem;
  margin-right: 0.5rem;
  border: 2px dotted #888;
  min-height: 10rem;
}

pre {
  padding: 0 0.25rem;
  margin: 0;
}

.output-panel {
  flex: 3;
  font-size: 0.65rem;
  color: #ddd;
  padding: 0.25rem;
  margin: 0;
  border: 2px dotted #888;
  font-family: monospace;
}

.action-bar {
  display: flex;
  margin-top: 0.25rem;
}

button {
  cursor: pointer;
  padding: 0.15rem 0.5rem;
  margin: 0.25rem 0 0 0;
  border: 2px solid #00000000;
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
}

button:hover {
  cursor: pointer;
  border: 2px solid #eee;
}

.run-button {
  margin-right: auto;
  background-color: #383;
}

.clear-button {
  background-color: #842;
}

@media (max-width: 600px) {
}
</style>

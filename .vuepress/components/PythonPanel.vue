<template lang="pug">
.interactive-python-panel
  h5 Run Python in Your Browser

  .panels
    //- this absorbs the initial text content of the element:
    .code-panel(:ref="`initialText-${id}`" v-show="false")
      <slot></slot>

    //- and this is the editable version:
    .code-panel
      textarea(:ref="id" v-model="textContent")

    .output-panel
      pre {{ output }}

  .action-bar
    button.run-button(:disabled="!ready" @click="clickedRun") Run
    button.clear-button(@click="clickedClear") Clear History
</template>

<script lang="ts">
const INCLUDE_PACKAGES = ['numpy', 'pandas', 'geopandas', 'micropip']

export default {
  data: () => {
    return {
      output: '...',
      ready: false,
      pyodide: {},
      textContent: '',
      id: `id-${Math.floor(1e12 * Math.random())}`,
    }
  },

  async mounted() {
    const initialText = this.$refs[`initialText-${this.id}`]
    this.textContent = initialText.innerText

    // @ts-ignore
    this.pyodide = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.22.0/full/' })

    // install all default packages
    for (const pkg of INCLUDE_PACKAGES) {
      await this.pyodide.loadPackage(pkg)
    }

    this.output = this.pyodide.runPython(`
      import sys
      sys.version
    `)

    let version = this.output.slice(0, this.output.indexOf(' '))
    this.output = `Python ${version} ready.\n`

    this.ready = true
  },
  methods: {
    clickedRun() {
      console.log('click!')
      const finalText = this.$refs[this.id].value
      this.evaluatePython(finalText)
    },

    clickedClear() {
      this.output = ''
    },

    evaluatePython(code) {
      try {
        this.pyodide.runPython(`
          import io
          sys.stdout = io.StringIO()
        `)

        let result = this.pyodide.runPython(code)
        console.log({ result })
        let stdout = this.pyodide.runPython('sys.stdout.getvalue()')
        this.addToOutput(stdout)
      } catch (err) {
        this.addToOutput(err)
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
  height: 20rem;
}

h5 {
  margin: 0;
  padding: 0;
  margin-bottom: 0.25rem;
  color: white;
}

.panels {
  flex: 1;
  display: flex;
}

.code-panel {
  background-color: #455;
  flex: 4;
  padding: 0;
  margin: 0;
  padding-top: 0.25rem;
  margin-right: 0.5rem;
  border: 2px dotted #888;
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
  width: 100%;
  position: relative;
}

.output-panel pre {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
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

textarea {
  background-color: #455;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 0.65rem;
  color: #ddd;
  border: none;
  outline: none;
  resize: none;
}

@media (max-width: 600px) {
}
</style>

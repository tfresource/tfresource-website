'use strict'
const fs = require('fs')

const mdFolders = ['topics', 'surveymanual']

function readAcronyms() {
  const lookup = {}

  const data = fs.readFileSync('acronyms.txt', 'utf8')
  for (const line of data.split('\n')) {
    const [acronym, description] = line.split(':')
    if (acronym) lookup[acronym.trim()] = description.trim()
  }
  return lookup
}

function findMarkdownFiles() {
  const files = []
  for (const folder of mdFolders) {
    fs.readdirSync(folder).forEach(file => {
      if (file.endsWith('.md') || file.endsWith('.MD')) files.push(`${folder}/${file}`)
    })
  }
  return files
}

function replaceAcronymnsInFile(filename) {
  const origContent = fs.readFileSync(filename, 'utf8')
  let newContent = (' ' + origContent).slice(1)

  for (const key of Object.keys(lookup)) {
    const tag = `==${key}==`
    const re = new RegExp(tag, 'g')
    newContent = newContent.replace(re, x => {
      console.log(x, filename)
      return `<span><div class="hint--html hint--top hint--hoverable">
      ${key}
      <div class="hint__content">
        <h3>${key}</h3>
        <p>${lookup[key]}</p>
        <p class="hint__tiny">See the <a href="/glossary">TFR Glossary</a></p>
        </div></div></span>`
    })
  }

  if (newContent !== origContent) {
    fs.writeFileSync(filename, newContent)
  }
}

const lookup = readAcronyms()
console.log(lookup)

const mdFiles = findMarkdownFiles()

for (const filename of mdFiles) {
  replaceAcronymnsInFile(filename)
}

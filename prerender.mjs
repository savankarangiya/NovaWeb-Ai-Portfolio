import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import { renderToString } from 'react-dom/server'
import React from 'react'

const root = path.dirname(fileURLToPath(import.meta.url))
const distIndex = path.join(root, 'dist', 'index.html')

const server = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error'
})

try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const html = renderToString(
    React.createElement(React.StrictMode, null, React.createElement(App))
  )

  let template = fs.readFileSync(distIndex, 'utf-8')
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('Could not find #root placeholder in dist/index.html')
  }
  template = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  fs.writeFileSync(distIndex, template)

  const contentLen = (html.match(/[A-Za-z0-9]/g) || []).length
  console.log(`Prerender OK — injected ${html.length} chars (${contentLen} alnum) into dist/index.html`)
} catch (err) {
  console.error('Prerender failed:', err)
  process.exitCode = 1
} finally {
  await server.close()
}

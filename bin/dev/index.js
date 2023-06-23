
const browserSync = require('browser-sync')
const rollup = require('./rollup')


// import browserSync from 'browser-sync'

// import {compileJs} from './rollup.js'

bundleJs()

browserSync.init({
  open: 'external',
  proxy: 'http://localhost:3000',
  port: 8000,
  notify: false
})

browserSync.watch('./app/public/*.css').on('change', browserSync.reload)
browserSync.watch('./app/public/*.php').on('change', browserSync.reload)
browserSync.watch('./app/public/*.js').on('change', bundleJs)

function bundleJs() {
  rollup()
  browserSync.reload()
}
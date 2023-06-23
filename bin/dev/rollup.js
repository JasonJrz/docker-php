
const rollup = require('rollup')
const babel = require('@rollup/plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve')

module.exports = opt => {
  rollup
    .rollup({
      input: './app/public/main.js',
      output: {
        file: './app/public/js/bundle.js'
      },
      plugins: [
        resolve(),
        babel({
          babelHelpers: 'bundled'
        })
      ]
    }).then(rollupBuild => {
      rollupBuild.write({
        file: './app/public/js/bundle.js'
      })
  })
}

// export function compileJs(opt) {
//   rollup({
//     input: './app/public/main.js',
//     output: {
//       file: 'bundle.js',
//     }
//   }).then(rollupBuild => {
//     rollupBuild.write({
//       file: './app/public/bundle.js'
//     })
//   })
//   .catch(error => {
//     console.log(error)
//   })
// }

// export default function compileJs(opt) {
//   rollup({
//     input: 'app/public/main.js',
//     output: {
//       file: './bundle.js',
//       format: 'cjs'
//     },
//     plugins: [
//       commonjs(),
//       babel({
//         babelHelpers: 'bundled',
//       })
//     ]
//   }).then(() => {
//     console.log(rollup.input)
//   })
//   .catch(error => {
//     console.log(error)
//   })
// }
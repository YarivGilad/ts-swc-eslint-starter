[<img src="https://img.shields.io/badge/-Node.js-success.svg?logo=node">](https://nodejs.org/)
[<img src="https://img.shields.io/badge/-SWC-FECC00.svg?logo=swc">](https://swc.rs/)
[![ts](https://badgen.net/badge/-/Typescript?icon=typescript&label&labelColor=blue&color=555555)](https://github.com/TypeStrong/ts-node)
[<img src="https://img.shields.io/badge/-ESLint-4B32C3.svg?logo=ESlint">](https://eslint.org/)
[![Husky](https://img.shields.io/static/v1?label=Formated+by&message=Prettier&color=ff69b4)](https://github.com/prettier/prettier)
[![Husky](https://img.shields.io/static/v1?label=Hooked+by&message=Husky&color=success)](https://typicode.github.io/husky)

# Node.js TS 
## SWC starter kit

This setup compiles Typescript to ESM for the Node.js runtime.    
It's super-fast.     
it uses *`swc`* for the actual compiling.
*`tsc`* is used for type checking only.
nodemon allows us to re-compile and run from dist with every change during development.

It is indeed experimental and can change at any time.    
Be sure to use **`.js`** extension name at the end of your import statements of your own source files.

You can tell VSCode to add **.js** extentions for you on auto-imports...    
Simply open the command pallete **`Cmd + Shift + P`**, then type   **`>open settings json`**    
and add these two lines at the root level of the configuration object:

```
"javascript.preferences.importModuleSpecifierEnding": "js"
"typescript.preferences.importModuleSpecifierEnding": "js"
```

An easier alternative you may consider is to simply dompile everything to CommonJS.
  
This setup is only relevant if it is important for you to be standard complient with ESNext and specifically with EcmaScript Modules (ESM) running natively in the Node.js runtime. 


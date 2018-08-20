# ck_front

>  project

## Build Setup

``` bash
# install the last version node 
https://nodejs.org

# set npm registry 
npm config set registry https://registry.npm.taobao.org
(this step is a suggestion for chinese developer because of the network limitation)

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Directory
``` bash

├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # common components
│   │   └── ...
│   ├── views/                  # ui views
│   │   └── ...
│   ├── api/                    # webapi packge
│   │   └── ...
│   ├── router/                 # web router
│   │   └── index
│   ├── utils/                  # utils tool
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...


├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── eslintrc            # config file for eslint with extra settings only for unit tests
│   │   ├── index.js            # test build entry file
│   │   ├── jest.conf.js        # Config file when using Jest for unit tests
│   │   └── karma.conf.js       # test runner config file when using Karma for unit tests
│   │   ├── setup.js            # file that runs before Jest runs your unit tests
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .global                     # global const
├── .babelrc                    # babel config
├── .editorconfig               # indentation, spaces/tabs and similar settings for your editor
├── .eslintrc.js                # eslint config
├── .eslintignore               # eslint ignore rules
├── .gitignore                  # sensible defaults for gitignore
├── .postcssrc.js               # postcss config
├── index.html                  # index.html template
├── package.json                # build scripts and dependencies
└── README.md                   # Default README file
```
## Technology Stack

#### Base Framework
&ensp;&ensp;&ensp;[Vue](https://cn.vuejs.org/v2/guide/)—— a progressive framework for building user interfaces.
#### UI Component
&ensp;&ensp;&ensp;[Element-Ui](http://wenku.baidu.com/view/23cc1a6527d3240c8447efbf.html)—— a Vue 2.0 based component library for developers, designers and product managers.
#### HTTP Request
&ensp;&ensp;&ensp;[Axios](https://www.kancloud.cn/yunye/axios/234845)—— a promise based HTTP library that can be used in browsers and node.js.
#### State Store
&ensp;&ensp;&ensp;[Vuex](https://vuex.vuejs.org/)—— a state management pattern + library for Vue.js applications.

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

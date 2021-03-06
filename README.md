___


[![taylor swift](https://img.shields.io/badge/secured%20by-taylor%20swift-brightgreen.svg)](https://twitter.com/SwiftOnSecurity)
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)
[![Build Status](https://travis-ci.org/AngularClass/angular2-webpack-starter.svg?branch=master)](https://travis-ci.org/AngularClass/angular2-webpack-starter)
[![GitHub version](https://badge.fury.io/gh/angularclass%2Fangular2-webpack-starter.svg)](https://badge.fury.io/gh/angularclass%2Fangular2-webpack-starter)
[![Dependency Status](https://david-dm.org/angularclass/angular2-webpack-starter.svg)](https://david-dm.org/angularclass/angular2-webpack-starter)
[![Stack Share](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/angularclass/angular-2-webpack-starter)

<p align="center">
  <a href="http://angularclass.com" target="_blank">
    <img src="https://cloud.githubusercontent.com/assets/1016365/26218342/9f3ef0b6-3bd8-11e7-8a3c-3c13a9066b52.png" alt="Angular Starter with Webpack" width="500" height="320"/>
  </a>
</p>

# Angular4 Webpack Starter [![Join Slack](https://img.shields.io/badge/slack-join-brightgreen.svg)](https://angularclass.com/slack-join) [![Join the chat at https://gitter.im/angularclass/angular2-webpack-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/angularclass/angular2-webpack-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


> An Angular starter kit featuring [Angular 4](https://angular.io), [Ahead of Time Compile](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html), [Router](https://angular.io/docs/ts/latest/guide/router.html), [Forms](https://angular.io/docs/ts/latest/guide/forms.html),
[Http](https://angular.io/docs/ts/latest/guide/server-communication.html),
[Services](https://gist.github.com/gdi2290/634101fec1671ee12b3e#_follow_@AngularClass_on_twitter),
[Tests](https://angular.io/docs/ts/latest/guide/testing.html), [E2E](https://angular.github.io/protractor/#/faq#what-s-the-difference-between-karma-and-protractor-when-do-i-use-which-)), [Karma](https://karma-runner.github.io/), [Protractor](https://angular.github.io/protractor/), [Jasmine](https://github.com/jasmine/jasmine), [Istanbul](https://github.com/gotwarlost/istanbul), [TypeScript](http://www.typescriptlang.org/), [@types](https://www.npmjs.com/~types), [TsLint](http://palantir.github.io/tslint/), [Codelyzer](https://github.com/mgechev/codelyzer), [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html), and [Webpack 2](http://webpack.github.io/) by [AngularClass](https://angularclass.com).

> If you're looking to learn about Webpack and ES6 Build Tools check out [ES6-build-tools](https://github.com/AngularClass/ES6-build-tools)
> If you're looking to learn TypeScript see [TypeStrong/learn-typescript](https://github.com/TypeStrong/learn-typescript)

This seed repo serves as an Angular starter for anyone looking to get up and running with Angular and TypeScript fast. Using a [Webpack 2](http://webpack.github.io/) for building our files and assisting with boilerplate. We're also using Protractor for our end-to-end story and Karma for our unit tests.
* Best practices in file and application organization for Angular.
* Ready to go build system using Webpack for working with TypeScript.
* Angular examples that are ready to go when experimenting with Angular.
* A great Angular seed repo for anyone who wants to start their project.
* Ahead of Time (AoT) compile for rapid page loads of your production builds.
* Tree shaking to automatically remove unused code from your production bundle.
* [Webpack DLLs](https://robertknight.github.io/posts/webpack-dll-plugins/) dramatically speed your development builds.
* Testing Angular code with Jasmine and Karma.
* Coverage with Istanbul and Karma
* End-to-end Angular code using Protractor.
* Type manager with @types
* Hot Module Replacement with Webpack and [@angularclass/hmr](https://github.com/angularclass/angular2-hmr) and [@angularclass/hmr-loader](https://github.com/angularclass/angular2-hmr-loader)
* Angular 4 support via changing package.json and any future Angular versions

### Quick start
**Make sure you have Node version >= 6.0 and NPM >= 3**
> Clone/Download the repo then edit `app.component.ts` inside [`/src/app/app.component.ts`](/src/app/app.component.ts)

```bash
# clone our repo
git clone https://github.com/modelitsoftware/angular4-boilerplate.git

# change directory to the project's folder repo
cd angular4-boilerplate

# install the repo with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr

```
go to [https://0.0.0.0:3000](https://0.0.0.0:3000) or [https://localhost:3000](https://localhost:3000) in your browser

# Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Request Mapper](#request-mapper)
    * [Running the app](#running-the-app)
* [Salesforce](#salesforce)
    * [Compiling the JS files](#compiling-the-js-files)
    * [Loading Angular4 app inside Visualforce](#loading-angular4-app-inside-visualforce)
    * [Executing Salesforce Controller methods using JavaScript Remoting](#executing-salesforce-controller-methods-using-javaScript-remoting)
    * [Deployment to Production](#deployment-to-production)
* [Configuration](#configuration)
* [AoT Don'ts](#aot-donts)
* [External Stylesheets](#external-stylesheets)
* [Contributing](#contributing)
* [TypeScript](#typescript)
* [@Types](#types)
* [Frequently asked questions](#frequently-asked-questions)
* [Support, Questions, or Feedback](#support-questions-or-feedback)
* [License](#license)


## File Structure
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
angular2-webpack-starter/
 ├──config/                        * our configuration
 |   ├──helpers.js                 * helper functions for our configuration files
 |   ├──spec-bundle.js             * ignore this magic that sets up our Angular testing environment
 |   ├──karma.conf.js              * karma config for our unit tests
 |   ├──protractor.conf.js         * protractor config for our end-to-end tests
 │   ├──webpack.dev.js             * our development webpack config
 │   ├──webpack.prod.js            * our production webpack config
 │   └──webpack.test.js            * our testing webpack config
 │
 |──salesforce/                    * our salesforce distribution files (for Salesforce projects only)
 |   |──src/
 |       ├──staticresources/       * contains .resource file which is used for our Salesforce deployment
 |       └──package.xml            * package.xml for our Salesforce deployment
 |
 ├──src/                           * our source files that will be compiled to javascript
 |   ├──main.browser.ts            * our entry file for our browser environment
 │   │
 |   ├──index.html                 * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts               * our polyfills file
 │   │
 │   ├──app/                       * WebApp: folder
 │   │   ├──app.component.spec.ts  * a simple test of components in app.component.ts
 │   │   ├──app.e2e.ts             * a simple end-to-end test for /
 │   │   └──app.component.ts       * a simple version of our App component components
 │   │
 │   └──assets/                    * static assets are served here
 │       ├──icon/                  * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js      * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt             * for search engines to crawl your website
 │       └──humans.txt             * for humans to know who the developers are
 │
 │
 ├──tslint.json                    * typescript lint config
 ├──typedoc.json                   * typescript documentation generator
 ├──tsconfig.json                  * typescript config used outside webpack
 ├──tsconfig.webpack.json          * config that webpack uses for typescript
 ├──package.json                   * what npm uses to manage it's dependencies
 └──webpack.config.js              * webpack main configuration file

```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v6.x.x`+ (or `v7.x.x`) and NPM `3.x.x`+

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) 

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install webpack-dev-server rimraf webpack -g` to install required global dependencies
* `npm install` to install all dependencies or `yarn`
* `npm run server` to start the dev server in another tab

## Request Mapper

In order to work with Angular + Salesforce and test your changes locally before deploying into Salesforce you
need to set up the Request Mapper plugin.

The extension and installation instructions are on GitHub:

https://github.com/modelitsoftware/request-mapper

The following RegEx / URL pairs can be used in the options page of the extension

RegEx | URL
--- | ---
`.*\/resource\/.*/cis_portal\/` | https://localhost:3000/

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `https://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `https://[::1]:3000/`).

### standalone 

```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

### salesforce
```bash
# development
npm run server
# salesforce
npm run build:salesforce
```

## Other commands

### build files when used as standalone
```bash
# development
npm run build:dev
# production (jit)
npm run build:prod
# AoT
npm run build:aot
```

### build files when used with salesforce
```bash
# development
npm run build:dev
# salesforce
npm run build:salesforce
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

### run unit tests
```bash
npm run test
```

### watch and run our tests
```bash
npm run watch:test
```

### run end-to-end tests
```bash
# update Webdriver (optional, done automatically by postinstall script)
npm run webdriver:update
# this will start a test server and launch Protractor
npm run e2e
```

### continuous integration (run unit tests and e2e tests together)
```bash
# this will test both your JIT and AoT builds
npm run ci
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run e2e:live
```

### build Docker
```bash
npm run build:docker
```

# Salesforce

### Compiling the JS files
All Angular4 JS files from  `dist/` must be zipped into a `.resource` file and then deployed to Salesforce. That process runs automatically when you run `npm run build:salesforce`.

There's a gulp file `gulpFile.js` that has some tasks. When you run `gulp build` the process will uglify, zip and deploy the files to Salesforce. The task `deploy` expects `username`, `password`, and `loginUrl` specifying the sandbox where you want to deploy the files.

It will also generate a `.resource` file inside `../../src/staticresources`. That file can be commited into GitHub for production deployment to Salesforce.

### Loading Angular4 app inside Visualforce 

In order to use Angular4 inside Salesforce we need to use a Visualforce page as its container. The JS scripts from the `.resource` file generated by `npm run build:salesforce` must be loaded by the Visualforce page.

Here's an example:

```html
<apex:page controller="TestAngular4Controller" docType="Html-5.0" showHeader="false" sidebar="false" applyHtmlTag="false">

    <!-- loading dist files -->
    <script src="{!URLFOR($Resource.cis_portal, 'manifest.bundle.js')}"></script>
    <script src="{!URLFOR($Resource.cis_portal, 'polyfills.dll.js')}"></script>
    <script src="{!URLFOR($Resource.cis_portal, 'vendor.dll.js')}"></script>
    <script src="{!URLFOR($Resource.cis_portal, 'polyfills.bundle.js')}"></script>
    <script src="{!URLFOR($Resource.cis_portal, 'vendor.bundle.js')}"></script>
    <script src="{!URLFOR($Resource.cis_portal, 'main.bundle.js')}"></script>
   
    <script src="{!URLFOR($Resource.cis_portal, '0.chunk.js')}"></script>
    <script src="{!URLFOR($Resource.cis_portal, '1.chunk.js')}"></script>
    <script src="{!URLFOR($Resource.cis_portal, '6.chunk.js')}"></script>
    <script src="{!URLFOR($Resource.cis_portal, '7.chunk.js')}"></script>
    
    <html>
        <head>
            <title>Angular 4 + Visualforce</title>
        </head>

        <body>
            <!-- loading the app: you must use the right selector from app.component.ts. In this case the selector is `app`. -->
            <app></app>
        </body>        
    </html>    
</apex:page>
```

### Executing Salesforce Controller methods using JavaScript Remoting
To execute a method through JavaScript remoting you must:
- make sure that the Visualforce page that acts as the container of the Angular4 app is loading the controller.
- Import salesforce.service.ts to the component where you want to execute a Salesforce controller method from:
```javascript
import { SalesforceService } from "../services/salesforce.service";
```
- Add `SalesforceService` as a provider to your component:
```javascript
    /**
     * We need to tell Angular's Dependency Injection which providers are in our app.
     */
    providers: [
      SalesforceService
    ]
```
- Invoke the method `execute` from `salesforce.service.ts`:
```javascript
    public executeVF() {
        let controller = 'TestAngular4Controller';
        let method = 'testAngular4';
        let params = new Array();

        this.salesforceService.execute(controller, method, params)
        .then((res) => {
            console.log('Result: ', res);    
        }, (reason) => {
            console.log('Reason: ' + reason);
        })
    }
```

### Deployment to Production
When you deploy to production you don't need to worry about compiling the files again. A `.resource` file will be generated and added to `../../src/staticresources` when you run `npm run build:salesforce` after you complete a feature. That file will then be commited as part of your work. Then, it will be included as part of the release as any other Salesforce file.

# Configuration
Configuration files live in `config/` we are currently using webpack, karma, and protractor for different stages of your application

# AoT Don'ts
The following are some things that will make AoT compile fail.

- Don’t use require statements for your templates or styles, use styleUrls and templateUrls, the angular2-template-loader plugin will change it to require at build time.
- Don’t use default exports.
- Don’t use `form.controls.controlName`, use `form.get(‘controlName’)`
- Don’t use `control.errors?.someError`, use `control.hasError(‘someError’)`
- Don’t use functions in your providers, routes or declarations, export a function and then reference that function name
- @Inputs, @Outputs, View or Content Child(ren), Hostbindings, and any field you use from the template or annotate for Angular should be public

# External Stylesheets
Any stylesheets (Sass or CSS) placed in the `src/styles` directory and imported into your project will automatically be compiled into an external `.css` and embedded in your production builds.

For example to use Bootstrap as an external stylesheet:
1) Create a `styles.scss` file (name doesn't matter) in the `src/styles` directory.
2) `npm install` the version of Boostrap you want.
3) In `styles.scss` add `@import 'bootstrap/scss/bootstrap.scss';`
4) In `src/app/app.module.ts` add underneath the other import statements: `import '../styles/styles.scss';`

# Contributing
You can include more examples as components but they must introduce a new concept such as `Home` component (separate folders), and Todo (services). I'll accept pretty much everything so feel free to open a Pull-Request

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 2.1.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

### Visual Studio Code + Debugger for Chrome
> Install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) and see docs for instructions to launch Chrome 

The included `.vscode` automatically connects to the webpack development server on port `3000`.

# Types
> When you include a module that doesn't include Type Definitions inside of the module you can include external Type Definitions with @types

i.e, to have youtube api support, run this command in terminal: 
```shell
npm i @types/youtube @types/gapi @types/gapi.youtube
``` 
In some cases where your code editor doesn't support Typescript 2 yet or these types weren't listed in ```tsconfig.json```, add these to **"src/custom-typings.d.ts"** to make peace with the compile check: 
```es6
import '@types/gapi.youtube';
import '@types/gapi';
import '@types/youtube';
```

## Custom Type Definitions
When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with @types

```
npm install @types/node
npm install @types/lodash
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
declare var _: any;
declare var $: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```


# Frequently asked questions
* Why is my service, aka provider, is not injecting parameter correctly?
  * Please use `@Injectable()` for your service for typescript to correctly attach the metadata (this is a TypeScript problem)
* Where do I write my tests?
  * You can write your tests next to your component files. See [`/src/app/home/home.component.spec.ts`](/src/app/home/home.component.spec.ts)
* How do I start the app when I get `EACCES` and `EADDRINUSE` errors?
  * The `EADDRINUSE` error means the port `3000` is currently being used and `EACCES` is lack of permission for webpack to build files to `./dist/`
* How to use `sass` for css?
 *  * `loaders: ['raw-loader','sass-loader']` and `@Component({ styleUrls: ['./filename.scss'] })` see Wiki page [How to include SCSS in components](https://github.com/AngularClass/angular2-webpack-starter/wiki/How-to-include-SCSS-in-components), or issue [#136](https://github.com/AngularClass/angular2-webpack-starter/issues/136) for more information.
* How do I test a Service?  
  * See issue [#130](https://github.com/AngularClass/angular2-webpack-starter/issues/130#issuecomment-158872648)
* How do I add `vscode-chrome-debug` support?
  * The VS Code chrome debug extension support can be done via `launch.json` see issue [#144](https://github.com/AngularClass/angular2-webpack-starter/issues/144#issuecomment-164063790)
* How do I make the repo work in a virtual machine?
  * You need to use `0.0.0.0` so revert these changes [#205](https://github.com/AngularClass/angular2-webpack-starter/pull/205/files)
* What are the naming conventions for Angular?
  * please see issue [#185](https://github.com/AngularClass/angular2-webpack-starter/issues/185) and PR [196](https://github.com/AngularClass/angular2-webpack-starter/pull/196)
* How do I include bootstrap or jQuery?
  * please see issue [#215](https://github.com/AngularClass/angular2-webpack-starter/issues/215) and [#214](https://github.com/AngularClass/angular2-webpack-starter/issues/214#event-511768416)
* How do I async load a component?
  * see wiki [How-do-I-async-load-a-component-with-AsyncRoute](https://github.com/AngularClass/angular2-webpack-starter/wiki/How-do-I-async-load-a-component-with-AsyncRoute)
* Error: Cannot find module 'tapable'
  * Remove `node_modules/` and run `npm cache clean` then `npm install`
* How do I turn on Hot Module Replacement
  * Run `npm run server:dev:hmr`
* `RangeError: Maximum call stack size exceeded`
  * This is a problem with minifying Angular and it's recent JIT templates. If you set `mangle` to `false` then you should be good.
* Why is the size of my app larger in development?
  * We are using inline source-maps and hot module replacement which will increase the bundle size.
* node-pre-gyp ERR in npm install (Windows)
  * install Python x86 version between 2.5 and 3.0 on windows see issue [#626](https://github.com/AngularClass/angular2-webpack-starter/issues/626)
* `Error:Error: Parse tsconfig error [{"messageText":"Unknown compiler option 'lib'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'strictNullChecks'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'baseUrl'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'paths'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'types'.","category":1,"code":5023}]`
  * remove `node_modules/typescript` and run `npm install typescript@beta`. This repo now uses ts 2.0 
* "There are multiple modules with names that only differ in casing"
  * change `c:\[path to angular2-webpack-starter]` to `C:\[path to angular2-webpack-starter]` see [926#issuecomment-245223547](https://github.com/AngularClass/angular2-webpack-starter/issues/926#issuecomment-245223547)

# Support, Questions, or Feedback
> Contact us anytime for anything about this repo or Angular

* [Chat: AngularClass.slack](http://angularclass.com/member-join/)
* [Twitter: @AngularClass](https://twitter.com/AngularClass)
* [Gitter: AngularClass/angular2-webpack-starter](https://gitter.im/angularclass/angular2-webpack-starter)

___

enjoy — **AngularClass**
___

# License
 [MIT](/LICENSE)

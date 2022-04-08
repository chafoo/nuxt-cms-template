# `components`

## Description
The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

## Directories

### Library
The is used for simple components without any outside dependencies. These components are designed in a external component-library fashion. Keep things simple and atomic in this directory.

### Modules
Component modules are composed components. Like `custom-header` or `custom-footer`, they can have dependencies to a e.G. a store.

### Sections
Sections are used to dynamically build a page section. Sections will be populated with data from the CMS.

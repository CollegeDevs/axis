# axis <i>Beta</i>

> Theme based React Styled Component Library

> **_WARNING ⚠️ :_** This library is still in beta, future commits might break the exsisting code!

[![NPM](https://img.shields.io/npm/v/@therise3107/axis.svg)](https://www.npmjs.com/package/@therise3107/axis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Introduction

Axis is a theme based component library which supports SSR by default. Axis is fully responsive, and extensible. The main philophsy of Axis is driving the styling of your application via themes, which can be either shipped within your code or CMS or your server.


## Motivation

The recent trend of driving your styling from JavaScript have been great motivation behind true comonent level design. However, I have always felt there is room for more absration and decoupling of the styling from the application code. The usage of headless CMS to drive the content motivated me to write a library which can ne flexible enough to server your styling from your CMS or server and still be very modular, flexible and extensible. Axis is an attempt to decouple the mixing of javascript and CSS to futherance with compsite theme which is responsible for styling your UI.


## Why Axis

Mixing css in code base increases the complexity, code repetition and reduces the extensibility of your application. Axis acts as a bridge in enabling you with bespoken component level architecture of html elements which can we used as a replacement of regular html component and whose styling is drived through theme. This gives the developer more time to focus on improving other areas like logic, UI and performance.

Another important feature is Axis is enabling non developer to change the theme from your CMS or any remote server (if you are hosting your theme there) which means 0 downtime for your application and same website can be used with multiple themes.

## Theming in Axis

Theming is a simple javascript file which exports styling objects which are used by specific components to manipulate styling based on the theme object. Consider theme as a collection of objects which can be changed based on the props. Please refer the default theme file for more information.


## Install

```bash
npm install --save @theise3107/axis
```

or

```bash
yarn add @theise3107/axis
```

## Usage

```jsx
import React from 'react'

import { ThemeProvider, Container } from 'axis'

/* Optional
  import your theme

  <ThemepProvider theme={theme}>...
*/

const Root = ({ children }) => (
  <ThemeProvider>
    <Container>
      {children}
    </Container>
  </ThemeProvider>
)
```

## Usage

Axis exposes components which can be used as drop in or can be extended as per your custom theme.

### Layout Components

Layout components are very similar to what bootstrap does. There are three Components which are:

1. Container
2. Row
3. Column


#### Container

Container is almost similar to Bootstrap, infact the breakpoint are same. Container acts as a wrapper to your content which is padded by default and which has maixum widh based on the device size.

```
import { Container } from '@therise3107/axis'

const Layout = ({ children }) => (
  <Container>
    { children }
  </Container>
)
```

Container has single bool type prop `fluid`; which is when you only want padding but not the max-width

#### Row and Column

Row and Column are to be used together. They are similar to what bootstrap does but here Axis uses Grid. Columns are fully responsive, each column has minimum width of `200px` this places the subsequent Columns on next row if there is no space. This makes them by default mobile responsive.

```

import { Row, Column, Text } from '@therise3107/axis'

...
  <Row>
    <Column md={2} sm={2}>
      <div style={{ background: 'red' }}><Text>I'm taking 2/3 of available space</Text></div>
    </Column>
    <Column md={1} sm={2}>
      <div style={{ background: 'green' }}><Text>I'm taking 1/3 of available space</Text></div>
    </Column>
  </Row>

  <Row>
    <Column md={2} sm={2}>
      <div style={{ background: 'red' }}><Text>I'm taking 2/3 of available space</Text></div>
    </Column>
    <Column md={1} sm={2}>
      <div style={{ background: 'green' }}><Text>I'm taking 1/3 of available space</Text></div>
    </Column>
  </Row>
...

```

## License

MIT © [therise3107](https://github.com/therise3107)

# axis <i>Beta</i>

> Theme based React Styled Component Library

> **_WARNING ⚠️ :_** This library is still in beta, future commits might break the exsisting code!

[![NPM](https://img.shields.io/npm/v/axis.svg)](https://www.npmjs.com/package/axis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save axis
```

or

```bash
yarn add axis
```

## Usage

```jsx
import React from 'react'

import { ThemeProvider, Container } from 'axis'
import 'axis/dist/index.css'

const Root = ({ children }) => (
  <ThemeProvider>
    <Container>
      {children}
    </Container>
  </ThemeProvider>
)
```

## License

MIT © [therise3107](https://github.com/therise3107)

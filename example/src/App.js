import React from 'react'
import { Container, Row, Column, Heading, Text, ThemeProvider } from 'axis'
// import 'axis/dist/index.css'

const App = () => (
  <ThemeProvider>
    <Container>
      <Heading>Hello world!</Heading>
      <Text>Okay</Text>
      <Row>
        <Column><Text>First column</Text></Column>
        <Column><Text>First column</Text></Column>
      </Row>
    </Container>
  </ThemeProvider>
)

export default App

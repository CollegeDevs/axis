import React from 'react'
import { Container, Row, Column, Heading, Text, ThemeProvider } from 'axis'
// import 'axis/dist/index.css'

const App = () => (
  <ThemeProvider>
    <Container>
      <Heading>Hello world!</Heading>
      <Text>Okay</Text>
      <Row>
        <Column md={2} sm={2}>
          <div style={{ background: 'red' }}><Text>First column</Text></div>
        </Column>
        <Column md={1} sm={2}>
          <div style={{ background: 'green' }}><Text>Second column</Text></div>
        </Column>
      </Row>
    </Container>
  </ThemeProvider>
)

export default App

import React from 'react'
import { Container, Row, Column, Heading, Spacer, Text, ThemeProvider } from 'axis'
// import 'axis/dist/index.css'

const App = () => (
  <ThemeProvider>
    <Container>
      <Heading>Layout</Heading>
      <Spacer />
      <Text>Layout in axis is fully responsive, it built around grid system.</Text>
      <Spacer />
      <Text>This will take 1/3 and 2/3 space for each column in large screen, 2/3 and 1/3 in medium, 1/3 and 2/3 in small and full row in extra small(mobile) respectively. If the screen size if small then the next columns by default are pushed into new row.</Text>
      <Spacer height={15} />
      <Row>
        <Column lg={1} md={2} sm={1}>
          <div style={{ background: 'red', color: 'white', padding: '10px 0' }}><Text>I'm taking 1/3 of available space</Text></div>
        </Column>
        <Column lg={2} md={1} sm={2}>
          <div style={{ background: 'green', color: 'white', padding: '10px 0' }}><Text>I'm taking 2/3 of available space</Text></div>
        </Column>
      </Row>
    </Container>
  </ThemeProvider>
)

export default App

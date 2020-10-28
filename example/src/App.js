import React from 'react'
import { Button, Container, Flex, Row, Column, Heading, Link, Spacer, Text, ThemeProvider } from 'axis'
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
      <Spacer height={30} />
      <Heading>Typography</Heading>
      <Spacer />
      <Heading>Headings</Heading>
      <Spacer />
      <Heading>h1 Foxes are clever</Heading>
      <Heading as="h2" size="md">h2 foxes are clever</Heading>
      <Spacer />
      <Heading as="h3" size="sm">h3 foxes are clever</Heading>
      <Spacer />
      <Heading as="h4" size="xsm">h4 foxes are clever</Heading>
      <Spacer />
      <Heading as="h5" size="xs">h5 foxes are clever</Heading>
      <Spacer />
      <Heading as="h6" size="xxs">h5 foxes are clever</Heading>
      <Spacer />
      <Heading>Link</Heading>
      <Spacer />
      <Link external color="primary" to="www.google.com">Google link</Link>
      <Spacer height={10} />
      <Link external color="success" to="www.google.com" weight="bolder">Google link</Link>
      <Spacer height={10} />
      <Link external color="warning" to="www.google.com" weight="bolder">Google link</Link>
      <Spacer height={30} />
      <Heading>Buttons</Heading>
      <Spacer />
      <Flex>
        <Button>Primary</Button>
        <Spacer width={10} />
        <Button kind="success">Success</Button>
        <Spacer width={10} />
        <Button kind="warning">Warning</Button>
      </Flex>
    </Container>
  </ThemeProvider>
)

export default App

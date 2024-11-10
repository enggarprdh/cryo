import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Card, CardBody, Container, FormGroup, Label, Input } from 'reactstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container className="mt-5 w-50">
        <Card>
          <CardBody>
            <h4>Contact Us</h4>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" />
            </FormGroup>

            <FormGroup>
              <Label for="subject">Subject</Label>
              <Input type="text" name="email" />
            </FormGroup>

            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" name="message" />
            </FormGroup>


          </CardBody>
        </Card>
      </Container>
    </>
  )
}

export default App

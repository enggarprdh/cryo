import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Button, Card, CardBody, Container, FormGroup, Label, Input } from 'reactstrap'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center mt-5" style={{ height: '100vh' }}>
        <Card className='w-50'>
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


            <Button color="primary" block>Submit</Button>


          </CardBody>
        </Card>
      </Container>
    </>
  )
}

export default App

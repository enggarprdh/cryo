import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Button, Card, CardBody, Container, FormGroup, Label, Input } from 'reactstrap'
import { apiServices } from './helper/services'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async () => {
    console.log({name, email, subject, message});
    let body = {
      name : name,
      email : email,
      subject : subject,
      message : message
    }
    let response = await apiServices('POST','contactus', body);
    console.log(response);
  }


  

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center mt-5" style={{ height: '100vh' }}>
        <Card className='w-50'>
          <CardBody>
            <h4>Contact Us</h4>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
            </FormGroup>

            <FormGroup>
              <Label for="subject">Subject</Label>
              <Input type="text" name="subject" onChange={(e) => setSubject(e.target.value)}/>
            </FormGroup>

            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" name="message" onChange={(e) => setMessage(e.target.value)}/>
            </FormGroup>


            <Button color="primary" block onClick={handleSubmit}>Submit</Button>


          </CardBody>
        </Card>
      </Container>
    </>
  )
}

export default App

import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';


function Rejister() {
    const [chacke , setChacke] = useState(false)
    const {createUser}=useContext(AuthContext)
    const navigate = useNavigate()
    
    const rejisterHanderl =(e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        
        createUser(email, password)
        .then(x=>{
            console.log(x)
            navigate('/')
        })
        .catch(err=>console.log(err))

    }
  return (
    <div>
          <Card className='w-25 mx-auto p-3'>
        <Form onSubmit={rejisterHanderl}>
                <h1>Rejister here</h1>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                   
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    </div>
  )
}

export default Rejister
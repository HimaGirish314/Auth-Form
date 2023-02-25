import React from 'react';
import { Button,Form } from 'react-bootstrap';
import "./Login.css"

const Login = () => {
  return (
    <>
    <section>
        <div className='form'>
            <Form>
                <h3>Please Login To Continue</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Submit
                </Button>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                Dont have account <Form.Text as="a" style={{cursor:"pointer"}}>SignUp</Form.Text>
                </Form.Group>
            </Form>
        </div>
    </section>
    </>
  )
}

export default Login
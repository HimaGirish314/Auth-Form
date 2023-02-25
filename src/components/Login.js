import React, { useState } from 'react';
import { Button,Form } from 'react-bootstrap';
import "./Login.css"
import {useForm} from 'react-hook-form'

const Login = () => {
    const { register,handleSubmit, formState:{errors}}=useForm();
    const [userinfo,setUserInfo]=useState()
    const onSubmit=(data)=>{
        setUserInfo(data)
        console.log(data)
    }
  return (
    <>
    <section>
        <div className='form'>
            <pre>{JSON.stringify(userinfo)}</pre>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='mb-3'>Please Login To Continue</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email",{required:"Email is required"})} autoComplete="off"/>
                </Form.Group>
                {
                    errors.email && (
                        <Form.Text className='text-danger'>
                    {errors.email.message}
                </Form.Text>
                    )
                }
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password",{required:"password is required"})}/>
                </Form.Group>
                {
                    errors.password && (
                        <Form.Text className='text-danger'>
                    {errors.password.message}
                </Form.Text>
                    )
                }
                <Form.Group className="mb-3">
                    <Button variant="danger" type="submit" className='mb-3'>
                        Submit
                    </Button>
                </Form.Group>
                
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
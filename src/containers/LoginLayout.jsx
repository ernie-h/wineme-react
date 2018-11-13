import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
import "antd/dist/antd.css";

const FormItem = Form.Item;

export class LoginLayout extends Component {
  render() {
    return (
      <div className='center'>
          <h1 className='title'> Wine me </h1>
          <Button type='primary'>Test</Button> 

          <Form className='login-form'>
          <FormItem>
            <Input placeholder='username' />
          </FormItem>
          <FormItem>
            <Input type='password' placeholder='password' />
          </FormItem>
          </Form>
      </div>
    );
  }
}

export default LoginLayout;

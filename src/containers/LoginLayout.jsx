import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';

import { Header } from './Header';

const FormItem = Form.Item;

export class LoginLayout extends Component {
  render() {
    return (
      <div className='center'>
          <Header />

        <table className='table'>
          <tbody>
            <tr>
              <td className='m-5 p-5'>
                <Form className='login-form'>
                <FormItem>
                  <Input placeholder='username' />
                </FormItem>
                <FormItem>
                 <Input type='password' placeholder='password' />
                </FormItem>
                <FormItem>
                  <Button type='primary' htmlType='submit'>Login</Button>
                </FormItem>
               </Form>
              </td>
              <td className='m-5 p-5'>
                <Form className='register-form'>
                  <FormItem>
                    <Input placeholder='email@email.com' />
                  </FormItem>
                  <FormItem>
                    <Input placeholder='username' />
                  </FormItem>
                  <FormItem>
                    <Input placeholder='password' />
                  </FormItem>
                  <FormItem>
                    <Button type='primary' htmlType='submit'>Register</Button>
                  </FormItem>
                </Form>
              </td>
            </tr>
         </tbody>
        </table>

      </div>
    );
  }
}

export default LoginLayout;

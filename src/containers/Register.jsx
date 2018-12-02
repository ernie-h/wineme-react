import React, { Component } from 'react';
import { Steps, Button, message, Form, Input, Select } from 'antd';

const Step = Steps.Step;

const FormItem = Form.Item;

const Option = Select.Option;

function handleChange(value) {
    console.log('selected ${value}');
}

const steps = [{
    title: 'Register',
    content: <div className='m-5 p-5'>
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
                </Form>
    </div>
}, {
    title: 'Myers-Briggs',
    content: <div className='m-5 p-3'>
        <h4>Select your Myers-Briggs personality type:</h4>
        <Form className='p-3'>
            <FormItem>
                <Select defaultValue='INTJ' style={{ width: 120}} onChange={handleChange}>
                    <Option value='INTJ'>INTJ</Option>
                    <Option value='INTP'>INTP</Option>
                    <Option value='ENTJ'>ENTJ</Option>
                    <Option value='ENTP'>ENTP</Option>
                    <Option value='INFJ'>INFJ</Option>
                    <Option value='INFP'>INFP</Option>
                    <Option value='ENFJ'>ENFJ</Option>
                    <Option value='ENFP'>ENFP</Option>
                    <Option value='ISTJ'>ISTJ</Option>
                    <Option value='ISFJ'>ISFJ</Option>
                    <Option value='ESTJ'>ESTJ</Option>
                    <Option value='ESFJ'>ESFJ</Option>
                    <Option value='ISTP'>ISTP</Option>
                    <Option value='ISFP'>ISFP</Option>
                    <Option value='ESTP'>ESTP</Option>
                    <Option value='ESFP'>ESFP</Option>
                </Select>
            </FormItem>
        </Form>
        <h6>Don't have one? Take the <a href="https://www.16personalities.com/">quiz</a>!</h6>
    </div>
}, {
    title: 'Store Preferences',
    content: <div className='m-5 p-3'>
        <Form>
            <FormItem>
                <Select defaultValue='Wollastons' >

                </Select>
            </FormItem>
        </Form>
    </div>
}];

/*
<div style={{
                    backgroundColor : '#fff2e6', 
                    padding : '10px'
                }}>
                    <div className='logo text-center'>
                        <img src='https://i.imgur.com/ogOwLLy.png' height='130' width='250' />
                    </div>
                </div>
*/

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <div>
                <div style={{
                    backgroundColor : '#fff2e6', 
                    padding : '10px'
                }}>
                    <div className='logo text-center'>
                        <img src='https://i.imgur.com/ogOwLLy.png' height='130' width='250' />
                    </div>
                </div>

                <div className='p-5'>
                <Steps current={current}>
                    { steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div>{steps[current].content}</div>

                {
                    current < steps.length - 1
                    && <Button type='primary' onClick={() => this.next()}>Next</Button>
                }
                {
                    current === steps.length - 1
                    && <Button type='primary' onClick={() => message.success('registration complete!')}>Done</Button>
                }
                {
                    current > 0
                    && (
                        <Button style={{ marginLeft: 8}} onClick={() => this.prev()}>Previous</Button>
                    )
                }
                </div>
            </div>
        );
    }
}

export default Register;
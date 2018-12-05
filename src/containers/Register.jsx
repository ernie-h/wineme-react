import React, { Component } from 'react';
import { Steps, Button, message, Form, Input, Select } from 'antd';
import WineServiceClient from '../services/WineServiceClient';
import WineCard from '../components/WineCard';
import { Menu } from 'antd';

const Step = Steps.Step;
const FormItem = Form.Item;
const Option = Select.Option;
export class Register extends React.Component {
    steps = [{
        title: 'Register',
        content: <div className='mt-5 row'>
            <div className='col'>
                &nbsp;
        </div>
            <div className='col'>
                <h2 className='display-4' align='center'> Please Enter Your Information</h2>
                <Form className='register-form'>
                    <FormItem>
                        <Input placeholder='email@email.com' type='email' />
                    </FormItem>
                    <FormItem>
                        <Input placeholder='username' type='username' />
                    </FormItem>
                    <FormItem>
                        <Input placeholder='password' type='password' />
                    </FormItem>
                </Form>
            </div>
            <div className='col'>
                &nbsp;
        </div>
        </div>
    }, {
        title: 'Myers-Briggs',
        content: <div className='row mt-5'>
            <div className='col'>
                &nbsp;
        </div>
            <div className='col' align='left'>
                <h4 className='display-4' align='center'> Select your Myers-Briggs Personality</h4>

                <Form className='mt-3 mb-2'>
                    <FormItem>
                        <Select defaultValue='Select personality' style={{ width: 400 }} onChange={this.setPersonality.bind(this)}>
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
            <div className='col'>
                &nbsp;
        </div>
        </div>
    }, {
        title: 'Store Preferences',
        content: <div className='row mt-5'>
            <div className='col'>
                &nbsp;
            </div>
            <div className='col'>
                <h2 className='display-4' align='center'> Please select your favorite store</h2>
                <Form>
                    <FormItem>
                        <Select style={{ width: 400 }}>
                            <Option value='Wollostons'>Wollostons</Option>
                            <Option value='Huntington Liquor Store'>Huntington Liquor Store</Option>
                            <Option value='Mass Ave Liquor'>Mass Ave Liquor</Option>
                            <Option value='Blanchards'>Blanchards</Option>
                            <Option value='South End Wines'>South End Wines</Option>
                        </Select>
                    </FormItem>
                </Form>
            </div>
            <div className='col'>
                &nbsp;
        </div>
        </div>
    }];

    constructor(props) {
        super(props);
        this.wineService = WineServiceClient.instance;
        this.doneHandler = this.doneHandler.bind(this);
        this.setPersonality = this.setPersonality.bind(this);
        this.state = {
            current: 0,
            personality: '',
            wines: [],
            isRegistered: false
        };
    }

    next() {
        console.log(this.state.isRegistered);
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    setPersonality(value) {
        console.log(value);
        this.setState({ personality: value });
    }

    doneHandler() {
        message.success('Registration complete!');
        this.setState({ isRegistered: true });
        this.wineService.findPersonalityWines(this.state.personality).then(wines => {
            this.setState({
                wines: wines
            });
        })
            .then(() => console.log(this.state.wines));

    }

    renderPersonalityWines() {
        let wines = this.state.wines.map((wine) => {
            return <WineCard wine={wine} key={wine.id} />;
        });
        return wines;
    }

    render() {
        const { current } = this.state;
        return (
            <div>
                <div style={{
                    backgroundColor: '#fff2e6',
                    padding: '10px'
                }}>
                    <div className='logo text-center'>
                        <img src='https://i.imgur.com/ogOwLLy.png' height='130' width='250' />
                    </div>
                </div>

                <div className='p-5'>
                    <Steps current={current}>
                        {this.steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                    <div>{this.steps[current].content}</div>
                    <div className='row'>
                        <div className='col'>
                            &nbsp;
                            </div>
                        <div className='col'>
                            {
                                current < this.steps.length - 1
                                && <Button type='primary' className='float-right ml-3' onClick={() => this.next()}>Next</Button>
                            }
                            {
                                current === this.steps.length - 1
                                && <Button type='primary' className='float-right ml-3' onClick={() => this.doneHandler()}>Done</Button>
                            }
                            {
                                current > 0
                                && <Button className='float-right' style={{ marginLeft: 8 }} onClick={() => this.prev()}>Previous</Button>
                            }
                        </div>
                        <div className='col'>
                            &nbsp;
                    </div>
                    </div>

                </div>
                {this.state.isRegistered &&
                    (<div className='row mb-5'>
                        <div className='col'>
                            &nbsp;
                        </div>
                        <div className='col-8'>
                            <h4 class='display-4' align='center'> Your MyersBriggs Wine Results</h4>
                            {this.renderPersonalityWines()}
                        </div>
                        <div className='col'>
                            &nbsp;
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

export default Register;


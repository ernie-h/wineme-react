import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export class Home extends React.Component {

    state = {
        current: 'mb'
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    
    render() {
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

                <div className='container-fluid'>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode='horizontal'
                        className='m-5 row'
                        >
                        <Link to='/myersbriggs'>
                            <Menu.Item 
                            key='mb'
                            className='p-3 col-sm'>
                                <img src='https://i.imgur.com/GMIRVQT.png' height='30' width='30' />
                                <h6> Myers Briggs Wine Recommendations</h6>
                            </Menu.Item>
                        </Link>
                        <Link to='/reviews'>
                            <Menu.Item 
                            key='reviews'
                            className='p-3 col-sm'>
                                <img src='https://i.imgur.com/4olGp20.png' height='30' width='30' />
                                <h6> Review Based Recommendations</h6>
                            </Menu.Item>
                        </Link>
                        <Link to='/stores'>
                            <Menu.Item 
                            key='store'
                            className='p-3 col-sm'>
                                <img src='https://i.imgur.com/K3NPYq3.png' height='30' width='30' />
                                <h6> Wines at My Favorite Store</h6>
                        </Menu.Item>
                        </Link>
                    </Menu>
                </div>



                
            </div>
        );
    }
}

export default Home;
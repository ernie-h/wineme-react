import React, { Component } from 'react';

export class Header extends React.Component {
    render() {
        return (
    <div className='jumbotron jumbotron-fluid' style={{
        backgroundColor : '#FAF4C0'
    }}>
        <div className='logo text-center'>
            <img src='https://i.imgur.com/ogOwLLy.png' height='250' width='500' />
        </div>
    </div>
        );
    }
}

export default Header;
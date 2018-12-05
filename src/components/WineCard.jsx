import React, { Component } from 'react';

export class WineCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wine: {
                title: '',
                variety: '',
                description: ''
            }
        };
    }
    render() {
        return (<div class="card">
            <div class="card-body">
                <h5 class="card-title">{this.props.wine.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{this.props.wine.variety}</h6>
                <p class="card-text">{this.props.wine.description}</p>
                <a href="https://www.wine.com" class="card-link">Find Wines</a>
            </div>
        </div>
        );
    }
}

export default WineCard;
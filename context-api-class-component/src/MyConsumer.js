import React, { Component } from 'react';

import MyContext from './MyContext';


const MyConsumer = () => (
    <MyContext.Consumer>
        {this.props.children}
    </MyContext.Consumer>
)

export default MyConsumer
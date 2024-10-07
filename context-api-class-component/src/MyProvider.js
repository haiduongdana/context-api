import React, { Component } from 'react';
import { useContext } from "react";

import MyContext from './MyContext';

class MyProvider extends 	 {
  state = {
    name: 'Wes',
    age: 100,
    cool: true
  }

  render() {
  	console.log(MyContext.themes);
    return (
      <MyContext.Provider value={{
        state: this.state,
        user: MyContext.user,
        theme: 'red',
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider
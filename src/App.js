import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginVisible : false
    }
  }

  loginVisibleFn = () => { 
    this.setState(prevState => {
      return {
        ...prevState,
        loginVisible: !prevState.loginVisible
      }
      
    });

  }
  render () {
    const { loginVisible } = this.state;
    return (
      <div className="App">
        <Header loginVisibleFn={this.loginVisibleFn} />
        <Content loginVisible={loginVisible} />
        <Footer />
      </div>
    );
  }
}

export default App;

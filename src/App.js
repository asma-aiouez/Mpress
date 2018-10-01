import { hot } from 'react-hot-loader';


import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise'


import Main from './components/pages/main/main-page'
import ContactUs from './components/pages/contact/contact-us-page'
import Design from './components/pages/design/design-page'
import User from './components/pages/user/user-page'
import Engineering from './components/pages/engineering/engineering-page'
import Marketing from './components/pages/marketing/marketing-page'
import Orchestration from './components/pages/orchestration/orchestration-page'
import CustomNav from './components/nav'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <CustomNav />
          <Route exact path="/" component={Main} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/user" component={User} />
          <Route path="/orchestration" component={Orchestration} />
          <Route path="/marketing" component={Marketing} />
          <Route path="/engineering" component={Engineering} />
          
          <Route path="/design" component={Design} />
  
      </div>
      </BrowserRouter>
      );
    }
  }
      
    

export default hot(module)(App);

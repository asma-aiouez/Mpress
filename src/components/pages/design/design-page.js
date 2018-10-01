import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom';
import Letter from '../user/letter'

export default class Design extends Component{
   render(){
    return(
     <div>
		     <Letter>A</Letter>
		     <Letter>E</Letter>
		     <Letter>O</Letter>
		     <Letter>U</Letter>
		     <Letter>I</Letter>
	    </div>
    );
  }

}
import React, { Component } from 'react';
import validate from 'validate.js';
import styled from 'styled-components';

//import contactFormAction from 'actions/contactFormAction';



var constraints = {
	email: {
		presence: true,
		email: true
    },
} 

const INITIAL_STATE = {
    email: ''
}    

export default class ContactForm extends Component{
  /*  constructor(props) {
		super(props);
		this.state = {
			fields: {
				...INITIAL_STATE
			},
			errors: null
		};
	}

    handleInputChange = name =>
    value => {
        const newState = { [name]: value };
        this.setState({fields: this.state.fields, newState});
    };

    handleSubmit = event => {
		event.preventDefault();
		const errors = validate(this.state.fields, constraints);
		this.setState({
			errors: errors
		});
		if(!errors) {
			const that = this;
			this.props.contactFormAction({
				...this.state.fields
			})
			.then (function () {
				alert('Submit Sucessfully');
			}); 
		}
	};*/
    
    render(){
        return(
            <form className="cnt-form">
                <h2>Get in touch</h2>               
                <div className="name">
                    <label for="name" >Name:</label>
                </div>
                <div className="name-txt">
                    <input type="text" name="name"/>
                </div>
                <div className="email">
                    <label for="email">EmailAddress:</label>
                </div>
                <div className="emailadd">
                    <input type="email" name="email"/>
                </div>
                <div className="subject">
                    <label for="subject">Subject:</label>
                </div>
                <div className="subject-txt">
                    <input type="text" name="subject"/>
                </div>
                <div className="msg">
                    <label for="message">Message:</label>
                </div>
                <div className="msg-txt">
                    <input className="msg-txt1" type="text" name="message"/>
                </div>
                <div className="sub">
                    <button type="submit">submit</button>
                </div>
            </form>
        )
    }
}

import React, { Component } from 'react';

export default class ContactForm extends Component{

    render(){
        return(
            <form className="cnt-form">
                <h2>Get in touch</h2>               
                <div className="name">
                    <label for="name">Name:</label>
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
                    <input type="text" name="message"/>
                </div>
                <div className="sub">
                    <button type="submit">submit</button>
                </div>
            </form>
        )
    }
}
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="container">
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <div className="box1" >
      <div className="headers">
        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78_cVuZT5NM-jg-MV-CH8LET1fNwi_rj3PmvCRgjLgBIuy8KKAw"/>
        <h1>TinyLove</h1>
        <ul className="list">
          <li className="list1"><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQi-txhDdEeP-BEaa_6tQRgZ8iUQAFv-pVZrR6SGMLLjNLxOWx"/></li>
          <li className="list1"><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2S-_MJpn0u2h1KseCml6WzbqmvMBZY5M8mCujkMTKKyk1xyVL"/></li>
          <li className="list1"><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfGXI8h_WXpFTDdQw3lgiSOY3QILtSJbKVPmQrC4AiCq9QBv3_"/></li>
        </ul>
        </div>
      
      <div className="App">
        <div className="first-img"> 
        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-KI4BX06hodeUFiFaCTl_bAw4HKOuBrVIkSZI6l_T3Zgrp0qlQ"/>
        </div>
        <div className="block-one">
          <h3>Enticing statement goes here</h3>
          <p>Computers allow users to create and manipulate information. Information takes on a life of its own on a network.</p>
          <ul className="list-one">
          <li className="list2"><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtRaJBXhyM7oOmBVdcN15S3ZpKKl6wvwtFofLVHc38DUwL0jQNw"/></li>
          <li className="list2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuEuGCq9lD9KMPW6NuNR4sOetFv4i3GAe5asM6q4zPUr73eoJjEg"/></li>
        </ul>
      </div>    
      </div>
      </div>

      <div className="box2">
      <div className="section-one">
      <img src ="http://www.clickonline.com/Images/Uploads/2016/291/Original/ArrowsWifi.png"/>
        <h3>Section Title</h3>
        <h4>Heading of this section</h4>
        <p>Facebook helps you connect and share with the people in your life.</p>
      </div>
      <div className="section-two">
      <img src ="http://www.clickonline.com/Images/Uploads/2016/291/Original/WifiCalling.png"/>
        <h3>Section Title</h3>
        <h4>Heading of this section</h4>
        <p>Facebook helps you connect and share with the people in your life.</p>
      </div>
      <div className="section-three">
      <img src ="http://www.clickonline.com/Images/Uploads/2016/291/Original/Location.png"/>
        <h3>Section Title</h3>
        <h4>Heading of this section</h4>
        <p>Facebook helps you connect and share with the people in your life.</p>
      </div>
      </div>

      <div className="box3">
      <h2>it's the next generation of location based networking</h2>
      </div>
      
      <div className="box4">
      <div className="header">
      <h1>See how it works</h1>
      </div>
      <div className="works">
      <div className="inform">
        <h3><img src ="http://via.placeholder.com/20x20"/>Heading goes here</h3>
        <p>Computers allow users to create and manipulate information. Information takes on a life of its own on a network. The network provides both a place to store the information and mechanisms to share that information with other network users.
Connections.</p>
      </div>
      <div className="img-box">
        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-KI4BX06hodeUFiFaCTl_bAw4HKOuBrVIkSZI6l_T3Zgrp0qlQ"/>
      </div>
      </div>
      </div>

      <div className="box5">
      <div className="img-box1">
      <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-KI4BX06hodeUFiFaCTl_bAw4HKOuBrVIkSZI6l_T3Zgrp0qlQ"/>
      </div>
      <div className="img-box2">
      <h3><img src ="http://via.placeholder.com/20x20"/>Heading goes here</h3>
      <p>Computers allow users to create and manipulate information. Information takes on a life of its own on a network. The network provides both a place to store the information and mechanisms to share that information with other network users.
Connections.</p>
      </div>
      </div>
      
      <div className="box6">
      <div className="text">
      <h3><img src ="http://via.placeholder.com/20x20"/>Heading goes here</h3>
      <p>Computers allow users to create and manipulate information. Information takes on a life of its own on a network. The network provides both a place to store the information and mechanisms to share that information with other network users.
Connections.</p>
      </div>
      <div className="img-box3">
      <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-KI4BX06hodeUFiFaCTl_bAw4HKOuBrVIkSZI6l_T3Zgrp0qlQ"/>
      </div>
      </div>

      <div className="box7">
      <h2>Get in touch</h2>
      <label for="uname">Username</label>
      <input type="text" name="name"/>
      <label for="email">EmailAddress</label>
      <input type="email" name="email"/>
      <label for="subject">Subject</label>
      <input type="text" name="subject"/>
      <label for="message">Message</label>
      <input type="text" name="message"/>
      <button type="submit">submit</button>
      </div>

      <div className="box8">
        <h6>@TinyLove</h6>
      </div>
      </div>
      
    );
  }
}

export default App;

import React, { Component } from 'react';
import fblogoImg from './images/facebook-letter-logo.svg';
import twitterlogoImg from './images/twitter-logo (1).svg';
import glogoImg from './images/google-logo.svg';
import oblogoImg from './images/objective.svg';
import cplogoImg from './images/computer.svg';
import worldlogoImg from './images/world-map.svg';
import pencillogoImg from './images/pencil.svg';
import chatlogoImg from './images/chat.svg';
import pinlogoImg from './images/pin.svg';
import './App.css';
import Contactform from './Component/ContactForm';

class App extends Component {
  render() {
    return (
      <div class="container">
      <div className="box1" >
      <div className="headers">
      <img src ="https://www.tinylove.com/skin/frontend/tinylove/v2/images/logo-svg.svg"/>
        <h1>TinyLove</h1>
          <ul className="list">
            <li className="list1"><img src={fblogoImg}/></li>
            <li className="list1"><img src={twitterlogoImg}/></li>
            <li className="list1"><img src={glogoImg}/></li>
          </ul>
      </div>
      
      <div className="App">
      <div className="block-one">
        <h3>Enticing statement goes here</h3>
        <p>Computers allow users to create and manipulate information. Information takes on a life of its own on a network.</p>
          <ul className="list-one">
            <li className="list2">
              <img src = "http://www.checkmy.camera/images/logos/2000px-Get_it_on_Google_play.svg.png"/></li>
            <li className="list2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/200px-Download_on_the_App_Store_Badge.svg.png"/>
            </li>
        </ul>
      </div>    
      </div>
      </div>

      <div className="box2">
      <div className="section-one">
      <img className="obImg" src = {oblogoImg}/>
        <h3>Section Title</h3>
        <h4>Heading of this section</h4>
        <p>Facebook helps you connect and share with the people in your life.</p>
      </div>

      <div className="section-two">
      <img className="cpImg" src ={cplogoImg}/>
        <h3>Section Title</h3>
        <h4>Heading of this section</h4>
        <p>Facebook helps you connect and share with the people in your life.</p>
      </div>
      
      <div className="section-three">
      <img className="worldImg" src ={worldlogoImg}/>
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
      <div className ="itworks">
      <div className="img-go">
        <img className="pencil" src ={pencillogoImg}/>
      </div> 

      <div className="inform">
        <h3>Heading goes here</h3>
        <p>Computers allow users to create and manipulate information. Information takes on a life of its own on a network. The network provides both a place to store the information and mechanisms to share that information with other network users.
          Connections.
        </p>
      </div>
      </div>

      <div className="img-box">
        <img className="apple1" src ="https://uberblogapi.10upcdn.com/wp-content/uploads/sites/375/2016/09/UberMENTOR-phone-halfscreen-1.png"/>
      </div>
      </div>
      </div>

      <div className="box5">
      <div className="img-box1">
        <img className="apple2"src ="https://uberblogapi.10upcdn.com/wp-content/uploads/sites/375/2016/09/UberMENTOR-phone-halfscreen-1.png"/>
      </div>

      <div className="img-box2">
      <div className="img-go1">
        <img className="chatimg" src ={chatlogoImg}/>
      </div>

      <div className="inform1">
      <h3>Heading goes here</h3>
      <p>Computers allow users to create and manipulate information. Information takes on a life of its own on a network. The network provides both a place to store the information and mechanisms to share that information with other network users.
        Connections.
      </p>
      </div>
      </div>
      </div>
      
      <div className="box6">
        <div className="text">
        <div className="img-go2">
          <img className="pinimg" src ={pinlogoImg}/>
        </div>

        <div className="inform2">
        <h3>Heading goes here</h3>
        <p>Computers allow users to create and manipulate information. Information takes on a life of its own on a network. The network provides both a place to store the information and mechanisms to share that information with other network users.
          Connections.
        </p>
        </div>
        </div>

      <div className="img-box3">
      <img className="apple3" src ="https://uberblogapi.10upcdn.com/wp-content/uploads/sites/375/2016/09/UberMENTOR-phone-halfscreen-1.png"/>
      </div>
      </div>


    
      <Contactform></Contactform>
      
      <div className="box8">
        <h6>@TinyLove</h6>
      </div>
      </div>
      
    );
  }
}

export default App;

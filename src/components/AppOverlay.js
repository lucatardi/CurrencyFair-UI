import React, { Component } from 'react';
import styles from './AppOverlay.css';

class AppOverlay extends Component {

    moveOnMax = function (field, nextFieldID) {
        if (field.value.length == 1) {
            document.getElementById(nextFieldID).focus();
        }
     }
    
    render() {
        return <div className="overlay">
            <div className="card">
                <div className="light-container">
                    <h3> Identity verification required </h3>
                    <p> For your security, we occasionally require you to verify your identity by
                    entering a code sent to your mobile device. </p>
                </div>
                <div className="dark-container">
                    <p> Enter the code sent via SMS to <span>+353 872251177</span></p>
                    <input type="password" maxlength='1' id="1" onkeyup="moveOnMax(this,'a')" />
                    <input type="password" maxlength='1' id="a" onkeyup="moveOnMax(this,'b')" />
                    <input type="password" maxlength='1' id="b" onkeyup="moveOnMax(this,'c')" />
                    <input type="password" maxlength='1' id="c" onkeyup="moveOnMax(this,'d')" />
                    <input type="password" maxlength='1' id="d" onkeyup="moveOnMax(this,'e')" />
                    <input type="password" maxlength='1' id="e" onkeyup="moveOnMax(this,'e')" />
                    <p> Receive a new code </p>
                    <p> Receive a code via call instead </p>
                </div>
                <div className="light-container">
                    <button> Verify Identity </button>
                    <button> Back </button>
                    <p> I can't access this mobile device </p>
                </div>

            </div>
        </div>;
    }
   }
   
   export default AppOverlay;


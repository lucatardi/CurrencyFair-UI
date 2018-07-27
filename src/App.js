import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { simpleAction } from './actions/simpleAction';


const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
   }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-container fxRow">
          <div className="left-part">
            <div className="App-stepper fxRow">
              <div className="selected">
                <p> Step 1 </p>
                <p> Transaction info </p>
              </div>
              <div>
                <p> Step 2 </p>
                <p> Recipient info </p>
              </div>
              <div>
                <p> Step 3 </p>
                <p> Make payment </p>
              </div>
            </div>  {/* APP STEPPER  */}
            <div className="App-body">
              <h3> Let's set up your transaction! </h3>
              <p className="dark-gray-text margin"> Specify the amount to be sent or received. </p>
              <div className="App-sending">
                <div className="fxRow fxSb">
                  <div>
                    <p className="selected"> YOU SEND </p>
                    <h1> € 2,000<span className="smaller">.00</span> </h1>
                  </div>
                  <div className="shape fxRow fxSb">
                    <div className="flag-container" id="eur"></div>
                    EUR
                  </div>
                </div>
              </div>
              <div className="App-receiving">
                <div className="fxRow fxSb">
                  <div>
                    <p className="gray-text"> RECEIVER GETS </p>
                    <h1> £ 1,717<span className="smaller">.94</span> </h1>
                  </div>
                  <div className="shape fxRow fxSb">
                    <div className="flag-container" id="gbp"></div>
                    GBP
                  </div>
                </div>
              </div>
              <button onClick={"#"}>
                <h2>Next</h2>
              </button>
              <div className="fxRow fxSb footer">
                <p className="gray-text"> &copy; 2016 CurrencyFair </p>
                <div>
                  <a href="#"> Help & Support </a>
                  <a id="second-link" href="#"> Legal Stuff </a>
                </div>
              </div>
            </div>  {/* APP BODY  */}
          </div> {/* LEFT PART  */}
          <div className="right-part">
            <div className="App-preview">
              <div className="fxRow fxSb subtitle-container dark-gray-text"> <h5> Sending Details </h5> </div>
              <div className="fxRow fxSb"> <p className="gray-text"> You send </p> <p className="dark-gray-text"> €2000.00 </p> </div>
              <div className="fxRow fxSb subtitle-container dark-gray-text"> <h5> Receiving Details </h5> <a href="#"> As of right now </a> </div>
              <div>
                <div className="fxRow fxSb gray-text"> <p> Rate </p> <p> 0.86022 </p> </div>
                <div className="fxRow fxSb gray-text"> <p> Fee </p> <p> £2.50 </p> </div>
                <div className="fxRow fxSb gray-text"> <p> Delivery date </p> <p> 25th November </p> </div>
                <div className="fxRow fxSb"> <p className="gray-text"> Recipient gets </p> <p className="dark-gray-text"> £1717.94 </p> </div>
              </div>
              <div className="amount"> <p> You save £66.19 compared your bank! </p> </div>
            </div>
          </div> {/* RIGHT PART  */}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

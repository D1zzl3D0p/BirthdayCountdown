import React, { Component } from 'react';
import Picker from './picker';
import Button from './button'
import Clock from './clock';
import ChangeDate from './changeDate';
import LargeText from './largeText';
import moment from 'moment';

export default class App extends Component {

  constructor(props){
    super(props)

    this.state={
      active:false,
      startDate: moment()
      timeRemaining:{
        days:0,
        hours:0,
        minutes:0,
        seconds:0,
      }
    }
  }

  handleChange=function(date) {
    console.log('App js Handle Change', date._d)
    this.setState({
        startDate: date
    });
  }.bind(this)

  renderItems= function(){
    if (this.state.active){
      return[
        <Clock/>,
        ChangeDate('Change Date', ()=>this.setState({ active:false })),
        LargeText('04/03'),
        <label className="grid__remaining">Remaining to your 20th Birthday!</label>
      ]
    }else{
      return[ 
        Button('Generate Countdown', ()=>this.setState({ active:true})),
        <Picker 
        callback={(date)=>this.handleChange(date)}
        /> 
    ]
    }
  }.bind(this);

  render() {

    // return <div className=""><Clock/></div>

    return (
      <div className="grid">
        <h3 className="grid__title">Birthday Countdown</h3>

        <div className="grid__skew-dark-one"></div>

        <div className="grid__skew-light-one"></div>
        <div className="grid__skew-light-two"></div>
        <div className="grid__skew-light-three-box"></div>

        

        {this.renderItems()}

      </div>
    );
  }
}

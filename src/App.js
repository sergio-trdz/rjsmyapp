import React, { Component } from 'react';
import Header from '../src/Components/Layout/Header/Header'
import ContextInfo from './Pages/ContextInfo/ContextInfo';
import CustomerInfo from './Pages/CustomerInfo/CustomerInfo';
import InteractionHistory from './Pages/InteractionHistory/InteractionHistory';
import Personalized2 from './Pages/Personalized2/Personalized2';
import NotesHistory from './Pages/NotesHistory/NotesHistory';
import Personalized from './Pages/Personalized/Personalized';

class App extends Component {



  constructor(props) {
    super(props);
 
    this.state = {
      id: '',
      currentMDN: ''
    };
  }

  onChangeMDN = (input) => {
    this.setState({
      currentMDN: input.target.value
    })
  }

  myCallback = (dataFromChild) => {
    this.setState(() => ({
      id: dataFromChild,
    }));
  }

  render() {
    return (
      <div >
        <Header callbackFromParent={this.myCallback} onChangeMDN={this.onChangeMDN} currentMDN={this.state.currentMDN}/>
        <CustomerInfo mdnId={this.state.id} currentMDN={this.state.currentMDN}/>
        <Personalized currentMDN={this.state.currentMDN}/>
        <ContextInfo/>
        <InteractionHistory/>
        <NotesHistory/>
      </div>  
    );
  }
}

export default App;

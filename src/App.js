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
      id: ''
    };
  }

  myCallback = (dataFromChild) => {
    this.setState(() => ({
      id: dataFromChild,
    }));
  }

  render() {
    return (
      <div >
        <Header callbackFromParent={this.myCallback}/>
        <CustomerInfo mdnId={this.state.id}/>
        <Personalized/>
        <ContextInfo/>
        <InteractionHistory/>
        <NotesHistory/>
      </div>  
    );
  }
}

export default App;

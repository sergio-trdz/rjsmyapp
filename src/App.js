import React from 'react';
import Header from '../src/Components/Layout/Header/Header'
import ContextInfo from './Pages/ContextInfo/ContextInfo';
import CustomerInfo from './Pages/CustomerInfo/CustomerInfo';
import InteractionHistory from './Pages/InteractionHistory/InteractionHistory';
import LineInfo from './Pages/LineInfo/LineInfo';
import NotesHistory from './Pages/NotesHistory/NotesHistory';
import Personalized from './Pages/Personalized/Personalized';


const App = () => {
  
  return (
    <div >
      <Header/>
      <CustomerInfo/>
      <Personalized/>
      <ContextInfo/>
      <InteractionHistory/>
      <NotesHistory/>
    </div>  
  );
}

export default App;

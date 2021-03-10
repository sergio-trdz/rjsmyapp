import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import USCCLOGO from './USCCLOGO.png'


// const useStyles = {
//   background : '#2E3B55'; 
// };


const Header = () => {
  
  return (
    <div >
      <AppBar position="fixed" style={{ background: '#FFFFFF' }}>
        <Toolbar>
        <img src={USCCLOGO}  width="140" />
          <Typography variant="h6" style={{color: '#000000', fontWeight: 600, paddingLeft: 20, paddingTop: 6}}>
            Personalized Recommendations Tool
          </Typography>
        </Toolbar>
      </AppBar>
    </div>  
  );
}

export default Header;
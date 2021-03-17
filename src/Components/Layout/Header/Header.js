import React, { useEffect, useLayoutEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import USCCLOGO from './USCCLOGO.png'
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  headerColor: {
    background: '#FFFFFF',
    flexGrow: 1
  },
  logo: {
    width: "140px",
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: '#000000',
    fontWeight: 600,
    paddingLeft: 20,
    paddingTop: 6
  },
  select: {
    paddingTop: 6, 
    marginLeft: 10,
    fontSize: 13
  }
}));

function Header(props) {
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    id: '',
  });
  
  const handleChange = (event) => {
    props.callbackFromParent(event.target.value);
    setState({
      ...state,
      id: event.target.value,
    });
  };

  return (
    <div >
      <AppBar position="fixed" className={classes.headerColor}>
        <Toolbar>
          <img src={USCCLOGO} className={classes.logo}/>
          <Typography className={classes.title}>
            Personalized Recommendations Tool
          </Typography>
          <Typography  style={{color: '#000000', fontWeight: 600, paddingTop: 6, fontSize: 13}}>
            Select MDN
          </Typography>
          <NativeSelect
            value={props.currentMDN}
            onChange={props.onChangeMDN}

            
                   
            className={classes.select}
          >          
            <option aria-label="None" value=""></option>
            <option value="707-298-5587">707-298-5587</option>
            <option value="640-298-4409">640-298-4409</option>
          </NativeSelect>
        </Toolbar>
      </AppBar>
    </div>  
  );
}

export default Header;
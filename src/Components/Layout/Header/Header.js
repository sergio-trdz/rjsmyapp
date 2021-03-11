import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import USCCLOGO from './USCCLOGO.png'
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';



// const useStyles = makeStyles({
//   labelname: {
//     fontSize: 130,
//   }
// });



const Header = () => {

  // const classes = useStyles();
  
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div >
      <AppBar position="fixed" style={{ background: '#FFFFFF' }}>
        <Toolbar>
        <img src={USCCLOGO}  width="140" />
          <Typography variant="h6" style={{color: '#000000', fontWeight: 600, paddingLeft: 20, paddingTop: 6}}>
            Personalized Recommendations Tool
          </Typography>
          <Typography  style={{color: '#000000', fontWeight: 600, paddingLeft: 80, paddingTop: 6, fontSize: 13}}>
            Select MDN
          </Typography>
          <NativeSelect style={{ paddingTop: 6,  marginLeft: 10, fontSize: 13}}>
            <option >707-298-5587</option>
            <option >Twenty</option>
            <option >Thirty</option>
          </NativeSelect>
          <Typography  style={{color: '#000000', fontWeight: 600, paddingLeft: 25, paddingTop: 6, fontSize: 13}}>
            View Offers For:
          </Typography>
          <FormControlLabel
            // label="Primary"
            // style={{color: '#000000', paddingTop: 6, padding}}
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                color="primary"
                style={{paddingLeft: 15, paddingTop: 14}}
              />
            }
          />
          <Typography  style={{color: '#000000',  marginLeft: -25, paddingTop: 6, fontSize: 13}}>
            Current MDN
          </Typography>
          <FormControlLabel
            // label="Primary"
            // style={{color: '#000000', paddingTop: 6, padding}}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              
                style={{paddingLeft: 15, paddingTop: 14}}
              />
            }
          />
          <Typography  style={{color: '#000000',  marginLeft: -25, paddingTop: 6, fontSize: 13}}>
            All Lines
          </Typography>
          <FormControlLabel
            // label="Primary"
            // style={{color: '#000000', paddingTop: 6, padding}}
            control={
              <Checkbox
                checked={state.checkedF}
                onChange={handleChange}
                name="checkedF"
                color="primary"
              
                style={{paddingLeft: 15, paddingTop: 14}}
              />
            }
          />
          <Typography  style={{color: '#000000',  marginLeft: -25, paddingTop: 6, fontSize: 13}}>
            Account
          </Typography>
        </Toolbar>
      </AppBar>
    </div>  
  );
}

export default Header;
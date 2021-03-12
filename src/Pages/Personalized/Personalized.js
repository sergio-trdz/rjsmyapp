import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  somethingtoworkwith: {
    color : 'primary'
  }
}));

const Personalized = () => {

  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkbox: undefined,
    checbox1: undefined,
    checbox2: undefined,
    checbox3: undefined,
    checbox4: undefined,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleTableChange = (event) => {
    setState({ ...state, checkbox: event.target.name });
  };

  const handleTableChange1 = (event) => {
    setState({ ...state, checkbox1: event.target.name });
  };
  
  const handleTableChange2 = (event) => {
    setState({ ...state, checkbox2: event.target.name });
  };

  const handleTableChange3 = (event) => {
    setState({ ...state, checkbox3: event.target.name });
  };

  const handleTableChange4 = (event) => {
    setState({ ...state, checkbox4: event.target.name });
  };

  const rows = [
    {priority: 1, level: '707-298-5587', offername:'Position latest phone deals for upgrade', previously:'Yes', accept: <Checkbox color="primary" name="A" onChange={handleTableChange} checked={state.checkbox === 'A'}/>, reject: <Checkbox color="primary" name="B" onChange={handleTableChange} checked={state.checkbox === 'B'}/>, maybe: <Checkbox color="primary" name="C" onChange={handleTableChange} checked={state.checkbox === 'C'}/>},
    {priority: 2, level: 'Account', offername:'50% off subsidy early upgrade offer', previously:'No', accept: <Checkbox color="primary" name="A" onChange={handleTableChange1} checked={state.checkbox1 === 'A'}/>, reject: <Checkbox color="primary" name="B" onChange={handleTableChange1} checked={state.checkbox1 === 'B'}/>, maybe: <Checkbox color="primary" name="C" onChange={handleTableChange1} checked={state.checkbox1 === 'C'}/>},
    {priority: 3, level: '640-298-4409', offername:'Restricted $50 monthly credit - 1 yr', previously:'Yes', accept: <Checkbox color="primary" name="A" onChange={handleTableChange2} checked={state.checkbox2 === 'A'}/>, reject: <Checkbox color="primary" name="B" onChange={handleTableChange2} checked={state.checkbox2 === 'B'}/>, maybe: <Checkbox color="primary" name="C" onChange={handleTableChange2} checked={state.checkbox2 === 'C'}/>},
    {priority: 4, level: 'Account', offername:'Discussion/education/upsell opportunity', previously:'Yes', accept: <Checkbox color="primary" name="A" onChange={handleTableChange3} checked={state.checkbox3 === 'A'}/>, reject: <Checkbox color="primary" name="B" onChange={handleTableChange3} checked={state.checkbox3 === 'B'}/>, maybe: <Checkbox color="primary" name="C" onChange={handleTableChange3} checked={state.checkbox3 === 'C'}/>},
    {priority: 5, level: '640-298-4409', offername:'EEUE policy buy down of equipment timer', previously:'N/A', accept: <Checkbox color="primary" name="A" onChange={handleTableChange4} checked={state.checkbox4 === 'A'}/>, reject: <Checkbox color="primary" name="B" onChange={handleTableChange4} checked={state.checkbox4 === 'B'}/>, maybe: <Checkbox color="primary" name="C" onChange={handleTableChange4} checked={state.checkbox4 === 'C'}/>},
    // {2, '707-298-5587', '50% off subsidy early upgrade offer', 'No', 4.3, 2.3, 12},
    // {3, 'Account', 'Restricted $50 monthly credit - 1 yr', 'Yes', 6.0, 2.3, 12},
    // {4, 'Account', 'Discussion/education/upsell opportunity', 'Yes', 4.3, 2.3, 12},
    // {5, '707-298-5587', 'EEUE policy buy down of equipment timer', 'N/A', 3.9, 2, 12},
  ];

  return (
    <div style={{padding: 50, paddingTop: 1}}>
      <Card style={{borderRadius: 2}}>
      <CardHeader
        title={
          <Typography variant="h6" style={{color: '#FFFFFF', fontWeight: 600}}>
             Personalized Recommendations
          </Typography>
       }
        style={{ background: '#16478E' }}
      />
      <CardContent>
      <TableContainer >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Priority</TableCell>
            <TableCell align="center">Level</TableCell>
            <TableCell align="center">Offer Name</TableCell>
            <TableCell align="center">Previously Interested</TableCell>
            <TableCell align="center">Accept</TableCell>
            <TableCell align="center">Reject</TableCell>
            <TableCell align="center">Maybe Later</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.priority}>
              <TableCell component="th" scope="row">
                {row.priority}
              </TableCell>
              <TableCell align="center">{row.level}</TableCell>
              <TableCell align="center">{row.offername}</TableCell>
              <TableCell align="center">{row.previously}</TableCell>
              <TableCell align="center">{row.accept}</TableCell>
              <TableCell align="center">{row.reject}</TableCell>
              <TableCell align="center">{row.maybe}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <Toolbar>
      <Typography  style={{color: '#000000', fontWeight: 600, paddingLeft: 25, paddingTop: 30, fontSize: 13}}>
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
                style={{paddingLeft: 15, paddingTop: 35}}
              />
            }
          />
          <Typography  style={{color: '#000000',  marginLeft: -15, paddingTop: 28, fontSize: 13}}>
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
              
                style={{paddingLeft: 55, paddingTop: 35}}
              />
            }
          />
          <Typography  style={{color: '#000000',  marginLeft: -12, paddingTop: 28, fontSize: 13}}>
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
                style={{paddingLeft: 55, paddingTop: 35}}
              />
            }
          />
          <Typography  style={{color: '#000000',  marginLeft: -12, paddingTop: 28, fontSize: 13}}>
            Account
          </Typography>
          <Button href="https://www.figma.com/proto/flPvkcYoTL2itEdMfX6tdB/PRT-Options?node-id=219%3A0&scaling=min-zoom" target="_blank" variant="contained" color="primary" style={{marginTop: 28, marginLeft: 370}}>
            Submit
          </Button>
      </Toolbar>
      </CardContent>
      </Card>
      </div>
  );
}

export default Personalized;
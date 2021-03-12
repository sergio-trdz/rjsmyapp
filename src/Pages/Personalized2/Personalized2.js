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


function createData(priority, level, offername, previously, accept, reject, maybe) {
  return { priority, level, offername, previously, accept, reject, maybe};
}

const rows = [
  createData(1, 'Account', 'Position latest phone deals for upgrade', 'Yes', <Checkbox/>, <Checkbox/>, 12),
  createData(2, '707-298-5587', '50% off subsidy early upgrade offer', 'No', 4.3, 2.3, 12),
  createData(3, 'Account', 'Restricted $50 monthly credit - 1 yr', 'Yes', 6.0, 2.3, 12),
  createData(4, 'Account', 'Discussion/education/upsell opportunity', 'Yes', 4.3, 2.3, 12),
  createData(5, '707-298-5587', 'EEUE policy buy down of equipment timer', 'N/A', 3.9, 2, 12),
];

const Personalized2 = () => {

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
            <TableCell style={{color: '#16478E', fontWeight: 600}}>Priority</TableCell>
            <TableCell style={{color: '#16478E', fontWeight: 600}}>Level</TableCell>
            <TableCell style={{color: '#16478E', fontWeight: 600}}>Offer Name</TableCell>
            <TableCell style={{color: '#16478E', fontWeight: 600}}>Previously Interested</TableCell>
            <TableCell style={{color: '#16478E', fontWeight: 600}}>Accept</TableCell>
            <TableCell style={{color: '#16478E', fontWeight: 600}}>Reject</TableCell>
            <TableCell style={{color: '#16478E', fontWeight: 600}}>Maybe Later</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.priority}>
              <TableCell component="th" scope="row">
                {row.priority}
              </TableCell>
              <TableCell align="left">{row.level}</TableCell>
              <TableCell align="left">{row.offername}</TableCell>
              <TableCell align="left">{row.previously}</TableCell>
              <TableCell align="left">{row.accept}</TableCell>
              <TableCell align="left">{row.reject}</TableCell>
              <TableCell align="left">{row.maybe}</TableCell>
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
          <Button variant="contained" color="primary" style={{marginTop: 28, marginLeft: 370}}>
            Submit
          </Button>
      </Toolbar>
      </CardContent>
      </Card>
      </div>
  );
}

export default Personalized2;
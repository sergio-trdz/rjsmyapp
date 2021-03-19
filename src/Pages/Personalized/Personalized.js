import {useState, useEffect} from 'react'
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
import DataRow from '../../Components/Personalized/DataRow';


const Personalized = (props) => {
  const { currentMDN } = props;



const [ isCurrentMDN, setIsCurrentMDN] = useState(false);
const [ isAll, setIsAll] = useState(false);
const [ isAccount, setIsAccount] = useState(false);
const [data, setData] = useState([
  {
    id : 1,
    priority: 1,
    level: '707-298-5587',
    offerName: 'Position latest phone deals for upgrade',
    interested: false
  },
  {
    id : 1,
    priority: 2,
    level: 'Account',
    offerName: '50% off subsidy early upgrade offer',
    interested: true
  },
  {
    id : 1,
    priority: 3,
    level: 'Account',
    offerName: 'Restricted $50 monthly credit - 1 yr',
    interested: false
  },
  {
    id : 1,
    priority: 4,
    level: '640-298-4409',
    offerName: 'Discussion/education/upsell opportunity',
    interested: false
  },
  {
    id : 1,
    priority: 5,
    level: '707-298-5587',
    offerName: 'EEUE policy buy down of equipment timer',
    interested: true
  },{
    id : 1,
    priority: 1,
    level: 'Account',
    offerName: 'Position latest phone deals for upgrade',
    interested: false
  },
  {
    id : 1,
    priority: 2,
    level: '707-298-5587',
    offerName: '50% off subsidy early upgrade offer',
    interested: true
  },
  {
    id : 1,
    priority: 3,
    level: '707-298-5587',
    offerName: 'Restricted $50 monthly credit - 1 yr',
    interested: false
  },
  {
    id : 1,
    priority: 4,
    level: 'Account',
    offerName: 'Discussion/education/upsell opportunity',
    interested: false
  },
  {
    id : 1,
    priority: 5,
    level: 'Account',
    offerName: 'EEUE policy buy down of equipment timer',
    interested: true
  },{
    id : 1,
    priority: 1,
    level: '640-298-4409',
    offerName: 'Position latest phone deals for upgrade',
    interested: false
  },
  {
    id : 1,
    priority: 2,
    level: '640-298-4409',
    offerName: '50% off subsidy early upgrade offer',
    interested: true
  },
  {
    id : 1,
    priority: 3,
    level: '640-298-4409',
    offerName: 'Restricted $50 monthly credit - 1 yr',
    interested: false
  },
  {
    id : 1,
    priority: 4,
    level: '707-298-5587',
    offerName: 'Discussion/education/upsell opportunity',
    interested: false
  },
  {
    id : 1,
    priority: 5,
    level: '640-298-4409',
    offerName: 'EEUE policy buy down of equipment timer',
    interested: true
  },
]);


const [showed, setShowed] = useState([]);

useEffect(() => {

  setShowed(
    data.filter(offer => {

      if (isAll) return true;
      if (isCurrentMDN && isAccount ) return (offer.level === "Account" || offer.level === currentMDN);
      if (isCurrentMDN) return offer.level === currentMDN;
      if (isAccount) return offer.level === "Account";
      return true

    })
  )

  // const newData = JSON.parse(JSON.stringify(data));

  // if(isAll) {
  //   setShowed(newData);
  //   return;
  // }

  // if( isCurrentMDN ) {
  //     setShowed(newData.filter (offer => offer.level === currentMDN))
  // }

  // if (isAccount) {
  //   setShowed(data.filter (offer => offer.level === 'Account'))
  // }

}, [isCurrentMDN, isAll, isAccount, currentMDN]);



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
          {showed.slice(0,5).map((offer, i) => 
            <DataRow key={i}
                     id={offer.id}
                     priority={i + 1}
                     interested={offer.interested}
                     level={offer.level}
                     name={offer.offerName}    
            />
          )}

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
                checked={isCurrentMDN}
                onChange={(input) => setIsCurrentMDN ( input.target.checked)}
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
              checked={isAll}
              onChange={(input) => setIsAll ( input.target.checked)}
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
              checked={isAccount}
              onChange={(input) => setIsAccount ( input.target.checked)}
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
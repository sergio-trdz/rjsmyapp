import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NativeSelect from '@material-ui/core/NativeSelect';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


const ContextInfo = () => {

  const preventDefault = (event) => event.preventDefault();
  
  return (
    <div style={{padding: 50, paddingTop: 1}}>
      <Card style={{borderRadius: 2}}>
      <CardHeader
        title={
          <Typography variant="h6" style={{color: '#FFFFFF', fontWeight: 600}}>
             Context Information
          </Typography>
       }
        style={{ background: '#16478E' }}
        
      />
     
      <CardContent>
      <Typography variant="body2">
      <Grid container justify="space-around" >
        <Grid item xs >
        <Typography style={{color: '#000000', fontWeight: 600, fontSize: 12}}>
          Call Type
        </Typography>
        <NativeSelect>
          <option >CS</option>
          <option >Prepaid</option>
        </NativeSelect>
      </Grid>

    <Grid item xs style={{marginLeft: -550}}>
    <Typography style={{color: '#000000', fontWeight: 600, fontSize: 12}}>
      Call Reason
    </Typography>
    <NativeSelect>
      <option >Payments</option>
      <option >Billing</option>
      <option >Transfers</option>
      <option >Technical Issues</option>
      <option >Products</option>
      <option >Plan Changes & General Topics Device Updates</option>
      <option >Decive Mentions</option>
      <option >Discounts & Promotions</option>
      <option >My Account</option>
    </NativeSelect>
    </Grid>

    <Grid  style={{color: '#000000', fontWeight: 600, fontSize: 10, paddingTop: 36}}>
    <Link href="#" onClick={preventDefault}>
      Clear Selections
    </Link>
    </Grid>
    </Grid>
  </Typography>
      </CardContent>
      </Card>
      </div>
  );
}

export default ContextInfo;


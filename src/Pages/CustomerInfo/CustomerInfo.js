import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const CustomerInfo = () => {
 
  
  return (
    <div style={{padding: 50, paddingTop: 110}}>
      <Card style={{borderRadius: 2}}>
      <CardHeader
        title={
          <Typography variant="h6" style={{color: '#FFFFFF', fontWeight: 600}}>
             Customer Line Information
          </Typography>
       } style={{ background: '#16478E' }} />
        <div >
          <CardContent>
            <Typography variant="body2">
              <Grid container justify="space-around" >
                <Grid item xs style={{color: '#000000', fontWeight: 600, fontSize: 12, paddingTop: 2}}>
                  Customer ID: 
                </Grid>
                <Grid >
                  <Typography variant="body" style={{color: '#000000',  fontSize: 12, marginLeft: -145}}>234-124-764</Typography>
                </Grid>
                <Grid item xs style={{color: '#000000', fontWeight: 600, fontSize: 12, paddingTop: 2}}>
                  Customer Type:
                </Grid>
                <Grid >
                  <Typography variant="body" style={{color: '#000000',  fontSize: 12, marginLeft: -130}}>Postpaid</Typography>
                </Grid>
                <Grid item xs style={{color: '#000000', fontWeight: 600, fontSize: 12, paddingTop: 2}}>
                  Last Month's Bill:
                </Grid>
                <Grid >
                  <Typography variant="body" style={{color: '#000000',  fontSize: 12, marginLeft: -120}}>$60</Typography>
                </Grid>
                <Grid item xs style={{color: '#000000', fontWeight: 600, fontSize: 12, paddingTop: 2}}>
                  GB used last month:
                </Grid>
                <Grid >
                  <Typography variant="body" style={{color: '#000000',  fontSize: 12, marginLeft: -102}}>50 GB</Typography>
                </Grid>
                <Grid item xs style={{color: '#000000', fontWeight: 600, fontSize: 12, paddingTop: 2}}>
                  Interactions last month:
                </Grid>
                <Grid >
                  <Typography variant="body" style={{color: '#000000',  fontSize: 12, marginLeft: -83}}>4</Typography>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default CustomerInfo;
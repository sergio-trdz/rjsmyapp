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
                <Grid item xs style={{color: '#000000', fontWeight: 600, fontSize: 12}}>
                  Customer ID:
                </Grid>

                <Grid item xs style={{color: '#000000', fontWeight: 600, fontSize: 12}}>
                  Customer Type:
                </Grid>

                <Grid item xs style={{color: '#000000', fontWeight: 600, fontSize: 12}}>
                  Last Month's Bill:
                </Grid>

                <Grid item xs style={{color: '#000000', fontWeight: 600, fontSize: 12}}>
                  GB used last month:
                </Grid>

                <Grid item xs style={{color: '#000000', fontWeight: 600, fontSize: 12}}>
                  Interactions last month:
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
import React, { useEffect, useLayoutEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardHeaderStyle: {
    color: "white",
    fontWeight: 600
  },
  cardContentStyle: {
    textAlign: "center"
  },
  gridHeader: {
    color: '#000000',
    fontWeight: 600,
    fontSize: 12,
    paddingTop: 2
  },
  gridText: {
    fontWeight: 400,
    paddingLeft: 5
  }
}));

const CustomerInfo = (props) => {
  
  const [mdnInfo, setMdnInfo] = React.useState({
    id: '',
    customerType: '',
    bill: '',
    gb: '',
    interactions: ''
  });

  let hardcodedJson = [{
    id: '707-298-5587',
    customerType: 'Postpaid',
    bill: '$60',
    gb: '50 GB',
    interactions: '4'
  }, {
    id: '640-298-4409',
    customerType: 'Prepaid',
    bill: '$20',
    gb: '250 GB',
    interactions: '15'
  }];

  useEffect(() => {
    const newJson = hardcodedJson.filter(obj => obj.id === props.mdnId)
    if(newJson.length === 0) {
      setMdnInfo({
        id: '',
        customerType: '',
        bill: '',
        gb: '',
        interactions: ''
      })
    } else {
      setMdnInfo(newJson[0]);
    }
  }, [props])

  const classes = useStyles();

  return (
    <div style={{padding: 50, paddingTop: 110}}>
      <Card style={{borderRadius: 2}}>
      <CardHeader
        title={
          <Typography variant="h6" className={classes.cardHeaderStyle}>
             Customer Line Information
          </Typography>
       } style={{ background: '#16478E' }} />
        <div >
          <CardContent>
            <Grid container className={classes.cardContentStyle}>
              <Grid item md xs="12" className={classes.gridHeader}>
                Customer ID:
                <Typography variant="body" className={classes.gridText}>{mdnInfo.id}</Typography>
              </Grid>
              <Grid item md xs="12" className={classes.gridHeader}>
                Customer Type:
                <Typography variant="body" className={classes.gridText}>{mdnInfo.customerType}</Typography>
              </Grid>
              <Grid item md xs="12" className={classes.gridHeader}>
                Last Month's Bill:
                <Typography variant="body" className={classes.gridText}>{mdnInfo.bill}</Typography>
              </Grid>
              <Grid item md xs="12" className={classes.gridHeader}>
                GB used last month:
                <Typography variant="body" className={classes.gridText}>{mdnInfo.gb}</Typography>
              </Grid>
              <Grid item md xs="12" className={classes.gridHeader}>
                Interactions last month:
                <Typography variant="body" className={classes.gridText}>{mdnInfo.interactions}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default CustomerInfo;
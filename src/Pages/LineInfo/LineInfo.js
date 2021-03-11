import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';


const LineInfo = () => {
  
  return (
    <div style={{padding: 50, paddingTop: 1}}>
      <Card>
      <CardHeader
        title={
          <Typography variant="h6" style={{color: '#FFFFFF', fontWeight: 600}}>
             Line Info
          </Typography>
       }
        style={{ background: '#16478E' }}
        
      />
     
     <div >
          <CardContent>
            <Typography variant="body2">
              <Grid container justify="space-around" spacing={4}>
                <Grid item xs style={{color: '#000000', fontWeight: 600, fontSize: 12}}>
                <InputLabel style={{color: '#000000', fontWeight: 550}}>MDN</InputLabel>
                <NativeSelect>
                  <option >707-298-5587</option>
                  <option >Twenty</option>
                  <option >Thirty</option>
                </NativeSelect>
                </Grid>

                <Grid item xs style={{color: '#000000', fontWeight: 600, marginLeft: -300, paddingTop: 35}}>
                  View Offers For:
                </Grid>

                <Grid item xs >
                  
                </Grid>

                
              </Grid>
            </Typography>
          </CardContent>
        </div>
      </Card>
      </div>
  );
}

export default LineInfo;
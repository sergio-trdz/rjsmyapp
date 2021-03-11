import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const NotesHistory = () => {
  
  return (
    <div style={{padding: 50, paddingTop: 1}}>
      <Card style={{borderRadius: 2}}>
      <CardHeader
        title={
          <Typography variant="h6" style={{color: '#FFFFFF', fontWeight: 600}}>
             Notes History
          </Typography>
       }
        style={{ background: '#16478E' }}
        
      />
     
      <CardContent>
        <Typography variant="body2">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      </Card>
      </div>
  );
}

export default NotesHistory;
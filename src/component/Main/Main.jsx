import React from 'react'
import {Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core'
import useStyles from './styles'
import Form from '../Main/Form/Form'
import List from '../Main/List/List'
const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.grid} container spacing={0} alignItem="center" justify="center" style={{height:'100vh'}}>
            <CardHeader title="Modified Expense Tracker" subheader="Powered By Speechly"/>
            <CardContent>
                <Typography align="center" variant="h5"> Total Balance $100</Typography>
               <Typography variant="subtitle1" style={{lineHeight:'1.5em',marginTop:'20px' }}>
                 {/* InfoCard*/}
                  Try saying:Add income
               </Typography>
             <Divider/>
             <Form/>
             <CardContent className={classes.CardContent}>
             <Grid container spacing={2}> 
             <Grid item xs={12}>
                 <List/>
             </Grid>
             </Grid>
             </CardContent>
            </CardContent>
        </Card>
    );
}

export default Main

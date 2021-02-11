import React from 'react'
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Header from './Header'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Layout = () => {
    const classes = useStyles();
    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                Twitter Critics
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header></Header>
        </Grid>
        <Grid item xs={6}>
            <div style={{border:"1px solid black"}}></div>
        </Grid>
        <Grid item xs={6}>
            <div style={{border:"1px solid black"}}></div>
        </Grid>
        <Grid item xs={3}>
            <div style={{border:"1px solid black"}}></div>
        </Grid>
        <Grid item xs={3}>
            <div style={{border:"1px solid black"}}></div>
        </Grid>
        <Grid item xs={3}>
            <div style={{border:"1px solid black"}}></div>
        </Grid>
        <Grid item xs={3}>
            <div style={{border:"1px solid black"}}></div>
        </Grid>
      </Grid>
      </>
    )
}

export default Layout

import {React, useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import '../css/Search.css'
import Button from '@material-ui/core/Button';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


const Search = () => {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");

    const onChangeSearchTerm = (e) => {
        const search = e.target.value;
        setSearchTerm(search);
    };

    const searchForMovie = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8080/test", {
            params: {
              searchTerm: searchTerm
            }
          })
    }

    return (
        <div className="search">
        <form className={classes.root} noValidate autoComplete="off" onSubmit={searchForMovie}>
             <TextField id="outlined-search" label="Search field" type="search" variant="outlined" onChange={onChangeSearchTerm}/>
             <Button type="submit" variant="contained" color="primary" disableElevation>Search Movie</Button>
        </form>
        </div>
    )
}

export default Search

import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
   
    Link
  } from "react-router-dom";

const Posts = (props) => {
    let {title,id}=props.post;
    return (
        <div>
            
            <Typography variant="h6" component="h6" color="secondary">
            title:{title}
            </Typography>
            <Link to={`/details/${id}`}>
    <Button variant="contained" color="primary">
    clik details {id}
    </Button></Link>
    
        </div>
    );
};

export default Posts;
import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


const Details = () => {
    let {detailsId}= useParams();
   let[details,setDetails]= useState({});
    useEffect(()=>{
 let liknnk= `https://jsonplaceholder.typicode.com/posts/${detailsId}`;
 fetch(liknnk)
 .then(res=>res.json())
 .then(data=>setDetails(data))
    },[])
    return (
        <div>
          
            <Typography variant="h6" component="h6" color="primary">
           username; {detailsId}
            </Typography>

            <Typography variant="h6" component="h6" color="primary">
           id: {details.id}
            </Typography>
            <Typography variant="h6" component="h6" color="primary">
           title: {details.title}
            </Typography>
            <Typography variant="h6" component="h6" color="primary">
           body: {details.body}
            </Typography>
         

        </div>
    );
};

export default Details;
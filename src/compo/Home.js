import React, { useState, useEffect }   from 'react';

import Post from './Posts';

const Home = () => {
    
    let [article,setArticle] = useState([]);
useEffect(()=>{
  let url=`https://jsonplaceholder.typicode.com/posts`;
   fetch(url)
  .then(res=>res.json())
  .then(data=>setArticle(data))

},[])
    return (
        <div>
             {/* <h2>{article.length}</h2> */}

{
  article.map(post=><Post post ={post} ></Post>)
}

        </div>
    );
};

export default Home;
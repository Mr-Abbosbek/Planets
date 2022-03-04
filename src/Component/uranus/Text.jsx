import React from 'react';
import { Link } from 'react-router-dom';
import Database from "./../database/base";
import { Image } from "react-bootstrap";

function Text() {
  return (
    <div>
      {
        Database.uranus.map((post)=>(
          <div key={post.id}>
            {
              post.features.map((p)=>{
                if(p.id === 1){
                  return(
                    <div key={p.id} className='text-white'>
                      <p>{p.text}</p>
                      <p className='text-white-50 fw-bold'>Source: <Link to={post.wikipediaLink} className='text-white-50 fw-bold'> Wikipedia <Image src={post.wikipediaIcon} /></Link></p>
                    </div>
                  )
                }
                return null;
              })
            }
          </div>
        ))
      }
    </div>
  );
}

export default Text;
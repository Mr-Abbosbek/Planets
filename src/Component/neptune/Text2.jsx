import React from 'react';
import { Image } from 'react-bootstrap';
import Database from "./../database/base";

function Text2() {
  return (
    <div>
      {
        Database.neptune.map((post)=>(
          <div key={post.id}>
            {
              post.features.map((p)=>{
                if(p.id === 3){
                  return(
                    <div key={p.id} className='text-white'>
                      <p>{p.text}</p>
                      <p className='text-white-50 fw-bold'>Source: <a href={post.wikipediaLink} className='text-white-50 fw-bold'> Wikipedia <Image src={post.wikipediaIcon} /></a></p>
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

export default Text2;
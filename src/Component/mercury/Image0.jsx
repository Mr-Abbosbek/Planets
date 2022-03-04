import React from 'react';
import { Image } from 'react-bootstrap';
import Database from "./../database/base";

function ImageList0() {
  return (
    <div>
      {
        Database.mercury.map((post)=>(
          <div key={post.id}>
            {
              post.features.map((p)=>{
                if(p.id === 1){
                  return(
                    <div key={p.id} className="d-flex justify-content-center align-items-center">
                      <Image src={p.img} alt="mercury overview" className='image-planets' />
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

export default ImageList0;
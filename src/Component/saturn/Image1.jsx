import React from 'react';
import { Image } from 'react-bootstrap';
import Database from "./../database/base";

function ImageList1() {
  return (
    <div>
      {
        Database.saturn.map((post)=>(
          <div key={post.id}>
            {
              post.features.map((p)=>{
                if(p.id === 2){
                  return(
                    <div key={p.id} className="d-flex justify-content-center align-items-center">
                      <Image src={p.img} alt="saturn internal structure" className='image-planets' />
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

export default ImageList1;
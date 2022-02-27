import React from 'react';
import Database from "./../database/base";

function Text1() {
  return (
    <div>
      {
        Database.mercury.map((post)=>(
          <div key={post.id}>
            {
              post.features.map((p)=>{
                if(p.id === 2){
                  return(
                    <div key={p.id}>
                      <p>{p.text}</p>
                      <p>{post.wikipediaLink}</p>
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

export default Text1;
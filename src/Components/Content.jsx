import React from 'react'
import { useContext } from 'react'
import { Dats } from './Context'

function Content() {
  const {Datas} =useContext(Dats)
  console.log(Datas);
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"20px",height:"90vh",margin:"60px"}}>
      {Datas.length < 0 ? <h1>No Image Found</h1> :
        Datas.map((ele,ind)=>
          {return (
            
              <div key={ind} className="img" style={{display:"flex",flexWrap:"wrap"}}>
              <img src={ele.urls.raw} alt=""  width={ele.width} style={{width:`300px`}}/>
              </div>
           
          )}
        )
      }
    </div>
  )
}

export default Content
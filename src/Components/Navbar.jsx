import React from 'react'
import { useState } from 'react'
import Content from './Content'
import { Dats } from './Context'
import { useEffect } from 'react'
import { useContext } from 'react'

function Navbar() {
  const [inp, setinp] = useState("")
  const [Data, setData] = useState("")
  const { setDatas } = useContext(Dats)
   
   useEffect(() => {
     fetch("https://api.unsplash.com/photos/?client_id=uccKLh7WW_sbMG6E_0KUOuEg4WdIBPOqMijpjt02zkg").then(res => res.json()).then(data => {console.log(data);setDatas(data)})
   }, [])
   
     function search(){
      console.log("his");
      fetch(`https://api.unsplash.com/search/photos?page=1&query=${inp}&client_id=uccKLh7WW_sbMG6E_0KUOuEg4WdIBPOqMijpjt02zkg`).then(res => res.json()).then(data => {console.log(data,"search----------------"); setDatas(data.results)})    
     }
     

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0px 30px",height:"10vh",backgroundColor:"#EBEDFF"}}>
        <h2>GeeksGallery</h2>
        <div className="but" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"}}>
        <input type="search" style={{height:"25px",fontSize:"1.2rem",paddingLeft:"2px"}} onChange={(e)=>{setinp(e.target.value)}} />
        <button style={{height:"25px",backgroundColor:"transparent",color:"darkorange",fontWeight:"bolder",borderRadius:"5px",width:"80px"}} onClick={search} >Search</button>
        </div>
       
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import './Demo.css'


function Demo() {

    const [ischecked,setischecked]=useState(false)
    const [pan,setpan]=useState(false)
    const [vote,setvote]=useState(false)
    let listcheck=[{name:"aadhar",
                    checked:ischecked},
                    {name:"pan",
                        checked:pan},
                        {name:"vote",
                            checked:vote}
                ]

    function handlechange(e)
    {
        if(e.target.name=="aadhar")
        {
            setischecked(!ischecked)
       
        }

        if(e.target.name=="pan")
            setpan(!pan)

        if(e.target.name=="vote")
            setvote(!vote) 
    }
    
    

  return (
            <div className='checkboxlist'>         
                <input type="checkbox" name="aadhar" value={ischecked} onChange={(e)=>{handlechange(e)}}/>    
                <label htmlFor="idcard">Aadhar</label>   

                  <input type="checkbox" name="pan" value={pan} onChange={(e)=>{handlechange(e)}}/>    
                <label htmlFor="idcard">pan</label>                        

                 <input type="checkbox" name="vote" value={vote} onChange={(e)=>{handlechange(e)}}/>    
                <label htmlFor="idcard">vote</label>                        

            </div>
  )
}

export default Demo
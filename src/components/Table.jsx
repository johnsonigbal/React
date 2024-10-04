import React, { useEffect, useState } from 'react'
import './Table.css'

function Table(props) {

   const table_head=["Name","Email","DOB","Gender","ID_card","Country","Delete","Edit"]
  
   let [cell_data,setcell_data]=useState([]);

  useEffect(()=>{
  setcell_data(JSON.parse(localStorage.getItem("form")))},[props.listofdata])

function deletefun(e)
{
    
  let remove=JSON.parse(localStorage.getItem("form"))

  remove.splice(e,1)

  localStorage.setItem("form",JSON.stringify(remove))

  setcell_data(remove)
  
 


}

function editfun(e)
{
    console.log(cell_data[e]);
    
}

  return (
    <div className='table_data'>

        <table>
          <thead>
              {table_head.map((h,index)=>{

              return <th key={index}>{h}</th>

              })}

          </thead>
           
           <tbody>

           {
                cell_data.map((cell_data,index)=>{

                    return <tr key={index}>
                    <td > {cell_data.name}</td>
                    <td> {cell_data.email}</td>
                    <td> {cell_data.dob}</td>
                    <td> {cell_data.gender}</td>
                    <td> {cell_data.id_card}</td>
                    <td> {cell_data.country}</td>
                    <td><button type="button" onClick={()=>{deletefun(index)}} >Delete</button></td>
                    <td><button type="button" onClick={()=>{editfun(index)}} >Edit</button></td>
                
                </tr>

                })
            }
            

           </tbody>

                
                    

        </table>

    </div>
  )
}

export default Table
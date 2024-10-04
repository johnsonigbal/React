import React, { useEffect, useState } from 'react'
import './Design.css'

function DesignForm() {

        const [nameinput,setnameinput]=useState({name:"",gmail:"",dob:"",phoneno:"",gender:"",country:"Selected"})
        const [idcard,setidcard]=useState({aadhar:false,pan:false,vote:false,license:false})   
        let [table_data,settable_data]=useState();
        let [indexval,setindex]=useState()
        let [store,setstore]=useState([]);
  
        useEffect(()=>{
                load_data()
        },[store])
        function getvalue(event)
        {         
            if(event.target.name=="aadhar"||event.target.name=="pan"||event.target.name=="vote"||event.target.name=="license")
            {
            let obj2={...idcard,[event.target.name]:event.target.checked}
            setidcard(obj2)
            }else{
                let obj1={...nameinput,[event.target.name]:event.target.value}
                setnameinput(obj1)         
            }
        }
        
        function noblank()
        {        let radio_blank=false
                let blank=""
               for (const key in nameinput) {
               { 
                if(nameinput[key]!=""){
                        blank=true;
                }
                else{
                        blank=false
                        return }}}
                
                        for (const key in idcard)
                        {      
                                if(idcard[key])
                                {
                                        radio_blank =true     
                                }     
                        }
               
               return blank==radio_blank?true:false;
                
        }

        function onsubmit(){
             
                let obj={...nameinput,["radio"]:idcard}
                
                console.log("submit present data",obj);
                
                // let val=JSON.parse(localStorage.getItem("newform"))

                // store? setstore([...store, obj]) : setstore([obj]);

                // val?val.push(obj):val=[obj]        

                if(noblank()){
                       
                        // localStorage.setItem("newform",JSON.stringify(val))
                        setnameinput({name:"",gmail:"",dob:"",phoneno:"",gender:"",country:"Selected"})
                        setidcard({})
                        setstore([...store, obj])
                }
                else{ alert("fill all field");}
                load_data()

                console.log("local store",store);
                
     
            }

        function load_data()
        {
                // settable_data(JSON.parse(localStorage.getItem("newform")))
                settable_data([...store])
                console.log("load data",[...store])
                // settable_data(JSON.parse(localStorage.getItem("newform")))

        }   
        
        function forloop(e)
        {       let a=""
         for (const k in e) {       
                if(e[k]==true)
                     a+=" "+k
                }
        return <div>{a}</div>                 
        }  
        
        function deletefun(index)
        {

                // let val=JSON.parse(localStorage.getItem("newform"))
                store.splice(index,1)
                // localStorage.setItem("newform",JSON.stringify(val))
                load_data()
        }

        function editfun(index){

                // let val=JSON.parse(localStorage.getItem("newform"))
                let val=store.splice(index,1)
                setnameinput(val[0])
                setidcard(val[0].radio)
                document.querySelector(".update").style.display="flex";
                document.querySelector(".submitbtn").style.display="none";
                setindex(index)
        
        }

        function updatefun()
        {               
                let val=store;
                console.log(val);
                
                let obj={...nameinput,["radio"]:idcard}
                val.splice(indexval,1,obj)
                setstore([...store],val)
                load_data()
                setnameinput({name:"",gmail:"",dob:"",phoneno:"",gender:"",country:"Selected"})
                setidcard({})
                document.querySelector(".update").style.display="none";
                document.querySelector(".submitbtn").style.display="flex";
             
        }
            

 return (
    <>
        <div className='form_container'>
           
        <form action="">
      
           <div className='form_field'>
          
                <div className='row'>
                    <div className='dataname'>
                            <label htmlFor="name">NAME</label>
                    </div>  
                    <div className='datafield'>
                            <input type="text"  name='name' value={nameinput.name} onChange={(e)=>{getvalue(e)}} />
                    </div>
                </div>
                
                <div className='row'>
                    <div className='dataname'>
                            <label htmlFor="gmail">G_Mail</label>
                    </div>  
                    <div className='datafield'>
                            <input type="gmail" name='gmail' value={nameinput.gmail} onChange={(e)=>{getvalue(e)}} />
                    </div>

                 </div>

                 <div className='row'>
                    <div className='dataname'>
                            <label htmlFor="phoneno">Phone Number</label>
                    </div>  
                    <div className='datafield'>
                            <input type="tel" name="phoneno" value={nameinput.phoneno} id="" onChange={(e)=>{getvalue(e)}} />
                    </div>

                 </div>
                    
                 <div className='row'>
                    <div className='dataname'>
                            <label htmlFor="dob">Date Of Birth</label>
                    </div>  
                    <div className='datafield'>
                         <input type="date" name="dob" id=""  value={nameinput.dob} onChange={(e)=>{getvalue(e)}} style={{}}/>
                    </div>
                 </div>

                 <div className='row_radio'>
                    <div className='dataname'>
                            <label htmlFor="gender">Gender</label>
                    </div>  
                    <div className='radiobtn'>
                         <input type="radio" name="gender" id="male" checked={nameinput.gender=="male"} value={"male"} onChange={(e)=>{getvalue(e)}} style={{}}/>
                         <label htmlFor="male">Male</label>
                         <input type="radio" name="gender" id="female" checked={nameinput.gender=="female"}   value={"female"} onChange={(e)=>{getvalue(e)}} style={{}}/>
                         <label htmlFor="male">FeMale</label>
                    </div>
                 </div>

                 <div className='row_checkbox'>
                    <div className=''>
                            <label htmlFor="dob">ID_Card</label>
                    </div>  
                    <div className='checkboxbtn'>
                        <div>
                        <input type="checkbox" name="aadhar" checked={idcard.aadhar} onChange={(e)=>{getvalue(e)}}  id=""  style={{}}/>
                        <label htmlFor="aadhar">Aadhar</label>
                        </div> 
                        <div>
                        <input type="checkbox" name="pan" id="" checked={idcard.pan} onChange={(e)=>{getvalue(e)}} style={{}}/>
                         <label htmlFor="pan">PAN</label>
                        </div>
                        <div>
                        <input type="checkbox" name="vote" id=""  checked={idcard.vote}onChange={(e)=>{getvalue(e)}} style={{}}/>
                         <label htmlFor="vote">Vote_ID</label>
                        </div>
                        <div>
                        <input type="checkbox" name="license" id="" checked={idcard.license} onChange={(e)=>{getvalue(e)}}  style={{}}/>
                         <label htmlFor="license">Driving License</label>
                        </div>
                    </div>
                 </div>

                 

                 <div className='row_select'>
                    <div className=''>
                            <label htmlFor="country">Country</label>
                    </div>  
                    <div className='selectbtn'  >
                       <select name="country" id="" onChange={(e)=>{getvalue(e)
                       }}>
                        <option name="Selected"  selected={nameinput.country=="Selected"} value="Selected">Selected</option>
                        <option name="india"  selected={nameinput.country=="india"} value="india">India</option>
                        <option name="usa"   selected={nameinput.country=="usa"} value="usa" >USA</option>
                        <option name="dubai"  selected={nameinput.country=="dubai"} value="dubai">Dubai</option>
                       </select>
                    </div>
                </div>

                <div className='row submit'>
                    <input type="button" className='submitbtn' value="Submit" onClick={onsubmit} />
                    <input type="button" className='update' value="Update" onClick={updatefun} />

                </div>
           
           </div>
         </form>

        <div className=''>
                <div className='table'>
                       <table>
                                <thead>
                                        <th> NAME</th><th> GMAIl</th><th> DOB</th><th> PHONE NO</th><th> GENDER</th><th> ID_CARD</th><th> COUNTRY</th><th> DELETE</th> <th>EDIT</th>    
                                </thead>
                                <tbody>
                         { table_data?
                            table_data.map((cell_dat, index) => {

                                return <tr key={index}>
                                    <td > {cell_dat.name}</td>
                                    <td> {cell_dat.gmail}</td>
                                    <td> {cell_dat.dob}</td>
                                    <td> {cell_dat.phoneno}</td>
                                    <td> {cell_dat.gender}</td>
                                    <td>
                                        {forloop(cell_dat.radio)}
                                    </td>
                                    <td> {cell_dat.country}</td>
                                    <td><button type="button" onClick={() => { deletefun(index) }} >Delete</button></td>
                                    <td><button type="button" onClick={() => { editfun(index) }} >Edit</button></td>

                                </tr>

                            }):"no data found"}
                                </tbody>
                       </table>
                       
                </div>
        </div>


        </div>
    </>
  )
}

export default DesignForm
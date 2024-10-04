import React, { useState, useEffect } from 'react'
import './Form.css'


function Form() {
    const table_head = ["Name", "Email", "DOB", "Gender", "ID_card", "Country", "Delete", "Edit"]
    let [cell_data, setcell_data] = useState([])

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [dob, setdob] = useState("")
    const [gender, setgender] = useState("")
    const [id_card, setid_card] = useState("")
    const [country, setcountry] = useState("")
    const [india, setindia] = useState(false)
    const [usa, setusa] = useState(false)
    const [china, setchina] = useState(false)
    const [select, setselect] = useState(false)

    let listofdata = []
    const [aadhar, setaadhar] = useState(false)
    const [pan, setpan] = useState(false)
    const [vote, setvote] = useState(false)
    const [license, setlicense] = useState(false)
    let [allcheckbox, setallcheckbox] = useState([])
    useEffect(() => {
        loadTable()
    }, [])

    const loadTable = ()=>{
        setcell_data(JSON.parse(localStorage.getItem("form")))
    }
  
    const onsubmit = (e) => {
        e.preventDefault()
        let val = {
            name: name,
            email: email,
            dob: dob,
            gender: gender,
            id_card: [{
                name:"aadhar",
                checked:aadhar
            },
            {
                name:"pan",
                checked:pan
            },
            {
                name:"vote",
                checked:vote
            },
            {
                name:"license",
                checked:license
            }
            ],
            country: country
        }

        listofdata = JSON.parse(localStorage.getItem("form"))

        listofdata.push(val)

        localStorage.setItem("form", JSON.stringify(listofdata))
        loadTable()
        cleardatainput()
    }


    function cleardatainput()
    {
        setname("")
        setemail("")
        setdob("")
        setgender(false)
        setaadhar(false)
        setpan(false)
        setvote(false)
        setlicense(false)
        


    }


    function deletefun(index) {
        let remove = JSON.parse(localStorage.getItem("form"))
        remove.splice(index, 1)
        localStorage.setItem("form", JSON.stringify(remove))
        setcell_data(remove)
        loadTable()
    }

    function editfun(index) {
        let edit = JSON.parse(localStorage.getItem("form"))
        let edit_data = edit.splice(index, 1)

        setname(edit_data[0].name)
        setemail(edit_data[0].email)
        setdob(edit_data[0].dob)
        setgender(edit_data[0].gender)
        setcheckboxvalue(edit_data[0].id_card)
        console.log(edit_data[0].country);
        
        selectfun(edit_data[0].country)
    }


    function selectfun(val) {
        
        setcountry(val)

        if (val=="select") {
            setselect(true)
        }
        if (val=="india") {
            setindia(true)
            setusa(false)
            setchina(false)


        }
        if (val == "usa") {
            setusa(true)
            setindia(false)
            setchina(false)

        }
        if (val == "china") {
            setchina(true)
            setindia(false)
            setusa(false)

        }

    }

    function setcheckboxvalue(val) {

        val.map((val) => {


            if (val.name == "aadhar") {
                setaadhar(val.checked)
            }
            if (val.name == "pan") {
                setpan(val.checked)
                
            }
            if (val.name == "vote") {
                setvote(val.checked)
            }
            if (val.name == "license") {
                setlicense(val.checked)
            }



        })


    }

    function handlecheck(e) {

        if (e.target.name=="aadhar") {
            setaadhar(e.target.checked)
        }
        if (e.target.name=="pan") {
    
            setpan(e.target.checked)      
            
        }
        if (e.target.name=="vote") {
            setvote(e.target.checked)
        }
        if (e.target.name=="license") {
            setlicense(e.target.checked)
        }

    }




    return (
        <div className='container'>
            <form >
                <div className='Form_container'>
                    <div className='form_row' >
                        <label htmlFor="name">Name </label>
                        <input type="text" name="name" id="" value={name} onChange={(e) => { setname(e.target.value) }} />
                    </div>
                    <div className='form_row'>
                        <label htmlFor='email'>Email </label>
                        <input type="email" name="email" id="" value={email} onChange={(e) => { setemail(e.target.value) }} />
                    </div>
                    <div className='form_row'>
                        <label htmlFor='dob'>Date Of Birth </label>
                        <input type="date" name="dob" id="" value={dob} onChange={(e) => { setdob(e.target.value) }} />
                    </div>
                    <div className='form_row'>
                        <label htmlFor="gender">Gender </label>
                        <div>
                            <input type="radio" name="gender" value="male" checked={gender == "male"} onChange={(e) => { setgender(e.target.value) }} />male
                            <input type="radio" name="gender" value="female" checked={gender == "female"} onChange={(e) => { setgender(e.target.value) }} />female
                        </div>

                    </div>
                    <div className='form_row'>
                        <label htmlFor="card"> ID Card</label>
                        <div>
                            <input type="checkbox" name="aadhar" id=""  checked={aadhar} onChange={(e) => { handlecheck(e) }} /> <label>Aadhar</label>
                            <input type="checkbox" name="pan" id="" checked={pan} onChange={(e) => { handlecheck(e) }} /><label>Pan</label>
                            <input type="checkbox" name="vote"  id="" checked={vote} onChange={(e) => { handlecheck(e) }} /><label>Vote_ID</label>
                            <input type="checkbox" name="license" id="" checked={license} onChange={(e) => { handlecheck(e) }} /><label>Driving_License</label>
                        </div>
                    </div>


                    <div className='form_row'>
                        <label htmlFor="country"> Country </label>
                        <div>
                            <select name="country" id="" onChange={(e) => { setcountry(e.target.value) }}>

                                <option value="select" selected={select}>Select</option>
                                <option value="india" selected={india}>India</option>
                                <option value="usa" selected={usa}>USA</option>
                                <option value="china" selected={china}>China</option>
                            </select>

                        </div>

                    </div>
                    <div>
                        <input type="submit" value="submit" onClick={(e) => { onsubmit(e) }} />
                    </div>


                </div>

            </form>

            <div className='table_container'>

                <table>
                    <thead>
                        {table_head.map((h, index) => {

                            return <th key={index}>{h}</th>

                        })}

                    </thead>

                    <tbody>

                        {
                            cell_data.map((cell_dat, index) => {

                                return <tr key={index}>
                                    <td > {cell_dat.name}</td>
                                    <td> {cell_dat.email}</td>
                                    <td> {cell_dat.dob}</td>
                                    <td> {cell_dat.gender}</td>
                                    <td>
                                        {cell_dat.id_card.map((data, index) => {
                                            if (data.checked)
                                                return data.name
                                        })}
                                    </td>
                                    <td> {cell_dat.country}</td>
                                    <td><button type="button" onClick={() => { deletefun(index) }} >Delete</button></td>
                                    <td><button type="button" onClick={() => { editfun(index) }} >Edit</button></td>

                                </tr>

                            })
                        }


                    </tbody>




                </table>


            </div>


        </div>
    )
}

export default Form
import React, { useState } from "react";
export default function Task5() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [add, SetAdd] = useState([])


    const Changeid = (e) => {
        setId(e.target.value)

    }
    const changename = (e) => {
        setName(e.target.value)

    }
    const changejob = (e) => {
        setJob(e.target.value)
    }
    const addemp = (e) => {
        e.preventDefault()
        SetAdd([...add, { id: `${id}`, name: `${name}`, job: `${job}` }])
        //addvanced list storing format
        //sedAdd([...list,{id,name,job}])


    }

    return (

        <div>
            <form onSubmit={addemp} >
                <h1>Add Employee</h1>
                <label>Employee ID: </label>
                <input type="text" value={id} onChange={Changeid}></input><br></br>
                <label>Name </label>
                <input type="text" value={name} onChange={changename}></input><br></br>
                <label>Job :</label>
                <select value={job} onChange={changejob}>
                    <option>select job</option>
                    <option>Developer</option>
                    <option>Tester</option>
                </select><br></br>

                <button type="submit">Add:Employee</button>
                <h1>Employee List</h1>
                <table>
                    <tr >
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                    <tbody>
                        {add.map(e => {
                            return (
                                <tr >
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.job}</td>
                                </tr>

                            )
                        })}</tbody>




                </table>

            </form>

        </div>
    )

}
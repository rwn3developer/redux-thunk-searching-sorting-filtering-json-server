import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, updateUser } from '../redux/action/userAction'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Edit = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [course,setCourse] = useState([]);
    const [date,setDate] = useState([]);
    const [status,setStatus] = useState("")

    useEffect(()=>{

        if(!location?.state?.id){
            navigate('/')
        }

        setName(location?.state?.name)
        setEmail(location?.state?.email)
        setPassword(location?.state?.password)
        setGender(location?.state?.gender)
        setCourse(location?.state?.course)
        setDate(location?.state?.date)
        setStatus(location?.state?.status)
    },[location.state])


    const handleCourseChanged = (c,checked) => {
        let all = [...course];
        if(checked){
            all.push(c)
        }else{
            all = all.filter(val => val != c)
        }
        setCourse(all)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id :location?.state?.id,name,email,password,gender,course,date,status
        }
        dispatch(updateUser(obj))
        alert("user edit");
        navigate('/');
        setName("")
        setEmail("")
        setPassword("")
        setCourse([])
        setGender("")
        setDate("")
        setStatus("")
    }
    

    return (
        <div>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-header d-flex">
                        <h5>Edit User</h5>
                        <Link to={`/`} className='btn btn-success btn-sm'>View User</Link>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter your password" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Gender</label>
                                        <div className="form-check">
                                            <input className="form-check-input" onChange={(e) => setGender(e.target.value)} value="male" checked={gender === "male"} type="radio" name="gender" />
                                            <label className="form-check-label" htmlFor="male">
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" onChange={(e) => setGender(e.target.value)} value="female" checked={gender === "female"} type="radio" name="gender" />
                                            <label className="form-check-label" htmlFor="female">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className="mb-3">
                                        <label className="form-label">Courses</label>

                                        {
                                            ["html", "css", "bootstrap", "js", "jQuery", "php", "laravel", "reactjs", "node js", "python"].map((c,index) => {
                                                return (
                                                    <div key={index}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={ (e) => handleCourseChanged(c,e.target.checked) } checked={course.includes(c)} type="checkbox" />
                                                            <label className="form-check-label" htmlFor="html">
                                                                {c}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }



                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label">Date</label>
                                        <input type="date" onChange={ (e) => setDate(e.target.value) } value={date} className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <select onChange={ (e) => setStatus(e.target.value) } value={status} className="form-select">
                                            <option value="">---select status---</option>
                                            <option value="active">Active</option>
                                            <option value="deactive">Deactive</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Edit

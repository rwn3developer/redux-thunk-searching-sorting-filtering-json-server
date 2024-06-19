import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, FilterRecord, viewUser } from '../redux/action/userAction';
import { Link, useNavigate } from 'react-router-dom';

const View = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [status, setStatus] = useState("")
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    const users = useSelector(state => state.users.users);




    useEffect(() => {
        dispatch(viewUser())
    }, [dispatch])


    useEffect(() => {
        if (status || search || sort) {
            dispatch(FilterRecord(status, search, sort))
        }

    }, [status, search, sort])

    return (
        <>
            <div className="container">

                <div className="row mt-5 mb-5">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                        <select className='form-control' onChange={(e) => setStatus(e.target.value)} value={status}>
                            <option value="">---select status---</option>
                            <option value="active">active</option>
                            <option value="deactive">deactive</option>
                        </select>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className='form-control' placeholder='Name Search' />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                        <select className='form-control' onChange={(e) => setSort(e.target.value)} value={sort}>
                            <option value="">---select status---</option>
                            <option value="asc">A-Z</option>
                            <option value="dsc">Z-A</option>
                        </select>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <button className='btn btn-danger'>Reset</button>
                    </div>



                </div>

                <div className='row'>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-header d-flex">
                                <h5>View User</h5>
                                <Link to={`/add`} className='btn btn-success btn-sm'>Add</Link>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <button className='btn btn-danger btn-sm'>Delete</button>
                                                </th>
                                                <th>
                                                    <button className='btn btn-info btn-sm'>Edit</button>
                                                </th>
                                                <th scope="col">Srno</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Gender</th>
                                                <th scope="col">Course</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map((val, index) => {
                                                    return (
                                                        <tr key={val.id}>
                                                            <td>
                                                                <input type="checkbox" />
                                                            </td>
                                                            <td>
                                                                <input type="checkbox" />
                                                            </td>
                                                            <th scope="row">{++index}</th>
                                                            <td>{val.name}</td>
                                                            <td>{val.email}</td>
                                                            <td>{val.gender}</td>
                                                            <td width="150">{val.course?.join(" , ")}</td>
                                                            <td>{val.date}</td>
                                                            <td>
                                                                {
                                                                    val.status === "active" ? (
                                                                        <button className='btn btn-success btn-sm'>{val.status}</button>
                                                                    ) : (
                                                                        <button className='btn btn-warning btn-sm'>{val.status}</button>
                                                                    )
                                                                }
                                                            </td>
                                                            <td>
                                                                <button className='btn btn-danger btn-sm' onClick={() => dispatch(deleteUser(val.id))}>Delete</button>
                                                                <button onClick={() => navigate('/edit', { state: val })} className='btn btn-primary btn-sm mx-2'>Edit</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default View

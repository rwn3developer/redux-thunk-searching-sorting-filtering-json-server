import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewUser } from '../redux/action/userAction';
import { Link } from 'react-router-dom';

const View = () => {


    const dispatch = useDispatch();

    const users = useSelector(state => state.users.users);
   

    useEffect(() => {
        dispatch(viewUser())
    }, [dispatch])

    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className="col-lg-12">


                        <div className="card">
                            <div className="card-header d-flex">
                               <h5>View User</h5>
                               <Link to={`/add`} className='btn btn-success btn-sm'>Add</Link>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Srno</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                           users.map((val,index) => {
                                                return (
                                                    <tr key={val.id}>
                                                        <th scope="row">{++index}</th>
                                                        <td>{val.name}</td>
                                                        <td>{val.email}</td>
                                                        <td>{val.gender}</td>
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
        </>
    )
}

export default View

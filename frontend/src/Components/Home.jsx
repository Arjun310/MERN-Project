import React, { useEffect, useState } from 'react';
import '../Style/Home.css';
import Axios from 'axios';
import { Link } from  'react-router-dom'
function Home() {
    const [studentList,setStudentList] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:5021/')
        .then((res)=>{
            setStudentList(res.data);
        }).catch(err=>console.log(err))
    },[])

    function handleDelete(id){
        Axios.delete(`http://localhost:5021/delete/${id}`)
        .then(()=>{
            window.location.reload();
        })
    }

  return (
    <div className='d-flex vh-100 justify-content-center bg-light align-items-center mainDiv'>
         <div className='w-50  bg-white rounded p-3'>
            <h2>STUDENT DETAILS</h2>
            <div className='d-flex justify-content-end'>
                <Link to='/create' className='btn btn-success createBtn'>CREATE +</Link>
            </div>
            <hr/>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((student_list,index)=>{
                        return<tr key={index}> 
                            <td>{student_list.ID}</td>
                            <td>{student_list.NAME}</td>
                            <td>{student_list.EMAIL}</td>
                            <td>
                                <Link to={`/Read/${student_list.ID}`} className='btn btn-sm btn-primary '>READ</Link>
                                <Link to={`/Edit/${student_list.ID}`} className='btn btn-sm btn-info mx-2'>EDIT</Link>
                                <button className='btn btn-sm btn-danger' onClick={()=>handleDelete(student_list.ID)}>DELETE</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
         </div>
    </div>
  )
}

export default Home
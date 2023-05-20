import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
function Read() {
  const {id} = useParams();
  const [student,setStudent] = useState([]);
  useEffect(()=>{
    Axios.get('http://localhost:5021/read/'+id)
    .then(res =>{
      console.log(res);
      setStudent(res.data[0])
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div className='d-flex vh-100 bg-light justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <div>
                <h2>Student Details</h2>
                <h3>{student.ID}</h3>
                <h3>{student.NAME}</h3>
                <h3>{student.EMAIL}</h3>
            </div>
            <Link to="/" className='btn btn-primary me-2'>BACK</Link>
            <Link to={`/edit/${student.ID}`} className='btn btn-info'>EDIT</Link>
        </div>
    </div>
  )
}

export default Read
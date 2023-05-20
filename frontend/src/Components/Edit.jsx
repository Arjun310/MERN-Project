import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        Axios.get('http://localhost:5021/read/'+id)
        .then(res=>{
            console.log(res);
            setValues({...values,name:res.data[0].NAME, email:res.data[0].EMAIL})
        }).catch(err=>console.log(err));
    }, [])
    const [values,setValues] = useState({
        name: '',
        email: ''
    });
    const handleUpdate = (event)=>{
        event.preventDefault();
        Axios.put('http://localhost:5021/student/update/'+id,values)
        .then(res=>{
            console.log(res);
            navigate('/')
        })
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleUpdate}>
          <h2>UPDATE STUDENT</h2>
          <div className='mb-2'>
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='Enter name' className='form-control' required value={values.name}
            onChange={(e)=>setValues({...values,name: e.target.value})}/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' required value={values.email}
            onChange={(e)=>setValues({...values,email: e.target.value})}/>
          </div>
          <button className='btn btn-success'>UPDATE</button>
        </form>
      </div>
    </div>
  )
}

export default Edit
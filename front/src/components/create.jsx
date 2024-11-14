import { useState } from 'react';
import Editor from 'react-simple-wysiwyg';
import { useForm } from "react-hook-form";

const create = () => {
    const [html, setHtml] = useState('');
  function onChange(e) {

    setHtml(e.target.value);
  }
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);
  
const formSubmit= async(data)=>{
    const newData = {
        ...data,
        "description": html,
        };
        const res=await fetch("http://127.0.0.1:8000/api/blogs",{
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newData)
        });
    //console.log(newData);
}
  return (
    <div className="container mb-5">
        <div className="d-flex justify-content-between pt-5 mb-4">
            <h4>Create a new blog</h4>
            <a href='/' className="btn btn-dark">Back</a>
        </div>
    
    <div className="card border-0 shadow-lg">
    <form onSubmit={handleSubmit(formSubmit)}> 
    <div className="card-body">
        
        <div className="mb-3">
            
            <label htmlFor="" className="form-label">Title</label>
            <input {...register('title',{required: true})} 
                type="text" className={`form-control ${errors.title && 'is-invalid'}  `} 
                placeholder="Title"
                />
                {errors.title && <p className='invalid-feedback'>title field is required</p>}
        </div>
        
        <div className="mb-3">
            
        <label className="form-label">Short Description</label>
              <textarea 
                {...register('shortDesc')} 
                name="shortDesc"
                className={`form-control ${errors.shortDesc && 'is-invalid'}`} 
                cols="30" 
                rows="5" 
                placeholder="Short Description"
              />
              {errors.shortDesc && <p className="invalid-feedback">Short description is required</p>}
        </div>
        <div className="mb-3">
            
            <label htmlFor="" className="form-label">Description</label>
            <Editor 
                value={html} 
                containerProps={{ style: { height: '400px' } }}
                onChange={onChange} 
            />

            {
            /* 
            <textarea className="form-control" id="" name="" cols="30" rows="10"/> 
            */
            }
        </div>
        <div className="mb-3">            
            <label htmlFor="" >Image</label><br/>
            <input type="file"/>
        </div>
        <div className="mb-3">
            
            <label htmlFor="" className="form-label">Author</label>
            <input {...register('author',{required: true})} 
            type="text" className={`form-control ${errors.author && 'is-invalid'}  `} 
            placeholder="Author"/>
            {errors.author && <p className='invalid-feedback'>author field is required</p>}
        </div>
        <button className="btn btn-dark">Create</button>
        </div>
        </form>
    </div>
       
    </div>
    
  )
}

export default create

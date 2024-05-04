import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ onSubmit }) => {

   const navigate = useNavigate();

   // add useState to manage FormData
   const [formData, setFormData] = useState({
    name: "",
    age: "",
    title: "",
    homeTown: ""
   })

   const [errors, setErrors] = useState({});

   // handle onChange event and get the updated value
   function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
    }))
   }

   // handle submit event and pass formData to Confirmation component and add formdata to previous entries
   // clear formData on submit 
   function handleSubmit(event) {
     event.preventDefault();

    // Check for empty required fields
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
     onSubmit(formData);
     navigate('/confirmation', { state: formData });
     setFormData({
       name: "",
       age: "",
       title: "",
       homeTown: ""
      })}
    }

return(
  <>
  <div className="form-container">
  <h1>Data Entry Form</h1>
  <form className="form" onSubmit={handleSubmit}>

    {errors.name && <div>{errors.name}</div>}
    <input data-testid="name-input" className="form--input" type="text" placeholder="Name" name='name' value={formData.name} onChange={handleChange} required />
    <input  data-testid="age-input" className="form--input" type="number" placeholder="Age" name='age'value={formData.age} onChange={handleChange} />
    {errors.title && <div>{errors.title}</div>}
    <input data-testid="title-input"  className="form--input" type="text" placeholder="Title" name='title' value={formData.title} onChange={handleChange} required />
    <input  data-testid="hometown-input" className="form--input" type="text" placeholder="Hometown" name='homeTown' value={formData.homeTown} onChange={handleChange} />
    <button data-testid="submit-input" className="form--submit" type="submit">Submit</button>
    </form>
    </div>
  </>
)
}

export default SignUpForm; 

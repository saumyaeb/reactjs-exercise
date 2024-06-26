import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const SignUpForm = ({ onSubmit }) => {

   const history = useHistory();

   // add useState to manage FormData
   const [formData, setFormData] = useState({
    name: "",
    age: "",
    title: "",
    homeTown: ""
   })

    // handle onChange event and get the updated value
   function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
    }))
   }

   // handle submit event and pass formData to Confirmation component
   // clear formData on submit 
   // navigate to Confirmation component using UseHistory Hook
   function handleSubmit(event) {
     event.preventDefault();

     onSubmit(formData);
     
     setFormData({
       name: "",
       age: "",
       title: "",
       homeTown: ""
      })
 
     history.push("/confirmation");
    }

return(
  <>
  <div className="form-container">
  <form className="form" onSubmit={handleSubmit}>
    <input  className="form--input" type="text" placeholder="Name" name='name' value={formData.name} onChange={handleChange}  required />
    <input  className="form--input" type="number" placeholder="Age" name='age'value={formData.age} onChange={handleChange}  />
    <input  className="form--input" type="text" placeholder="Title" name='title' value={formData.title} onChange={handleChange}  required />
    <input  className="form--input" type="text" placeholder="Hometown" name='homeTown' value={formData.homeTown} onChange={handleChange}  />
    <button className="form--submit" type="submit">Submit</button>
    </form>
    </div>
  </>
)
}

export default SignUpForm; 

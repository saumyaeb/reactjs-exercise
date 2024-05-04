import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Confirmation = ({ formEntries }) => {

  const { state } = useLocation();

  // Handle direct navigation to the confirmation page
  if (!state) {
    return null;
  }

  // Extract form data from state
  const { name, age, title, homeTown } = state;

  return (
    <>
    <div className="form-container">
    <div>
    <fieldset>
    <legend>Thank you for submitting the form!!!</legend>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Title: {title}</p>
      <p>Hometown: {homeTown}</p>
    </fieldset>
   </div>
   <h1>List of Entries</h1>
   <table>
   <thead>
     <tr>
       <th>Name</th>
       <th>Age</th>
       <th>Title</th>
       <th>Hometown</th>
     </tr>
   </thead>
   <tbody>
     {formEntries.map((entry, index) => (
       <tr key={index}>
         <td>{entry.name}</td>
         <td>{entry.age}</td>
         <td>{entry.title}</td>
         <td>{entry.homeTown}</td>
       </tr>
     ))}
   </tbody>
 </table>
 <Link to="/">Back to Home</Link>
 </div>
</>
);
};

export default Confirmation;

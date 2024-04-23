import { Link } from 'react-router-dom';

const Confirmation = ({ formEntries }) => {
  return (
    <div className="form-container">
    <h2>Confirmation</h2>
    <table >
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Title</th>
          <th>Hometown</th>
        </tr>
      </thead>
      <tbody>
        {formEntries.map((formEntry, index) => (
          <tr key={index}>
            <td>{formEntry.name}</td>
            <td>{formEntry.age}</td>
            <td>{formEntry.title}</td>
            <td>{formEntry.homeTown}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <Link to="/">Back to Home</Link>
    
  </div>
  );
};

export default Confirmation;

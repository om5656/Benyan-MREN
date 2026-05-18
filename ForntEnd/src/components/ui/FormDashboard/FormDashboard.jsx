import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormDashboard ({ title, buttonTitle, onAdd, onDraftChange }) {
const navigate = useNavigate();
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  handle: "",
});

function handleChange(e) {
  const { name, value } = e.target;
  const newFormData = { ...formData, [name]: value };
  setFormData(newFormData);

  if (onDraftChange) {
    const hasData = Object.values(newFormData).some((item) => item.trim() !== "");
    onDraftChange(hasData);
  }
}

function handleSubmit(e) {
  e.preventDefault();
  onAdd(formData);
  if (onDraftChange) {
    onDraftChange(false);
  }
  navigate("..");
}

return (

     <div className="container">
<h3 className="mb-3">{title}</h3>
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="firstName" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="lastName" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="handle" className="form-label">Handle</label>
    <input type="text" className="form-control" id="handle" name="handle" value={formData.handle} onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary">{buttonTitle}</button>
</form>
    </div>
)

}

export default FormDashboard;

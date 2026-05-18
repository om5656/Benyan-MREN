import { useState } from "react";

function Projects() {
  const [developers, setDevelopers] = useState([
    { name: "Ahmed Mohamed", email: "ahmed@gmail.com", role: "Frontend" },
    { name: "Mona Ali", email: "mona@gmail.com", role: "Backend" },
  ]);

  const [developerData, setDeveloperData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [showForm, setShowForm] = useState(false);

  function handleChange(e) {
    setDeveloperData({
      ...developerData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setDevelopers([...developers, developerData]);
    setDeveloperData({
      name: "",
      email: "",
      role: "",
    });
    setShowForm(false);
  }

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Developers</h1>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Add
        </button>
      </div>

      {showForm && (
        <form className="w-50 mb-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={developerData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={developerData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Role</label>
            <input
              type="text"
              name="role"
              value={developerData.role}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <button className="btn btn-success" type="submit">
            Save
          </button>
        </form>
      )}

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {developers.map((developer, index) => (
            <tr key={index}>
              <td>{developer.name}</td>
              <td>{developer.email}</td>
              <td>{developer.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Projects;

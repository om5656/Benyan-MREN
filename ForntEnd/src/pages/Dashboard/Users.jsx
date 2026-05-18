function Users({ userData, setUserData }) {
  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="p-4">
      <h1 className="mb-4">Add User</h1>

      <form className="w-50">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Role</label>
          <input
            type="text"
            name="role"
            value={userData.role}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
}

export default Users;

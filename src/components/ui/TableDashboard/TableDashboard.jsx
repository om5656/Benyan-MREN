import { Link } from "react-router-dom";
function TableDashboard({ title, addButtonTitle, data }) {
  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-3">
        <h3>{title}</h3>
        <Link to="add">
          <button className="btn btn-primary">
          {addButtonTitle}
          </button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.handle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDashboard;

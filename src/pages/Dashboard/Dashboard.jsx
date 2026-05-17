import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/Sidebar";
import Users from "./Users";
import Projects from "./Projects";
import StatusPage from "./StatusPage";
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../../components/ui/FormDashboard/FormDashboard";

function Dashboard() {
  const [hasUserDraft, setHasUserDraft] = useState(false);

  const [users, setUsers] = useState([
    { id: 1, firstName: "Mark", lastName: "Otto", handle: "@mdo" },
    { id: 2, firstName: "Jacob", lastName: "Thornton", handle: "@fat" },
    { id: 3, firstName: "John", lastName: "Doe", handle: "@social" },
  ]);

  const [developers, setDevelopers] = useState([
    { id: 1, firstName: "Ahmed", lastName: "Ali", handle: "@ahmed" },
    { id: 2, firstName: "Sara", lastName: "Mohamed", handle: "@sara" },
    { id: 3, firstName: "Omar", lastName: "Hassan", handle: "@omar" },
  ]);

  const [projects, setProjects] = useState([
    { id: 1, firstName: "Benyan", lastName: "Website", handle: "@benyan" },
    { id: 2, firstName: "Dashboard", lastName: "System", handle: "@dashboard" },
    { id: 3, firstName: "Landing", lastName: "Page", handle: "@landing" },
  ]);

  function addUser(user) {
    setUsers([...users, { ...user, id: users.length + 1 }]);
    setHasUserDraft(false);
  }

  function addDeveloper(developer) {
    setDevelopers([...developers, { ...developer, id: developers.length + 1 }]);
  }

  function addProject(project) {
    setProjects([...projects, { ...project, id: projects.length + 1 }]);
  }

  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebar hasUserDraft={hasUserDraft}/>
        <main className="flex-grow-1">
          <Routes>
            <Route index element={<StatusPage/>}/> 
            <Route path="users" element={<Users/>}>
              <Route index element={<TableDashboard title="Users" addButtonTitle="Add New User" data={users}/>}/>
              <Route path="add" element={<FormDashboard title="Add New User" buttonTitle="Add User" onAdd={addUser} onDraftChange={setHasUserDraft}/>}/>
            </Route>
            <Route path="projects" element={<Projects />}>
              <Route index element={<TableDashboard title="Projects" addButtonTitle="Add New Projects" data={projects}/>}/>
              <Route path="add" element={<FormDashboard title="Add New Projects" buttonTitle="Add Project" onAdd={addProject}/>}/>
            </Route>
            <Route path="developers" element={<Projects />}>
              <Route index element={<TableDashboard title="Developers" addButtonTitle="Add New Developer" data={developers}/>}/>
              <Route path="add" element={<FormDashboard title="Add New Developer" buttonTitle="Add Developer" onAdd={addDeveloper}/>}/>
            </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;

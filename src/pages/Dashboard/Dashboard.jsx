import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./StatusPage";
import Users from "./Users";
import Projects from "./Projects";

function Dashboard() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const hasUserDraft = Object.values(userData).some((value) => value);

  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebar hasUserDraft={hasUserDraft} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<StatusPage />} />
            <Route
              path="/users"
              element={<Users userData={userData} setUserData={setUserData} />}
            />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserById } from "../api/loginAPI";
import Breadcrumb from "../components/Breadcrumb";
import EmployeeProfile from "../components/EmployeeProfile";
import Loading from "../components/Loading";

function UserProfile() {
  const [user, setUser] = useState(null);
  const id = useParams("id");

  useEffect(() => {
    getUserById(id.id, setUser);
  }, []);

  if (user) {
    if (user.mobile) return <EmployeeProfile user={user} />;
    else {
      return (
        <div style={{ height: "100vh" }}>
          <Breadcrumb title="Employee Profile" />
          <div class="d-flex align-items-center flex-column justify-content-center h-100">
            <h1>Sorry, the user have not update their profile</h1>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div>
        <Breadcrumb title="Employee Profile" />
        <Loading />
      </div>
    );
  }
}

export default UserProfile;

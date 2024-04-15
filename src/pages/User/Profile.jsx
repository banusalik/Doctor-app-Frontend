import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserInfo from "../../components/UserInfo";
import UserInfoRight from "../../components/UserInfoRight";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("appointments");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const navigateToReschedule = () => {
    // Implement navigation logic here
    console.log("Navigate to Reschedule component");
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-11 mt-20 p-4 gap-x-4">
        {/* Left Card */}
        <UserInfo className="" />

        {/* Right Container */}
        <UserInfoRight
          activeTab={activeTab}
          onTabChange={handleTabChange}
          navigateToReschedule={navigateToReschedule}
        />
      </div>
    </Layout>
  );
};

export default Profile;

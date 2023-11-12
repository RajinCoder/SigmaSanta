//import { useState } from "react";
//import axios, { AxiosResponse } from "axios";
import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";
import GroupDropdown from "./components/GroupDropdown";

const MainScreen = () => {
  /*
  const [groupMembers, setGroupMembers] = useState<string[]>([]);
  const groupName = "Elves"; // Change this to the desired group name

  const getGroupMembers = () => {
    axios
      .get<GroupMembers>(`http://127.0.0.1:5000/members/${groupName}`)
      .then((response: AxiosResponse<GroupMembers>) => {
        console.log("Response:", response);
        setGroupMembers(response.data.members);
      })
      .catch((error) => {
        console.error(
          "Error getting group members:",
          error.response?.data?.error || "Unknown error"
        );
      });
    return groupMembers;
  };
  */

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Title name="Sigma Santa" />
      </div>
      <div
        style={{ marginTop: "20px" }}
        className="d-flex justify-content-around"
      >
        <Button name="Create Group" />
        <Button name="Join" />
      </div>
      <div style={{ marginTop: "40px" }}>
        <GroupDropdown groupNames={["Sigma"]} />
      </div>
    </div>
  );
};

export default MainScreen;

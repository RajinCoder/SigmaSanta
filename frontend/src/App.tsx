
// frontend/src/App.tsx

import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import "./App.css";
import { useState, useEffect } from "react";
import Title from "./components/Title";


interface GroupMembers {
  group_name: string;
  members: string[];
}



function App() {
  const [groupMembers, setGroupMembers] = useState<string[]>([]);
  const groupName = "Elves"; // Change this to the desired group name

  const getGroupMembers = () => {
    axios.get<GroupMembers>(`http://127.0.0.1:5000/members/${groupName}`)
      .then((response: AxiosResponse<GroupMembers>) => {
        console.log('Response:', response);
        setGroupMembers(response.data.members);
      })
      .catch(error => {
        console.error('Error getting group members:', error.response?.data?.error || 'Unknown error');
      });
  };

  return (
    <div>
      <Title name="Sigma Santa"/>
    </div>
  );
}

export default App;

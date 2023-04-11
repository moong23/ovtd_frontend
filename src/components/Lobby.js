import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Lobby = () => {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [selectedLeaders, setSelectedLeaders] = useState([]);

  // This useEffect simulates fetching user data from the server.
  // Replace this with an actual API call to fetch user data.
  useEffect(() => {
    const fetchedUsers = [
      { id: "user1", role: "Player" },
      { id: "user2", role: "Player" },
      // Add more users as needed
    ];
    setUsers(fetchedUsers);
  }, []);

  const isSuperAccount = user && user.id === "super-account";

  const handleLeaderSelection = (selectedUser) => {
    if (selectedLeaders.length < 2 && !selectedLeaders.includes(selectedUser)) {
      setSelectedLeaders([...selectedLeaders, selectedUser]);
    } else if (selectedLeaders.includes(selectedUser)) {
      setSelectedLeaders(
        selectedLeaders.filter((user) => user !== selectedUser)
      );
    }
  };

  const assignLeaders = () => {
    if (selectedLeaders.length === 2) {
      // Make API call to update user roles on the server
      console.log("Leaders assigned:", selectedLeaders);
    }
  };

  return (
    <div className="lobby">
      <h1>Lobby</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {isSuperAccount && (
              <input
                type="checkbox"
                checked={selectedLeaders.includes(user.id)}
                onChange={() => handleLeaderSelection(user.id)}
              />
            )}
            {user.id} - {user.role}
          </li>
        ))}
      </ul>
      {isSuperAccount && (
        <button onClick={assignLeaders} disabled={selectedLeaders.length !== 2}>
          Assign Leaders
        </button>
      )}
    </div>
  );
};

export default Lobby;

/*
This component assumes that the super-account user has the user ID 'super-account'. You can replace this with the actual ID of your super-account user.

The Lobby.js component simulates fetching user data with a hardcoded array of users. You should replace this with an actual API call to fetch user data from your backend server. The same applies to the assignLeaders function, where you should make an API call to update user roles on the server.

Once you have integrated this component with your backend, it should display a list of logged-in users and allow the super-account user to assign 'Leader' roles to two selected users.
*/

import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

const TeamDraft = () => {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [draftOrder, setDraftOrder] = useState([]);

  // This useEffect simulates fetching user data and draft order from the server.
  // Replace this with actual API calls to fetch user data and draft order.
  useEffect(() => {
    const fetchedUsers = [
      { id: "user1", role: "Leader" },
      { id: "user2", role: "Leader" },
      // Add more users as needed
    ];
    setUsers(fetchedUsers);

    const fetchedDraftOrder = [
      "teamA",
      "teamB",
      "teamA",
      "teamA",
      "teamB",
      "teamB",
    ];
    setDraftOrder(fetchedDraftOrder);
  }, []);

  const isLeader =
    user && (user.role === "Leader" || user.role === "SuperAccount");
  const currentTeam = draftOrder[0];

  const handlePlayerPick = (pickedUser) => {
    if (isLeader && currentTeam === "teamA") {
      setTeamA([...teamA, pickedUser]);
      setDraftOrder(draftOrder.slice(1));
    } else if (isLeader && currentTeam === "teamB") {
      setTeamB([...teamB, pickedUser]);
      setDraftOrder(draftOrder.slice(1));
    }
  };

  const remainingUsers = users.filter(
    (user) =>
      ![...teamA, ...teamB].some((teamMember) => teamMember.id === user.id)
  );

  return (
    <div className="team-draft">
      <h1>Team Draft</h1>
      <div className="user-list">
        <h2>Remaining Users:</h2>
        <ul>
          {remainingUsers.map((user) => (
            <li key={user.id}>
              {user.id} - {user.role}
              {isLeader && (
                <button onClick={() => handlePlayerPick(user)}>
                  Pick Player
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="teams">
        <h2>Team A</h2>
        <ul>
          {teamA.map((user) => (
            <li key={user.id}>
              {user.id} - {user.role}
            </li>
          ))}
        </ul>
        <h2>Team B</h2>
        <ul>
          {teamB.map((user) => (
            <li key={user.id}>
              {user.id} - {user.role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamDraft;
/*
This component simulates fetching user data and draft order with hardcoded arrays. You should replace these with actual API calls to fetch user data and draft order from your backend server.

The TeamDraft.js component displays the remaining users, allowing the leaders to pick players according to the draft order. The component also displays the current team compositions for Team A and Team B.

Please note that this is a basic example that does not include socket communication or the

const TeamDraft = () => {
  // ... previous useState and useEffect

  useDraftSocket(
    user,
    (pickedUser) => {
      // Handle the playerPicked event
      // Update your team state based on the picked player and the draft order
    },
    (startingTeam) => {
      // Handle the startingTeam event
      // Update the draft order based on the starting team
    }
  );

  // ... rest of the TeamDraft component
};


*/

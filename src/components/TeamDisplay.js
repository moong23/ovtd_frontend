import React, { useState, useEffect } from "react";

const TeamDisplay = () => {
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);

  // This useEffect simulates fetching team data from the server.
  // Replace this with an actual API call to fetch team data.
  useEffect(() => {
    const fetchedTeamA = [
      { id: "user1", role: "Leader" },
      // Add more users as needed
    ];
    setTeamA(fetchedTeamA);

    const fetchedTeamB = [
      { id: "user2", role: "Leader" },
      // Add more users as needed
    ];
    setTeamB(fetchedTeamB);
  }, []);

  return (
    <div className="team-display">
      <h1>Team Composition</h1>
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

export default TeamDisplay;

/*
This component simulates fetching team data with hardcoded arrays. You should replace this with an actual API call to fetch team data from your backend server.

The TeamDisplay.js component displays the final team compositions for Team A and Team B. It lists the team members and their roles in each team.

Remember to replace the hardcoded arrays with actual API calls to fetch team data from your backend server, and ensure that the team compositions are set up correctly by the TeamDraft.js component.
*/

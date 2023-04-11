import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Login from "./components/Login";
import Lobby from "./components/Lobby";
import TeamDraft from "./components/TeamDraft";
import TeamDisplay from "./components/TeamDisplay";

const App = () => {
  const { user } = useContext(UserContext);
  const isLoggedIn = !!user;
  const isLeader =
    user && (user.role === "Leader" || user.role === "SuperAccount");

  const renderComponent = () => {
    if (!isLoggedIn) {
      return <Login />;
    } else if (isLeader) {
      return <TeamDraft />;
    } else {
      return <Lobby />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tournament Drafting Website</h1>
      </header>
      <main>{renderComponent()}</main>
      {isLoggedIn && <TeamDisplay />}
    </div>
  );
};

export default App;

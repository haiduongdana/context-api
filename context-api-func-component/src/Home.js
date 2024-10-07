import React from "react";
import { UserContext } from "./Context";

export function Home() {
  const context = React.useContext(UserContext);
  const logout = (e) => {
    context.user.logout();
  };

  return (
    <div>
      <div>
        <label>User is Logged In as {context.user.userName}</label>
        <br></br>
        <input type="button" value="LOGOUT" onClick={logout}></input>
      </div>
    </div>
  );
}
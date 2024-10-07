import React from "react";
import { Home } from "./Home";
import { UserContext } from "./Context";

function UserProvider() {
  let userNameInput = React.createRef();

  const initUser = {
    isLoggedIn: false,
    userName: null
  };

  const [user, setUser] = React.useState(initUser);

  const login = () => {
    setUser({
      isLoggedIn: true,
      userName: userNameInput.current.value,
      logout: logout
    });
  };

  const logout = () => {
    setUser(initUser);
  };

  return (
    <div>
      {!user.isLoggedIn && (
        <div>
          <label>UserName:</label>
          <input type="text" ref={userNameInput}></input>
          <br></br>
          <br></br>
          <input type="button" value="LOGIN" onClick={login}></input>
          <br></br>
        </div>
      )}
      <UserContext.Provider value={{ user: user }}>
        {user.isLoggedIn && <Home />}
      </UserContext.Provider>
    </div>
  );
}

export default UserProvider;
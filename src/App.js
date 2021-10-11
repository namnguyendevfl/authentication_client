import React, { useState } from "react";
import Home from "./home";
import Login from "./login";
import { Switch, Route } from "react-router-dom";
import Signup from "./signup";
import { useHistory } from "react-router-dom";

function App() {
  const [home, setHome] = useState(null);
  // const [login, setLogin] = useState(true);
  const [error, setError] = useState(null);

  const handleLogin = () => {
    setHome(() => true);
  };

  const handleLogout = () => {
    setHome(() => false);
  };

  const history = useHistory();

  const handleSignup = () => {
    history.push("/accounts/signup");
  };

  return (
    <>
    <Switch>
      <Route exact path = "/">
        <div>
          {
            home
            ? <>
              <Home />
                <div>    
                  <button onClick = {handleLogout}>
                      Logout
                  </button>
                </div>
              </>
            : <>
                <Login setHome = {setHome}/>
                <div>    
                  <button onClick = {handleLogin}>
                      Login
                  </button>
                </div>
              </>
          }

          <hr/>
          <div>
            <button onClick = {handleSignup}>
              Signup
            </button>
          </div>
        </div>
      </Route>
      <Route path = "/accounts/signup">
        <Signup setHome = {setHome}/>
      </Route>
    </Switch>

    </>
  );
}

export default App;

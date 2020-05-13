import React from 'react';
import { GithubLoginButton } from "react-social-login-buttons";
function App() {
  return (
    <div className="App">
      <GithubLoginButton onClick={() => alert("Hello")} />
    </div>
  );
}

export default App;

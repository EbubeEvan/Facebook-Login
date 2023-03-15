import { useState } from "react";
import Form from "./Form";
import logo from './Fblogo.svg'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="App">
      <div className="intro">
      <img src={logo} alt="facebook logo" />
      <p className="description">Facebook helps you connect and share with the people in your life.</p>
      </div>
      <div>
      <Form 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <p className="extra"><span>Create a Page</span> for a celebrity, brand or business</p>
      </div>
    </div>
  );
}

export default App;

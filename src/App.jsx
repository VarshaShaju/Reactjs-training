import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import InputField from './components/InputField';
import { useEffect, useState } from 'react';
import TextField from './components/TextField';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import Counter from './pages/Counter';

function App() {
  const [userName, setUserName] = useState('Varsha');
  const [displayName, setDisplayName] = useState('');

  useEffect(()=>{
      setUserName('');
      },[displayName]);

  useEffect(()=>{
    setUserName('Varsha')
  },[]);

  const onUserNameChange = (userName) => {
    setUserName(userName);
  };

  const onButtonClick = () => {
    setDisplayName(userName)
  };

  return (
    <div className="App">
      <Button label="Click Me" handleClick={onButtonClick}/>

      <InputField label="User name" onChange={onUserNameChange} value={userName}/>

      <TextField text = {userName}/>
      <TextField text = {displayName}/>
      <CreateEmployee/>
      <EmployeeList/>
     
    </div>
  );
}

export default App;

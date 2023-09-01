import logo from './logo.svg';
import logo2 from './logo2.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [currentLogo, setCurrentLogo] = useState('logo1')

  const [count, setCount] = useState(1)

  const logos = {logo1:logo, logo2:logo2}

  const Logo = ()=>{
      return <img src={logos[currentLogo]} className="App-logo" alt="logo" />
  }

  const HeaderBody = (props)=>{
    return <div>
          <p>
            {props.text}
          </p>
          <button onClick={
            ()=>{
              if (currentLogo === 'logo1'){
                setCurrentLogo('logo2')
              }else{
                setCurrentLogo('logo1')
              }
            }
          }>Change Logo</button>
          </div>
  }

  const Counter = ()=>{
    return <div>
      <p>{count}</p>
      <button onClick={
        ()=>{
          setCount(count+1)
        }
      }>+</button>
      <button onClick={
        ()=>{
          setCount(count-1)
        }
      }>-</button>
    </div>
  }

  const Header = (props)=>{
    return <header className="App-header">
            <Logo logo={props.logo}/>
            {/* <HeaderBody text='This is a test'/> */}
            <HeaderBody text='This is a pretty one'/>
            <Counter/>
          </header>
  }

  return (
    <div className="App">
      <Header logo={logo2}/>
      {/* <Header logo={logo}/> */}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import './style.css'
import clo from './icons/clock.png';
import cal from './icons/calendar.png';

function App() {
	const [dateState, setDateState] = useState(new Date());
	useEffect(() => {
		setInterval(() => {
			console.log('watching');
			setDateState(new Date());
		}, 30000);
	}, []);
  const [time, setTime] = React.useState("");

  React.useEffect(() => {

    const myInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(myInterval);
    }
  })
	return (
		<div className="App">
       <header className="App-header">
        <h1>Exercise 3- Display Date and Time</h1>
        <div class="grid-container">
        <div class="grid-item">
        <header>
            <h2>DATE</h2>
        </header>    
        <center>
        <img src={cal} alt="logo"/>
        </center>
		    <div class="content">
			<h1>
				{' '}
				{dateState.toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'numeric',
					year: 'numeric',
				})}
			</h1>
      </div>
      </div>
      <div class="grid-item">
        <header>
            <h2>TIME</h2>
        </header>    
        <br></br>
        <center>
        <img src={clo} alt="logo"/>
        </center>
        <br></br>
        <div class="content">
      <h1>{time}</h1>
      </div>
      </div>
    </div>

    </header>
      
		</div>
    
    
	);
}

export default App;
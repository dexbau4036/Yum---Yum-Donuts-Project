import React, { useState } from 'react';
 import './App.css';
 import Button from './Button';
 import TodoList from './TodoList';
 
	//Button Functions
	function App() {


		const [count, setCount] = useState(0);

  		const handleIncrement = () => {
  		setCount(count + 10);
 		};

 		const handleDecrement = () => {
  		setCount(count - 10);
  		};

  		const handleReset = () => {
  		setCount(0);
  		};

		
		
		//Graphic Functions
 
		return (

	
 		
		 <div className="App">
		 	<h1>CIS453L Project App</h1>
			<h1>Dexter Bautista</h1>
			<h1>Total: {count}</h1>	
			
			<p>Welcome to Yum-Yum Donuts</p>
			<p>Add Donuts</p>	
			<Button label="Add Donut" onClick={handleIncrement} />
    		<Button label="Decrease Amount" onClick={handleDecrement} />
    		<Button label="Clear Amount" onClick={handleReset} />

			<p>Order Name </p>
 			<TodoList />
			<p> Graphic </p>
 		</div>
 	);
}

export default App;
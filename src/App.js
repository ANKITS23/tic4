
import Board from './Board';
import "./App.css";
import { useState } from 'react';

function App() {


	const [reset, setReset] = useState(false);


	const [winner, setWinner] = useState('');


	const resetBoard = () => {
		setReset(true);
	}

	return (
  <>
		<div className="app">
			
		
			<Board reset={reset} setReset={setReset} winner={winner}
				setWinner={setWinner} />
		<div className='winner-text'>{winner}</div>
				<button className='reset' onClick={() => resetBoard()}>
					Reset 
				</button>
			</div>
		
    </>
	);
}

export default App;

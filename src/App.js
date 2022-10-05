
import Board from './Board';
import "./App.css";
import { useState } from 'react';
import Board2 from './Board2';

function App() {
	const [reset, setReset] = useState(false);
	const [winner, setWinner] = useState(false);


	const resetBoard = () => {
		setReset(true);
	}

	return (
  <>
		<div className="app">
			<Board2 reset={reset} setReset={setReset} winner={winner}
				setWinner={setWinner} />
		<div className='winner-text'>{winner}</div>
				<button className='reset' onClick={() => resetBoard()}>
					<a href='/'>Reset</a>
				</button>
			</div>	
    </>
	);
}

export default App;

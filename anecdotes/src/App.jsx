import { useState } from 'react'

const Anecdotes = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.'
	]

	const anecdotesCount = anecdotes.length

	const [selected, setSelected] = useState(0)
	const [points, setPoints] = useState(new Uint8Array(anecdotesCount))

	const handleVotes = (index) => {
		const newPoints = [...points]
		newPoints[index] += 1
		setPoints(newPoints)
	}

	const handleAnecdotes = () => {
		if (selected === 7) {
			setSelected(0)
		} else {
			setSelected(selected + 1)
		}
	}

	return (
		<div className='container'>
			<div>
				<h1>Anecdote of the day:</h1>
				<p>{anecdotes[selected]}</p>
				<p>has {points[selected]} votes</p>
			</div>
			<div className='buttons__container'>
				<button onClick={() => handleVotes(selected)}>Vote</button>
				<button onClick={handleAnecdotes}>Next Anecdote</button>
			</div>

			{Math.max(...points) > 0 && (
				<div>
					<h1>Anecdote with most votes:</h1>

					<p>{anecdotes[points.indexOf(Math.max(...points))]}</p>
					<p>has {points[points.indexOf(Math.max(...points))]} votes</p>
				</div>
			)}
		</div>
	)
}

export default Anecdotes

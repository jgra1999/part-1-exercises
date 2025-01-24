import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const Unicafe = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [total, setTotal] = useState(0)

	const handleClick = (value) => {
		if (value === 'good') setGood(good + 1)
		if (value === 'neutral') setNeutral(neutral + 1)
		if (value === 'bad') setBad(bad + 1)

		setTotal(total + 1)
	}

	return (
		<main className='container'>
			<h1>Give Feedback</h1>

			<div className='buttons__container'>
				<Button text='Good' handleComments={() => handleClick('good')} />
				<Button text='Neutral' handleComments={() => handleClick('neutral')} />
				<Button text='Bad' handleComments={() => handleClick('bad')} />
			</div>

			<h2>Statistic</h2>

			{!total ? (
				<div>No feedback given</div>
			) : (
				<Statistics good={good} neutral={neutral} bad={bad} total={total} />
			)}
		</main>
	)
}

export default Unicafe

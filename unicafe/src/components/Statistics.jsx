import StaticsLine from './StatisticLine'

const Statistics = ({ good, neutral, bad, total }) => {
	const average = (good - bad) / total
	const positivePercentage = (good / total) * 100

	return (
		<table>
			<thead>
				<tr>
					<th>Categoría</th>
					<th>Valor</th>
				</tr>
			</thead>
			<tbody>
				<StaticsLine text='Good' value={good} />
				<StaticsLine text='Neutral' value={neutral} />
				<StaticsLine text='Bad' value={bad} />
				<StaticsLine text='Average' value={average.toFixed(2)} />
				<StaticsLine text='Positive' value={positivePercentage.toFixed(2)} />
			</tbody>
		</table>
	)
}

export default Statistics

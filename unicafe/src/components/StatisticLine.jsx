const StaticsLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>
				{value} {text === 'positivePercentage' ? '%' : ''}
			</td>
		</tr>
	)
}

export default StaticsLine

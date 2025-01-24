const Button = ({ text, handleComments }) => {
	return (
		<button className='button' onClick={handleComments}>
			{text}
		</button>
	)
}

export default Button

export const Sizes = () => {
	return (
		<div className='flex flex-col justify-center items-center w-60 h-20 rounded-xl bg-indigo-400 bg-opacity-50 border-2 border-white shadow-xl'>
			<p className='text-center mb-1'>Tamaño de la bebida</p>
			<div className='flex justify-around items-center w-40 mb-2'>
				<input type='button' value='S' className='w-8 h-8 bg-purple-400 rounded-lg border-2 border-white'/>
				<input type='button' value='M' className='w-8 h-8 bg-purple-400 rounded-lg border-2 border-white'/>
				<input type='button' value='L' className='w-8 h-8 bg-purple-400 rounded-lg border-2 border-white'/>
			</div>
		</div>
	);
};

export default Sizes;

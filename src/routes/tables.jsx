//import tablesJson from '../tables.json';

const Tables = () => {
	const goBack = () => {
		window.history.back();
	};
	return (
		<>
			<div className='flex flex-col align-middle w-1/4 h-1/4 border-4 border-yellow-400 justify-center m-50 '>
				<h1 className='text-3xl'>Tables</h1>
				<div className='grid w-2/4 h-2/4 grid-cols-2 justify-center align-middle '>
					<img
						src='https://cdn-icons-png.flaticon.com/512/6976/6976248.png'
						alt='mesa-3'
						//className='flex w-24 h-24'
					/>
					<img
						src='https://cdn-icons-png.flaticon.com/512/6976/6976248.png'
						alt='mesa-3'
						//className='flex w-24 h-24'
					/>
					<img
						src='https://cdn-icons-png.flaticon.com/512/6976/6976248.png'
						alt='mesa-3'
						//className='flex w-24 h-24'
					/>
					<img
						src='https://cdn-icons-png.flaticon.com/512/6976/6976248.png'
						alt='mesa-4'
						//className='flex w-24 h-24'
					/>
				</div>

				<button
					onClick={goBack}
					className='h-9 w-28 bg-purple-400 my-1 rounded-lg border-none shadow-xl border-white text-white'
				>
					Back
				</button>
			</div>
		</>
	);
};

export default Tables;

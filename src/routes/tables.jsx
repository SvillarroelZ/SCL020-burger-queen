//import tablesJson from '../tables.json';

const Tables = () => {
	const goBack = () => {
		window.history.back();
	};
	return (
		<>
			<div className='flex  w-screen h-screen justify-center content-center'>
				<div className='flex flex-col w-1/4 h-auto content-center '>
					<h1 className='text-3xl'>Tables</h1>
					<div className=' grid w-8/12 h-8/12 gap-18 content-center grid-cols-2 '>
						<img
							src='https://cdn-icons-png.flaticon.com/512/6976/6976248.png'
							alt='mesa-3'
							className='flex w-8/12 h-8/12'
						/>
						<img
							src='https://cdn-icons-png.flaticon.com/512/6976/6976248.png'
							alt='mesa-3'
							className='flex w-8/12 h-8/12'
						/>
						<img
							src='https://cdn-icons-png.flaticon.com/512/6976/6976248.png'
							alt='mesa-3'
							className='flex w-8/12 h-8/12'
						/>
						<img
							src='https://cdn-icons-png.flaticon.com/512/6976/6976248.png'
							alt='mesa-4'
							className='flex w-8/12 h-8/12'
						/>
					</div>

					<button
						onClick={goBack}
						className='h-9 w-28 bg-purple-400 my-1 rounded-lg border-none shadow-xl border-white text-white'
					>
						Back
					</button>
				</div>
			</div>
		</>
	);
};

export default Tables;

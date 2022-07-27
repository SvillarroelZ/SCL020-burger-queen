const Tables = () => {

  const goBack = () => {
    window.history.back();
  }
  return (
        <>
            <h1>Tables</h1>
            <p>aqui irian las mesas</p>
            <p>mesa1</p>
            <p>mesa2</p>
            <button onClick={goBack} className='h-9 w-28 bg-purple-400 my-1 rounded-lg border-none shadow-xl border-white text-white'
              >Back
            </button>
        </>
  )
}

export default Tables

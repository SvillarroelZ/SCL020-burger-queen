const Register = () => {

    const[email, setEmail] = useState('test@test.com')
    const[password, setPassword] = useState('123123')

    return (
        <>
            <h1>Register</h1>
            <form>
                <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
            </form>
        </>
    );
};

export default Register
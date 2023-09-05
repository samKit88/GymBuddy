import  { useState } from 'react'
import { useSignup } from '../hook/useSignup';

const Signup = () => {
  //Signup state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const { signup, error, isLoding } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };
  return (
    <form className='signup' onSubmit={ handleSubmit }>
        <h3>Sign up</h3>
        
        <label>Email: </label>
        <input 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email} 
        />

        <label>Password: </label>
        <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password} 
        />

        <button disabled={isLoding}>Sign up</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Signup
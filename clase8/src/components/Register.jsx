import React from 'react'

const Register = ({inputValues, setInputValues}) => {

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    
    return (
        <form>
            <input 
            value={inputValues.name}
            type="text"
            placeholder='Name'
            maxLength={15}
            minLength={1}
            onChange={e => setInputValues({...inputValues, name: e.target.value})}
            />
            <input 
            value={inputValues.lastname}
            type="text"
            placeholder='Last Name'
            maxLength={15}
            minLength={1}
            onChange={e => setInputValues({...inputValues, lastname: e.target.value})}
            />
            <input 
            value={inputValues.email}
            type="email"
            placeholder='Email'
            minLength={1}
            onChange={e => setInputValues({...inputValues, email: e.target.value})}
            />
            <input 
            value={inputValues.password}
            type="password"
            placeholder='Password'
            minLength={1}
            onChange={e => setInputValues({...inputValues, password: e.target.value})}
            />
            <div>
                <button>Cancel</button>
                <button onClick={e => handleSubmit(e)}>Submit</button>
            </div>
        </form>
    )
}

export default Register
import React from 'react'


function LoginComponent (props) {
    

    

    const onSubmit = (e) => {
        e.preventDefault()
        props.logIn(e)
    }

   
        return (
            <div className='card  '>
                <h1 className='card-header card-title'>Login</h1>
                <div className='card-body'>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <br />
                        <input className='btn btn-dark'
                        type="submit"
                        value="Submit"
                            />
                        <button className='btn btn-outline-dark'onClick={props.onClick}>{props.buttonText}</button>

                    </form>
                </div>
            </div>
        )
    
}



export default LoginComponent;
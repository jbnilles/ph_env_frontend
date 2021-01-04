import React from 'react'


function LoginComponent (props) {
    

    

    const onSubmit = (e) => {
        e.preventDefault()
        props.logIn(e)
    }

    let x = ''
    if (("errors" in props.userReducer)) {
        x = props.userReducer.errors.map(e => {
            return <li>{e}</li>
        })
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
                        <ul>{x}</ul>
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
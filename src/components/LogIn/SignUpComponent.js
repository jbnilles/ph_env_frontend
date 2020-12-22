import React from 'react'
import { connect } from 'react-redux'
import { signUserUp } from '../../actions/userActions'

function SignUpComponent (props) {
    

   

    const  onSubmit = (e) => {
        e.preventDefault()
        props.signUp(e)
    }

   
        return (
            <div className = 'card'>
                <h1 className='card-header card-title'>SignUp</h1>
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
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                    />

                    <br />
                    <input className='btn btn-dark'
                        type="submit"
                        value="Submit"
                    />
                    <a className='btn btn-outline-dark' onClick={props.onClick}>{props.buttonText}</a>
                    </form>
                    </div>
            </div>
        )
    
}



export default SignUpComponent;
import React from 'react'
import { Button } from 'react-bootstrap'
import { FaGithub, FaGoogle } from 'react-icons/fa'

function RightNav() {
    return (
        <div>
            <h4>LogIn With</h4>
            <p><Button variant="outline-primary w-100"> <FaGoogle /> LogIn With Google</Button></p>
            <p><Button variant="outline-secondary w-100"><FaGithub /> LogIn With Github</Button></p>
        </div>
    )
}

export default RightNav
import React from 'react'
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

function Header() {
    const {user}= useContext(AuthContext)
    console.log(user);
    return (
        <Container >
            <div className="text-center">
                <img src={logo} className='' alt="" />
                <p className="text-secondary">Lorem ipsum dolor sit, ae deserunt ex autem.</p>
                <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex bg-light p-3 align-items-center'>
                <Button className='me-3' variant='danger'>Leatest</Button>
                <marquee className='text-danger' behavior="" direction="left">thalfjds Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, doloribus!</marquee>
            </div>

            <div className='text-center'>
                <Navbar >
                    <Nav className="mx-auto">
                        <Nav.Link> <Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <div className='position-absolute end-0'>
                        <span>{user?.email}</span>
                        <FaUserCircle></FaUserCircle>
                        <Link to='user/login'><Button variant='secondary ms-2'>Login</Button></Link>
                        <Link to='user/rejister'><Button variant='secondary ms-2'>Rejister</Button></Link>

                    </div>

                </Navbar>
            </div>
        </Container>
    )
}

export default Header
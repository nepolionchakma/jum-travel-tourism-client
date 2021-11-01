
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import Button from '@restart/ui/esm/Button';

const Header = () => {
    // Auth
    const { user, handleSignOut } = useAuth();
    return (
        <div className="sticky-top header py-2" >
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Link to="/" className="fw-bold fs-4 text-decoration-none myLogo"> <FontAwesomeIcon className="text-warning fs-1" icon={faRoute} /> JUM T&T</Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">

                                <Nav.Link className="text-white" as={HashLink} to="/tours">Tours</Nav.Link>
                                <Nav.Link className="text-white" as={HashLink} to="/my-order">MyOrder</Nav.Link>
                                <Nav.Link className="text-white" as={HashLink} to="/blogs">Blogs</Nav.Link>
                                <Nav.Link className="text-white" as={HashLink} to="/manage-services">Manage Service</Nav.Link>
                                <Nav.Link className="text-white" as={HashLink} to="/add-service">Add Service</Nav.Link>

                            </Nav>
                            <Nav>
                                <Form className="d-flex">
                                    <FormControl type="search"
                                        placeholder="Search"
                                        className="me-1"
                                        aria-label="Search"
                                    />
                                    <Button className="btn bg-white">Search</Button>
                                </Form>
                                <div className="d-flex justify-content-evenly ms-auto">
                                    {!user?.displayName ?
                                        <div className="d-flex align-items-center mx-auto">
                                            <Link className="px-1 jum-text p-2 ms-2" to="/login">Login</Link>
                                            <Link className="px-1 jum-text p-2" to="/signup">Signup</Link>
                                        </div> :
                                        <div>
                                            <span className="text-white">Hi,{user.displayName}</span>
                                            <img
                                                style={{
                                                    width: '30px',
                                                    borderRadius: '50%',
                                                    margin: '0px 5px'
                                                }}
                                                src={user.photoURL} alt="" />
                                            <button onClick={handleSignOut} className="btn btn-danger p-1">SignOut</button>
                                        </div>
                                    }

                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        </div >
    );
};

export default Header;
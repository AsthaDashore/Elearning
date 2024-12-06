// src/components/Dashboard/Profile.js
import React, { useEffect, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import AuthService from '../../services/AuthService';

function Profile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser(); // Get current user from localStorage
        if (currentUser) {
            setUser(currentUser); // Set the user state with the current user's data
        }
    }, []);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        // Handle profile update functionality (e.g., call backend API)
        alert('Profile updated successfully!');
    };

    return (
        <div className="col-md-8 offset-md-2">
            <h2>User Profile</h2>
            <Card className="my-4">
                <Card.Body>
                    <Form onSubmit={handleUpdateProfile}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={user.name || ''}
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={user.email || ''}
                                disabled
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Update Profile
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Profile;

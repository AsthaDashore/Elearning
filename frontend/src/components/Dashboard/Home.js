// src/components/Dashboard/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function Home() {
    const navigate = useNavigate();

    const handleGoToProducts = () => {
        navigate('/products'); // Navigate to product list page
    };

    return (
        <div className="col-md-8 offset-md-2">
            <h2>Welcome to E-Learning Platform</h2>
            <Card className="my-4">
                <Card.Body>
                    <h5 className="card-title">Explore Courses</h5>
                    <p className="card-text">
                        Browse through our wide variety of courses and get started with your learning journey.
                    </p>
                    <Button variant="primary" onClick={handleGoToProducts}>
                        Explore Products
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Home;

// src/components/Products/ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import ProductService from '../../services/ProductService';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the backend API
        const fetchProducts = async () => {
            try {
                const response = await ProductService.getAllProducts();
                setProducts(response.data); // Store products in state
            } catch (error) {
                console.error('There was an error fetching the products!', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="container">
            <h2>Available Products</h2>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} md={4}>
                        <Card className="my-3">
                            <Card.Img variant="top" src={product.imageUrl} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Link to={`/products/${product.id}`}>
                                    <Button variant="primary">View Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ProductList;

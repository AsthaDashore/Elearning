// src/components/Products/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import ProductService from '../../services/ProductService';

function ProductDetail() {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await ProductService.getProductById(id);
                setProduct(response.data); // Store the product details in state
            } catch (error) {
                console.error('There was an error fetching the product!', error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>; // Show loading message while fetching product data
    }

    return (
        <div className="container">
            <h2>{product.name}</h2>
            <Card className="my-4">
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                    <Card.Title>Price: ${product.price}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="primary">Enroll Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductDetail;

import React, { useState } from 'react';
import { createEvent } from '../api'; // Adjust the import path as needed
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const EventForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventData = {
            title,
            description,
            date,
            place
        };

        try {
            await createEvent(eventData);
            setMessage('Event created successfully');
            // Clear form fields
            setTitle('');
            setDescription('');
            setDate('');
            setPlace('');
        } catch (error) {
            setMessage('Error creating event');
            console.error('Error creating event:', error);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Add Event</h2>
                    {message && <Alert variant={message.includes('successfully') ? 'success' : 'danger'}>{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="title" className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="description" className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="date" className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="place" className="mb-3">
                            <Form.Label>Place</Form.Label>
                            <Form.Control
                                type="text"
                                value={place}
                                onChange={(e) => setPlace(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add Event
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default EventForm;

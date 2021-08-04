import React from 'react';
import {Button, Container, Form, Nav, Row} from "react-bootstrap";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {addCurrentUser} from "../../store/currentUserSlice";
import * as Yup from "yup";
import './registrationFirstStep.css';


const RegistrationFirstStep = (props) => {

    const dispatch = useDispatch();

    const handleNextStep = () => {
        props.history.push('/registration_step_2');
    }

    const initialValues = {
        password: '',
        email: ''
    }

    let validationSchema = Yup.object().shape({
        password: Yup.string().required(),
        email: Yup.string().required()
    });

    const onSubmit = (values) => {
        dispatch(addCurrentUser(values));
        handleNextStep();
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit
    })

    return (
        <>
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
            </Nav>

            <Container>
                <Form onSubmit={formik.handleSubmit} className="registration-form">
                    <Row className="mb-4">
                        <Form.Group controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                name="password"
                                placeholder="Password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                isValid={formik.touched.password}
                                isInvalid={!!formik.errors.password}
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email" name="email"
                                placeholder="Enter email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                isValid={formik.touched.email}
                                isInvalid={!!formik.errors.email}
                            />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Next
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default RegistrationFirstStep;
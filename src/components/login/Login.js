import React from 'react';
import {Button, Container, Form, Nav, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";
import './login.css';
import {addCurrentUser} from "../../store/currentUserSlice";


const Login = (props) => {
    const dispatch = useDispatch();
    const allUsers = useSelector(state => state.users.users);

    const handleNextStep = () => {
        props.history.push('/profile');
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
        const user = allUsers.find((user) => user.email === values.email && user.password === values.password);
        dispatch(addCurrentUser(user));
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
                    <Nav.Link href="/registration_step_1">Registration</Nav.Link>
                </Nav.Item>
            </Nav>

            <Container>
                <Form onSubmit={formik.handleSubmit} className="login-form">
                    <Row className="mb-3">
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                isValid={formik.touched.email}
                                isInvalid={!!formik.errors.email}
                            />
                        </Form.Group>

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
                    </Row>

                    <Button variant="primary" type="submit" className="btn-lg btn-success">
                        Login
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default Login;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {addUser} from "../../store/usersSlice";
import {getQueryCountries} from "../../API/countries";
import {setCountries} from "../../store/countrySlice";
import * as Yup from "yup";
import {addCurrentUser} from "../../store/currentUserSlice";
import './personalData.css';

const PersonalData = (props) => {
    const dispatch = useDispatch();
    let currentCustomers = useSelector(state => state.current.currentUser);
    let allCountries = useSelector(state => state.country.country);

    useEffect(() => {
        if (allCountries.length <= 0) {
            getQueryCountries().then(response => {
                dispatch(setCountries(response.data))
            }).catch(err => {
                console.log(err)
            })
        }
    }, [allCountries])

    const handleGoToSuggestion = () => {
        props.history.push('/registration_step_3');
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        department: '',
        jobTitle: '',
        country: '',
        city: '',
        gender: ''
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        department: Yup.string().required(),
        jobTitle: Yup.string().required(),
        country: Yup.string().required(),
        city: Yup.string().required(),
        gender: Yup.string().required()
    });

    const onSubmit = (values) => {
        const val = {...currentCustomers, ...values};
        dispatch(addUser(val));
        dispatch(addCurrentUser(val));
        handleGoToSuggestion();
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit
    })

    return (
        <>
            <Container>
                <Form onSubmit={formik.handleSubmit} className="personal-form">
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridFirstName">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                placeholder="FirstName"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                isValid={formik.touched.firstName}
                                isInvalid={!!formik.errors.firstName}
                            />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridLastName">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                placeholder="LastName"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                isValid={formik.touched.lastName}
                                isInvalid={!!formik.errors.lastName}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridDepartment">
                            <Form.Label>Department</Form.Label>
                            <Form.Control
                                type="text"
                                name="department"
                                placeholder="department"
                                onChange={formik.handleChange}
                                value={formik.values.department}
                                isValid={formik.touched.department}
                                isInvalid={!!formik.errors.department}
                            />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridJobTitle">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="jobTitle"
                                placeholder="job title"
                                onChange={formik.handleChange}
                                value={formik.values.jobTitle}
                                isValid={formik.touched.jobTitle}
                                isInvalid={!!formik.errors.jobTitle}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Select
                                type="text"
                                name="country"
                                placeholder="country"
                                onChange={formik.handleChange}
                                value={formik.values.country}
                                isValid={formik.touched.country}
                                isInvalid={!!formik.errors.country}
                            >
                                <option>Select Country...</option>
                                {
                                    allCountries.map(country => <option key={country.code}>{country.name}</option>)
                                }
                            </Form.Select>

                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                placeholder="city"
                                onChange={formik.handleChange}
                                value={formik.values.city}
                                isValid={formik.touched.city}
                                isInvalid={!!formik.errors.city}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridGender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                                type="text"
                                name="gender"
                                placeholder="gender"
                                onChange={formik.handleChange}
                                value={formik.values.gender}
                                isValid={formik.touched.gender}
                                isInvalid={!!formik.errors.gender}
                            >
                                <option>Male</option>
                                <option>female</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default PersonalData;
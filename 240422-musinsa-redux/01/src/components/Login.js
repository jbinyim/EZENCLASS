import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticateAction } from "../redux/actions/authecticateAction";

const Login = ({ setAuthenticaste }) => {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const trueok = useSelector((state) => state.auth.authenticate);
  console.log(trueok);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticaste(trueok);
    dispatch(authenticateAction.login(id, pw));
    navigate("/");
  };

  const changeEmail = (e) => {
    setId(e.target.value);
  };

  const changePassword = (e) => {
    setPw(e.target.value);
  };
  return (
    <Container>
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={changeEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={changePassword}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

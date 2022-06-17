import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { server } from "../server";
import "./LoginModal.css";
import { LoadingSpinner } from "./LoadingSpinner/LoadingSpinner";

export const LoginModal = (props) => {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [isLoginFail, setIsLoginFail] = useState(false);
  const handleForm = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    setLoginForm({ ...loginForm, [field]: value });
  };
  const doLogin = () => {
    setIsLoading(true);
    fetch(`${server}/user/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginForm),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          throw new Error("Login Failed");
        }
        localStorage.setItem("userid", data.userid);
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role);
        setIsLoginSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoginFail(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <Modal {...props} id="login-modal">
      <Modal.Header closeButton>Login</Modal.Header>
      <Modal.Body>
        {isLoginSuccess && <div>Login Success</div>}
        {isLoginFail && <div>Login Fail</div>}
        {isLoading && (
          <div style={{ margin: "0 auto" }}>
            <LoadingSpinner />
          </div>
        )}
        {!isLoginFail && !isLoginSuccess && !isLoading && (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleForm}
              />
            </Form.Group>
            <Button variant="primary" onClick={doLogin}>
              Login
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/esm/Button";

function Login() {
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const min = (a, b) => {
    if (a > b) {
      return b;
    } else {
      return a;
    }
  };
  return (
    <Container expand="sm">
      <Form inline>
        <div
          style={{
            width: "50vw",
            alignContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            backgroundColor: "rgba(42, 255, 76,0.8)",
            borderRadius: "50px",
            padding: "15px",
            minWidth: min("80vw", "300px"),
          }}
        >
          <h2 className="bg-white">Login</h2>
          <FormGroup>
            <FormControl
              type="mail"
              placeholder="username"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {/* {formData.username &&
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
              formData.username
            ) ? (
              <span></span>
            ) : (
              <span>please enter valid email </span>
            )} */}
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            <FormControl
              type="password"
              placeholder="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="warning"
            size="sm"
          >
            Login
          </Button>
          <label>
            Don't have account
            <span>
              <Button variant="warning" size="sm">
                SignUp
              </Button>
            </span>
          </label>
          <label>
            Reset password
            <span>
              <Button variant="warning" size="sm">
                Forgot Password
              </Button>
            </span>
          </label>
        </div>
      </Form>
      ;
    </Container>
  );
}

export default Login;

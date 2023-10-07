import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/esm/Button";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
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
  return (
    <Container expand="sm">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="align-items-center">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <label>
            Don't have account
            <span>
              <button>SignUp</button>
            </span>
          </label>
          <br></br>
          <label>
            Lost password account
            <span>
              <button>Forget Password</button>
            </span>
          </label>
        </div>
      </div>
      <Form inline>
        <FormGroup controlId="formInlineName">
          <FormControl type="text" placeholder="Jane Doe" />
        </FormGroup>{" "}
        <FormGroup controlId="formInlineEmail">
          <FormControl type="email" placeholder="jane.doe@example.com" />
        </FormGroup>{" "}
        <Button type="submit">Send invitation</Button>
      </Form>
      ;
    </Container>
  );
}

export default Login;

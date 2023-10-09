import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/esm/Button";

function SignUp() {
  const [label, setLabel] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    addressCountry: "",
    addressState: "",
    addressDistrict: "",
    districtRegistrationNumber: "",
    password: "",
    confirmPassword: "",
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
    if (
      formData.name &&
      formData.email &&
      formData.phoneNumber &&
      formData.addressCountry &&
      formData.addressState &&
      formData.addressDistrict &&
      formData.districtRegistrationNumber &&
      formData.password &&
      formData.confirmPassword
    ) {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
      ) {
        if (/(0|91)?[6-9][0-9]{9}/.test(formData.phoneNumber)) {
          if (formData.password === formData.confirmPassword) {
            console.log(formData);
          } else {
            setLabel(true);
            alert("Please enter password and confrimPassword as same");
          }
        } else {
          setLabel(true);
          alert("Plase enter proper phone number");
        }
      } else {
        setLabel(true);
        alert("Please enter proper email");
      }
    } else {
      setLabel(true);
      alert("Please enter all fileds");
    }
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
      <Form inline size="sm">
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
          <h2 className="bg-white">SignUp</h2>
          <FormGroup>
            {label && <Form.Label>Name</Form.Label>}
            <FormControl
              type="text"
              placeholder="name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            {label && <Form.Label>Email</Form.Label>}
            <FormControl
              type="email"
              placeholder="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formData.email &&
              !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                formData.email
              ) && <span> Please enter proper email</span>}
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            {label && <Form.Label>Phone Number</Form.Label>}
            <FormControl
              type="text"
              placeholder="phoneNumber"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {formData.phoneNumber &&
              !/(0|91)?[6-9][0-9]{9}/.test(formData.phoneNumber) && (
                <span> Please enter proper Phone number</span>
              )}
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            {label && <Form.Label>Country</Form.Label>}
            <FormControl
              type="text"
              placeholder="addressCountry"
              id="Country"
              name="addressCountry"
              value={formData.addressCountry}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            {label && <Form.Label>State</Form.Label>}
            <FormControl
              type="text"
              placeholder="State"
              id="addressState"
              name="addressState"
              value={formData.addressState}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            {label && <Form.Label>District</Form.Label>}
            <FormControl
              type="text"
              placeholder="District"
              id="addressDistrict"
              name="addressDistrict"
              value={formData.addressDistrict}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            {label && <Form.Label>District Registraion Number</Form.Label>}

            <FormControl
              type="text"
              placeholder="District registration number"
              id="districtRegistrationNumber"
              name="districtRegistrationNumber"
              value={formData.districtRegistrationNumber}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            {label && <Form.Label>Password</Form.Label>}
            <FormControl
              type="password"
              placeholder="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            {label && <Form.Label>Confirm Password</Form.Label>}
            <FormControl
              type="text"
              placeholder="confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>

          <Button
            type="submit"
            onClick={handleSubmit}
            variant="warning"
            size="sm"
          >
            SignUp
          </Button>
          <label>
            Already have account
            <span>
              <Button variant="warning" size="sm">
                Login
              </Button>
            </span>
          </label>
        </div>
      </Form>
    </Container>
  );
}

export default SignUp;

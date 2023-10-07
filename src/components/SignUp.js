import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";

function SignUp() {
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
    console.log(formData);
  };
  return (
    <Container expand="sm">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="align-items-center">
          <h1>SignUp</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
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
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="addressCountry"> Native Country</label>
              <input
                type="text"
                id="addressCountry"
                name="addressCountry"
                value={formData.addressCountry}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="addressState">State</label>
              <input
                type="text"
                id="addressState"
                name="addressState"
                value={formData.addressState}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="addressDistrict">District</label>
              <input
                type="text"
                id="addressDistrict"
                name="addressDistrict"
                value={formData.addressDistrict}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="districtRegistrationNumber">District RN</label>
              <input
                type="text"
                id="districtRegistrationNumber"
                name="districtRegistrationNumber"
                value={formData.districtRegistrationNumber}
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
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button type="submit">SignUp</button>
          </form>
          <label>
            Already have account{" "}
            <span>
              <button>Login</button>
            </span>
          </label>
        </div>
      </div>
    </Container>
  );
}

export default SignUp;

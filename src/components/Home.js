import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/esm/Button";

function Home() {
  const [formData, setFormData] = useState({
    agentId: "",
    driverName: "",
    aadharNumber: "",
    aadharPhoto: "",
    panCardNumber: "",
    panCardPhoto: "",
    driverPhoneNumber: "",
    rcNumber: "",
    rcPhoto: "",
    extraInput1: "",
    extraInput2: "",
    extraInput3: "",
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
          <h2 className="bg-white">Add</h2>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="agentId"
              id="agentId"
              name="agentId"
              value={formData.agentId}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="driverName"
              id="driverName"
              name="driverName"
              value={formData.driverName}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="aadharNumber"
              id="aadharNumber"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px", color: "red" }}>
            Upload aadhar card below
          </div>
          <FormGroup>
            <FormControl
              type="file"
              placeholder="aadharPhoto"
              id="aadharPhoto"
              name="aadharPhoto"
              value={formData.aadharPhoto}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="panCardNumber"
              id="panCardNumber"
              name="panCardNumber"
              value={formData.panCardNumber}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px", color: "red" }}>
            Upload pan card below
          </div>
          <FormGroup>
            <FormControl
              type="file"
              placeholder="panCardPhoto"
              id="panCardPhoto"
              name="panCardPhoto"
              value={formData.panCardPhoto}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Driver phone number"
              id="driverPhoneNumber"
              name="driverPhoneNumber"
              value={formData.driverPhoneNumber}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="rcNumber"
              id="rcNumber"
              name="rcNumber"
              value={formData.rcNumber}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px", color: "red" }}>
            Upload RC slip below
          </div>{" "}
          <FormGroup>
            <FormControl
              type="file"
              placeholder="rcPhoto"
              id="rcPhoto"
              name="rcPhoto"
              value={formData.rcPhoto}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="extraInput1"
              id="extraInput1"
              name="extraInput1"
              value={formData.extraInput1}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="extraInput2"
              id="extraInput2"
              name="extraInput2"
              value={formData.extraInput2}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="extraInput3"
              id="extraInput3"
              name="extraInput3"
              value={formData.extraInput3}
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
            Add
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Home;

import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/esm/Button";

function PaymentDetails() {
  const [formData, setFormData] = useState({
    agentId: "",
    rcDataId: "",
    cash: "",
    onlineTransfer: "",
    onlineTransferPaymentScreenshot: "",
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
          <h2 className="bg-white">Payment</h2>
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
              placeholder="rcDataId"
              id="rcDataId"
              name="rcDataId"
              value={formData.rcDataId}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <div style={{ padding: "2px", color: "red" }}>
            Select cash or online Transfer
          </div>
          {/* <FormGroup>
            <FormControl
              type="radio"
              placeholder="cash"
              id="cash"
              name="cash"
              value={formData.cash}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div>
          <FormGroup>
            <FormControl
              type="radio"
              placeholder="onlineTransfer"
              id="onlineTransfer"
              name="onlineTransfer"
              value={formData.onlineTransfer}
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ padding: "2px" }}></div> */}
          <Form.Check
            inline
            label="cash"
            name="paymentWay"
            type="radio"
            id="cash"
            value={formData.cash}
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="onlineTranfer"
            name="paymentWay"
            type="radio"
            id="onlineTransfer"
            value={formData.onlineTransfer}
            onChange={handleChange}
          />
          <FormGroup>
            <FormControl
              type="file"
              placeholder="onlineTransferPaymentScreenshot"
              id="onlineTransferPaymentScreenshot"
              name="onlineTransferPaymentScreenshot"
              value={formData.onlineTransferPaymentScreenshot}
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
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="warning"
            size="sm"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default PaymentDetails;

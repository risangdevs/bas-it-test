import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { server } from "../server";
import "./LoginModal.css";
import { LoadingSpinner } from "./LoadingSpinner/LoadingSpinner";

export const WhyUsModal = (props) => {
  const [whyUsForm, setWhyUsForm] = useState({ text: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false);
  const [isEditFail, setIsEditFail] = useState(false);
  const handleForm = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    setWhyUsForm({ ...whyUsForm, [field]: value });
  };
  const doEditWhyUs = () => {
    setIsLoading(true);
    fetch(`${server}/whyus`, {
      method: "put",
      headers: { "Content-Type": "application/json",role:localStorage.getItem("role") },
      // user: { role: localStorage.role },
      body: JSON.stringify(whyUsForm),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.error) {
          throw new Error("Edit Failed");
        }
        setIsEditSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setIsEditFail(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <Modal {...props} id="login-modal">
      <Modal.Header closeButton>Edit Why Us</Modal.Header>
      <Modal.Body>
        {isEditSuccess && <div>Edit Success</div>}
        {isEditFail && <div>Edit Fail</div>}
        {isLoading && (
          <div style={{ margin: "0 auto" }}>
            <LoadingSpinner />
          </div>
        )}
        {!isEditFail && !isEditSuccess && !isLoading && (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Why Us Text"
                name="text"
                onChange={handleForm}
              />
            </Form.Group>
            <Button variant="primary" onClick={doEditWhyUs}>
              Edit
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

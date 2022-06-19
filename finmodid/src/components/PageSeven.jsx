import { useEffect } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./PageOne.css";
export const PageSeven = () => {
  const [plan, setPlan] = useState([
    {
      name: "Starter",
      price: 0,
      perusahaan: "1 Perusahaan",
      penilaian: "Penilaian 1 Bulan",
      report: "No Detail Report",
    },
    {
      name: "Premium",
      price: 29,
      perusahaan: "5 Perusahaan",
      penilaian: "Penilaian 6 Bulan",
      report: "Detail Report",
    },
    {
      name: "Enterprise",
      price: 49,
      perusahaan: "10 Perusahaan",
      penilaian: "Penilaian 1 Tahun",
      report: "Detail Report",
    },
  ]);
  const [selectedPlan, setSelectedPlan] = useState("month");
  const calculatePrice = (a, b) => {
    if (a === "month") {
      return b;
    } else if (a === "year") {
      return b * 12;
    }
  };
  return (
    <Container className="page-seven-container">
      <Container className="page-seven-header">
        <Container className="page-seven-header-flex-item-zero">
          <div className="button-group-grey">
            <Button
              onClick={() => setSelectedPlan("year")}
              className={
                selectedPlan === "year" ? "blue-button" : "gray-button"
              }
            >
              Yearly
            </Button>
            <Button
              onClick={() => setSelectedPlan("month")}
              className={
                selectedPlan === "month" ? "blue-button" : "gray-button"
              }
            >
              Monthly
            </Button>
          </div>
        </Container>
        <Container className="page-seven-header-flex-item-one">
          <p style={{ fontSize: "50px", fontWeight: "bold" }}>
            Penilaian yang tepat untuk rencana kedepan
          </p>
        </Container>
      </Container>
      <Container className="page-seven-body">
        {plan.map((item, index) => {
          return (
            <Container className="subscription-plan" key={index}>
              <p className="mb-4 mt-3 text-center">{item.name}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <h1
                  className="text-center"
                  style={{ fontSize: "50px", margin: "1rem 0 1rem auto" }}
                >
                  ${calculatePrice(selectedPlan, item.price)}
                </h1>
                <p style={{ fontSize: "20px", margin: "auto auto 7% 0" }}>
                  /{selectedPlan}
                </p>
              </div>
              <p className="mb-4 mt-3 text-center">{item.perusahaan}</p>
              <p className="mb-4 mt-3 text-center">{item.penilaian}</p>
              <p className="mb-4 mt-3 text-center">{item.report}</p>
              <div className="subscription-plan-button-container">
                <Button className="subscription-plan-button">
                  Get Started
                </Button>
              </div>
            </Container>
          );
        })}
      </Container>
    </Container>
  );
};

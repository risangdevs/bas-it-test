import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./PageOne.css";
import metode from "../assets/Methode.png";
import laporan from "../assets/Paper.png";
import rahasia from "../assets/Shield dark.png";
import akurat from "../assets/Vector.png";
import parameter from "../assets/Edit Square.png";
import dollar from "../assets/Dollar.png";
import { CardComponent } from "./CardComponent";
import { useEffect } from "react";
import { server } from "../server";
import { LoadingSpinner } from "./LoadingSpinner/LoadingSpinner";
import { WhyUsModal } from "./WhyUsModal";
export const PageTwo = () => {
  const [cards, setCards] = useState([
    {
      img: metode,
      title: "Metode Penilaian",
      text: "Metode penilaian dilakukan dari berbagai sudut pandang untuk mendapatkan hasil yang komprehensif",
    },
    {
      img: laporan,
      title: "Laporan Penilaian",
      text: "Laporan penilaian dibuat secara profesional, sangat terperinci dan mudah untuk di download",
    },
    {
      img: rahasia,
      title: "Kerahasiaan Data",
      text: "Data yang telah kami dapatkan dijamin kerahasiaannya tidak akan kami menjual atau membagikannya",
    },
    {
      img: akurat,
      title: "Keakuratan Data",
      text: "Sumber data disesuaikan berdasarkan negara dan industrinya untuk mendapatkan keakuratan",
    },
    {
      img: parameter,
      title: "Penyesuaian Parameter Penilaian",
      text: "Dapat menyesuaikan Parameter Penilaian untuk mempermudah anda",
    },
    {
      img: dollar,
      title: "Membantu Proyeksi Keuangan",
      text: "Kami menyediakan default berdasarkan kinerja rata-rata perusahaan di industri yang sama",
    },
  ]);
  const [showWhyUsModal, setShowWhyUsModal] = useState(false);
  const [whyUs, setWhyUs] = useState("");
  const getWhyUs = () => {
    fetch(`${server}/whyus`)
      .then((res) => res.json())
      .then((data) => {
        setWhyUs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getWhyUs();
  }, []);
  // console.log(whyUs);

  return (
    <Container style={{ margin: "10% auto", width: "inherit", height: "auto" }}>
      {showWhyUsModal && (
        <WhyUsModal
          show={showWhyUsModal}
          onHide={() => {
            setShowWhyUsModal(false);
            getWhyUs();
          }}
        />
      )}
      <Container style={{ margin: "0 auto", width: "500px" }}>
        {localStorage.role === "admin" && (
          <Button
            onClick={() => {
              setShowWhyUsModal(true);
            }}
          >
            Edit Why Us
          </Button>
        )}
        <h1
          className="bold-header"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          Mengapa Harus Kami?
        </h1>
        <div className="gray-text" style={{ textAlign: "center" }}>
          {whyUs ? whyUs : <LoadingSpinner />}
        </div>
      </Container>
      <Container
        className="flex-container"
        style={{ justifyContent: "center", height: "auto" }}
      >
        {cards.map((card, index) => (
          <CardComponent key={card.title} props={card} />
        ))}
      </Container>
    </Container>
  );
};

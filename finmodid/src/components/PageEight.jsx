import { Button, Container } from "react-bootstrap";
import "./PageOne.css";
export const PageEight = () => {
  return (
    <Container className="page-eight-container">
      <h1 className="page-eight-header">Mau Coba Gratis?</h1>
      <p className="page-eight-text">
        Kalian bisa mencoba gratis terlebih dahulu selama 7 hari untuk melihat
        dan memahami apa yang kita lakukan dalam menilai perusahaan dengan
        menginput email yang akan dijadikan akun.
      </p>
     <div className='form-container'>
        <input className='form-input'  name='email' placeholder='Email Address'></input>
        <Button className="form-button">Submit</Button>
     </div>
    </Container>
  );
};

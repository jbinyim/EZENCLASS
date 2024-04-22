import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactList from "./components/ContactList";
import Contactform from "./components/Contactform";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <Contactform />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

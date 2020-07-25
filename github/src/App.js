import React from 'react';
import IconoBuscar from './img/IconoBuscar.svg';
import IconoClear from './img/IconoClear.svg';
import RepoAvatar from './img/Repoimg.jpg';
import './App.css';
import { Container, Row, Col,  InputGroup , Form, FormControl ,Button, Card,CardDeck} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="tituloBienvenido">Bienvenido Javier! </h1>
        <span>Consulta tus repos </span>
      </header>
      <Container className="Buscar">
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="d-flex">
          
          <InputGroup className=" mr-sm-2">
            <FormControl id="inlineFormInputGroupUsername2" placeholder="Buscar..." />
            <Button type="submit" className="btnBuscar">
            <img src={IconoBuscar} className="IconoBuscar" alt="Buscar" />
            </Button>
          </InputGroup>
          
          <Button type="submit" className="btnRound">
          <img src={IconoClear} className="IconoClear" alt="Clear" />
          </Button>
          </Col>
        </Row>
      </Container>
      <Container className="cards">
        <Row className="justify-content-md-center">
          
        
          <CardDeck className="mt-4">
            <Col xs={4}>
              <Card>
                <Card.Img variant="top" src={RepoAvatar} />
                <Card.Body>
                  <Card.Title>Michael - <span className="type">User</span></Card.Title>
                  <Card.Text>
                    <div className="title"><div className="subTitle"> location</div>San Francisco, CA</div>
                    <div className="title"><div className="subTitle">url: </div>https://api.github.com/users/1</div>
                    <div className="title"><div className="subTitle">Date: </div>2/06/2020</div>
                    
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted "> 3 repos</small>
                  <small className="text-muted"> 26 followers</small>
                  <small className="text-muted"> 0 following</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col xs={4}>
              <Card>
                <Card.Img variant="top" src={RepoAvatar} />
                <Card.Body>
                  <Card.Title>No se encontraron </Card.Title>
                  <Card.Text> resultrados.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            </CardDeck>
          
        
        </Row>
      </Container>
    </div>
  );
}

export default App;

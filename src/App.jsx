import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from './components/Form'
import Result from './components/Result'

// import './App.css'

function App() {
  const [inputValues, setInputValues] = useState({
    height: 100,
    weight: 55
  });

  const handleInputChanges = (key, value) => {
    setInputValues({...inputValues, [key]: value});
  }

  const imcCalc = () => {
    const tHgt = inputValues.height / 100;
    // console.log(`Altura ${tHgt} | Peso ${inputValues.weight} `);
    return parseFloat((inputValues.weight) / (tHgt*tHgt)).toFixed(2);
  };

  return (
    <Container>
      <header className='my-5'> {/* top and bottom */}
        <Col>
          <Row className='justify-content-md-center'>
            <Col md="auto">
              <h1 className='col-md'>Calculadora IMC</h1>
            </Col>
          </Row>

        </Col>
      </header>
      <main>
        <Form inputs={inputValues} onInputChange={handleInputChanges} />
        <Result imc={imcCalc()} />
      </main>
    </Container>
  )
}

export default App
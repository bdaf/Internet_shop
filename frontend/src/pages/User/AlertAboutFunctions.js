import { useState } from 'react';
import { Row, Col, Stack, Form, FloatingLabel, Button, Alert, CloseButton } from 'react-bootstrap';


const AlertAboutFunctions = () => {
        const [show, setShow] = useState(true);

        return (
          <>
            <Alert show={show} variant="success">
              <Alert.Heading>Informacja dotycząca strony</Alert.Heading>
              <p>
              Ze względu na prowadzone prace mające na celu stałe ulepszanie naszej strony internetowej jesteśmy zmuszeni chwilowo zawiesić funkcjonalność widocznych akcji na zamówieniach, prosimy o cierpliwość i zapewniamy niezmienność wyglądu widzianej przez państwa strony.
              </p>
              <hr />
              <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                  Zamknij informację
              </Button>
              </div>
          </Alert>

          {!show && <Button className="mb-2" onClick={() => setShow(true)}>Tymczasowy brak funkcjonalności - przepraszamy za niedogodnienia</Button>}
        </>
        );
}

export default AlertAboutFunctions
import React from "react";

import Description from "./Description";
import  Image  from "./Image";
import Price  from "./Price";
import Name from "./Name";
import { Card, Container } from "react-bootstrap";
import  Nav from "./Nav";

function App() {
  return (
    <div className="App">           
        <Nav />
        <Container className="d-flex justify-content-center mt-5">
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', borderRadius: '10px' }}>
                <Image />
                <Card.Body>
                    <Name />
                    <Price />
                    <Description />
                </Card.Body>                    
            </Card>
        </Container>
    </div>
  );
}
export default App;
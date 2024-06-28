import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const WhyChoose = () => {
  return (
    <main>
      <Container fluid className="text-center bg-dark p-5 "  bg="dark" variant="dark">
         <Card bg="dark"   text='light '>
         <Card.Body>
                <Card.Title>UNLOCK YOUR POTENTIAL IN THE WORLD OF USER TECHNOLOGY</Card.Title>
                <Card.Text>
                Take Your Spa Esthetician Career to New Heights with Laser School.
                </Card.Text>
              </Card.Body>
            </Card>
       
             <Button variant="primary" className="mt-3">Book Your Call Now!</Button>
      </Container>

      <Container className="mt-5">
        <Row >
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Comprehensive Laser Training</Card.Title>
                <Card.Text>
                  Our courses cover a wide range of laser procedures, including hair removal, skin rejuvenation, tattoo removal, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Hands-on Experience</Card.Title>
                <Card.Text>
                Our courses cover a wide range of laser procedures, including hair removal, skin rejuvenation, tattoo removal, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Industry-Recognized Certifications</Card.Title>
                <Card.Text>
                Our courses cover a wide range of laser procedures, including hair removal, skin rejuvenation, tattoo removal, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

     
    </main>
  );
};

export default WhyChoose;

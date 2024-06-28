import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const QuantumAesthetics = () => {
  return (
    <Container>
      <Row className="justify-content-center my-4">
        <Col md={6}>
          <div className="map-container" style={{ height: '250px' }}>
            <MapContainer center={[33.4148, -111.9382]} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[33.4148, -111.9382]} icon={customIcon}>
                <Popup>
                  Quantum Aesthetics<br /> 2210 S. Mill Ave, Ste 7, Tempe, Arizona 85282.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <h2>Quantum Aesthetics</h2>
          <p>2210 S. Mill Ave, Ste 7<br />Tempe, Arizona 85282<br />(480) 580-4328</p>
          <h4>Hours</h4>
          <p>Wednesday - Friday<br />10:00 am - 5:00 pm</p>
          <div>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x mx-3"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x mx-3"></i>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuantumAesthetics;

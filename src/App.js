import React from 'react';
import Header from './components/Header';
import WhyChoose from './components/WhyChoose';
import Footer from './components/Footer';
import Map from './components/Map';
import './App.css';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="App">
      <Header />
      <WhyChoose />
      <CallToAction />
      <Map />
      <Footer />
    </div>
  );
}

export default App;

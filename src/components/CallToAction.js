import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section text-white text-center">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2>Ready to Take the Next Step?</h2>
            <p>Don't miss out on this incredible opportunity to unlock your potential and embark on a rewarding career journey. Speak with one of our knowledgeable advisors. We'll provide personalized guidance, answer your questions, and help you choose the perfect laser training program that aligns with your goals and aspirations.</p>
            <a href="#" className="btn btn-light">Book Your Call Now!</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

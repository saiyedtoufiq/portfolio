import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { Col, Container, Row } from 'reactstrap';

const Contact = () => {
  const [result, setResult] = useState("");
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
    access_key: '2aba64ba-eb7c-4dea-bb40-86e764c8fb81' // Replace with your actual access key
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData(e.target);
      // ensure access_key is included (form doesn't have a hidden input for it)
      formDataToSend.append('access_key', formValues.access_key);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const resJson = await response.json();
      setResult(resJson.message || 'Message sent successfully');

      // clear inputs (keep access_key)
      setFormValues({ ...formValues, name: '', email: '', message: '' });
    } catch (err) {
      setResult('Something went wrong. Please try again later.');
      console.error(err);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-body">
      <Container fluid>
        <Row className='g-5'>
          {/* Contact Info */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="display-6 fw-bold text-body mb-4">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <p className="fs-5 text-secondary mb-5" style={{ lineHeight: '1.8' }}>
                I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to drop me a message!
              </p>

              <div className="d-flex flex-column gap-4">
                <a
                  href="mailto:saiyedtoufiq@gmail.com"
                  className="d-flex align-items-center gap-3 text-secondary text-decoration-none transition-colors hover-primary"
                >
                  <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary" style={{ width: '3rem', height: '3rem' }}>
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="fs-5">saiyedtoufiq@gmail.com</span>
                </a>

                <div className="d-flex gap-3 pt-3">
                  <a
                    href="https://github.com/saiyedtoufiq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle bg-body-tertiary text-secondary transition" style={{ width: '3rem', height: '3rem' }}
                    onMouseEnter={(e) => { e.currentTarget.classList.add('bg-primary', 'text-white'); e.currentTarget.classList.remove('bg-body-tertiary', 'text-secondary'); }}
                    onMouseLeave={(e) => { e.currentTarget.classList.remove('bg-primary', 'text-white'); e.currentTarget.classList.add('bg-body-tertiary', 'text-secondary'); }}
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/toufiq-saiyed-6799b4b6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle bg-body-tertiary text-secondary transition" style={{ width: '3rem', height: '3rem' }}
                    onMouseEnter={(e) => { e.currentTarget.classList.add('bg-primary', 'text-white'); e.currentTarget.classList.remove('bg-body-tertiary', 'text-secondary'); }}
                    onMouseLeave={(e) => { e.currentTarget.classList.remove('bg-primary', 'text-white'); e.currentTarget.classList.add('bg-body-tertiary', 'text-secondary'); }}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-body-tertiary p-4 p-md-5 rounded-4 border border-secondary-subtle"
            >
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                <div>
                  <label htmlFor="name" className="form-label fw-medium text-body">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                    className="form-control form-control-lg bg-body text-body border-secondary-subtle focus-ring focus-ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label fw-medium text-body">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                    className="form-control form-control-lg bg-body text-body border-secondary-subtle focus-ring focus-ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="form-label fw-medium text-body">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="form-control form-control-lg bg-body text-body border-secondary-subtle focus-ring focus-ring-primary"
                    style={{ resize: 'none' }}
                    placeholder="Your message here..."
                  />
                </div>
                <Button type="submit" className="w-100 mt-2">
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default Contact;

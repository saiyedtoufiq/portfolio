import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { skills } from '../services/data.json';
import { Col, Row } from 'reactstrap';

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="container bg-body-tertiary">
      <div className="text-center mb-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-6 fw-bold text-body mb-3"
        >
          Technical <span className="text-primary">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-secondary fs-5 mx-auto"
          style={{ maxWidth: '42rem' }}
        >
          A comprehensive list of technologies and tools I work with to build robust applications.
        </motion.p>
      </div>
      <Row className="g-4">
        {skills.map((category, catIndex) => (
          <Col md={6} lg={3} key={category.category}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="card h-100 border-secondary-subtle shadow-sm hover-shadow transition"
            >
              <div className="card-body p-4">
                <h3 className="h5 fw-bold text-body mb-4 pb-2 border-bottom border-secondary-subtle">
                  {category.category}
                </h3>

                <div className="d-flex flex-column gap-3">
                  {category.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ x: 5 }}
                      className="d-flex align-items-center gap-3 group"
                    >
                      <span className="fs-4 transition-transform group-hover-scale" style={{ transition: 'transform 0.2s' }}>
                        {skill.icon}
                      </span>
                      <span className="text-secondary fw-medium transition-colors group-hover-primary">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </SectionWrapper>
  );
};

export default Skills;

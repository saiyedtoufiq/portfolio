import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { experiences } from '../services/data.json';
import { List } from 'reactstrap';

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="bg-body-tertiary">
      <div className="text-center mb-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-6 fw-bold text-body mb-3"
        >
          Work <span className="text-primary">Experience</span>
        </motion.h2>
      </div>

      <div className="mx-auto" style={{ maxWidth: '48rem' }}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="position-relative ps-4 pb-5 border-start border-2 border-primary border-opacity-25"
          >
            {/* Timeline Dot */}
            <div className="position-absolute rounded-circle bg-primary border border-4 border-body" style={{ left: '-11px', top: '0', width: '20px', height: '20px' }} />

            <div className="bg-body p-4 rounded-4 shadow-sm border border-secondary-subtle hover-shadow transition">
              <div className="d-flex flex-wrap justify-content-between align-items-start mb-4">
                <div>
                  <h3 className="h5 fw-bold text-body d-flex align-items-center gap-2 mb-1">
                    <Briefcase className="w-5 h-5 text-primary" />
                    {exp.role}
                  </h3>
                  <p className="text-primary fw-medium mb-0">
                    {exp.company}
                  </p>
                </div>
                <div className="d-flex align-items-center small text-secondary mt-2 mt-sm-0 bg-secondary bg-opacity-10 px-3 py-1 rounded-pill">
                  <Calendar className="w-4 h-4 me-2" />
                  {exp.duration}
                </div>
              </div>

              <List type="unstyled" className="mb-0 d-flex flex-column gap-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="d-flex align-items-start text-secondary">
                    <span className="me-2 mt-2 bg-primary rounded-circle flex-shrink-0" style={{ width: '6px', height: '6px' }} />
                    <span style={{ lineHeight: '1.6' }}>{item}</span>
                  </li>
                ))}
              </List>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;

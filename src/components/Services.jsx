import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import "../styles/components/services.css";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div className="serviceContents" id="services">
      <div>all services</div>
      <div ref={ref} className="projectCounts">
        <div className="designDetails">
          <p className="counts">
            {inView && <CountUp start={0} end={2000} duration={2} delay={0} />}+
          </p>
          <h2>Projects Completed</h2>
        </div>
        <div className="clientDetails">
          <p className="counts">
            {inView && <CountUp start={0} end={500} duration={2} delay={0} />}+
          </p>
          <h2>Happy Clients</h2>
        </div>
        <div className="teamDetails">
          <p className="counts">
            {inView && <CountUp start={0} end={20} duration={2} delay={0} />}+
          </p>
          <h2>Teams</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import './LoanSection.css';
const Section = () => {
  return (
    <div>
      <section class="why-us" style={{marginTop:"380px"}}>
        <div class="benefit">
          <h2>Streamlined Process</h2>
          <p>
            Our digital loan management system simplifies and streamlines the
            loan application and approval process. Say goodbye to long queues
            and paperwork.
          </p>
        </div>
        <div class="benefit">
          <h2>Faster Approvals</h2>
          <p>
            With our system, you can expect quicker loan approvals. We leverage
            technology to make decisions faster, reducing waiting times for
            borrowers.
          </p>
        </div>
        <div class="benefit">
          <h2>Secure and Convenient</h2>
          <p>
            Your data's security is our top priority. Our platform offers a
            secure environment for your financial transactions. Apply for loans
            from the comfort of your home.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Section;

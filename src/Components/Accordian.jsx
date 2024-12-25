import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQAccordion() {
  return (
    <div>
      <h1 className="my-10 font-semibold text-2xl">Frequently Asked Questions</h1>
      {[
        { question: "What is Backend Forge?", answer: "Backend Forge is a reliable and scalable backend service provider designed to streamline your app development process." },
        { question: "Why choose Backend Forge?", answer: "We offer secure, high-performance backend solutions tailored to your project needs with round-the-clock support." },
        { question: "Who needs Backend Forge services?", answer: "Our services are ideal for startups, enterprises, and developers looking to focus on frontend development while outsourcing backend tasks." },
        { question: "What benefits do we offer?", answer: "Faster development time, highly scalable solutions, and cost-effective pricing." },
        { question: "How secure are our backend solutions?", answer: "We prioritize security by implementing modern encryption techniques, regular audits, and data compliance measures." },
        { question: "Can Backend Forge support my existing infrastructure?", answer: "Yes, we integrate seamlessly with your current stack, enhancing performance without disruption." },
      ].map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

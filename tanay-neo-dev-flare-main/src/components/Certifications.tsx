import React from "react";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner-C02",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Jun 2025 · Expires Jun 2028",
    credential: "Credential ID 7a4dbca6b68a4bf884711d911a909bca",
    url: "https://www.credly.com/badges/7a4dbca6b68a4bf884711d911a909bca"
  },
  {
    title: "Foundation Level Certificate in Programming & Data Science",
    issuer: "Indian Institute of Technology, Madras",
    date: "Issued Sep 2024",
    credential: "Credential ID 23F2004044",
    url: "https://example.com/iitm-certificate-23F2004044"
  },
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "Issued Jul 2024",
    credential: "Credential ID W9FRW5Z8UDX6",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/W9FRW5Z8UDX6"
  },
  {
    title: "Cyber Samurai Program in Cyber Defence",
    issuer: "Indian Institute of Technology Jodhpur",
    date: "Issued Jul 2023",
    credential: "Enrollment No. 2023/CS/39/2225",
    url: "https://example.com/iitj-cyber-samurai-2023"
  }
];

const Certifications = () => (
  <section id="certifications" className="section-padding bg-surface/10 mb-12">
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space-grotesk">Licenses & Certifications</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {certifications.map((cert, idx) => (
        <a
          key={idx}
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-card group cursor-pointer bg-surface-elevated p-4 rounded-lg border border-muted transition-transform duration-200 hover:border-primary hover:shadow-lg hover:-translate-y-1 block no-underline"
        >
          <div className="font-semibold mb-1 group-hover:text-primary transition-colors">{cert.title}</div>
          <div className="text-sm text-muted-foreground mb-1">{cert.issuer}</div>
          <div className="text-xs text-muted-foreground mb-1">{cert.date}</div>
          <div className="text-xs text-muted-foreground">{cert.credential}</div>
        </a>
      ))}
    </div>
  </section>
);

export default Certifications;

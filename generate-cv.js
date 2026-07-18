import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument({ size: 'A4', margin: 40 });

if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public', { recursive: true });
}
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist', { recursive: true });
}

const publicStream = fs.createWriteStream('./public/sakshi-cv.pdf');
doc.pipe(publicStream);

// Header
doc.fontSize(20).font('Helvetica-Bold').fillColor('#111827').text('SAKSHI PATIL', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(9).font('Helvetica').fillColor('#4b5563').text(
  'Palghar, Maharashtra, India   |   sakshhi.work@gmail.com   |   linkedin.com/in/sakshi-patil-9a3823245',
  { align: 'center' }
);
doc.moveDown(0.8);

// Horizontal line
doc.strokeColor('#e5e7eb').lineWidth(1).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
doc.moveDown(0.8);

function addSectionHeader(title) {
  doc.fontSize(11).font('Helvetica-Bold').fillColor('#111827').text(title.toUpperCase(), { characterSpacing: 0.5 });
  doc.moveDown(0.3);
  doc.strokeColor('#111827').lineWidth(1.5).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
  doc.moveDown(0.5);
}

// Summary
addSectionHeader('Professional Summary');
doc.fontSize(9.5).font('Helvetica').fillColor('#374151').text(
  "Versatile Software and Data Professional with hands-on experience spanning full-stack application development, data engineering pipelines, and data analytics. Adept at architecting automated ETL workflows, optimizing analytical dashboards, and integrating AI-driven systems. Proven technical proficiency across Java, Python, SQL, and React, combined with a strong analytical background to bridge software infrastructure with business intelligence.",
  { align: 'justify', lineGap: 3 }
);
doc.moveDown(1.2);

// Technical Skills
addSectionHeader('Technical Skills');
const skills = [
  ['Languages & UI:', 'Java, JavaScript, Python (Pandas, NumPy, FastAPI), React, TypeScript, SQL (PostgreSQL, MySql)'],
  ['Backend & DB:', 'REST APIs, MongoDB, MySQL, PHP, Mongoose, Prisma'],
  ['Data Engineering:', 'PySpark, Azure Data Factory, Power Query, ETL Pipelines, Data Cleansing, Error Auditing, Multi-source Aggregation, Pipeline Orchestration, LLM Integration'],
  ['Tools & Frameworks:', 'Git, GitHub, Databricks, Power BI, Tableau, Advanced Excel (Pivot Tables, Power Pivot, Nested Logic Strings)'],
  ['Familiar with:', 'Docker, Kubernetes, R, Go, Scala']
];

for (const [category, val] of skills) {
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#111827').text(category + ' ', { continued: true })
     .font('Helvetica').fillColor('#374151').text(val, { lineGap: 2 });
}
doc.moveDown(1.2);

// Work Experience
addSectionHeader('Work Experience');

const jobs = [
  {
    title: 'Data Management Analyst',
    company: 'Mentorbuddy',
    location: 'Mumbai, India (Remote)',
    date: 'Jan 2026 – May 2026',
    bullets: [
      'Automated corporate business intelligence reporting loops by architecting scalable Power BI workflows and advanced diagnostic Excel models.',
      'Cleaned, parsed, and consolidated messy, multi-source operations datasets containing tens of thousands of records using Power Query to establish an audited data baseline.',
      'Enhanced reporting efficiency and data validation pipelines by 45%, providing clear quantitative visibility that directly guided executive board decisions.'
    ]
  },
  {
    title: 'Data Science & Analysis Intern',
    company: 'NASSCOM x BNP Paribas',
    location: 'Mumbai Metropolitan Area, India',
    date: 'Aug 2025 – Jan 2026',
    bullets: [
      'Ranked as a top performer among 200+ selected participants for outstanding data modeling, precise calculations, and successful final reporting outcomes.',
      'Utilized advanced Excel functions, filtering logic, and custom cross-tables to pull, sanitize, and cross-verify transactional information from relational database endpoints.',
      'Translated messy operational data matrix logs into concise, interactive Excel charts and dashboards tracking operational risk indicators for senior management.'
    ]
  },
  {
    title: 'Software Engineering Internship',
    company: 'Unnovative Internship',
    location: 'Remote',
    date: 'June 2024 – June 2025',
    bullets: [
      'Developed Sahayak, a cross-platform mobile application using React Native designed to improve digital accessibility for senior citizens through voice interactions.',
      'Developed intuitive voice-based interaction features for easier navigation and reduced voice command latency by approximately 30%.',
      'Integrated AI-powered responses for seamless user assistance and implemented behavioral tracking to personalize user interactions.',
      'Collaborated effectively with team members throughout the entire lifecycle of design, development, testing, and deployment.'
    ]
  },
  {
    title: 'Generative AI Intern',
    company: 'Google Cloud Skill Boost',
    location: 'Remote',
    date: 'July 2024 – Sept 2024',
    bullets: [
      'Formulated validation mechanisms for processing tabular metrics from LLM application test cycles, organizing unstructured logs into clearly structured analytical overviews.'
    ]
  }
];

for (const job of jobs) {
  doc.fontSize(10).font('Helvetica-Bold').fillColor('#111827').text(job.title, { continued: true });
  doc.fontSize(10).font('Helvetica-Bold').fillColor('#4b5563').text(`  |  ${job.company}`, { continued: false });
  doc.fontSize(9.5).font('Helvetica').fillColor('#4b5563').text(job.date, { align: 'right', lineGap: 2 });
  
  doc.fontSize(9).font('Helvetica-Oblique').fillColor('#6b7280').text(job.location, { align: 'left' });
  doc.moveDown(0.2);

  for (const bullet of job.bullets) {
    doc.fontSize(9).font('Helvetica').fillColor('#374151')
       .text('• ', { continued: true })
       .text(bullet, { align: 'justify', lineGap: 2, indent: 10 });
  }
  doc.moveDown(0.6);
}

// Add Page 2
doc.addPage();

// Projects
addSectionHeader('Key Analytical & Engineering Projects');

const projects = [
  {
    title: 'Full-Stack AI Model Governance & Analytics Platform',
    tech: 'Python (FastAPI), React, TypeScript',
    bullets: [
      'Built and maintained robust UIs and backend frameworks to support systematic risk taking and programmatic model tracking.',
      'Designed highly responsive dashboards using React and TypeScript to visualize live systematic metrics, asset states, and automated performance logs.'
    ]
  },
  {
    title: 'Delivery SLA Breach Analyzer | Azure Data Engineering Pipeline',
    tech: 'PySpark, Azure Data Factory, Python',
    bullets: [
      'Engineered automated high-scale data parsing pipelines to process and clean large-scale transactional tables, ensuring system robustness.',
      'Implemented performance attribution tracking and error auditing over extensive logs to mitigate latency and optimize data scalability.'
    ]
  },
  {
    title: 'Retail Sales & Inventory Executive Dashboard',
    tech: 'Advanced Excel, Power Query, Pivot Tables',
    bullets: [
      'Consolidated disconnected raw records from multiple Sales, Inventory, and Location layers into a unified master cross-mapping matrix via Power Query.'
    ]
  }
];

for (const proj of projects) {
  doc.fontSize(10).font('Helvetica-Bold').fillColor('#111827').text(proj.title, { continued: true });
  doc.fontSize(9.5).font('Helvetica').fillColor('#4b5563').text(`   (${proj.tech})`, { continued: false });
  doc.moveDown(0.2);

  for (const bullet of proj.bullets) {
    doc.fontSize(9).font('Helvetica').fillColor('#374151')
       .text('• ', { continued: true })
       .text(bullet, { align: 'justify', lineGap: 2, indent: 10 });
  }
  doc.moveDown(0.6);
}

doc.moveDown(0.6);

// Education
addSectionHeader('Education & Certifications');

doc.fontSize(10).font('Helvetica-Bold').fillColor('#111827').text('University of Mumbai, SJCEM College Palghar', { continued: true });
doc.fontSize(9.5).font('Helvetica').fillColor('#4b5563').text('   Graduated: June 2024', { align: 'right' });
doc.fontSize(9.5).font('Helvetica-Oblique').fillColor('#374151').text('Bachelor of Engineering (B.E.) in Electronics & Telecommunication (EXTC) with Honors in Data Science');
doc.moveDown(0.5);

const certs = [
  'Advanced Excel in Financial Modelling Certification - Jobaaj',
  'Data Science and Analysis Certification - NASSCOM & Ministry of Electronics and IT',
  'Databricks Data Engineering + SQL Analytics and BI Certification - Databricks',
  'Advanced Software Engineering Job Simulation - Walmart USA (Forage)'
];

for (const cert of certs) {
  doc.fontSize(9).font('Helvetica').fillColor('#374151')
     .text('▪ ', { continued: true })
     .text(cert, { lineGap: 2, indent: 10 });
}

doc.end();

publicStream.on('finish', () => {
  console.log('Successfully generated public/sakshi-cv.pdf');
  fs.copyFileSync('./public/sakshi-cv.pdf', './dist/sakshi-cv.pdf');
  console.log('Successfully copied to dist/sakshi-cv.pdf');
});

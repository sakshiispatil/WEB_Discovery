export interface Project {
  id: string;
  title: string;
  headline: string;
  shortDesc: string;
  longDesc: string;
  challenges: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  capstonePdfUrl?: string; // Explicit capstone PDF URL
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: "novamart-retail",
    title: "Enterprise Retail Intelligence Platform",
    headline: "Enterprise Retail Intelligence Platform – AI-Powered Demand Forecasting & Inventory Optimization using Machine Learning and Power BI",
    shortDesc: "An end-to-end retail analytics solution for NovaMart Retail, using machine learning and Power BI to forecast demand and optimize inventory health.",
    longDesc: `# **Enterprise Retail Intelligence Platform**

**Author:** Sakshi Patil

## **Project Title**

**Enterprise Retail Intelligence Platform – AI-Powered Demand Forecasting & Inventory Optimization using Machine Learning and Power BI**

---

# **Project Summary**

The Enterprise Retail Intelligence Platform is an end-to-end retail analytics solution developed for NovaMart Retail, a fictional enterprise inspired by the operational challenges faced by large omnichannel retailers. The project leverages historical sales data and machine learning to forecast product demand, evaluate inventory health, and generate intelligent restocking recommendations that enable data-driven inventory management.

The solution follows the complete data analytics lifecycle, beginning with data collection and preprocessing, followed by exploratory data analysis, feature engineering, predictive modeling, inventory optimization, and interactive business intelligence reporting. Using a retail dataset containing one million transaction records, the platform predicts future product demand, analyzes sales trends across stores and product categories, and classifies inventory into actionable business states such as Critical, Restock Required, Healthy, and Overstocked.

A Random Forest Regression model is used to forecast demand, while a rule-based inventory recommendation engine translates predictions into practical replenishment decisions. The processed data is then visualized through an interactive Power BI dashboard, allowing retail managers to monitor sales performance, inventory health, demand forecasts, and operational KPIs. By combining predictive analytics with business intelligence, the platform enables organizations to proactively reduce stock shortages, minimize excess inventory, and improve overall supply chain efficiency.

---

# **Business Insights Generated**

* **Future demand forecasting for products** to support planning and replenishment strategies.
* **Inventory health monitoring** to classify inventory into Critical, Restock Required, Healthy, and Overstocked.
* **Stock shortage identification** to minimize lost sales and customer dissatisfaction.
* **Overstock detection** to reduce holding costs and optimize warehouse space.
* **Restocking recommendations** powered by a rule-based decision engine.
* **Product category performance analysis** to understand top-selling and high-margin products.
* **Store-wise sales analysis** to benchmark and track performance across retail locations.
* **Revenue and sales trend monitoring** to discover seasonal variations and growth patterns.
* **Inventory optimization KPIs** like safety stock, reorder points, and replenishment quantities.
* **Data-driven decision support** for store operations and corporate logistics planning.

---

# **Skills Demonstrated**

* **Data Cleaning & Preprocessing** at scale.
* **Exploratory Data Analysis (EDA)** to extract meaningful insights.
* **Feature Engineering** for spatial, temporal, and category performance attributes.
* **Machine Learning Model Development** and regression validation.
* **Regression Modeling** using ensemble techniques.
* **Demand Forecasting** with high-accuracy modeling.
* **Inventory Optimization** using safety-stock and reorder calculations.
* **Business Intelligence (BI)** dashboard design.
* **Power BI Dashboard Development** with interactive slicing and measures.
* **Data Storytelling** to align analytical findings with corporate goals.
* **Git Version Control** and structured workspace management.

---

# **Project Outcomes**

* **Improved inventory visibility** through predictive analytics.
* **Enabled proactive replenishment planning** using demand forecasts.
* **Reduced risks** associated with stock shortages and excess inventory.
* **Delivered interactive dashboards** for executive and operational reporting.
* **Demonstrated an end-to-end enterprise analytics workflow** from raw data to business intelligence.
* **Built a scalable solution** that can be extended to larger retail datasets and real-world enterprise environments.

---

# **Project Conclusion**

The Enterprise Retail Intelligence Platform demonstrates how machine learning and business intelligence can be integrated to solve real-world retail inventory management challenges. By implementing a scalable data preprocessing pipeline, developing a Random Forest Regression model for demand forecasting, and building an inventory optimization engine, the project provides actionable recommendations that support smarter inventory planning and replenishment strategies.

The interactive Power BI dashboards offer stakeholders a comprehensive view of product performance, inventory health, sales trends, and future demand, enabling informed business decisions across retail operations. Although the current implementation uses a one-million-record dataset for efficient experimentation and model development, the architecture is designed to scale to significantly larger datasets with minimal modifications. Overall, the project showcases practical expertise in data analytics, machine learning, business intelligence, and software development while demonstrating how predictive analytics can improve operational efficiency and inventory optimization in enterprise retail environments.

---

# **Tech Stack Used**

**Programming**
* Python

**Data Processing & Analysis**
* Pandas
* NumPy

**Machine Learning**
* Scikit-learn
* Random Forest Regression

**Data Visualization**
* Power BI Desktop

**Data Storage**
* CSV Dataset (1 Million Retail Transactions)

**Version Control**
* Git & GitHub

**Development Environment**
* Visual Studio Code (VS Code)
* Jupyter Notebook
* Git Bash`,
    challenges: "Handling feature extraction, collinearity, and predicting demand patterns accurately on a massive 1-million-record transaction dataset.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Power BI", "Git"],
    imageUrl: "/Retail_Intelligence.jpg",
    githubUrl: "https://github.com/sakshiispatil/Enterprise_Retail_Intelligence_Platform_ML_DataEngineering_Analytics_Portfolio",
    liveUrl: ""
  },
  {
    id: "novatrust-credit-risk",
    title: "NovaTrust Credit Risk Intelligence Platform",
    headline: "Credit Risk Intelligence Platform – An End-to-End Data Engineering, Machine Learning & Power BI Analytics Solution for NovaTrust Financial Services",
    shortDesc: "An end-to-end credit risk assessment and loan default prediction platform combining Python pipelines, machine learning, and interactive Power BI dashboards.",
    longDesc: `# **Credit Risk Intelligence Platform**

**Author:** Sakshi Patil

## **Project Title**

**Credit Risk Intelligence Platform – An End-to-End Data Engineering, Machine Learning & Power BI Analytics Solution for NovaTrust Financial Services**

---

# **Project Summary**

Credit Risk Intelligence Platform is an end-to-end analytics solution developed for NovaTrust Financial Services, a fictional Non-Banking Financial Company (NBFC), to modernize loan risk assessment and portfolio monitoring. The project automates the complete analytics lifecycle by building a reusable data engineering pipeline to clean and prepare historical loan application data, developing multiple machine learning models to predict loan default risk, and generate applicant-level risk scores and risk bands for proactive decision-making. The processed data is then integrated into an interactive multi-page Power BI dashboard that enables executives, risk analysts, and collections teams to monitor portfolio health, identify high-risk borrowers, and support data-driven lending strategies. The solution combines Python, Pandas, Scikit-learn, XGBoost, Power BI, and Git to demonstrate practical skills across data engineering, predictive analytics, and business intelligence.

---

# **Project Conclusion**

The project successfully demonstrates how an end-to-end analytics platform can transform traditional, manual loan risk assessment into a scalable, data-driven process. By implementing a reusable data cleaning pipeline, comparing multiple machine learning models for default prediction, generating applicant risk scores, and visualizing insights through interactive Power BI dashboards, the solution provides stakeholders with a unified view of loan portfolio performance and credit risk. The project showcases practical experience in data engineering, machine learning, business intelligence, and software development best practices while illustrating how predictive analytics can support more informed lending decisions, improve operational efficiency, and enable proactive risk management within financial institutions.

---

# **Tech Stack Used**

**Programming**

* Python

**Data Engineering**

* Pandas, NumPy

**Machine Learning**

* Scikit-learn, XGBoost, Imbalanced-learn (SMOTE)

**Data Storage**

* CSV

**Visualization**

* Power BI Desktop

**Version Control**

* Git & GitHub

**Development Environment**

* VS Code, Git Bash`,
    challenges: "Mitigating extreme class imbalance in credit defaults and engineering robust risk features while validating model pipeline deployment parameters.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Power BI", "Git"],
    imageUrl: "/Credit_Risk_Analysis.jpg",
    githubUrl: "https://github.com/sakshiispatil/AI-ML-Data-Engineering-Analytics-Portfolio",
    liveUrl: ""
  },
  {
    id: "delivery-sla-breach-analyzer",
    title: "Delivery SLA Breach Analyzer",
    headline: "Delivery SLA Breach Analyzer – An End-to-End Azure Data Engineering Pipeline for Incremental Data Ingestion, Medallion Architecture, and Delivery Performance Analytics",
    shortDesc: "An end-to-end Azure Data Engineering solution to analyze delivery performance and identify SLA breaches using ADF, Databricks, and Delta Lake.",
    longDesc: `# **Delivery SLA Breach Analyzer**

**Author:** Sakshi Patil

## **Project Title**

**Delivery SLA Breach Analyzer – An End-to-End Azure Data Engineering Pipeline for Incremental Data Ingestion, Medallion Architecture, and Delivery Performance Analytics**

---

# **Project Summary**

Delivery SLA Breach Analyzer is an end-to-end Azure Data Engineering solution developed to analyze e-commerce delivery performance and identify Service Level Agreement (SLA) breaches using approximately **10,000 simulated order records**. The project demonstrates how modern cloud-based data engineering practices can automate the ingestion, transformation, and preparation of operational data for business analytics.

The solution implements a **metadata-driven, incremental ingestion framework** using **Azure Data Factory**, where watermark-based change detection enables efficient loading of only new or modified records. A single dynamic **ForEach** pipeline orchestrates ingestion across multiple source tables, creating a scalable and reusable ETL framework.

The ingested data is stored and transformed in **Azure Databricks** following the **Medallion Architecture (Bronze, Silver, and Gold)**. Parameterized **PySpark** notebooks perform data cleansing, validation, joins, and business transformations while leveraging **Delta Lake** for ACID-compliant storage and efficient append/overwrite operations. The final Gold layer produces analytics-ready datasets that help identify delivery delays across states, product categories, payment methods, and other business dimensions, enabling operational monitoring and data-driven decision-making.

This project showcases practical implementation of Azure cloud services, scalable ETL design patterns, Delta Lake, and distributed data processing using PySpark.

---

# **Project Conclusion**

The Delivery SLA Breach Analyzer successfully demonstrates the design and implementation of a modern, scalable Azure Data Engineering pipeline capable of processing incremental data efficiently. By combining **Azure Data Factory** for metadata-driven orchestration with **Azure Databricks** and **Delta Lake** for distributed data processing, the project establishes a reusable and production-oriented ETL framework following the Medallion Architecture.

The solution highlights industry-standard practices such as incremental loading, parameterized pipelines, dynamic orchestration, reusable notebook development, and layered data architecture. The resulting curated datasets provide meaningful business insights into delivery SLA performance, enabling stakeholders to monitor operational efficiency, identify recurring delivery delays, and support data-driven logistics optimization. Overall, the project demonstrates hands-on expertise in Azure Data Engineering, cloud-based ETL development, PySpark, Delta Lake, and scalable data pipeline design.

---

# **Tech Stack Used**

**Cloud Platform**

* Microsoft Azure

**Data Integration**

* Azure Data Factory (ADF V2)

**Data Processing**

* Azure Databricks

**Programming**

* Python
* PySpark

**Data Storage**

* Azure Data Lake Storage Gen2 (ADLS Gen2)

**Data Format**

* Delta Lake

**Architecture**

* Medallion Architecture (Bronze, Silver, Gold)

**ETL Design**

* Metadata-driven ETL
* Incremental Data Loading
* Watermark-based Change Detection
* Dynamic ForEach Pipelines
* Parameterized PySpark Notebooks

**Data Transformation**

* Data Cleansing
* Multi-table Joins
* Business Aggregations
* Delta Append & Overwrite Operations

**Version Control**

* Git & GitHub

**Development Environment**

* Azure Portal
* Azure Data Factory Studio
* Azure Databricks Workspace
* VS Code
* Git Bash`,
    challenges: "Handling watermark tracking for dynamic incremental metadata streams across distributed data tables while managing late-arriving schema variance gracefully within production delta layers.",
    technologies: ["Azure", "Data Factory", "Databricks", "PySpark", "Delta Lake", "Python"],
    imageUrl: "/Delivery_SLA.jpg",
    githubUrl: "https://github.com/sakshiispatil/Azure-Project",
    liveUrl: ""
  },
  {
    id: "ai-model-governance",
    title: "AI Model Governance & Analytics Platform",
    headline: "A Risk-Classification and Monitoring System for Comparing LLMs Across Performance, Cost, and Risk Metrics",
    shortDesc: "An in-progress full-stack risk-classification and monitoring system evaluating large language models (LLMs) side-by-side across performance, cost, and safety criteria.",
    longDesc: `# **AI Model Governance & Analytics Platform**

**STATUS: WORK IN PROGRESS**

---

### 📋 **1. OVERVIEW**
This project is an in-progress full-stack platform for monitoring and evaluating multiple large language models (LLMs) against a shared set of risk and performance criteria. It combines a Python/FastAPI backend, a React + TypeScript frontend, and a Pandas-based scoring layer, with Tableau used for comparative visualization. The core research question motivating the project is a practical version of an AI safety problem: given many LLMs in active use across an organization, how can risk be assessed consistently, transparently, and at a scale that does not depend on ad hoc manual review? The current implementation automates a portion of that review process; the sections below distinguish clearly between what is built and validated versus what is planned but not yet implemented.

---

### 🎯 **2. MOTIVATION AND PROBLEM FRAMING**
Organizations increasingly use several LLMs side by side for different tasks, each with different training data, capability profiles, and failure modes. Manual, one-off review of each model before deployment does not scale, is inconsistent across reviewers, and tends to under-document the reasoning behind a risk decision. This project treats model risk assessment as a structured classification problem: define a consistent set of metrics, score each model against them, and surface the result in a way that supports — rather than replaces — human judgment about deployment risk.

---

### 💻 **3. CURRENT PROGRESS (COMPLETED)**
* **Backend REST API (FastAPI, Pydantic)** exposing endpoints for retrieving model metadata, computed risk scores, and comparison results.
* **Data-processing layer (Pandas)** that ingests model metadata (performance, pricing, context window, and risk-relevant attributes) and applies configurable scoring rules to assign a risk category to each model.
* **Frontend dashboard (React, TypeScript, Tailwind CSS)** with reusable components for browsing models and viewing their computed risk classification.
* **Tableau-based comparative views** for benchmarking LLMs against one another across performance, pricing, context window, and risk metrics.
* **Initial reduction in manual review effort** (early internal estimate: ~70%) by replacing individual manual look-ups with a single dashboard view — this figure reflects a preliminary comparison against the prior manual process and has not yet been validated with a formal before/after study.

---

### 🚧 **4. NOT YET COMPLETE**
* **Automated ingestion of new model metadata** — currently metadata is loaded in batches rather than pulled continuously from live sources.
* **An adversarial or red-teaming component** — the current risk scores are based on declared/static model attributes, not on active probing for failure modes such as jailbreaks or unsafe outputs.
* **Expanded risk taxonomy** — current risk categories are a first pass and have not been validated against an external framework (see Section 6) or reviewed by a domain expert outside the author.
* **Formal evaluation of the scoring rules themselves** — no held-out test set or inter-rater comparison has yet been run to check whether the automated risk category matches what a human reviewer would assign.
* **User documentation** and a written model card for each tracked LLM.

---

### ⚙️ **5. DESIGN REASONING AND TRADEOFFS**
The scoring layer was designed around a small number of interpretable metrics (performance, pricing, context window, and risk indicators) rather than a single opaque composite score, so that a reviewer can see why a model was placed in a given risk category, not just the final label. This favors transparency and auditability over predictive sophistication.

The main tradeoff identified so far: rule-based, threshold-driven classification is easy to explain and debug, but it is brittle to edge cases that do not fit the predefined metric set — for example, a model that scores well on the tracked metrics but has a known issue in an area the current taxonomy does not cover. A more robust version would combine this rule-based layer with periodic qualitative review and, eventually, some form of adversarial testing rather than relying solely on declared attributes.`,
    challenges: "",
    technologies: ["Python", "FastAPI", "Pandas", "React", "TypeScript", "Tableau", "Pydantic"],
    imageUrl: "/AI_Model_Governance.jpg",
    githubUrl: "https://github.com/sakshiispatil/Model-Governance-Dashboard-",
    liveUrl: ""
  },
  {
    id: "weather-etl-pipeline",
    title: "Weather ETL Pipeline",
    headline: "Weather ETL Pipeline with Apache Airflow & Astro",
    shortDesc: "An end-to-end ETL pipeline developed using Apache Airflow and the Astronomer (Astro) CLI to automate weather data ingestion, transformation, and storage in PostgreSQL.",
    longDesc: `# Weather ETL Pipeline with Apache Airflow & Astro

## Overview

Developed an end-to-end **ETL (Extract, Transform, Load) pipeline** using **Apache Airflow** and the **Astronomer (Astro) CLI** to automate the ingestion, transformation, and storage of real-time weather data. The project demonstrates modern data engineering practices by orchestrating workflows as Directed Acyclic Graphs (DAGs), enabling reliable scheduling, monitoring, and execution of data pipelines.

The pipeline extracts weather data from the **Open-Meteo API**, transforms the raw JSON response into a structured format, and loads the processed data into a **PostgreSQL** database. The entire application is containerized with **Docker**, allowing consistent local development and seamless deployment to cloud environments.

## Key Features

* Designed and implemented an automated ETL pipeline using Apache Airflow.
* Created modular DAGs with the **TaskFlow API** and \`@task\` decorators.
* Extracted real-time weather data from the Open-Meteo REST API.
* Transformed raw JSON into structured, database-ready records.
* Loaded processed data into PostgreSQL with automated table creation and insertion.
* Configured Airflow Connections for secure API and database integration.
* Monitored workflow execution, task dependencies, logs, and scheduling through the Airflow Web UI.
* Containerized the application using Docker for reproducible development and deployment.
* Built the project using the Astro CLI, enabling easy local development and cloud deployment.

## Tech Stack

* Apache Airflow
* Astronomer (Astro CLI)
* Python
* PostgreSQL
* Docker & Docker Compose
* Open-Meteo REST API
* Airflow TaskFlow API
* Airflow HTTP Hook
* Airflow Postgres Hook
* SQL
* DBeaver
* Visual Studio Code
* Git

## Learning Outcomes

* Workflow orchestration with Apache Airflow.
* Designing scalable ETL pipelines.
* Data extraction from REST APIs.
* Data transformation and processing using Python.
* Database integration with PostgreSQL.
* Containerized development using Docker.
* Pipeline scheduling, monitoring, and debugging.
* Cloud-ready deployment practices using Astro.`,
    challenges: "Configuring secure connection hooks, orchestrating API schedules, and handling PostgreSQL schemas inside multi-container Docker networks.",
    technologies: ["Apache Airflow", "Astro CLI", "Python", "PostgreSQL", "Docker", "Docker Compose"],
    imageUrl: "/Whether_Dag.jpg",
    githubUrl: "https://github.com/sakshiispatil/MACHINE_LEARNING/tree/master/ETLWeather-main",
    liveUrl: ""
  },
  {
    id: "agridx",
    title: "AgriDx: Crop Disease Advisory System",
    headline: "AgriDx – An AI-Based Crop Leaf Disease Classification and Advisory System Using Deep Learning (Final Year Project Report)",
    shortDesc: "An AI-based image classification system capable of identifying crop leaf diseases from images and providing diagnostic-support using deep learning techniques.",
    longDesc: `# **AgriDx**

**An AI-Based Crop Leaf Disease Classification and Advisory System Using Deep Learning**  
*Final Year Project Report — Author: Sakshi Santosh Patil (April 2024)*

---

### 📋 **1. Executive Summary & Problem**
Agriculture is vital for global food security, yet crop leaf diseases cause catastrophic yields and economic losses. Traditional manual inspection by experts is slow and inaccessible in remote regions. 

**AgriDx** is an Artificial Intelligence-powered diagnostic support platform that automates leaf disease identification. By utilizing transfer learning with a lightweight **MobileNetV2** CNN architecture, the system achieves fast, localized, and highly accurate classifications, coupled with explainable AI (**Grad-CAM visualization**) to highlight regions influencing the predictions and an advisory recommendation engine.

---

### 🎯 **2. Project Objectives**
* **Automated Classification:** Create an image-based deep learning classifier for early disease detection.
* **Efficient Transfer Learning:** Train models using MobileNetV2 for lightweight, resource-constrained environments.
* **Explainable Diagnostics:** Integrate Grad-CAM to map prediction focus regions for increased user transparency.
* **Practical Prototyping:** Deploy a diagnostic-support web dashboard for instant farmer advisory feedback.

---

### 💻 **3. Technical Ecosystem**

| Component | Technology | Component | Technology |
| :--- | :--- | :--- | :--- |
| **Language** | Python | **Dataset Size** | 53,303 Images |
| **Frameworks** | TensorFlow / Keras | **Libraries** | OpenCV, Pillow, Pandas, NumPy |
| **Base Model** | MobileNetV2 | **Visualization** | Matplotlib, Seaborn, Grad-CAM |
| **Deployment** | Streamlit | **VCS** | Git |

---

### 📊 **4. Dataset & Methodology**
The project trained on **53,303 total plant leaf images** split into:
* **Training:** 38,104 images | **Validation:** 9,458 images | **Testing:** 5,741 images
* **Crop Scope:** Apple, Tomato, Potato, Corn, Grape, Rice, Pepper, Orange, Strawberry, Cassava, and more.

#### **Lifecycle Workflow:**
1. **Ingestion & EDA:** Loaded using TensorFlow utilities; verified image dimension consistency and class distributions.
2. **Preprocessing & Augmentation:** Applied pixel normalization, resizing, rotation, horizontal flipping, zoom, and brightness adjustments to avoid overfitting.
3. **Model Training:** Built a custom classifier head on top of pre-trained MobileNetV2 feature extractor weights.
4. **Explainability & Output:** Generated prediction confidence, cause of infection, symptoms, active prevention advisory, and Grad-CAM attention heatmap overlay.

---

### 📈 **5. Diagnostic Performance & Limitations**
The model evaluated on standard classification metrics: **Accuracy, Precision, Recall, and F1 Score**, using a **Confusion Matrix** to monitor class-wise performance.
* **Key Advantages:** Instant identification, reduces expert dependency, lightweight design ready for low-resource edge deployment, and explainable predictions.
* **Limitations:** Performance heavily correlates with dataset photo quality; laboratory conditions (uniform backgrounds) struggle with real field lighting/clutter.

---

### 🚀 **6. Case Study: Future Scope & Roadmap (2024-2026)**
To address current limitations and align with state-of-the-art research, AgriDx is designed with a multi-phase upgrade pathway:
* **Hybrid CNN-ViT Architectures:** Compare MobileNetV2 with lightweight Vision Transformers (ViT) to improve accuracy under complex backgrounds.
* **Closing the Lab-to-Field Gap:** Establish a field-condition test set of 50-100 naturally photographed leaves to measure and close the domain generalization gap.
* **Lightweight Edge Deployment:** Convert the model to **TensorFlow Lite** with INT8 quantization to evaluate latency/size trade-offs on mobile and edge devices.`,
    challenges: "Developing lightweight transfer learning using MobileNetV2 with Explainable AI concepts such as Grad-CAM for visualizing neural network predictions.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Pillow", "MobileNetV2", "Streamlit"],
    imageUrl: "/AgriDx.jpg",
    githubUrl: "",
    liveUrl: ""
  },
  {
    id: "cybersecurity-solutions",
    title: "Cyber Security Solutions",
    headline: "Cyber Security Solutions: A Handy Compact Tool for Cyber Well-Being",
    shortDesc: "An integrated hardware and software cybersecurity project developed to demonstrate common cyber threats and provide practical solutions for improving digital security.",
    longDesc: `# **Cyber Security Solutions: A Handy Compact Tool for Cyber Well-Being**

**Duration:** 2024 (Final Year B.E. Project)

---

## 🔍 **Overview**

**Cyber Security Solutions: A Handy Compact Tool for Cyber Well-Being** is an integrated hardware and software cybersecurity project developed to demonstrate common cyber threats and provide practical solutions for improving digital security. The project focuses on network protection, cyber awareness, threat detection, and portable cybersecurity tools.

The solution was designed around the core principles of cybersecurity—**Confidentiality, Integrity, and Availability (CIA)**—to help users understand and mitigate real-world cyber risks.

---

## ❗ **Problem Statement**

The increasing use of public Wi-Fi, portable devices, and digital services has exposed users to various cybersecurity threats such as unauthorized network access, malware, phishing, USB-based attacks, and cyber fraud.

The objective was to design a compact, plug-and-play cybersecurity toolkit capable of:
* Demonstrating common cyber attacks.
* Detecting suspicious activities.
* Improving user awareness of cybersecurity threats.
* Providing practical security solutions for Windows and Linux environments.

---

## 🎯 **Objectives**

* Demonstrate real-world cybersecurity attacks and defenses.
* Develop tools for detecting malicious activities.
* Improve cybersecurity awareness among users.
* Build a portable cybersecurity platform for security testing and learning.
* Showcase both hardware- and software-based security solutions.

---

## 🛠️ **Project Features & Implementation**

### 💻 **Software Implementation**

#### **1. Honeypot Deployment**
* Configured a network **Honeypot** using **Kali Linux** and **PentBox**.
* Simulated vulnerable network services to attract unauthorized access attempts.
* Captured and monitored attacker activities for analysis.
* Logged intrusion attempts and network information for security investigation.

#### **2. Virtualized Cybersecurity Environment**
* Installed **Kali Linux** on **Oracle VirtualBox**.
* Created an isolated environment for penetration testing and security experiments.
* Automated setup using Linux commands and shell scripting.

### 🔌 **Hardware Implementation**

#### **1. Raspberry Pi Portable Cybersecurity Device**
* Built a compact mini computer using **Raspberry Pi 3B+**.
* Installed **Raspberry Pi OS (Raspbian)**.
* Integrated a **3.5-inch TFT display** for portable operation.
* Designed the device to run cybersecurity tools and scripts in a lightweight, portable form factor.

#### **2. Wi-Fi Range Extension**
* Developed a compact **Wi-Fi Repeater** using **NodeMCU (ESP8266)** to improve wireless network coverage.

#### **3. USB Rubber Ducky Demonstration**
* Demonstrated USB-based attack techniques using a **USB Rubber Ducky** for cybersecurity awareness and ethical hacking education.
* Highlighted the importance of protecting systems against malicious USB devices.

---

## ⚙️ **Technologies Used**

* **Hardware:** Raspberry Pi 3B+, NodeMCU (ESP8266), 3.5-inch TFT Display, USB Rubber Ducky
* **OS / Environments:** Raspberry Pi OS (Raspbian), Kali Linux, Oracle VirtualBox
* **Utilities & Languages:** PentBox Honeypot, Shell Scripting, Linux Networking Tools, Git

---

## 🔑 **Key Outcomes**

* Successfully developed a portable cybersecurity toolkit integrating both hardware and software components.
* Implemented a functional Honeypot capable of detecting and logging unauthorized access attempts.
* Demonstrated practical cybersecurity concepts including intrusion detection, network monitoring, and ethical hacking.
* Built a compact Raspberry Pi-based security device capable of running cybersecurity tools in a portable environment.
* Enhanced awareness of Wi-Fi security and USB-based cyber threats through practical demonstrations.

---

## 🏆 **Skills Demonstrated**

* Cybersecurity Fundamentals
* Linux Administration
* Network Security
* Honeypot Deployment
* Raspberry Pi Development
* Virtualization
* Shell Scripting
* Embedded Systems
* Ethical Hacking Concepts
* Hardware Integration
* IoT Development`,
    challenges: "Configuring a lightweight, portable Linux system with hardware integration under strict power constraints, alongside setting up localized honeypot services that capture intruder packets in real-time.",
    technologies: ["Raspberry Pi", "Kali Linux", "Shell Scripting", "IoT", "Network Security", "PentBox"],
    imageUrl: "/mini_Computer.jpg",
    githubUrl: "",
    liveUrl: ""
  }
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: "Bachelor of Engineering (BE) in Electronics & Telecommunication (ENTC) - DS Graduate",
    institution: "Mumbai University (kalina) - SJCEM College",
    duration: "2020 – 2024",
    description: "Graduated with a strong foundation in Telecommunications, Computer Networks, Digital Signal & Image Processing, IoT, Embedded Systems, Cybersecurity, Cloud Computing, DBMS, and Programming. Gained hands-on experience with electronic equipment, circuit assembly, soldering, and real-world hardware-software project implementation. Actively participated in technical programs and project-based learning.",
    capstonePdfUrl: "#/projects/cybersecurity-solutions"
  },
  {
    degree: "Honors Degree in DataScience",
    institution: "Mumbai University - SJCEM College",
    duration: "2024",
    description: "Pragmatic, immersive under-graduate curriculum covering advanced Machine Learning architectures, regression diagnostics, neural network training, and analytics integration.",
    capstonePdfUrl: "#/projects/agridx"
  },
  {
    degree: "Higher Secondary Education Science Stream",
    institution: "City College VIVA",
    duration: "2020",
    description: "Completed Higher Secondary Education in the Science stream with a strong foundation in Physics, Chemistry, Mathematics, and Biology. Developed analytical and problem-solving skills through laboratory experiments, practical coursework, and scientific investigations, strengthening conceptual understanding and experimental techniques."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Software Development & Architecture",
    skills: [
      { name: "Next.js / React", level: 90, iconName: "Layers" },
      { name: "Node.js / Express", level: 85, iconName: "Server" },
      { name: "MERN Stack", level: 88, iconName: "Layers" },
      { name: "TypeScript", level: 90, iconName: "Code" },
      { name: "Java", level: 82, iconName: "Code" },
      { name: "Python Systems", level: 92, iconName: "Cpu" },
      { name: "Tailwind CSS & UI Layouts", level: 95, iconName: "Sparkles" },
      { name: "RESTful API / Graph-QL", level: 85, iconName: "Webhook" },
      { name: "Git & Containerization (Docker and Kubernetes)", level: 80, iconName: "Container" }
    ]
  },
  {
    title: "Data Science & Analytics",
    skills: [
      { name: "SQL & Database Administration", level: 92, iconName: "Database" },
      { name: "Machine Learning (Supervised/Unsupervised)", level: 87, iconName: "Brain" },
      { name: "Data Management", level: 95, iconName: "HardDrive" },
      { name: "Python (Pandas, NumPy, Scikit-Learn)", level: 93, iconName: "Cpu" },
      { name: "DataBricks, DataLake and Medallion Architecture", level: 88, iconName: "BarChart3" },
      { name: "Model Tuning & Regression Analysis", level: 86, iconName: "TrendingUp" },
      { name: "Big Data Systems (Apache Spark)", level: 80, iconName: "Network" },
      { name: "Tableau & PowerBI Analytics", level: 85, iconName: "PieChart" }
    ]
  }
];

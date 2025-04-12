'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <>
            <Head>
                <title>Akshit Verma | Data Engineer</title>
                <meta name="description" content="Resume for Akshit Verma, Data Engineer specializing in Python-based ETL pipelines, big data, and real-time analytics." />
            </Head>
            <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-8 text-gray-800">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Header />
                    <Section title="Professional Summary" content={summaryList} />
                    <Section title="Work Experience" content={workExperience} />
                    <Section title="Education" content={educationList} />
                    <Section title="Skills" content={skillsList} />
                    <Section title="Projects" content={projectsList} />
                    <Section title="Volunteering Experience" content={volunteerList} />
                </motion.div>
            </main>
        </>
    );
}

const Header = () => (
    <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-700">Akshit Verma</h1>
        <p className="mt-2 text-md">
            <a href="mailto:a9verma@uwaterloo.ca" className="text-blue-600 hover:underline">a9verma@uwaterloo.ca</a> |{' '}
            <a href="https://www.linkedin.com/in/akshitverma-/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a><br/>
            Waterloo, ON N2L6G9 | +1 (905) 782-3219
        </p>

        <a
          href="/resume-akshit-verma.pdf"
          download
          className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition"
        >
          📄 Download Resume (PDF)
        </a>
    </div>
);

const Section = ({ title, content }) => (
    <motion.section
        className="mb-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <h2 className="text-2xl font-semibold text-purple-600 mb-3">{title}</h2>
        <ul className="list-disc list-inside space-y-2">
            {content.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    </motion.section>
);

const summaryList = [
    "Data Engineer with a strong mechanical and mechatronics background, specializing in Python-based ETL pipelines, big data transformations, and real-time analytics.",
    "Experience building scalable data models and dashboards that power critical insights for complex electromechanical systems.",
    "Experienced in working with big data environments through collection and transformation of real-time operational data from E-Drive scissor lifts, integrating data cleaning, statistical validation, and reporting in high-stakes production settings.",
    "Adept at applying data warehousing principles, structuring machine diagnostic data into query-ready formats to assist in long-term failure tracking and predictive analysis.",
    "Hands-on experience in statistical process control (SPC), using tools like JMP, SPSS, and custom JSL scripts to conduct Gauge R&R, ANOVA, and regression analysis for production quality improvement and compliance testing.",
    "Familiar with automation of routine data workflows—from device interfacing using PySerial/PyUSB to generate summary reports via custom scripts, reducing manual effort and increasing consistency across QA documentation.",
    "Passionate about transitioning into data engineering, bringing engineering intuition and curiosity for scalable, data-driven systems."
];

const workExperience = [
    "Engineering Analyst, Linamar - Skyjack (May 2024 – Present): Translated real-time CAN bus data from scissor lift systems into structured insights by building ETL pipelines using Python (Pandas, NumPy, PySerial). Extracted raw diagnostic logs during machine errors and converted them into actionable load sense curves, reducing debug time by 60% and saving $10,000+ annually.",
    "Engineered automated data ingestion workflows from machine controllers using PyUSB and serial protocols, enabling scalable data capture for trend analysis and defect detection across two full E-Drive assembly lines.",
    "Applied data warehousing concepts by structuring and storing transformed datasets in a query-able format for long-term performance tracking and root-cause correlation across multidisciplinary teams (electrical, hydraulic, software).",
    "Used statistical tools including JMP, JSL scripting, and SPSS to automate Gauge R&R studies, ANOVA, and regression models, supporting both compliance testing (ANSI, CE, CSA, KC) and continuous improvement initiatives.",
    "Performed failure mode analysis and time studies by collecting downtime data on paint and hydraulic lines. Applied statistical hypothesis testing (F-test, ANOVA) to pinpoint bottlenecks, guiding process improvements that halved paint-line downtime.",
    "Created interactive dashboards and visual reports using Matplotlib and Seaborn to present KPIs related to hydraulic performance.",
    "Product Management Co-op, Linamar - Skyjack (Sept 2023 – Apr 2024): Conducted in-depth time studies on production lines, using SPSS and Python to apply statistical techniques (including F-test analysis) that pinpointed production bottlenecks and reduced waste by 50%.",
    "Streamlined manufacturing data workflows by automating data collection, cleaning, and analysis processes, improving quality.",
    "Designed fixture, and counterweights for boom machines with available steel plates to enhance sustainability, process design, cost reduction, and waste reduction of manufacturing and shipping from an international vendor.",
    "Conducted HIRD tests on batteries used in DC scissor lifts to determine efficiency of battery to store and release energy.",
    "Manufacturing Analytics Co-op, Linamar - Skyjack (May 2023 – Aug 2023): Process optimization by comprehensive visual and descriptive work instructions, process validation, covering production processes and assembly processes ensuring ease of understanding of manufacturing operations for line production by general laborers.",
    "Implemented Lean Manufacturing reducing production waste by 50% and improving material flow by structured methods."
];

const educationList = [
    "Masters of Engineering, Mechanical and Mechatronics Engineering (2022 - 2024), University of Waterloo, GPA: 3.9/4",
    "Graduate Diploma in Advanced Design Engineering, University of Waterloo",
    "Bachelor of Technology, Mechanical and Automation Engineering (2018 - 2022), Guru Gobind Singh Indraprastha University, CGPA: 8.98/10"
];

const skillsList = [
    "Data Engineering & Analytics: Python, ETL, SQL, SPSS, JMP, Spark, Kafka, AWS, Statistical Analysis, Warehousing Fundamentals, ETL Pipelines, Big Data Handling",
    "Technical Knowledge: MATLAB, C/C++, MS Excel, JavaScript, Spark, Kafka, AWS, or containerization (Docker/Kubernetes)",
    "Soft Skills: Analytical & problem-solving skills, Teamwork, Communication, Leadership, Project Management"
];

const projectsList = [
    "Turtlebot4 SLAM Integration (Dec 2024): Implemented SLAM for TurtleBot 4, enhancing mapping and navigation accuracy using ROS2, Python, C++, LiDAR scanner, and Ubuntu OS.",
    "E-Commerce Customer Segmentation ETL Pipeline (Jan 2024): Built an end-to-end ETL pipeline in Python for analyzing e-commerce customer data and visualizing insights.",
    "Digital Sorting on a Conveyor System (Feb 2023): Developed sorting algorithms using Groove Rio PLC and SCADA to detect object properties in industrial automation.",
    "Design Optimization of Piston Crown (Feb 2023): Designed a piston crown in SolidWorks, performed fatigue analysis on Ansys to improve engine efficiency and reduce material costs.",
    "Topology Optimization of Swing Arm (Dec 2022): Optimized a motorcycle swing arm in SolidWorks and performed FEM simulations for stress and displacement analysis.",
    "Automatic Medicine Dispenser (Dec 2022): Designed and built an automatic medicine dispenser, applying lean methodologies to improve efficiency and delivery."
];

const volunteerList = [
    "Enactus, Head - Graphics and Photography, Delhi (Aug 2019 – Aug 2021): Led a dynamic team to create visuals for Enactus ADGITM's Instagram page using Photoshop and Canva, increasing engagement and online presence.",
    "Initiated social projects focusing on environmental sustainability and health for underprivileged communities, creating job opportunities and contributing to societal improvement."
];

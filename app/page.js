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
    "Data Engineer with mechanical and mechatronics background specializing in Python-based ETL pipelines and real-time analytics.",
    "Built scalable data models and dashboards to extract insights from electromechanical systems.",
    "Transformed raw operational data into actionable performance curves using ETL and statistical methods.",
    "Applied warehousing principles for long-term diagnostics and predictive analysis.",
    "Hands-on with SPC, JMP, SPSS, JSL scripting for Gauge R&R and ANOVA studies.",
    "Automated QA data collection and reporting with Python (PySerial, PyUSB)."
];

const workExperience = [
    "Engineering Analyst, Linamar - Skyjack (May 2024 – Present): Built Python ETL pipelines for CAN bus data, reducing debug time by 60%.",
    "Automated machine data ingestion using PyUSB and serial protocols across E-Drive lines.",
    "Created data warehouse structures for long-term tracking and root-cause analysis.",
    "Statistical testing to reduce paint-line downtime by 50%; created KPI dashboards with Seaborn.",
    "Product Management Co-op (Sept 2023 – Apr 2024): Reduced production waste by 50% using statistical time studies.",
    "Manufacturing Analytics Co-op (May 2023 – Aug 2023): Implemented Lean Manufacturing; improved material flow and visual SOPs."
];

const educationList = [
    "Masters of Engineering, Mechanical and Mechatronics Engineering, University of Waterloo (2022–2024), GPA: 3.9/4",
    "Graduate Diploma in Advanced Design Engineering, University of Waterloo",
    "Bachelor of Technology, Mechanical and Automation Engineering, GGSIPU (2018–2022), CGPA: 8.98/10"
];

const skillsList = [
    "Data Engineering: Python, SQL, ETL, Pandas, Spark, Kafka, AWS, Data Warehousing",
    "Statistical Tools: JMP, SPSS, JSL, ANOVA, Regression",
    "Automation: PySerial, PyUSB, Matplotlib, Seaborn",
    "Other: MATLAB, C/C++, Docker, Kubernetes, JavaScript"
];

const projectsList = [
    "Turtlebot4 SLAM Integration: ROS2, LiDAR, Python/C++ – precise autonomous mapping.",
    "E-Commerce ETL Pipeline: Customer segmentation using Python, Pandas, Matplotlib.",
    "Digital Conveyor Sorting: Machine vision with SCADA and pneumatic control.",
    "Piston Crown Optimization: SolidWorks + Ansys fatigue analysis to improve engine strength.",
    "Swing Arm Topology Optimization: FEM-based structural simulation using Altair.",
    "Automatic Medicine Dispenser: Lean hardware design for timed medicine delivery."
];

const volunteerList = [
    "Enactus, Head - Graphics and Photography (2019–2021): Led branding visuals using Canva and Photoshop.",
    "Collaborated with cross-functional teams to increase engagement and online presence.",
    "Initiated social projects on environmental sustainability and health for underprivileged communities."
];

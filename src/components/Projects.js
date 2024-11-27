import Footer from './Footer';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <div className="flex flex-col h-full w-full overflow-x-hidden flex-1">
            <div className="text-left font-semibold text-3xl mb-12">
                <Link to="/" className="text-primary hover:underline dark:text-primary-light">
                    Scott Quach
                </Link>{' '}
                - Projects
            </div>
            <p className="text-left">
                I like building apps that help me with my daily life. Here are some projects I've worked on recently.
            </p>

            <div className="flex flex-col mt-12 mb-16 gap-7">
                <div className="text-left">
                    <a href="https://billsplitai.com/" target="_blank" rel="noreferrer">
                        <div className="mb-1.5 flex items-center gap-2 hover:underline">
                            <div className="font-semibold text-lg">Bill Split AI</div>
                            <i class="fa-solid fa-up-right-from-square text-xs "></i>
                            {/* <span className="opacity-80 text-sm font-medium text-yellow-200">🏆 Featured Project</span> */}
                        </div>
                    </a>
                    <div className="text-primary text-sm opacity-85 dark:text-primary-light mb-2">
                        React, AI, Cloudflare
                    </div>
                    <p className="text-sm opacity-90">
                        App that allows you to split a restaurant bill with friends based on a plain English breakdown
                        of who ordered what. Can analyze a receipt based on a single photo.
                    </p>
                </div>

                <div className="text-left">
                    <a href="https://activities-wrapped.scottqglobal.workers.dev/" target="_blank" rel="noreferrer">
                        <div className="mb-1.5 flex items-center gap-2 hover:underline">
                            <div className="font-semibold text-lg">Garmin Wrapped</div>
                            <i class="fa-solid fa-up-right-from-square text-xs "></i>
                            {/* <span className="opacity-80 text-sm font-medium text-yellow-200">🏆 Featured Project</span> */}
                        </div>
                    </a>
                    <div className="text-primary text-sm opacity-85 dark:text-primary-light mb-2">
                        React, Remix, Cloudflare
                    </div>
                    <p className="text-sm opacity-90">
                        A web app that generates insights, summary, and visualizations of your Garmin data for a year in
                        review.
                    </p>
                </div>

                {/* <div className="text-left">
                    <div className="mb-1.5">
                        <div className="font-semibold text-lg">Data Visualization Dashboard</div>
                    </div>
                    <div className="text-primary text-sm opacity-85 dark:text-primary-light mb-2">
                        D3.js, React, Express
                    </div>
                    <p className="text-sm opacity-90">
                        Created an interactive dashboard for visualizing complex datasets. Features include customizable
                        charts, real-time updates, and exportable reports.
                    </p>
                </div>

                <div className="text-left">
                    <div className="mb-1.5">
                        <div className="font-semibold text-lg">IoT Medical Device Platform</div>
                    </div>
                    <div className="text-primary text-sm opacity-85 dark:text-primary-light mb-2">
                        Python, MQTT, AWS IoT Core
                    </div>
                    <p className="text-sm opacity-90">
                        Developed a secure IoT platform for medical devices, enabling real-time monitoring and data
                        analysis. Implemented HIPAA-compliant data handling protocols.
                    </p>
                </div>

                <div className="text-left">
                    <div className="mb-1.5">
                        <div className="font-semibold text-lg">Healthcare Mobile App</div>
                    </div>
                    <div className="text-primary text-sm opacity-85 dark:text-primary-light mb-2">
                        Android, Kotlin, Firebase
                    </div>
                    <p className="text-sm opacity-90">
                        Built a patient-focused healthcare management app with features for appointment scheduling,
                        medication reminders, and secure messaging with healthcare providers.
                    </p>
                </div> */}
            </div>

            <div className="divider"></div>

            <div className="text-left mt-8">
                <h2 className="font-semibold text-xl mb-4">Technical Skills</h2>
                <div className="grid grid-cols-2 gap-4 text-sm opacity-90">
                    <div>
                        <p className="font-medium mb-2">Frontend:</p>
                        Angular, React
                    </div>
                    <div>
                        <p className="font-medium mb-2">Backend:</p>
                        Node.js, Python, PostgreSQL, Databricks
                    </div>
                    <div>
                        <p className="font-medium mb-2">Cloud & DevOps:</p>
                        AWS, Microsoft Azure, Cloudflare
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

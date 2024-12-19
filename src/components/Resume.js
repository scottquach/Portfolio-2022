import Footer from './Footer';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Resume() {
    return (
        <div className="flex flex-col h-full w-full overflow-x-hidden flex-1">
            <div className="text-left font-semibold text-3xl mb-12">
                <Link to="/" className="text-primary hover:underline dark:text-primary-light">
                    Scott Quach
                </Link>{' '}
                - Résumé
            </div>
            <p className="text-left mb-4">I'm focused on building full-stack collaborative solutions for complex data workflows.</p>
            <p className="text-left">
                Successfully created and led the development of an enterprise data platform 💼, which now manages
                multi-billion dollar processes - Prior to this, I contributed to enhancing healthcare experiences
                through native Android applications 📱 and IoT medical device development.
            </p>

            <div className="flex flex-col mt-16 mb-16">
                <div className="experience-grid">
                    <div className="text-lg">2024 - Today</div>
                    <div className="text-left">
                        <div className="mb-1.5">
                            <div className="font-semibold text-lg">Principle Software Engineer</div>
                            <span className="opacity-80 text-sm font-medium">Patent granted - US12061713B2 📜</span>
                        </div>
                        <div className="text-primary text-sm opacity-85 dark:text-primary-light">T-Mobile</div>
                    </div>
                    <div className="text-lg">2023 - 2024</div>
                    <div className="text-left">
                        <div className="mb-1.5">
                            <div className="font-semibold text-lg">Sr. Software Engineer</div>
                            {/* <span className="opacity-80 text-sm font-medium">2022 Innovator of the Year 🏆</span> */}
                        </div>
                        <div className="text-primary text-sm opacity-85 dark:text-primary-light">T-Mobile</div>
                    </div>
                    <div className="text-lg">2021 - 2023</div>
                    <div className="text-left">
                        <div className="mb-1.5">
                            <div className="font-semibold text-lg">Software Engineer</div>
                            <span className="opacity-80 text-sm font-medium text-yellow-700 dark:text-yellow-200">
                                2022 Innovator of the Year 🏆
                            </span>
                        </div>
                        <div className="text-primary text-sm opacity-85 dark:text-primary-light">T-Mobile</div>
                    </div>
                    <div className="text-lg">2020 - 2021</div>
                    <div className="text-left">
                        <div className="font-semibold text-lg">Software Engineer - Associate</div>
                        <div className="text-primary text-sm opacity-85 dark:text-primary-light">T-Mobile</div>
                    </div>
                    <div className="text-lg">2018 - 2020</div>
                    <div className="text-left">
                        <div className="font-semibold text-lg">Software Engineer - Intern</div>
                        <div className="text-primary text-sm opacity-85 dark:text-primary-light">T-Mobile</div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="experience-grid">
                    <div className="text-lg">2018</div>
                    <div className="text-left">
                        <div className="font-semibold text-lg">IoT Connectivity Developer - Intern</div>
                        <div className="text-primary text-sm opacity-85 dark:text-primary-light">Novo Nordisk</div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="experience-grid">
                    <div className="text-lg">2017</div>
                    <div className="text-left">
                        <div className="font-semibold text-lg">Android Developer - Intern</div>
                        <div className="text-primary text-sm opacity-85 dark:text-primary-light">Accolade</div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="experience-grid">
                    <div className="text-lg">1998 - Today</div>
                    <div className="text-left">
                        <div className="font-semibold text-lg">Life</div>
                        <div className="text-primary text-sm opacity-85 dark:text-primary-light">Seattle</div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

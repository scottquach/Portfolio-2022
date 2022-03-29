import Footer from './Footer';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Resume() {
    return (
        <div className="flex flex-col h-full w-full flex-1">
            <div className="text-left font-semibold text-3xl mb-12">
                <Link to="/" className="text-primary hover:underline">
                    Scott Quach
                </Link>{' '}
                - Resume
            </div>
            <div className="text-left">
                I work at T-Mobile, building collaborative solutions to complex data workflow. Before I improved health care
                through native Android experiences and IoT medical devices. I created and continue to lead the development of
                T-Mobile's enterprise data platform that today manages multi-billion dollar processes.
            </div>

            <div className="flex flex-col gap-12 mt-16">
                <div className="experience-grid">
                    <div className="text-lg">2021 - Today</div>
                    <div className="text-left">
                        <div className="font-semibold text-lg">Software Engineer</div>
                        <div className="text-primary text-sm opacity-60">T-Mobile</div>
                    </div>
                    <div className="text-lg">2020 - 2021</div>
                    <div className="text-left">
                        <div className="font-semibold text-lg">Software Engineer - Associate</div>
                        <div className="text-primary text-sm opacity-60">T-Mobile</div>
                    </div>
                    <div className="text-lg">2018 - 2020</div>
                    <div className="text-left">
                        <div className="font-semibold text-lg">Software Engineer - Intern</div>
                        <div className="text-primary text-sm opacity-60">T-Mobile</div>
                    </div>
                </div>

                <div className="experience-grid">
                    <div className="text-lg">2018</div>
                    <div className="text-left">
                        <div className="font-semibold text-lg">IoT Connectivity Developer - Intern</div>
                        <div className="text-primary text-sm opacity-60">Novo Nordisk</div>
                    </div>
                </div>

                <div className="experience-grid">
                    <div className="text-lg">2017</div>
                    <div className="text-left">
                        <div className="font-semibold text-lg">Android Developer - Intern</div>
                        <div className="text-primary text-sm opacity-60">Accolade</div>
                    </div>
                </div>

                <div className="experience-grid">
                    <div className="text-lg">1998 - Today</div>
                    <div className="text-left">
                        <div className="font-semibold text-lg">Life</div>
                        <div className="text-primary text-sm opacity-60">Seattle</div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

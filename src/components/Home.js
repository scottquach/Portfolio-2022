import { Link } from 'react-router-dom';
import '../App.css';
import Footer from './Footer';

export default function Home() {
    return (
        <div className="flex flex-col w-full h-full flex-1">
            <div className="flex justify-left gap-7">
                <img className="profile-image" alt="Profile" src={require('../assets/profile.jpg')}></img>
                <div className="flex flex-col items-start">
                    <header className="text-3xl md:text-4xl font-bold">Scott Quach</header>
                    <div className="text-left text-base md:text-xl opacity-90">Digital Creator ( Developer / Photographer )</div>
                </div>
            </div>

            <p className="text-left mt-10 mb-4">
                Principle Software Engineer{' '}
                <a
                    className="text-primary hover:underline dark:text-primary-light font-medium underline"
                    href="https://www.t-mobile.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    @T-Mobile
                </a>
                .
            </p>

            <p className="text-left mb-10">
                {/* Sr. Software engineer{' '}
                <a
                    className="text-primary hover:underline dark:text-primary-light font-medium underline"
                    href="https://www.t-mobile.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    @T-Mobile
                </a>{' '} */}
                Building enterprise leading data platforms and tools since 2018 - Before that did some native Android
                work at{' '}
                <a
                    className="text-primary hover:underline dark:text-primary-light font-medium underline"
                    href="https://www.accolade.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    @Accolade
                </a>{' '}
                - Here's a{' '}
                <Link
                    to="/resume"
                    className="text-primary cursor-pointer hover:underline dark:text-primary-light font-medium underline"
                >
                    résumé
                </Link>{' '}
                for the curious - I moonlight as a Photographer, you can find my work{' '}
                <a
                    className="text-primary hover:underline dark:text-primary-light font-medium underline"
                    href="https://www.instagram.com/jpg.by.scottq/"
                    target="_blank"
                    rel="noreferrer"
                >
                    here
                </a>
                .
            </p>

            <div className="text-xl text-left font-bold my-5">TL;DR</div>
            <div className="flex flex-col items-start mb-10 text-primary">
                <AppLink>
                    <Link to="/resume" className="flex gap-2 items-baseline font-medium ">
                        <i class="fa-solid fa-briefcase"></i>
                        <span>Résumé</span>
                    </Link>
                </AppLink>
                <AppLink>
                    <Link to="/projects" className="flex gap-2 items-baseline font-medium ">
                        <i class="fa-solid fa-screwdriver-wrench"></i>
                        <span>Projects</span>
                    </Link>
                </AppLink>
                <AppLink>
                    <a
                        href="https://www.instagram.com/jpg.by.scottq/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex gap-2 items-baseline font-medium "
                    >
                        <i class="fa-solid fa-camera-retro"></i>
                        <div className="font-medium">Photography</div>
                    </a>
                </AppLink>
            </div>

            <div className="text-xl text-left font-bold my-5">I too, am social</div>
            <div className="flex flex-col items-start center-primary">
                <AppLink>
                    <a
                        className="flex gap-2 items-baseline font-medium "
                        href="https://github.com/scottquach"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-github fa-fw"></i>
                        <div>@scottquach</div>
                    </a>
                </AppLink>
                <AppLink>
                    <a
                        className="flex gap-2 items-baseline font-medium "
                        href="https://www.linkedin.com/in/scott-quach/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-linkedin fa-fw"></i>
                        <div>@scottquach</div>
                    </a>
                </AppLink>
                <AppLink>
                    <a
                        className="flex gap-2 items-baseline font-medium"
                        href="https://www.instagram.com/jpg.by.scottq/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-instagram fa-fw"></i>
                        <div>@jpg.by.scottq</div>
                    </a>
                </AppLink>
                <AppLink>
                    <a
                        className="flex gap-2 items-baseline font-medium "
                        href="https://www.youtube.com/@jpegs-by-scott/shorts"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-youtube fa-fw"></i>
                        <div>@jpegs-by-scott</div>
                    </a>
                </AppLink>
            </div>

            <Footer></Footer>
        </div>
    );
}

function AppLink({ children }) {
    return (
        <div className="flex gap-2 px-2 py-2 text-primary cursor-pointer rounded items-baseline hover:bg-secondary duration-75 dark:text-primary-light dark:hover:bg-secondary-light">
            {children}
        </div>
    );
}

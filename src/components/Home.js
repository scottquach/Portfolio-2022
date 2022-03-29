import { Link } from 'react-router-dom';
import '../App.css';

export default function Home() {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex justify-between">
                <div className="flex flex-col items-start">
                    <header className="text-4xl font-bold">Scott Quach</header>
                    <div className="text-xl opacity-90">Digital creative ( Developer / Photographer )</div>
                </div>
                <img className="profile-image" alt="Profile" src={require('../assets/profile.jpg')}></img>
            </div>

            <p className="text-left my-10">
                Software engineer <a className="text-primary hover:underline" href="https://www.t-mobile.com" target="_blank" rel="noreferrer">@T-Mobile</a> - I've been with T-Mobile since 2018 building
                leading data platforms - Before that doing some Android work at <a className="text-primary hover:underline" href="https://www.accolade.com" target="_blank">@Accolade</a> -
                Here's a <Link to="/resume" className="text-primary cursor-pointer hover:underline">resume</Link> for the curious - I moonlight in photography, you can find
                my work <a className="text-primary hover:underline" href="https://www.instagram.com/jpg.by.scottq/" target="_blank">here</a>.
            </p>

            <div className="text-xl text-left font-bold my-5">TL;DR</div>
            <div className="flex flex-col items-start mb-10 text-primary">
                <div className="flex gap-2 px-2 py-1 text-primary cursor-pointer rounded items-baseline hover:bg-secondary duration-75">
                    <Link to="/resume">Resume and experience</Link>
                </div>
                <a className="flex gap-2 px-2 py-1 text-primary cursor-pointer rounded items-baseline hover:bg-secondary duration-75" href="https://www.instagram.com/jpg.by.scottq/" target="_blank">
                    <div>Photography</div>
                </a>
            </div>

            <div className="text-xl text-left font-bold my-5">I too, am social</div>
            <div className="flex flex-col items-start center-primary">
                <a className="flex gap-2 px-2 py-1 text-primary cursor-pointer rounded items-baseline hover:bg-secondary duration-75" href="https://github.com/scottquach" target="_blank">
                    <i class="fa-brands fa-github"></i>
                    <div>@scottquach</div>
                </a>
                <a className="flex gap-2 px-2 py-1 text-primary cursor-pointer rounded items-baseline hover:bg-secondary duration-75" href="https://www.linkedin.com/in/scott-quach/" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                    <div>@scottquach</div>
                </a>
                <a className="flex gap-2 px-2 py-1 text-primary cursor-pointer rounded items-baseline hover:bg-secondary duration-75" href="https://www.instagram.com/jpg.by.scottq/" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                    <div>@jpg.by.scottq</div>
                </a>
            </div>

            <div className="mt-auto text-left text-sm opacity-50">
                @ 2022 Scott Quach - Inspired by Takuya Matsuyama and Adam Whitcroft
            </div>
        </div>
    );
}

import { useMemo } from "react";

export default function Footer() {


    const year = useMemo(() => new Date().getFullYear(), []);

    return (
        <div className="mt-20 mb-4 md:mt-auto text-left text-sm opacity-40">
            @ {year} Scott Quach - Design inspired by Takuya Matsuyama and Adam Whitcroft
        </div>
    );
}

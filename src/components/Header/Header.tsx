import { Link } from "react-scroll";

export default function Header(){

    const links = [
        {name: "About Me", to: "about"},
        {name: "Projects", to: "projects"},
        {name: "Connect", to: "contact"},
    ]

    return (
        <div className={"h-[10vh] w-full bg-[var(--secondary-color)] flex justify-center p-8 fixed z-50"}>
            <ul className="flex justify-center gap-8">
                {links.map((link) => (
                    <li key={link.to}>
                        <Link
                            to={link.to}
                            smooth={true}
                            spy={true}
                            offset={-window.innerHeight * 0.1} // Adjust based on navbar height
                            duration={500}
                            activeClass="text-[var(--tertiary-color)] font-semibold border-b-4 border-[var(--tertiary-color)]"
                            className="cursor-pointer hover:text-[var(--tertiary-color)] p-4 pb-7.75 transition-colors"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
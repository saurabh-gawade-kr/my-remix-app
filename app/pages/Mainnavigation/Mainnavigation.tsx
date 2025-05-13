import { NavLink } from "@remix-run/react";

export default function Mainnavigation(){
    return(
        <>
            <nav id="main-navigation" className="border py-2 bg-kblue">
                <ul className="flex gap-2 justify-center w-full">
                    <li className="nav-link">
                        <NavLink to={"/"}>
                        Home
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to={"/notes"}>
                        Notes
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
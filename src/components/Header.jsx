import { Header, Logo, Nav, Input, Label } from "../styles/header.css"
import { Moon, Sun } from "../styles/icons.css";
import ScrollToAnchor from './ScrollToAnchor';
import { Link } from 'react-router-dom';

export default function HeaderComponent({ theme, setTheme }) {
    ScrollToAnchor();

    return (
        <Header>
            <Logo>Bison Cédric</Logo>
            <Nav>
                <ul>
                    <li><Link to="#home">Home</Link></li>
                    <li><Link to="#about">About</Link></li>
                    <li><Link to="#projects">Projects</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                </ul>
            </Nav>
            <Input type="checkbox" id="darkmode-toggle" />
            <Label htmlFor="darkmode-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                <Sun className="sun" />
                <Moon className="moon" />
            </Label>
        </Header>
    )
}
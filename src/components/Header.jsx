import { HashLink as Link } from 'react-router-hash-link';
import { Header, Logo, Nav, Input, Label } from "../styles/header.css"
import { Moon, Sun } from "../styles/icons.css";

export default function HeaderComponent({ theme, setTheme }) {
 
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
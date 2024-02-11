import { Header, Logo, Nav, Input, Label } from "../styles/header.css"
import { Moon, Sun } from "../styles/icons.css";

export default function HeaderComponent({ theme, setTheme }) {
 
    return (
        <Header>
            <Logo>Bison Cédric</Logo>
            <Nav>
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
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
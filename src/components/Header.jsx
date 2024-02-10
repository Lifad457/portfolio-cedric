import { Header, Logo, Nav, Switch, ThemeToggler } from "../styles/header.css"
import { Moon, Sun } from "../styles/icons.css";

export default function HeaderComponent({ theme, setTheme }) {
    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

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
            <ThemeToggler onClick={() => toggleTheme()} theme={theme}>
                <Sun />  
                <Moon />
                <Switch theme={theme} />
            </ThemeToggler>
        </Header>
    )
}
import { Header, Logo, Nav, Switch, ThemeToggler } from "../styles/header.css"

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
            <ThemeToggler onClick={() => toggleTheme()}>
                <Switch theme={theme} />
            </ThemeToggler>
        </Header>
    )
}
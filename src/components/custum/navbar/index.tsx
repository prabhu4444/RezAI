import { ThemeToggler } from "@/components/theme/theme-toggler";
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className=" ">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/signin">Sign In</Link>
      <div className=" ">
        <ThemeToggler />
      </div>
    </nav>
  );
}

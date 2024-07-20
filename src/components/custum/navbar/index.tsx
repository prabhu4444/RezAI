import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';
import { ThemeToggler } from "@/components/theme/theme-toggler";
import logo from "/logo.png"; 

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>
        <SignedIn>
          <Link to="/dashboard" className="hover:text-gray-400">
            Dashboard
          </Link>
        </SignedIn>
        <SignedOut>
          <Link to="/signin" className="hover:text-gray-400">
              Dashboard
          </Link>
        </SignedOut>
      </div>
      <div className="flex items-center space-x-4">
        <SignedOut>
          <Link to="/signin">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Get Started
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ThemeToggler />
      </div>
    </nav>
  );
}

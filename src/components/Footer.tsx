import { FaChartBar, FaHome, FaWallet } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <footer className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
            <div className="btm-nav">
                <Link
                    to="/"
                    className={`text-accent ${isActive("/") ? "active" : ""}`}
                >
                    <FaHome className="h-5 w-5" />
                    <span>Home</span>
                </Link>
                <Link
                    to="/keuangan"
                    className={`text-accent ${isActive("/keuangan") ? "active" : ""}`}
                >
                    <FaWallet className="h-5 w-5" />
                    <span>Keuangan</span>
                </Link>
                <Link
                    to="/nilai"
                    className={`text-accent ${isActive("/nilai") ? "active" : ""}`}
                >
                    <FaChartBar className="h-5 w-5" />
                    <span>Nilai</span>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;

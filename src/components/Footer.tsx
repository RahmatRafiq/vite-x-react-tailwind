import { FaChartBar, FaHome, FaWallet } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
            <div className="btm-nav">
                <button className="text-accent">
                <FaHome className="h-5 w-5" />
                    <span>Home</span>
                </button>
                <button className="text-accent active">
                <FaWallet className="h-5 w-5" />
                    <span>keuangan</span>
                </button>
                <button className="text-accent flex items-center gap-2">
                    <FaChartBar className="h-5 w-5" />
                    <span>Nilai</span>
                </button>
            </div>
        </footer>
    );
};

export default Footer;

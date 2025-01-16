import React from 'react';
import { FaBell, FaUserCircle, FaFileInvoiceDollar } from 'react-icons/fa';

const Header = () => {
    const handleViewBill = () => {
        console.log('View Bill clicked');
    };

    return (
        <header>
            <div className="navbar bg-base-100 shadow-md px-4">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl whitespace-nowrap">
                        Sisfo Mobile
                    </a>
                </div>
                <div className="flex-none flex items-center gap-4">
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaBell className="h-5 w-5" />
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </button>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                        >
                            <div className="indicator">
                                <FaFileInvoiceDollar className="h-5 w-5" />
                                <span className="badge badge-sm indicator-item">3</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-64 shadow"
                        >
                            <div className="card-body">
                                <span className="text-lg font-bold">3 Tagihan</span>
                                <span className="text-info">Total: Rp3.000.000</span>
                                <div className="card-actions">
                                    <button
                                        onClick={handleViewBill}
                                        className="btn btn-primary btn-block"
                                    >
                                        Lihat Tagihan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <FaUserCircle className="h-8 w-8 text-gray-600" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <button className="btn btn-error btn-block">Sign Out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

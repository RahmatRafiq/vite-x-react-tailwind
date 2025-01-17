import React, { useState } from 'react';

const SummaryKrsSection = () => {
    const tahunKrs = '2004';
    const semester = 'Ganjil';
    const statusKrs = 'Aktif';
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState(tahunKrs);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleYearSelect = (year: string) => {
        setSelectedYear(year);
        setIsDropdownOpen(false); 
    };

    const years = [
        '20201', '20202', '20211', '20212', '20221', '20222', '20231', '20232', '20241', '20242'
    ];

    return (
        <div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-semibold">Ringkasan KRS</div>
                <div className="collapse-content">
                    <div className="flex space-x-6">
                        <div>
                            <p>
                                <span className="font-semibold">Tahun KRS:</span> {selectedYear}
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className="font-semibold">Tahun Ajaran Aktif:</span> {selectedYear} {semester}
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className="font-semibold">Status KRS:</span>{' '}
                                <span className={`badge ${statusKrs === 'Aktif' ? 'badge-success' : 'badge-error'}`}>
                                    {statusKrs}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 space-y-4">
                <div className="dropdown w-full max-w-full bg-base-200">
                    <button
                        onClick={toggleDropdown}
                        className="btn btn-primary w-full max-w-full text-left bordered ">
                        <span className="font-semibold">Pilih Tahun KRS</span>
                    </button>
                    {isDropdownOpen && (
                        <ul className="menu menu-sm dropdown-content bg-base-300 z-[1] w-full shadow-lg rounded-lg">
                            {years.map((year) => (
                                <li key={year}>
                                    <button
                                        onClick={() => handleYearSelect(year)}
                                        className="btn btn-bordered w-full text-left mt-3">
                                        {year}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SummaryKrsSection;

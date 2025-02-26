import React, { useEffect, useState } from 'react';
import { FaBell, FaFileInvoiceDollar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { getKeuanganDetail, calculateTunggakan } from '@/services/Keuangan';
import { getTahunKhsMahasiswa } from '@/services/Tahun';

const Header = () => {
    const [billCount, setBillCount] = useState<number>(0);
    const [totalTunggakan, setTotalTunggakan] = useState<number>(0);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchBills() {
          try {
            const tahunResponse = await getTahunKhsMahasiswa();
            if (tahunResponse.status === 'success' && Array.isArray(tahunResponse.data)) {
              const tahunArray = tahunResponse.data.flat().map((tahun) => tahun.tahunid);
      
              const keuanganData = await Promise.all(
                tahunArray.map((tahunid: string) =>
                  getKeuanganDetail(tahunid).then((response) => ({ tahunid, response }))
                )
              );
      
              const bills = keuanganData.flatMap(({ tahunid, response }) => {
                if (response.status === 'success' && Array.isArray(response.data)) {
                  return response.data.flat().map((item: KeuanganDetail) => {
                    const tunggakan = calculateTunggakan(item.besar, item.dibayar);
                  
                    return {
                      nama: item.nama,
                      jumlah: item.jumlah ?? 0,
                      terbayar: item.dibayar ?? 0,
                      besar: item.besar ?? 0,
                      dibayar: item.dibayar ?? 0,
                      tunggakan,
                      tahunid, 
                    };
                  });
                } else {
                  return [];
                }
              });
      
            //   console.log('Bills:', bills);
              setBillCount(bills.length);
              const total = bills.reduce((sum, bill) => sum + bill.tunggakan, 0);
              setTotalTunggakan(total);
            //   console.log(`Total Tunggakan: ${total}`);
            } else {
              setBillCount(0);
              setTotalTunggakan(0);
            }
          } catch (error) {
            console.error("Error fetching bills in header:", error);
            setBillCount(0);
            setTotalTunggakan(0);
          }
        }
        fetchBills();
      }, []);
      
      
    const handleViewBill = () => {
        // console.log('View Bill clicked');
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
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
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FaFileInvoiceDollar className="h-5 w-5" />
                                <span className="badge badge-sm indicator-item">{billCount}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-64 shadow"
                        >
                            <div className="card-body">
                                <span className="text-lg font-bold">{billCount} Tagihan</span>
                                <span className="text-info">
                                    Total: Rp {totalTunggakan.toLocaleString('id-ID')}
                                </span>
                                <div className="card-actions">
                                    <button onClick={handleViewBill} className="btn btn-primary btn-block">
                                        <Link to="/keuangan">Lihat Tagihan</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                    alt="User Profile"
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link to="/profile_page" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="btn btn-error btn-block">
                                    Sign Out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

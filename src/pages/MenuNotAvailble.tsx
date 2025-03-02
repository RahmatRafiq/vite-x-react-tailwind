import React from "react";
import { Link } from "react-router-dom";
import ProfileSection from "./dasboardSections/ProfileSection";

interface MenuNotAvailableProps {
  name: string;
}

const MenuNotAvailable: React.FC<MenuNotAvailableProps> = ({ name }) => {
  return (
    <div className="p-6 md:p-10 lg:p-12 space-y-4 mb-20">
      <ProfileSection />
      <div className="card bg-base-200 shadow-xl rounded-lg overflow-hidden">
        <div className="card-body text-center p-6">
          <h2 className="card-title text-2xl font-bold mb-2">
            Menu {name} Belum Tersedia
          </h2>
          <p className="text-gray-600 mb-4">
            Maaf, fitur ini sedang dalam pengembangan. Silahkan kembali ke
            halaman utama untuk mencoba fitur lainnya.
          </p>
          <div className="card-actions justify-center">
            <Link to="/" className="btn btn-primary">
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuNotAvailable;

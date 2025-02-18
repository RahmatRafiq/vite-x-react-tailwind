import { getTahunKhsMahasiswa } from "@/services/TahunKhs";
import { TahunKHS } from "@/types/TahunKhs";
import { useEffect, useState } from "react";

interface TahunSelectorProps {
    selectedTahun: string | null;
    onTahunChange: (tahun: string) => void;
}

const TahunSelector: React.FC<TahunSelectorProps> = ({ selectedTahun, onTahunChange }) => {
    const [tahunList, setTahunList] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    useEffect(() => {
        const fetchYears = async () => {
            try {
                const response = await getTahunKhsMahasiswa();
                if (Array.isArray(response.data) && Array.isArray(response.data[0])) {
                    const tahunData: TahunKHS[] = response.data[0];
                    setTahunList(tahunData.map((item) => item.tahunid));
                } else {
                    console.error("Format data tidak sesuai:", response);
                }
            } catch (error) {
                console.error("Gagal mengambil data tahun KHS:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchYears();
    }, []);

    const handleButtonClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleTahunSelect = (tahun: string) => {
        onTahunChange(tahun);
        setIsDropdownOpen(false); 
    };

    return (
        <div className="mt-4 ">
            <label className="block mb-2 text-sm font-medium text-gray-700">Pilih Tahun KHS</label>
            <div className="relative">
                <button
                    onClick={handleButtonClick}
                    className="btn btn-primary w-full max-w-full text-left bordered"
                    disabled={loading}
                >
                    {selectedTahun ? selectedTahun : "Pilih Tahun"}
                </button>
                {isDropdownOpen && (
                    <div 
                    className="absolute mt-2 w-full bg-base-300 border border-base-300 rounded-md shadow-lg z-10"
                    >
                        {loading ? (
                            <div className="px-4 py-2 text-sm">Loading...</div>
                        ) : (
                            tahunList.length > 0 ? (
                                tahunList.map((tahun) => (
                                    <button
                                        key={tahun}
                                        onClick={() => handleTahunSelect(tahun)}
                                        className="btn btn-bordered w-full text-left mt-3"
                                    >
                                        {tahun}
                                    </button>
                                ))
                            ) : (
                                <div className="px-4 py-2 text-sm">Tidak ada data</div>
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TahunSelector;

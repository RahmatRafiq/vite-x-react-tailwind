const InfoSection = () => {
    return (
        <div className="card p-4">
            <h2>Info</h2>
            <p>Berikut adalah informasi lebih lanjut terkait layanan kami.</p>
            <div className="collapse collapse-plus border border-base-300 rounded-box mb-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    Biaya SPP Semester 1
                </div>
                <div className="collapse-content">
                    <ul>
                        <li><strong>Jumlah:</strong> Rp 5,000,000</li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-plus border border-base-300 rounded-box mb-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    Biaya SPP Semester 2
                </div>
                <div className="collapse-content">
                    <ul>
                        <li><strong>Jumlah:</strong> Rp 5,000,000</li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-plus border border-base-300 rounded-box mb-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    Biaya SPP Semester 3
                </div>
                <div className="collapse-content">
                    <ul>
                        <li><strong>Jumlah:</strong> Rp 5,000,000</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;

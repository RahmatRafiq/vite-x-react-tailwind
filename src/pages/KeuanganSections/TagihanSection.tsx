const TagihanSection = () => {
    return (
      <div className="card p-4">
        <h2>Tagihan</h2>
  
        {/* SPP */}
        <div className="collapse collapse-plus border border-base-300 rounded-box mb-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            SPP
          </div>
          <div className="collapse-content">
            <ul>
              <li><strong>Jumlah:</strong> Rp 5,000,000</li>
              <li><strong>Terbayar:</strong> Rp 2,500,000</li>
              <li><strong>Tunggakan:</strong> Rp 2,500,000</li>
            </ul>
          </div>
        </div>
  
        {/* SSP */}
        <div className="collapse collapse-plus border border-base-300 rounded-box mb-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            SSP
          </div>
          <div className="collapse-content">
            <ul>
              <li><strong>Jumlah:</strong> Rp 3,000,000</li>
              <li><strong>Terbayar:</strong> Rp 1,500,000</li>
              <li><strong>Tunggakan:</strong> Rp 1,500,000</li>
            </ul>
          </div>
        </div>
  
        {/* Uang Alumni */}
        <div className="collapse collapse-plus border border-base-300 rounded-box mb-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            Uang Alumni
          </div>
          <div className="collapse-content">
            <ul>
              <li><strong>Jumlah   :</strong> Rp 1,312</li>
              <li><strong>Terbayar :</strong> Rp 1,312</li>
              <li><strong>Tunggakan:</strong> Rp 0</li>
            </ul>
          </div>
        </div>
  
        {/* Total Tagihan */}
        <div className="mt-4">
          <h3 className="font-semibold">Total Tagihan</h3>
          <p>Jumlah: Rp 9,312,312</p>
        </div>
      </div>
    );
  };
  
  export default TagihanSection;
  
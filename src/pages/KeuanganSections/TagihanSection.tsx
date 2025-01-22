
const TagihanSection = () => {
  return (
    <div className="card p-4">
      <h2>Tagihan</h2>
      {/* Collapsible Items */}
      <div className="collapse collapse-plus border border-base-300 rounded-box mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium">
          SPP
        </div>
        <div className="collapse-content">
          <p>Jumlah: Rp 5,000,000</p>
        </div>
      </div>

      <div className="collapse collapse-plus border border-base-300 rounded-box mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium">
          SSP
        </div>
        <div className="collapse-content">
          <p>Jumlah: Rp 3,000,000</p>
        </div>
      </div>

      <div className="collapse collapse-plus border border-base-300 rounded-box mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium">
          Uang Alumni
        </div>
        <div className="collapse-content">
          <p>Jumlah: Rp 1,312</p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Total Tagihan</h3>
        <p>Jumlah: Rp 9,312,312</p>
      </div>
    </div>
  );
};

export default TagihanSection;

import { useState } from 'react';
import { FaRegCreditCard, FaInfoCircle } from 'react-icons/fa';
import TagihanSection from './TagihanSection'; // Mengimpor TagihanSection
import InfoSection from './InfoSection'; // Mengimpor InfoSection

const SummaryKeuanganSection = () => {
  const [activeTab, setActiveTab] = useState(1); // Menyimpan tab aktif saat ini

  // Fungsi untuk mengubah tab aktif
  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div role="tablist" className="tabs tabs-boxed mb-6">
        {/* Tab 1 - Tagihan */}
        <a
          role="tab"
          className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
          onClick={() => handleTabChange(1)}
        >
          <FaRegCreditCard className="mr-2" />
          Tagihan
        </a>

        {/* Tab 2 - Info */}
        <a
          role="tab"
          className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}
          onClick={() => handleTabChange(2)}
        >
          <FaInfoCircle className="mr-2" />
          Info
        </a>
      </div>

      {/* Card Content */}
      <div className="card-container">
        {activeTab === 1 && <TagihanSection />}
        {activeTab === 2 && <InfoSection />}
      </div>
    </div>
  );
};

export default SummaryKeuanganSection;

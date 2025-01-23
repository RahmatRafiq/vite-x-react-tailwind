import React, { useState } from 'react';
import TagihanSection from './TagihanSection';
import InfoSection from './InfoSection';
import { FaRegCreditCard, FaInfoCircle } from 'react-icons/fa';


type Tab = 1 | 2;

const SummaryKeuanganSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>(1);

  const handleTabChange = (tabIndex: Tab) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div role="tablist" className="tabs tabs-boxed mb-6">
        <a
          role="tab"
          className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
          onClick={() => handleTabChange(1)}
        >
          <FaRegCreditCard className="mr-2" />
          Tagihan
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}
          onClick={() => handleTabChange(2)}
        >
          <FaInfoCircle className="mr-2" />
          Info
        </a>
      </div>
      <div className="card-container">
        {activeTab === 1 && <TagihanSection />}
        {activeTab === 2 && <InfoSection />}
      </div>
    </div>
  );
};

export default SummaryKeuanganSection;

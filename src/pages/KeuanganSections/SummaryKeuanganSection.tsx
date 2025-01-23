import { useState } from 'react';
import { FaRegCreditCard, FaInfoCircle } from 'react-icons/fa';
import TagihanSection from './TagihanSection';
import InfoSection from './InfoSection';

const SummaryKeuanganSection = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabIndex: number) => {
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

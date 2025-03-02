import React from 'react';
import ProfileSection from './dasboardSections/ProfileSection';
import SummaryKeuanganSection from './KeuanganSections/SummaryKeuanganSection';

const KeuanganPage = () => {
  return (
    <div className="p-6 md:p-10 lg:p-12 space-y-4 mb-20">
            <ProfileSection />
            <SummaryKeuanganSection />
        </div>
  );
};

export default KeuanganPage;

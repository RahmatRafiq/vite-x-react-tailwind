import React from 'react';
import ProfileSection from './dasboardSections/ProfileSection';
import SummaryNilaiSection from './NilaiSections/SummaryNilaiSection';

const NilaiPage = () => {
  return (
    <div className="p-6 md:p-10 lg:p-12 space-y-4 mb-20">
            <ProfileSection />
            <SummaryNilaiSection />
        </div>
  );
};

export default NilaiPage;
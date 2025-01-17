import React from 'react';
import ProfileSection from './dasboardSections/ProfileSection';
import SummaryKrsSection from './KrsSections/SummaryKrsSection';

const Krs = () => {
    return (
        <div className="p-6 md:p-10 lg:p-12 space-y-4">
            <ProfileSection />
            <SummaryKrsSection />
        </div>
    );
};

export default Krs;

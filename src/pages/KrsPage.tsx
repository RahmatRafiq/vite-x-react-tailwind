import React from 'react';
import KrsSection from './KrsSections/KrsSections';
import ProfileSection from './dasboardSections/ProfileSection';


const KrsPage = () => {
    return (
        <div className="p-6 md:p-10 lg:p-12 space-y-4">
             <ProfileSection />
            <KrsSection />
        </div>
    );
};

export default KrsPage;
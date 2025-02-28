import ProfileSection from './dasboardSections/ProfileSection';
import SummaryJadwalSection from './JadwalSections/SummaryJadwalSection';

const Jadwal = () => {
    return (
        <div className="p-6 md:p-10 lg:p-12 space-y-4">
            <ProfileSection />
            <SummaryJadwalSection />
        </div>
    );
};

export default Jadwal;

import MenuSection from "./dasboardSections/MenuSection";
import ProfileSection from "./dasboardSections/ProfileSection";

const Dashboard = () => {
  return (
    <div className="p-6 md:p-10 lg:p-12">
      <ProfileSection />
      <MenuSection />
    </div>
  );
};

export default Dashboard;

import { useState } from 'react';
import ProfileTabs from './ProfileTabs';
import EditProfileForm from './EditProfileForm';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('edit');

  const renderContent = () => {
    switch (activeTab) {
      case 'edit':
        return <EditProfileForm />;
      case 'preferences':
        return <div className="p-4 text-center text-gray-500">Preferences content here</div>;
      case 'security':
        return <div className="p-4 text-center text-gray-500">Security content here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">
      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="p-6">{renderContent()}</div>
    </div>
  );
};

export default ProfilePage;

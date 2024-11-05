interface ProfileTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ProfileTabs = ({ activeTab, onTabChange }: ProfileTabsProps) => {
  const tabs = [
    { id: 'edit', label: 'Edit Profile' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'security', label: 'Security' }
  ];

  return (
    <div className="border-b border-gray-200">
      <div className="flex overflow-x-auto w-[245px] xs:w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              px-6 py-4 text-sm font-medium whitespace-nowrap
              ${
                activeTab === tab.id
                  ? 'border-b-4 border-primary text-primary font-semibold'
                  : 'text-secondary hover:text-primary'
              }
            `}>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileTabs;

import Pencil from '../../../assets/icons/pencil.svg';
import FormField from '../../elements/FormField';
const EditProfileForm = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-14 mt-8">
      {/* Profile Image and Upload */}
      <div className="w-[100px]">
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 rounded-full">
              <img src={Pencil} alt="Pencil" />
            </button>
          </div>
        </div>
      </div>

      {/* Form Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Your Name" value="Charlene Reed" />
          <FormField label="User Name" value="Charlene Reed" />
          <FormField label="Email" type="email" value="charlenereed@gmail.com" />
          <FormField label="Password" type="password" value="**********" />
          <FormField
            label="Date of Birth"
            value="25 January 1990"
            type="date"
            defaultValue="1990-01-25"
          />
          <FormField label="Present Address" value="San Jose, California, USA" />
          <FormField label="Permanent Address" value="San Jose, California, USA" />
          <FormField label="City" value="San Jose" />
          <FormField label="Postal Code" value="45962" />
          <FormField label="Country" value="USA" />
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-10">
          <button className="w-full md:w-[190px] h-[50px] font-semibold px-6 py-2 bg-[#232323] text-white rounded-2xl hover:opacity-90 transition-opacity">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileForm;

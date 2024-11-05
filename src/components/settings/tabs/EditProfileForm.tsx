import { Formik, Form } from 'formik';
import Pencil from '../../../assets/icons/pencil.svg';
import { Button } from '../../elements/Button';
import FormField from '../../elements/FormField';
import { ProfileSchema } from '../../../utils/schema';
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

      <div className="flex-1">
        <Formik
          initialValues={{
            name: 'Charlene Reed',
            username: 'Charlene Reed',
            email: 'charlenereed@gmail.com',
            password: '12345678',
            dateOfBirth: '1990-01-25',
            presentAddress: 'San Jose, California, USA',
            permanentAddress: 'San Jose, California, USA',
            city: 'San Jose',
            postalCode: '45962',
            country: 'USA'
          }}
          validationSchema={ProfileSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 800);
          }}>
          {({ isSubmitting }) => (
            <Form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="Your Name *" name="name" type="text" />
                <FormField label="User Name *" name="username" type="text" />
                <FormField label="Email *" name="email" type="email" />
                <FormField label="Password *" name="password" type="password" />
                <FormField label="Date of Birth *" name="dateOfBirth" type="date" />
                <FormField label="Present Address" name="presentAddress" type="text" />
                <FormField label="Permanent Address" name="permanentAddress" type="text" />
                <FormField label="City" name="city" type="text" />
                <FormField label="Postal Code" name="postalCode" type="text" />
                <FormField label="Country" name="country" type="text" />
              </div>
              <div className="flex justify-end pt-10">
                <Button
                  className="w-full md:w-[190px] font-semibold"
                  variant={'default'}
                  type="submit"
                  disabled={isSubmitting}>
                  Save
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditProfileForm;

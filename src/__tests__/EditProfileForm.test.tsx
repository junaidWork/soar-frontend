import { render } from '@testing-library/react';
import EditProfileForm from '../components/settings/EditProfileForm';

describe('EditProfileForm', () => {
  it('should render a form with all fields', () => {
    const { getByText, getByLabelText } = render(<EditProfileForm />);

    expect(getByText('Your Name *')).toBeInTheDocument();
    expect(getByText('User Name *')).toBeInTheDocument();
    expect(getByText('Email *')).toBeInTheDocument();
    expect(getByText('Password *')).toBeInTheDocument();
    expect(getByText('Date of Birth *')).toBeInTheDocument();
    expect(getByText('Present Address')).toBeInTheDocument();
    expect(getByText('Permanent Address')).toBeInTheDocument();
    expect(getByText('City')).toBeInTheDocument();
    expect(getByText('Postal Code')).toBeInTheDocument();
    expect(getByText('Country')).toBeInTheDocument();

    expect(getByLabelText('Your Name *')).toBeInTheDocument();
    expect(getByLabelText('User Name *')).toBeInTheDocument();
    expect(getByLabelText('Email *')).toBeInTheDocument();
    expect(getByLabelText('Password *')).toBeInTheDocument();
    expect(getByLabelText('Date of Birth *')).toBeInTheDocument();
    expect(getByLabelText('Present Address')).toBeInTheDocument();
    expect(getByLabelText('Permanent Address')).toBeInTheDocument();
    expect(getByLabelText('City')).toBeInTheDocument();
    expect(getByLabelText('Postal Code')).toBeInTheDocument();
    expect(getByLabelText('Country')).toBeInTheDocument();
  });

  it('should render a button with the text "Save"', () => {
    const { getByText } = render(<EditProfileForm />);

    expect(getByText('Save')).toBeInTheDocument();
  });

  it('should render a form with a profile image', () => {
    const { getByTestId } = render(<EditProfileForm />);

    expect(getByTestId('profile-image')).toBeInTheDocument();
  });
});

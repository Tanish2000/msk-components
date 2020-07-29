import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.midnightBlue,
    required: true
  },
  name: {
    name: 'Name',
    type: propertyTypes.STRING,
    value: 'John Doe',
    required: true
  },
  designation: {
    name: 'Designation',
    type: propertyTypes.STRING,
    value: 'Software Engineer',
    required: true
  }
};

export default properties;

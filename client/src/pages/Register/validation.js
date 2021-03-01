import * as Yup from 'yup';

export const registerSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(4, 'Must be 4 characters at minimum')
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  username: Yup.string()
    .min(4, 'Must be 4 characters at minimum')
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
});

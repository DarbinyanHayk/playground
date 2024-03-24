import AxiosInstance from 'lib/api';

export const loginPost = data => AxiosInstance.post('/api/Accounts/GeneratePassword', data);

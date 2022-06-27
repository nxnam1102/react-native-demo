import {HttpClient} from './http_client';

export const TestService = {
  //sử dụng controller action
  GetData: async () => {
    let result = await HttpClient('User').Get('GetUserInfo', {
      user_code: 'admin',
    });
    return result;
  },
  GetDataDemo: async () => {
    const response = await fetch('https://reactnative.dev/movies.json');
    const json = await response.json();
    return json.movies;
  },
};

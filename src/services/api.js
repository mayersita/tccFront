// import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
// import { Alert } from 'react-native';
// import { getSocialId, getToken } from '~/utils/socialAuth';
// import { navigate } from './navigation';

// const baseURL = 'localhost/';

// const api = axios.create({
//   baseURL,
// });

// api.interceptors.request.use(
//   async function (config) {
//     config.headers['Content-Type'] = 'application/json';
//     config.headers['Authorization'] = `Bearer ${await getToken()}`;
//     config.headers['SocialId'] = await getSocialId();
//     return config;
//   },
//   function (error) {
//     Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     if (error?.response?.status === 403) {
//       AsyncStorage.setItem('blurr', 'true');
//     } else if (error?.response?.status === 401) {
//       Alert.alert(
//         'Atenção',
//         'Login expirado!',
//         [
//           {
//             text: 'Ok',
//             onPress: async () => {
//               await AsyncStorage.clear();
//             },
//           },
//         ],
//         { cancelable: false }
//       );
//     }
//     return Promise.reject(error);
//   }
// );

// export { api, baseURL };

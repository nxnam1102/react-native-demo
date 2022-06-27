import {GlobalData} from '../common/global_data';

export const timeout = (
  ms: number,
  promise: any,
  rejectMsg = 'Request Time Out',
) => {
  return Promise.race([
    new Promise((resolve, reject) => {
      promise.then(resolve, reject);
    }),
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(rejectMsg);
      }, ms),
    ),
  ]);
};

const getUri = (controller: any, action: any, obj: any) => {
  let arr = [];
  let constrollerStr = '';
  if (controller !== '') {
    constrollerStr = '/' + controller;
  }
  if (obj === null) {
    return GlobalData.ApiAddress + constrollerStr + '/' + action;
  }
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arr.push(key + '=' + encodeURIComponent(obj[key]));
    }
  }
  return (
    GlobalData.ApiAddress + constrollerStr + '/' + action + '?' + arr.join('&')
  );
};
export const HttpClient = (controller: string) => {
  return {
    Get: async (action: string, params: any) => {
      let uri = getUri(controller, action, params);
      let response: any = await timeout(
        60000,
        fetch(uri, {
          method: 'GET',
        }),
      );
      let responseJson = await response.json();
      return responseJson;
    },
    Post: async (action: string, params: any) => {
      let uri = getUri(controller, action, params);
      let response: any = await timeout(
        60000,
        fetch(uri, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(params),
        }),
      );
      let responseJson = await response.json();
      return responseJson;
    },
  };
};

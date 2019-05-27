/*
 * @Author: ajie 
 * @Date: 2019-05-27 16:55:52 
 * @Last Modified by: ajie
 * @Last Modified time: 2019-05-27 17:54:45
 */
const login = {
  state: {
    userInfo: {},
    count: 0
  },
  reducers: {
    login(state, data) {
      return {
        ...state,
        userInfo: data.userInfo,
      };
    },
    updateState(state, data) {
      return {
        ...state,
        ...data
      }
    }
  },
  effects: {
    async asyncLogin(params) {
      console.log(32323);
    },
  },
};

export default login
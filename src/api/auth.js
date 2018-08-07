import api from '@/utils/api';

export default {
    authToken(username,password){
      return  api.post('/auth',{'username':username,'password':password});
    }
};
  

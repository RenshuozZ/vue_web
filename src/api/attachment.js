import api from '@/utils/api';

export default {
    upload(params ){
      return  api.post('/attachment',params);
    }
};
  

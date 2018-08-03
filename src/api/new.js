import api from '@/utils/api'

export default {
    searchNews(keyword,pageIndex,pageSize){
      return  api.get('/new/search',{'keyword':keyword,'pageIndex':pageIndex,'pageSize':pageSize});
    }
}
  

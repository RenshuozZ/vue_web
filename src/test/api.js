/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axios[method](queryUrl, body, config)
  } else if (method === 'get') {
    return axios[method](queryUrl, {
      params: form
    }, config)
  } else {
    return axios[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    
 ==========================================================*/
/**
 * 上传附件
 * request: ApiAttachmentPost
 * url: ApiAttachmentPostURL
 * method: ApiAttachmentPost_TYPE
 * raw_url: ApiAttachmentPost_RAW_URL
 * @param file - 
 */
export const ApiAttachmentPost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/attachment'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['file'] !== undefined) {
    queryParameters['file'] = parameters['file']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiAttachmentPost_RAW_URL = function() {
  return '/api/attachment'
}
export const ApiAttachmentPost_TYPE = function() {
  return 'post'
}
export const ApiAttachmentPostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/attachment'
  if (parameters['file'] !== undefined) {
    queryParameters['file'] = parameters['file']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 用户登录
 * request: ApiAuthPost
 * url: ApiAuthPostURL
 * method: ApiAuthPost_TYPE
 * raw_url: ApiAuthPost_RAW_URL
 * @param login - 
 */
export const ApiAuthPost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/auth'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['login'] !== undefined) {
    body = parameters['login']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiAuthPost_RAW_URL = function() {
  return '/api/auth'
}
export const ApiAuthPost_TYPE = function() {
  return 'post'
}
export const ApiAuthPostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/auth'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取全部
 * request: ApiNewAllGet
 * url: ApiNewAllGetURL
 * method: ApiNewAllGet_TYPE
 * raw_url: ApiNewAllGet_RAW_URL
 */
export const ApiNewAllGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/new/all'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiNewAllGet_RAW_URL = function() {
  return '/api/new/all'
}
export const ApiNewAllGet_TYPE = function() {
  return 'get'
}
export const ApiNewAllGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/new/all'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取
 * request: ApiNewByIdGet
 * url: ApiNewByIdGetURL
 * method: ApiNewByIdGet_TYPE
 * raw_url: ApiNewByIdGet_RAW_URL
 * @param id - 
 */
export const ApiNewByIdGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/new/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiNewByIdGet_RAW_URL = function() {
  return '/api/new/{id}'
}
export const ApiNewByIdGet_TYPE = function() {
  return 'get'
}
export const ApiNewByIdGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/new/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 分页检索
 * request: ApiNewSearchGet
 * url: ApiNewSearchGetURL
 * method: ApiNewSearchGet_TYPE
 * raw_url: ApiNewSearchGet_RAW_URL
 * @param keyword - 
 * @param pageIndex - 
 * @param pageSize - 
 */
export const ApiNewSearchGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/new/search'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['keyword'] !== undefined) {
    queryParameters['keyword'] = parameters['keyword']
  }
  if (parameters['pageIndex'] !== undefined) {
    queryParameters['pageIndex'] = parameters['pageIndex']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiNewSearchGet_RAW_URL = function() {
  return '/api/new/search'
}
export const ApiNewSearchGet_TYPE = function() {
  return 'get'
}
export const ApiNewSearchGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/new/search'
  if (parameters['keyword'] !== undefined) {
    queryParameters['keyword'] = parameters['keyword']
  }
  if (parameters['pageIndex'] !== undefined) {
    queryParameters['pageIndex'] = parameters['pageIndex']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改
 * request: ApiNewPut
 * url: ApiNewPutURL
 * method: ApiNewPut_TYPE
 * raw_url: ApiNewPut_RAW_URL
 * @param model - 
 */
export const ApiNewPut = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/new'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['model'] !== undefined) {
    body = parameters['model']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const ApiNewPut_RAW_URL = function() {
  return '/api/new'
}
export const ApiNewPut_TYPE = function() {
  return 'put'
}
export const ApiNewPutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/new'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 创建
 * request: ApiNewPost
 * url: ApiNewPostURL
 * method: ApiNewPost_TYPE
 * raw_url: ApiNewPost_RAW_URL
 * @param model - 
 */
export const ApiNewPost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/new'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['model'] !== undefined) {
    body = parameters['model']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiNewPost_RAW_URL = function() {
  return '/api/new'
}
export const ApiNewPost_TYPE = function() {
  return 'post'
}
export const ApiNewPostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/new'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除
 * request: ApiNewDeletePost
 * url: ApiNewDeletePostURL
 * method: ApiNewDeletePost_TYPE
 * raw_url: ApiNewDeletePost_RAW_URL
 * @param ids - 
 */
export const ApiNewDeletePost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/new/delete'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ids'] !== undefined) {
    body = parameters['ids']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiNewDeletePost_RAW_URL = function() {
  return '/api/new/delete'
}
export const ApiNewDeletePost_TYPE = function() {
  return 'post'
}
export const ApiNewDeletePostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/new/delete'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取User
 * request: ApiUserByIdGet
 * url: ApiUserByIdGetURL
 * method: ApiUserByIdGet_TYPE
 * raw_url: ApiUserByIdGet_RAW_URL
 * @param id - 
 */
export const ApiUserByIdGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/user/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiUserByIdGet_RAW_URL = function() {
  return '/api/user/{id}'
}
export const ApiUserByIdGet_TYPE = function() {
  return 'get'
}
export const ApiUserByIdGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/user/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 分页检索
 * request: ApiUserSearchGet
 * url: ApiUserSearchGetURL
 * method: ApiUserSearchGet_TYPE
 * raw_url: ApiUserSearchGet_RAW_URL
 * @param pageIndex - 
 * @param pageSize - 
 */
export const ApiUserSearchGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/user/search'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageIndex'] !== undefined) {
    queryParameters['pageIndex'] = parameters['pageIndex']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiUserSearchGet_RAW_URL = function() {
  return '/api/user/search'
}
export const ApiUserSearchGet_TYPE = function() {
  return 'get'
}
export const ApiUserSearchGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/user/search'
  if (parameters['pageIndex'] !== undefined) {
    queryParameters['pageIndex'] = parameters['pageIndex']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 创建User
 * request: ApiUserPost
 * url: ApiUserPostURL
 * method: ApiUserPost_TYPE
 * raw_url: ApiUserPost_RAW_URL
 * @param model - 
 */
export const ApiUserPost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/user'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['model'] !== undefined) {
    body = parameters['model']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiUserPost_RAW_URL = function() {
  return '/api/user'
}
export const ApiUserPost_TYPE = function() {
  return 'post'
}
export const ApiUserPostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/user'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiValuesGet
 * url: ApiValuesGetURL
 * method: ApiValuesGet_TYPE
 * raw_url: ApiValuesGet_RAW_URL
 */
export const ApiValuesGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/values'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiValuesGet_RAW_URL = function() {
  return '/api/values'
}
export const ApiValuesGet_TYPE = function() {
  return 'get'
}
export const ApiValuesGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/values'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiValuesPost
 * url: ApiValuesPostURL
 * method: ApiValuesPost_TYPE
 * raw_url: ApiValuesPost_RAW_URL
 * @param value - 
 */
export const ApiValuesPost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/values'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['value'] !== undefined) {
    body = parameters['value']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiValuesPost_RAW_URL = function() {
  return '/api/values'
}
export const ApiValuesPost_TYPE = function() {
  return 'post'
}
export const ApiValuesPostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/values'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiValuesByIdGet
 * url: ApiValuesByIdGetURL
 * method: ApiValuesByIdGet_TYPE
 * raw_url: ApiValuesByIdGet_RAW_URL
 * @param id - 
 */
export const ApiValuesByIdGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/values/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiValuesByIdGet_RAW_URL = function() {
  return '/api/values/{id}'
}
export const ApiValuesByIdGet_TYPE = function() {
  return 'get'
}
export const ApiValuesByIdGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/values/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiValuesByIdPut
 * url: ApiValuesByIdPutURL
 * method: ApiValuesByIdPut_TYPE
 * raw_url: ApiValuesByIdPut_RAW_URL
 * @param id - 
 * @param value - 
 */
export const ApiValuesByIdPut = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/values/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['value'] !== undefined) {
    body = parameters['value']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const ApiValuesByIdPut_RAW_URL = function() {
  return '/api/values/{id}'
}
export const ApiValuesByIdPut_TYPE = function() {
  return 'put'
}
export const ApiValuesByIdPutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/values/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiValuesByIdDelete
 * url: ApiValuesByIdDeleteURL
 * method: ApiValuesByIdDelete_TYPE
 * raw_url: ApiValuesByIdDelete_RAW_URL
 * @param id - 
 */
export const ApiValuesByIdDelete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/values/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const ApiValuesByIdDelete_RAW_URL = function() {
  return '/api/values/{id}'
}
export const ApiValuesByIdDelete_TYPE = function() {
  return 'delete'
}
export const ApiValuesByIdDeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/values/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
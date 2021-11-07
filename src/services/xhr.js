import { getAuthorizationHeader } from './helper'
import axios from 'axios'

const xhr = ({
  url = '/',
  method = 'get',
  path = [],
  data = null,
  params = null
}) => {
  let actionUrl = 'https://ptx.transportdata.tw/MOTC/' + url

  if (path.length !== 0) {
    let result = ''
    path.forEach(item => { result += `/${item}` })
    actionUrl += result
  }

  const actionParams = {
    $format: 'JSON',
    ...params
  }

  const options = {
    url: actionUrl,
    method,
    data,
    params: actionParams,
    headers: getAuthorizationHeader()
  }
  return axios(options)
    .then(res => res.data)
    .catch(err => {
      const result = {
        code: 'http-' + err.response.status,
        message: err.response.statusText
      }
      return Promise.reject(result)
    })
}

export default xhr

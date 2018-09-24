import axios from 'axios'

export function getallMenu (url, data) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'GET',
      params: data
    })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

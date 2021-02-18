export const getResponse = (url, method, body) => {
  if(method !== 'GET') {
    return fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then(res => res.json())
  } else if (method === 'GET') {
    return fetch(`https://cors-anywhere.herokuapp.com/${url}`)
      .then(res => res.json())
  }
};
import  axios  from  'axios';

export const  fetchUsersSv  =  ()  =>  {
  return  new  Promise((resolve,  reject)  =>  {
    	.get(`http://localhost:3333/users`)
      .then(response  =>  resolve(response.data))
      .catch(error  =>  reject(error))
  })
}

export const  fetchSearchUsersSv  =  (v)  =>  {
  return  new  Promise((resolve,  reject)  =>  {
    axios.get(`http://localhost:3333/users?q=${v}`)
      .then(response  =>  resolve(response.data))
      .catch(error  =>  reject(error))
  })
}

export const fetchAnUserSv  =  username  =>  {
  console.log(username);
  return  new  Promise((resolve,  reject)  =>  {
    axios.get(`http://localhost:3333/users?username=${username}`)
      .then(response  =>  resolve(response.data))
      .catch(error  =>  reject(error))
  })
}

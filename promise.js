const validateId = ()=>{
  throw new Error('ID must provided!')
}
const GetUsers = ()=>{
  return [
    {name: 'jena', id: 20},
    {name: 'Jack', id: 30}
  ]
}
const getUser = (id = validateId()) =>{
  console.log(id);
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const getDBdata = GetUsers();
      const user = getDBdata.find(item => item.id === id);
      if (user) {
        resolve(user);
      }
      reject('User not exist with give ID!')
    },2000)
  })
}

(async ()=> {
  try{
    const data =await getUser(200);
    console.log(data)
  }catch(err){
    console.log(err)
  }

})()

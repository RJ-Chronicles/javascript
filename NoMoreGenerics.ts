type ApiResponse<Data extends object = {status : number}> ={
  data : Data;
  isError: boolean;
}

type UserResponse = ApiResponse<{name: string; age: number}>;
type BlogResponse = ApiResponse<{blog: string; date : Date}>
const response :UserResponse  = {
  data : {
    name: "Jonathon",
    age: 30,
  },
  isError : false
}

const blogResponse : BlogResponse = {
  data : {
    blog: 'this is the unknown',
    date: new Date(),
  },
  isError: false
}
console.log(response.data?.name);

console.log(blogResponse.data.date);

const checkResponse :ApiResponse ={
  data: {
    status : 200,
  },
  isError: false
}


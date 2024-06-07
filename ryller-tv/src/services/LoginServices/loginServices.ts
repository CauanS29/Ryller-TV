import { MongoApi } from "./mongoService";
const {post}=MongoApi
interface Login{
    email:string,
    password:string
}
export const LoginService={
    Login:(props:Login)=>
        post('/user/login',props)
    
}
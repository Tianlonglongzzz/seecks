let Mock = require("mockjs")
Mock.mock("/api/login","post",function(config){
    let obj = JSON.parse(config.body)
    let user = obj.user;
    let pw = obj.pw;
    if(user === "admin" && pw === 123456){
        return{
            status:200,
            message:"success",
            data:{user:"admin",pw:123456,token:"admin"}
        }
    }else{
        return{
            stauts:200,
            message:"fail",
            data:{message:"用户错误"}
        }
    }
})
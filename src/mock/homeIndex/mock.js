let Mock = require("mockjs")
let data = [
    {id:0,name:"【望周知，求扩散】淘宝 NPM 镜像站喊你切换新域名啦",text:"fengmk2",lll:"449992",huifu:"233"},
    {id:1,name:"【望周知，求扩散】淘宝 NPM 镜像站喊你切换新域名啦",text:"fengmk2",lll:"449992",huifu:"233"},
    {id:2,name:"【望周知，求扩散】淘宝 NPM 镜像站喊你切换新域名啦",text:"fengmk2",lll:"449992",huifu:"233"},
    {id:3,name:"【望周知，求扩散】淘宝 NPM 镜像站喊你切换新域名啦",text:"fengmk2",lll:"449992",huifu:"233"},
    {id:4,name:"【望周知，求扩散】淘宝 NPM 镜像站喊你切换新域名啦",text:"fengmk2",lll:"449992",huifu:"233"},
    {id:5,name:"【望周知，求扩散】淘宝 NPM 镜像站喊你切换新域名啦",text:"fengmk2",lll:"449992",huifu:"233"},
    {id:6,name:"【望周知，求扩散】淘宝 NPM 镜像站喊你切换新域名啦",text:"fengmk2",lll:"449992",huifu:"233"},
    {id:7,name:"【望周知，求扩散】淘宝 NPM 镜像站喊你切换新域名啦",text:"fengmk2",lll:"449992",huifu:"233"},
    {id:8,name:"【望周知，求扩散】淘宝 NPM 镜像站喊你切换新域名啦",text:"fengmk2",lll:"449992",huifu:"233"},

]
//获取
Mock.mock("/api/homeindex","get",function(config){
    console.log(config);
    return data
})

//添加
Mock.mock("/api/homeindex/add","post",function(config){
    let obj = JSON.parse(config.body)
    let name = obj.name
    let text = obj.text
    data.push({id:data.length,name,text})
    data = data.map(function(item,id){
        return{
            id,
            name:item.name,
            text:item.text
        }
    })
})

//修改
Mock.mock(/\/api\/homeindex\/edit\/\d/,"put",function(config){
    console.log(config.url);
    let arr = config.url.split("/")
    let id = arr.pop(); //获取id
    let canshu = config.body
    canshu = JSON.parse(canshu)
    data[id].name = canshu.name
    data[id].text = canshu.text
    return data
})
//删除
Mock.mock(/\/api\/homeindex\/\d/,"delete",function(config){
    let arr = config.url.split("/")
    let id = arr.pop()
    data.splice(id,1)
    return data
})
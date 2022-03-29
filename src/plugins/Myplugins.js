// 插件
// let myplugin = {
//     install(Vue){
//         // 把插件都挂载 vue 的原型上
//         Vue.prototype.myplugin = function(){
//             //业务
//             console.log("嗨害");
//         }
//     }

// }
// let myplugin = function(Vue){
//     Vue.prototype.cuifn =function(){
//         console.log("来了嗷");
//     }
// }
// 防抖插件
let myplugin = function (Vue) {
  // 被封装后的新的业务函数
  Vue.prototype.debouncefn = function (fn, wait) {
    let timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn();
      }, wait);
    };
  };
};
export default myplugin;

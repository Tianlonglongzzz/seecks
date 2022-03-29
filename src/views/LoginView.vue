<template>
  <div class="login">
    <div class="title">
      <h3 class="h-txt">Login Form</h3>
    </div>
    <div class="myform">
      <el-form :model="formdata" :rules="rules">
        <el-form-item  prop="user">
          <el-input placeholder="用户名" v-model="formdata.user"></el-input>
        </el-form-item>
        <el-form-item prop="pw">
          <el-input class="elInput" placeholder="密码" v-model="formdata.pw"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitfn" class="btn" type="primary"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
      <span> username:admin  password:any</span>
    </div>
  </div>
</template>
<script>
import instance from "../api/index";
export default {
  name: "MyLogin",
  data() {
    let userfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^[a-z]\w{5,10}\w$/;
      if (rg.test(value)) return; //格式对 不处理
      return callback(new Error("用户格式不对"));
    };
    let pwfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^\w{6,10}$/;
      if (rg.test(value)) return; //格式对 不处理
      return callback(new Error("密码格式不对"));
    };
    return {
      formdata: {
        user: "admin",
        pw: 123456,
      },
      rules: {
        user: [{ validator: userfn, trigger: "blur" }],
        pw: [{ validator: pwfn, trigger: "blur" }],
      },
      newbouncefn: null,
    };
  },
  created() {
    this.newbouncefn = this.debouncefn(this.loginfn, 500);
  },
  methods: {
    submitfn() {
      //点击提交业务
      this.newbouncefn();
    },
    async loginfn() {
      let user = this.formdata.user;
      let pw = this.formdata.pw;
      let { data } = await instance.post("/login", { user, pw });

      if (data.message === "fail")
        return this.$message.console.error("登录失败");
      if (data.message === "success") {
        //存token
        console.log("token:", data.data.token);
        localStorage.setItem("token", data.data.token);
        this.$message({
          type: "success",
          message: "登陆成功",
          duration: 500,
          onClose: () => {
            this.$router.push({ name: "longlonglong" });
          },
        });
      }
    },
  },
};
</script>
<style scoped>

.login {
  background-color: #2D3A4B;
  height: 100vh;
  width: 100vw;
}
.login .title h3 {
  margin-top: 100px;
  font-size: 20px;
  color: #ccc;
}
.login .title {
  width: 370px;
  position: absolute;
  left: 50%;
  top: 0%;
  margin-left: -185px;
  text-align: center;
}
.login .myform {
  box-sizing: border-box;
  width: 370px;
  height: 260px;
  /* border: 2px solid red; */
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -185px;
  margin-top: -130px;
  padding: 20px 20px 60px;
  background-color: #2D3A4B;
}
.login .btn {
  width: 100%;
}

.login span{
  color: #fff;
  margin-left: 5px;
  font-size: 12px;
}
</style>

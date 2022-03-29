<template>
  <div>
    <div class="top-box">
      <span>文章列表</span>
    </div>
    <div class="btn-box">
      <div>
        <el-button type="primary">编辑添加,字段各种规则验证示例</el-button>
        <el-button type="primary">本地导出表格</el-button>
      </div>
      <div class="inp-box">
        <el-input placeholder="请输入文章标题"></el-input>
        <el-input style="margin-left:10px" placeholder="请选择类型"></el-input>
        <el-button type="success">查询</el-button>
        <el-button type="warning">重置</el-button>
      </div>
    </div>
    <el-table :data="arr">
      <el-table-column prop="name" label="文章标题"> </el-table-column>
      <el-table-column prop="text" label="作者"> </el-table-column>
      <el-table-column prop="lll" label="浏览量"> </el-table-column>
      <el-table-column prop="huifu" label="回复"> </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 增加按钮 -->
    <el-button type="primary" class="addbtn" @click="addfn(1)"
      >添加用户</el-button
    >
    <el-dialog
      :title="i === 1 ? '添加用户' : '编辑'"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="文章标题" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input v-model="form.text" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="浏览量" :label-width="formLabelWidth">
          <el-input v-model="form.lll" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="回复" :label-width="formLabelWidth">
          <el-input v-model="form.huifu" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="fnsure">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import instance from "../../api/index";
export default {
  name: "HomeIndex",
  data() {
    return {
      arr: null,
      debounceedit: null, //新业务防抖封装
      debouncedelete: null,
      dialogFormVisible: false, //弹窗的显示和不显示
      form: {
        id: 0,
        name: "张三",
        text: "the晒",
      },
      formLabelWidth: "120px",
      i: 0,
    };
  },
  methods: {
    // 点击新增按钮清空input框内容
    addfn(i) {
      this.i = i;
      console.log(i);
      this.form.name = "";
      this.form.text = "";
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    async handleAdd() {
      //添加业务
      let name = this.form.name;
      let text = this.form.text;
      let { data } = await instance.post("/homeindex/add", { name, text });
      this.getIndex();
    },
    async fnsure() {
      this.dialogFormVisible = false; //弹窗关闭
      if (this.i === 1) return this.handleAdd();
      this.editHomeIndex();
    },

    //修改
    async handleEdit(a, b) {
      //点击出现弹窗 并清空input内容
      this.i = 0;
      console.log(a, b);
      this.dialogFormVisible = !this.dialogFormVisible;
      this.form.name = b.name;
      this.form.text = b.text;
      this.form.id = b.id;
    },

    // 删除行为
    async handleDelete(a, b) {
      this.$confirm("您确定删除该条信息吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log("删除了");
          this.$message({
            type: "success",
            showClose: true,
            message: "删除成功",
          });
          this.deleteIndex(a);
        })
        .catch(() => {
          console.log("你取消了");
        });
    },
    async deleteIndex(index) {
      let { data } = await instance.delete("/homeindex/" + index);
      this.getIndex();
    },

    async editHomeIndex() {
      let name = this.form.name;
      let text = this.form.text;
      let id = this.form.id;
      console.log(name, text);
      let { data } = await instance.put("/homeindex/edit/" + id, {
        name,
        text,
      });
      this.getIndex();
    },
    // 修改结束

    //获取数据
    async getIndex() {
      let { data } = await instance.get("/homeindex");
      this.arr = data;
    },
    //用户操作
  },

  created() {
    this.getIndex();
  },
};
</script>
<style scoped>

.inp-box{
    display: flex;
}.inp-box button{
    margin-left: 10px;
}
.btn-box{
    height: 55px;
    display: flex;
    justify-content: space-between;
}
.btn-box button{
    height: 40px;
}
.top-box{
    margin-top:-10px ;
    margin-bottom: 20px;
    padding: 10px;
    padding: 0;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    box-shadow: 5px 5px 5px #ccc;
}
</style>
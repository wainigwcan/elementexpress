<template>
  <el-form @submit.native.prevent="onSubmit" ref="form" :model="article" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即添加</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      article: {},
    };
  },
  methods: {
    onSubmit() {
      this.$http.post("/article", this.article).then(() => {
        this.$message({ message: "添加成功", type: "message" });
        this.$router.push("/article/list");
      });
    },
  },
};
</script>
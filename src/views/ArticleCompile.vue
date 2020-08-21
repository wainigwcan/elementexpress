<template>
  <el-form @submit.native.prevent="onSubmit" ref="form" :model="article" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
      <el-button @click="hehe">取消</el-button>
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
    fatch() {
      this.$http.get(`/article/${this.$route.params.id}`).then((res) => {
        this.article = res.data;
      });
    },
    onSubmit() {
      this.$http
        .put(`/article/${this.$route.params.id}`, this.article)
        .then(() => {
          this.$message({ message: "保存成功", type: "message" });
          this.fatch();
          this.$router.push("/article/list");
        });
    },
    hehe() {
      this.$router.go(-1);
    },
  },
  created() {
    this.fatch();
  },
};
</script>
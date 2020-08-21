<template>
  <el-table :data="articles">
    <el-table-column prop="title" label="标题" width="140"></el-table-column>
    <el-table-column prop="body" label="内容" width="180"></el-table-column>
    <el-table-column align="right" label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="compileClick(scope.row._id)">修改</el-button>
        <el-button size="mini" type="danger" @click="DeleteClick(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
  created() {
    this.fatch();
  },
  methods: {
    fatch() {
      this.$http.get("/article").then((res) => {
        this.articles = res.data;
      });
    },
    compileClick(id) {
      this.$router.push(`/article/${id}/compile`);
    },
    DeleteClick(id) {
      console.log(id);
      this.$http.delete(`/article/${id}`).then((res) => {
        if (res.data.resulit == true) {
          this.fatch();
        }
      });
    },
  },
};
</script>

<style>
</style>
<template>
  <div>
    <el-input
      placeholder="请输入答案,回车即可添加choice"
      v-model="answerContent"
      @change="getContent"
      class="answer-input"
    ></el-input>
    <div
      class="answer-item"
      :class="currentItemIdx===index?'on-hover':''"
      v-for="(item,index) in answerList"
      :key="index"
    >
      <el-checkbox :label="getSerial(index)"></el-checkbox>
      <div class="answer-item-content">{{item.content}}</div>
      <el-button @click="editContent(index)" size="small" icon="el-icon-edit" type="text"></el-button>
      <el-button @click="delContent(index)" size="small" icon="el-icon-delete" type="text"></el-button>
    </div>
  </div>
</template>

<script>
import { answerSerial } from "@/util/util";
export default {
  name: "AnswerChoice",
  data() {
    return {
      answerContent: "",
      currentItemIdx: ""
    };
  },
  props: {
    answerList: {
      type: Array,
      default: function() {
        return [
          {
            id: 0,
            questionId: 1,
            content: "内容1"
          },
          {
            id: 1,
            questionId: 1,
            content: "内容2"
          }
        ];
      }
    },
    questionId: {
      type: String,
      default: "0"
    }
  },
  methods: {
    getSerial(idx) {
      return answerSerial(idx) + ".";
    },
    getContent(val) {
      let _this = this;
      if (this.currentItemIdx || this.currentItemIdx === 0) {
        this.answerList[_this.currentItemIdx].content = val;
        this.currentItemIdx = "";
      } else {
        this.answerList.push({
          id: _this.answerList.length,
          questionId: _this.questionId,
          content: val
        });
      }
      this.answerContent = "";
    },
    editContent(idx) {
      this.answerContent = this.answerList[idx].content;
      this.currentItemIdx = idx;
    },
    delContent(idx) {
      this.answerList.splice(idx, 1);
    }
  }
};
</script>

<style scoped>
.answer-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  padding: 0 5px;
}
.answer-item > button {
  display: none;
}
.answer-item:hover {
  background-color: #efefef;
}
.answer-item.on-hover {
  background-color: #efefef;
}
.answer-item:hover button {
  display: block;
}
.answer-item-content {
  align-self: center;
  line-height: 20px;
  width: calc(100% - 140px);
  padding: 5px 10px 5px 0;
}
</style>

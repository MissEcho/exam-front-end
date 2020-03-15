<template>
  <div>
    <!-- 关键词  -->
    <el-radio-group v-model="radioType" size="small">
      <el-radio-button label="0">关键词匹配</el-radio-button>
      <el-radio-button label="1">全匹配</el-radio-button>
    </el-radio-group>
    <div style="margin-top:10px" v-if="radioType==0">
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
        <div class="answer-item-content">{{getSerial(index)}}{{item.content}}</div>
        <el-button @click="editContent(index)" size="small" icon="el-icon-edit" type="text"></el-button>
        <el-button @click="delContent(index)" size="small" icon="el-icon-delete" type="text"></el-button>
      </div>
    </div>
    <div style="margin-top:10px" v-else>
      <el-input placeholder="请输入答案" v-model="answerContent" class="answer-input"></el-input>
    </div>
  </div>
</template>

<script>
import { answerSerial } from "@/util/util";
export default {
  name: "AnswerResponse",
  data() {
    return {
      radioType: "0",
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
      return answerSerial(idx,'number') + ".";
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

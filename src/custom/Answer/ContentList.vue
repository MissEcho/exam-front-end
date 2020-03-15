<template>
  <div>
    <div
      class="answer-item"
      :class="currIdx===index?'on-hover':''"
      v-for="(item,index) in answerList"
      :key="index"
    >
      <div class="" v-if="answerType=='choice'">
        <el-checkbox :label="getSerial(index)"></el-checkbox>
        <div class="answer-item-content">{{item.content}}</div>
      </div>
      <div v-else>
        <div class="answer-item-content">{{getSerial(index)}}{{item.content}}</div>
      </div>
      <div>
        <el-button @click="editContent(index)" size="small" icon="el-icon-edit" type="text"></el-button>
        <el-button @click="delContent(index)" size="small" icon="el-icon-delete" type="text"></el-button>
      </div>
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
      currIdx:''
    };
  },
  props: {
    answerType:{
      type: String,
      default: "choice"
    },
    answerList: {
      type: Array,
      default: function() {
        return [
          {
            id: 0,
            questionId: 1,
            content: "内容1"
          }
        ];
      }
    },
    serialType:{
      type: String,
      default: ""
    }
    // currIdx: {
    //   type: String,
    //   default: ""
    // }
  },
  methods: {
    getSerial(idx) {
      console.log('getS',idx);
      return answerSerial(idx,this.serialType) + ".";
    },
    getContent(val) {
      let _this = this;
      if (this.currIdx || this.currIdx === 0) {
        this.answerList[_this.currIdx].content = val;
        this.currIdx = "";
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
      this.currIdx = idx;
    },
    delContent(idx) {
      this.$emit('delContent',idx);
      // this.answerList.splice(idx, 1);
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

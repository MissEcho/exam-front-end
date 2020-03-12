<template>
  <basic-container>
    <avue-tabs :option="tabOption" @change="handleChange"></avue-tabs>
    <span v-if="type.prop==='tab1'">
      <avue-form :option="option" v-model="form">
        <template slot-scope="scope" slot="question">
          <div>
            <avue-ueditor v-model="text" :upload="upload" id="nr" prop="nr"></avue-ueditor>
          </div>
        </template>
         <template slot-scope="scope" slot="answer">
          <div>
            <el-input placeholder='请输入答案,回车即可添加'  class="answer-input"></el-input>
            <div class="answer-item" >
              <el-checkbox label="A."></el-checkbox>
              <div class="answer-item-content">第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案</div>
               <el-button  size="small" icon="el-icon-edit" circle></el-button>
              <el-button size="small" icon="el-icon-delete" circle></el-button>
            </div>
             <div class="answer-item" >
              <el-checkbox label="A."></el-checkbox>
              <div class="answer-item-content">第一项答案第一项答案第一项答案第一项</div>
               <el-button size="small" icon="el-icon-edit" circle></el-button>
              <el-button size="small" icon="el-icon-delete" circle></el-button>
            </div>
          </div>
        </template>
        <template slot-scope="scope" slot="answer2">
          <div>
            <el-radio v-model="radio" label="1">关键词匹配</el-radio>
            <el-radio v-model="radio" label="2">全匹配</el-radio>
            <el-input placeholder='请输入关键字,回车即可添加'  class="answer-input"></el-input>
            <div class="answer-item" >
              <el-checkbox label="A."></el-checkbox>
              <div class="answer-item-content">第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案</div>
               <el-button  size="small" icon="el-icon-edit" circle></el-button>
              <el-button size="small" icon="el-icon-delete" circle></el-button>
            </div>
             <div class="answer-item" >
              <el-checkbox label="A."></el-checkbox>
              <div class="answer-item-content">第一项答案第一项答案第一项答案第一项</div>
               <el-button size="small" icon="el-icon-edit" circle></el-button>
              <el-button size="small" icon="el-icon-delete" circle></el-button>
            </div>
          </div>
        </template>
        <template slot-scope="scope" slot="answer3">
          <div>
            <el-input placeholder='请输入填空题答案,回车即可添加'  class="answer-input"></el-input>
            <div class="answer-item" >
              <el-checkbox label="A."></el-checkbox>
              <div class="answer-item-content">第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案第一项答案</div>
               <el-button  size="small" icon="el-icon-edit" circle></el-button>
              <el-button size="small" icon="el-icon-delete" circle></el-button>
            </div>
             <div class="answer-item" >
              <el-checkbox label="A."></el-checkbox>
              <div class="answer-item-content">第一项答案第一项答案第一项答案第一项</div>
               <el-button size="small" icon="el-icon-edit" circle></el-button>
              <el-button size="small" icon="el-icon-delete" circle></el-button>
            </div>
          </div>
        </template>
      </avue-form>
    </span>
    <span v-else-if="type.prop==='tab2'"></span>
    <span v-else-if="type.prop==='tab3'"></span>
  </basic-container>
</template>

<script>
import AvueUeditor from "avue-plugin-ueditor";
var DIC = {
  TYPE: [
    {
      label: "试题类型1",
      value: "true"
    },
    {
      label: "试题类型2",
      value: "false"
    }
  ],
  QUESTIONTYPE: [
    {
      label: "选择题",
      value: "choice"
    },
    {
      label: "问答题",
      value: "response"
    },
    {
      label: "填空题",
      value: "completion"
    },
    {
      label: "判断题",
      value: "true-false"
    }
  ],
  SEX: [
    {
      label: "男",
      value: 0
    },
    {
      label: "女",
      value: 1
    }
  ]
};
export default {
  comments: {
    AvueUeditor
  },
  data() {
    return {
      text: "",
      upload: {
        //普通图片上传
        action: "https://avueupload.91eic.com/upload/list",
        props: {
          res: "data.0",
          url: "url"
        },
        //七牛云oss配置
        qiniu: {
          AK: "",
          SK: "",
          scope: "test",
          url: "http://pm7cc17lu.bkt.clouddn.com/",
          deadline: 1
        },
        //阿里云oss配置
        ali: {
          region: "oss-cn-beijing",
          endpoint: "oss-cn-beijing.aliyuncs.com",
          accessKeyId: "",
          accessKeySecret: "",
          bucket: "avue"
        }
      },
      type: {
        prop: "tab1"
      },
      tabOption: {
        column: [
          {
            icon: "el-icon-info",
            label: "手动录入",
            prop: "tab1"
          },
          {
            icon: "el-icon-warning",
            label: "批量录入",
            prop: "tab2"
          },
          {
            icon: "el-icon-question",
            label: "excel导入",
            prop: "tab3"
          }
        ]
      },
      form: {
        input: "欢迎使用avue",
        textarea: "输入题干"
      },
      option: {
        card: false,
        labelWidth: 110,
        gutter: 100,
        column: [
          {
            label: "试题分类",
            prop: "category",
            type: "select",
            dicData: DIC.TYPE,
            span: 8,
            mock: {
              type: "dic"
            }
          },
          {
            label: "试题知识点",
            prop: "knowledge",
            type: "select",
            dicData: DIC.TYPE,
            span: 8,
            mock: {
              type: "dic"
            }
          },
          {
            label: "试题类型",
            prop: "type",
            type: "select",
            dicData: DIC.TYPE,
            span: 8,
            mock: {
              type: "dic"
            }
          },
          {
            label: "题干",
            prop: "question",
            formslot: true,
            labelslot: true,
            errorslot: true,
            span: 24,
            rules: [
              {
                required: true,
                message: "请输入姓名",
                trigger: "blur"
              }
            ],
            showWordLimit:true
          },
          {
            label: "单选或者多选题",
            prop: "answer",
            formslot: true,
            labelslot: true,
            errorslot: true,
            span: 24,
            rules: [
              {
                required: true,
                message: "请输入答案",
                trigger: "blur"
              }
            ],
            showWordLimit:true
          },
          {
            label: "问答题",
            prop: "answer2",
            formslot: true,
            labelslot: true,
            errorslot: true,
            span: 24,
            rules: [
              {
                required: true,
                message: "请输入答案",
                trigger: "blur"
              }
            ],
            showWordLimit:true
          },
          {
            label: "填空题",
            prop: "answer3",
            formslot: true,
            labelslot: true,
            errorslot: true,
            span: 24,
            rules: [
              {
                required: true,
                message: "请输入对应空格的答案",
                trigger: "blur"
              }
            ],
            showWordLimit:true
          },
          {
            label: "解析",
            prop: "textarea",
            type: "textarea",
            minRows: 10,
            maxlength: 200,
            span: 24,
            showWordLimit: true
          }
        ]
      }
    };
  },
  created() {
    this.type = this.tabOption.column[0];
  },
  methods: {
    handleChange(column) {
      console.log(column);
      this.type = column;
      // this.$message.success(JSON.stringify(column))
    },
    submit() {
      this.$message.success("当前数据" + JSON.stringify(this.form));
    },
    handleSave: function(row, done, loading) {
      //保存
      var nr = document.getElementById("nr");
      row.nr = nr.textContent.trim(); //.trim()去掉首尾的空格
      loading();
      // addObj(row).then(data => {
      //       this.$message({
      //           showClose: true,
      //           message: '添加成功',
      //           type: 'success'
      //       })
      //       done()
      //       this.getList(this.page)
      //       this.$refs.crud.toggleSelection();
      //   }).catch(() => {
      //       loading();
      //   });
    },
    handleEdit(row, index) {
      //修改
      this.text = row.nr;
      this.$refs.crud.rowEdit(row, index);
    }
  }
};
</script>

<style>
.avue-tabs {
  padding: 0;
}
.answer-item{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  padding: 0 5px;
}
.answer-item>button{
  display: none;
}
.answer-item:hover{
  background-color: #efefef;
}
.answer-item:hover button{
  display: block;
}
.answer-item-content{
  align-self: center;
  line-height: 20px;
  width: calc(100% - 140px);
  padding: 5px 10px 5px 0;
}
</style>

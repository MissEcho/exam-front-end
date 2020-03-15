import Mock from 'mockjs'
export default ({ mock }) => {
    if (!mock) return;
    //试卷
    Mock.mock('/api/exam/paper/list', 'get', {
        data: {
            "records": [
              {
                "id": "0",
                "tenantId": "",
                "paperTitle": "试卷名称1",
                "paperCombine": "0",
                "paperCategory": "0",
                "paperCategoryName": "药学",
                "paperCombineName": "抽提组卷",
                "paperLimitType": '是',
                "paperPoint": "120",
                "paperCreator": "张三",
                "createTime": "2019-06-27 23:14:02"
              },
              {
                "id": "1",
                "tenantId": "",
                "paperTitle": "试卷名称1",
                "paperCombine": "0",
                "paperCategory": "0",
                "paperCategoryName": "药学",
                "paperCombineName": "抽提组卷",
                "paperLimitType": '是',
                "paperPoint": "120",
                "paperCreator": "张三",
                "createTime": "2019-06-27 23:14:02"
              }
            ],
            "total": 1,
            "size": 10,
            "current": 1,
            "orders": [],
            "hitCount": false,
            "searchCount": true,
            "pages": 1
          },
    });
    //试卷试卷分类字典
    Mock.mock('/api/blade-system/dict/dictionary?code=paperType', 'get', {
        data: [
            {
              "id": -1,
              "parentId": -1,
              "code": "paperType",
              "dictKey": "1",
              "dictValue": "药学",
              "sort": 1,
              "remark": "leave",
              "isSealed": -1,
              "isDeleted": -1
            },
            {
              "id": -1,
              "parentId": -1,
              "code": "paperType",
              "dictKey": "2",
              "dictValue": "中医药学",
              "sort": 2,
              "remark": "expense",
              "isSealed": -1,
              "isDeleted": -1
            }
          ]
    });
    // 用户登录
    Mock.mock('/user/login', 'post', {
        data: new Date().getTime() + ''
    });
    
    //刷新token
    Mock.mock('/user/refesh', 'post', {
        data: new Date().getTime() + ''
    });

    //获取表格数据
    Mock.mock('/user/getTable', 'get', () => {
        let list = []
        for (let i = 0; i < 5; i++) {
            list.push(Mock.mock({
                id: '@increment',
                name: Mock.mock('@cname'),
                username: Mock.mock('@last'),
                type: [0, 2],
                checkbox: [0, 1],
                'number|0-100': 0,
                datetime: 1532932422071,
                'sex|0-1': 0,
                moreselect: [0, 1],
                "grade": 0,
                address: Mock.mock('@cparagraph(1, 3)'),
                check: [1, 3, 4]
            }))
        }
        return {
            data: {
                total: 11,
                pageSize: 10,
                tableData: list
            }
        }
    })
}

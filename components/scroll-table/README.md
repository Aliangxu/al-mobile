# 测试表格样例数据
xList: [//titleRows
  [
    {
      field_name: "statis_date",
      name: "第一行合并3行1列",
      colspan: 1, //指定单元格 横向 跨越的 列数
      rowspan: 3 //指定单元格 纵向 跨越的 行数
    },
    {
      field_name: "statis_date",
      name: "第一行合并3行1列",
      colspan: 1, //指定单元格 横向 跨越的 列数
      rowspan: 3 //指定单元格 纵向 跨越的 行数
    },
    {
      field_name: "custom_field",
      name: "第一行合并2列",
      colspan: 2,
      rowspan: 1
    },
    {
      field_name: "custom_field",
      name: "第一行合并2列",
      colspan: 2,
      rowspan: 1
    },
    {
      field_name: "custom_field",
      name: "第一行合并3列",
      colspan: 3,
      rowspan: 1
    }
  ],
  [
    {
      field_name: "custom_field",
      name: "第二行日期",
      colspan: 1, //指定单元格 横向 跨越的 列数
      rowspan: 1 //指定单元格 纵向 跨越的 行数
    },
    {
      field_name: "custom_field",
      name: "第二行日期合并2列",
      colspan: 2,
      rowspan: 1
    },
    {
      field_name: "custom_field",
      name: "第二行日期合并2列",
      colspan: 2,
      rowspan: 1
    },
    {
      field_name: "custom_field",
      name: "第二行日期合并3列",
      colspan: 3,
      rowspan: 1
    }
  ],
  [
    {
      field_name: "area_name",
      name: "第三行当月新增",
      colspan: 1, //指定单元格 横向 跨越的 列数
      rowspan: 1 //指定单元格 纵向 跨越的 行数
    },
    {
      field_name: "area_name1",
      name: "第三行当月新增1",
      colspan: 1,
      rowspan: 1
    },
    {
      field_name: "area_name2",
      name: "第三行当月新增2",
      colspan: 1,
      rowspan: 1
    },
    {
      field_name: "area_name3",
      name: "第三行当月新增3",
      colspan: 1,
      rowspan: 1
    },
    {
      field_name: "area_name4",
      name: "第三行当月新增4",
      colspan: 1,
      rowspan: 1
    },
    {
      field_name: "area_name5",
      name: "第三行当月新增5",
      colspan: 1,
      rowspan: 1
    },
    {
      field_name: "area_name6",
      name: "第三行当月新增6",
      colspan: 1,
      rowspan: 1
    }
  ]
],
xField: [//columns-+field
  "statis_date",
  "area_name",
  "area_name1",
  "area_name2",
  "area_name3",
  "area_name4",
  "area_name5",
  "area_name6"
],
yList: [//tableData
  {
    area_name: "新增数据开始",
    area_name1: "新增数据开始1",
    area_name2: "新增数据开始2",
    area_name3: "新增数据开始3",
    area_name4: "新增数据开始4",
    area_name5: "新增数据开始5",
    area_name6: "新增数据开始6",
    statis_date: 100007
  }
]
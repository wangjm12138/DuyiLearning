!function(){
    var ths = document.querySelectorAll('th')   // th集合
    var tbody = document.querySelector('tbody') // tbody 获取之后，在追加元素及查找复选框的时候进行使用
    var rows = tbody.querySelectorAll('tr')     // 所有的行的集合
    var checkAll = document.querySelector('.checkAll')   // 全选按钮获取
    var checkOneList = tbody.querySelectorAll('[type="checkbox"]')   // 单选按钮集合获取
    

      /* 程序入口函数 */
  var init = function () {
    initEvent()
  }

  /* 事件入口函数 */
  var initEvent = function () {
    ths.forEach(function (node, index) {
      node.addEventListener('click', onThsClick.bind(node, index))
    })
    // 全选按钮处理
    checkAll.addEventListener('click', onCheckAllClick)
    // 单选按钮事件绑定
    checkOneList.forEach(function (node) {
      node.addEventListener('click', onCheckOneClick)
    })

  }
  /* 全部选中 */
  var onCheckAllClick = function (e) {
    e.stopPropagation()
    var checkStatus = this.checked
    checkOneList.forEach(function (node) {
      node.checked = checkStatus
    })
  }

  /* 单个进行选中 */
  var onCheckOneClick = function () {
    /* 定义统计数字 */
    var checkedNum = 0
    checkOneList.forEach(function (node) {
      node.checked && ++checkedNum
    })
    checkAll.checked = checkedNum === checkOneList.length
  }
  /* ths表头事件绑定事件绑定 */
  var onThsClick = function (index) {
    /* 处理索引值为1复选框的时候的问题 */
    if (index === 0) return
    var arr = Array.prototype.slice.apply(rows).sort(function (a, b) {
      if (index === 2 || index === 4) {
        /* localeCompare是一种基于国际化字体的地区字符比较，例如中国用中文，美国用英文，法国用法文，德国用德文。。将这些国家的文字按照国家/地区等进行编号，然后每个编号都对应了该国/地区的文字。 */
        return a.querySelectorAll('td')[index].innerHTML.localeCompare(b.querySelectorAll('td')[index].innerHTML, 'zh')
      }
      return a.querySelectorAll('td')[index].innerHTML - b.querySelectorAll('td')[index].innerHTML
    })
    arr.forEach(function (node) {
      tbody.appendChild(node)
    })
  }
  /* Node.appendChild() 方法将一个节点附加到指定父节点的子节点列表的末尾处。如果将被插入的节点已经存在于当前文档的文档树中，那么 appendChild() 只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）。
   */
  init()
}();
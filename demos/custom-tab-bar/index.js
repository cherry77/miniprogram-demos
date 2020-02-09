// component/custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#bfbfbf",
    selectedColor: "#1296db",
    list: [{
      pagePath: "/pages/demo04/index/index",
      iconPath: "/pages/demo04/resource/images/home_un.png",
      selectedIconPath: "/pages/demo04/resource/images/home.png",
      text: "首页"
    }, {
      pagePath: "/pages/demo04/mine/mine",
      iconPath: "/pages/demo04/resource/images/mine_un.png",
      selectedIconPath: "/pages/demo04/resource/images/mine.png",
      text: "我的"
    }]
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})

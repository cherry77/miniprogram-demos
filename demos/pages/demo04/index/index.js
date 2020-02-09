// pages/demo04/index/index.js
// 不能在组件页面写生命周期，目标页面加这段，但是会取代目标页面Page（），正常的组件是在自己组件写pagelifetimes并且会被调用，但是自定义tabbar就必须目标页面用component了。
const api = require('./../api/api.js')
Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    swiperImgs: [
      { src: 'http://image1.chinanews.com.cn/cnsupload/big/2019/10-01/4-426/a7e426b0dd6c43d2bc710fafe810a0d5.jpg'},
      { src: 'http://i2.chinanews.com/simg/cmshd/2019/10/05/998e12aa71f248d4a797761b18e48418.jpg'},
      { src: 'http://i2.chinanews.com/simg/cmshd/2019/10/01/c5391220f28d49bdbd14c58a4300bde0.jpg'}
    ],
    newsList: []
  },
  
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      let newsList = api.getNewsList();
      this.setData({
        newsList
      })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  methods: {
    goToDetail: function (e) {
      //获取携带data-id的数据
      let id = e.currentTarget.dataset.id;
      //携带新闻id进行跳转
      wx.navigateTo({
        url: './../detail/detail?id=' + id,
      })
    }
  }
})
//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    userInfoName: null,
    userInfoEmail: null,
    userInfoQQ: null,
    userInfoID: null,
    resData: null
  },
  /**
   * request请求
   */

  getInfo: function(e){
    wx.request({
      url: 'http://106.15.224.78:8080/MyHttp/myhttp', // url地址
      data: {
        getname: e.data.inputValue
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        //console.log(res.data)
        e.setData({resData:res.data})
        //console.log(e.data.resData)
      }
    })
  },
  /**
   * 按钮点击触发
   */
  clickFun:function(){
    //console.log(this.data.resData[0])
    
    var name = this.data.resData[0]['name']
    var email = this.data.resData[0]['email']
    var id = this.data.resData[0]['id']
    var qq = this.data.resData[0]['qq']
    this.setData({userInfoName:name,userInfoID:id,userInfoEmail:email,userInfoQQ:qq})
  },
  /**
   * 读取输入框的内容
   */
  bindKeyInput: function(e){
    this.setData({
      inputValue: e.detail.value
    })
    //console.log(this.data.inputValue)
    this.getInfo(this)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
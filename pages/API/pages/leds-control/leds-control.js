var dataObj = require("../../../../data/data.js")

Page({
  onShareAppMessage() {
    return {
      title: '获取WXML节点信息',
      path: 'page/API/pages/get-wxml-node-info/get-wxml-node-info'
    }
  },

  data: { 
    array: ['1 x 1','2 x 2','3 x 3', '4 x 4', '5 x 5', '6 x 6', '7 x 7', '8 x 8', '9 x 9'],
    arraynum:[1,4,9,16,25,36,49,64,81],
    pnum: 2,
    visible1: false,
    visible2: false,
    num:[1,2,3,4,5,6,7,8,9,10,11],
    currentId:'1',
    showcolorbar: false,
    showpickdialog:false,
    colorpick:['#e54d42','#f37b1d','#fbbd08','#8dc63f','#39b54a','#1cbbb4','#0081ff','#6739b6','#9c26b0','#e03997','#a5673f','#ff40e3','#40ff55','#fffe03','#8799a3']
   },
  
  onLoad() {
    let _this = this
    wx.getSystemInfo({
      success(res) {
        _this.setData({
          rpxRatio: res.screenWidth / 750,
          clientHeight: res.windowHeight - 305,
          colorData:dataObj.cl.colorData,
          list:dataObj.cl.list,
          showColorPicker:dataObj.cl.showColorPicker
        })
      }
    })
  },
  
  onReady() {
    this.getNodeInfo()
  },

  getNodeInfo(){
    const $ = wx.createSelectorQuery()
    const target = $.select('.target')
    target.boundingClientRect()

    $.exec((res) => {
      const rect = res[0]
      if (rect) {
        const metrics = []
        // eslint-disable-next-line
        for (const key in rect) {
          if (key !== 'id' && key !== 'dataset') {
            const val = rect[key]
            metrics.push({key, val})
            console.log(rect)
          }
        }
        this.setData({metrics})
        
      }
    })
  },

  tapOneDialogButton(e) {
    this.setData({
        showcolorbar: true,
        currentId : e.target.dataset.id
    })
},

  bindPickerChange(e) {
    this.setData({
      pnum: e.detail.value
    })
    wx.request({
      url: 'http://120.77.86.240:3002/UPDATELedArrays',
      data: {
        LedArrays:this.data.arraynum[e.detail.value]
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        
      }
    })
  },

  tap: function (e) {
    var dataset = e.target.dataset;
    var Index = dataset.index;
    this.data.list[Index].x = 0,
      this.data.list[Index].y = 0
    this.setData({
      list: this.data.list
    });
  },

  pickchange(e){
    var index = e.target.dataset.id
    this.setData({
      [`colorData[${this.data.currentId-1}].pickerData.hex`]: this.data.colorpick[index],
      showcolorbar: false
    })
  },


  pickshow: function (e) {
    timer: setTimeout(() => {
      this.setData({
        [`showColorPicker[${this.data.currentId}]`]:true,
        showcolorbar: false,
        showpickdialog:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId:this.data.currentId,
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
      }
    })
    this.onLoad();
  },

  onChangeColor(e) {
    const index = e.target.dataset.id
    this.setData({
      [`colorData[${index-1}]`]: e.detail.colorData
    })
    wx.request({
      url: 'http://120.77.86.240:3002/UPDATEcolor',
      data: {
        id:index,
        color:e.detail.colorData.pickerData.hex,
        red: e.detail.colorData.pickerData.red,
        green: e.detail.colorData.pickerData.green,
        blue: e.detail.colorData.pickerData.blue
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        
      }
    })
  },
  sliderchange(e){
    var opa=e.detail.value
    
    this.setData({
      [`colorData[${this.data.currentId-1}].imgOpacity`]: opa/100
    })
    var opa1=[`colorData[${this.data.currentId-1}].imgOpacity`]
    wx.request({
      url: 'http://120.77.86.240:3002/UPDATEopacity',
      data: {
        id:this.data.currentId,
        opacity:opa.toString()
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
      }
    })
  },
  toggleColorPicker(e) {
    const index = e.currentTarget.dataset.id
    this.setData({
      [`showColorPicker[${index}]`]: !this.data.showColorPicker[index]
    })
  },
  closeColorPicker() {
    this.setData({
      showColorPicker:[
        false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false
        ],
    })
  },
  judgeColorPicker(){

      this.closeColorPicker()

  },
  lamp(){
    for (const j in [1,2,3,4,5,6]) {
    for (const i in this.data.num) {
      var that = this;    
      setTimeout(function () {
        that.setData({
          [`colorData${i - 1}.imgOpacity`]: '1',
          [`colorData${i}.imgOpacity`]: '0'
        })
      }, i*250+2500*(j-1)) 
    }
  }
  },
  reset(e) {
    wx.request({
      url: 'http://120.77.86.240:3000/api/leds',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        
      }
    }),
    this.setData({
      list:this.data.list
    })
  },
  onShareAppMessage(res) {
    return {
      title: '小插件库-拾色器',
      imageUrl: '/images/logo.jpg',
      path: '/pages/color_picker_demo/color_picker_demo'
    }
  }
})

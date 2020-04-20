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
    index: 2,
    visible1: false,
    visible2: false,
    num:[1,2,3,4,5,6,7,8,9,10,11],
    gg:'1',
    metrics: [],
    list: [
      //每个移动块的坐标
      {
        id: '1',
        x: 75,
        y: 38,
        x2: 50,
        y2: 0+10,
        x3: 40,
        y3: 0+5,
        x4: 15,
        y4: 15
      },
      {
        id: '2',
        x: 135,
        y: 38,
        x2: 110,
        y2: 0+10,
        x3: 95,
        y3: 0+5,
        x4: 65,
        y4: 15
      },
      {
        id: '3',
        x: 195,
        y: 38,
        x2: 170,
        y2: 0+10,
        x3: 150,
        y3: 0+5,
        x4: 115,
        y4: 15
      },
      {
        id: '4',
        x: 75,
        y: 98,
        x2: 230,
        y2: 0+10,
        x3: 205,
        y3: 0+5,
        x4: 165,
        y4: 15
      },
      {
        id: '5',
        x: 135,
        y: 98,
        x2: 50,
        y2: 60+10,
        x3: 260,
        y3: 0+5,
        x4: 215,
        y4: 15
      },
      {
        id: '6',
        x: 195,
        y: 98,
        x2: 110,
        y2: 60+10,
        x3: 40,
        y3: 50+5,
        x4: 265,
        y4: 15
      },
      {
        id: '7',
        x: 75,
        y: 158,
        x2: 170,
        y2: 60+10,
        x3: 95,
        y3: 50+5,
        x4: 15,
        y4: 65
      },
      {
        id: '8',
        x: 135,
        y: 158,
        x2: 230,
        y2: 60+10,
        x3: 150,
        y3: 50+5,
        x4: 65,
        y4: 65
      },
      {
        id: '9',
        x: 195,
        y: 158,
        x2: 50,
        y2: 120+10,
        x3: 205,
        y3: 50+5,
        x4: 115,
        y4: 65
      },
      {
        id: '10',
        x: 195,
        y: 158,
        x2: 110,
        y2: 120+10,
        x3: 260,
        y3: 50+5,
        x4: 165,
        y4: 65
      },
      {
        id: '11',
        x: 195,
        y: 158,
        x2: 170,
        y2: 120+10,
        x3: 40,
        y3: 100+5,
        x4: 215,
        y4: 65
      },
      {
        id: '12',
        x: 195,
        y: 158,
        x2: 230,
        y2: 120+10,
        x3: 95,
        y3: 100+5,
        x4: 265,
        y4: 65
      },
      {
        id: '13',
        x: 195,
        y: 158,
        x2: 50,
        y2: 180+10,
        x3: 150,
        y3: 100+5,
        x4: 15,
        y4: 115
      },
      {
        id: '14',
        x: 195,
        y: 158,
        x2: 110,
        y2: 180+10,
        x3: 205,
        y3: 100+5,
        x4: 65,
        y4: 115
      },
      {
        id: '15',
        x: 195,
        y: 158,
        x2: 170,
        y2: 180+10,
        x3: 260,
        y3: 100+5,
        x4: 115,
        y4: 115
      },
      {
        id: '16',
        x: 195,
        y: 158,
        x2: 230,
        y2: 180+10,
        x3: 40,
        y3: 150+5,
        x4: 165,
        y4: 115
      },
      {
        id: '17',
        x: 195,
        y: 158,
        x2: 220,
        y2: 180,
        x3: 95,
        y3: 150+5,
        x4: 215,
        y4: 115
      },
      {
        id: '18',
        x: 195,
        y: 158,
        x2: 220,
        y2: 180+10,
        x3: 150,
        y3: 150+5,
        x4: 265,
        y4: 115
      },
      {
        id: '19',
        x: 195,
        y: 158,
        x2: 220,
        y2: 180+10,
        x3: 205,
        y3: 150+5,
        x4: 15,
        y4: 165
      },
      {
        id: '20',
        x: 195,
        y: 158,
        x2: 220,
        y2: 180+10,
        x3: 260,
        y3: 150+5,
        x4: 65,
        y4: 165
      },
      {
        id: '21',
        x: 195,
        y: 158,
        x2: 220,
        y2: 180+10,
        x3: 40,
        y3: 200+5,
        x4: 115,
        y4: 165
      },
      {
        id: '22',
        x: 195,
        y: 158,
        x2: 220,
        y2: 180+10,
        x3: 95,
        y3: 200+5,
        x4: 165,
        y4: 165
      },
      {
        id: '23',
        x: 195,
        y: 158,
        x2: 220,
        y2: 180+10,
        x3: 150,
        y3: 200+5,
        x4: 215,
        y4: 165
      },
      {
        id: '24',
        x: 195,
        y: 158,
        x2: 220,
        y2: 180+10,
        x3: 205,
        y3: 200+5,
        x4: 265,
        y4: 165
      },
      {
        id: '25',
        x: 195,
        y: 158,
        x2: 220,
        y2: 180+10,
        x3: 260,
        y3: 200+5,
        x4: 15,
        y4: 215
      },
      {
        id:'26',
        x4: 65,
        y4: 215
      },
      {
        id: '27',
        x4: 115,
        y4: 215
      },
      {
        id: '28',
        x4: 165,
        y4: 215
      },
      {
        id: '29',
        x4: 215,
        y4: 215
      },
      {
        id: '30',
        x4: 265,
        y4: 215
      },
      {
        id: '31',
        x4: 15,
        y4: 265
      },
      {
        id: '32',
        x4: 65,
        y4: 265
      },
      {
        id: '33',
        x4: 115,
        y4: 265
      },
      {
        id: '34',
        x4: 165,
        y4: 265
      },
      {
        id: '35',
        x4: 215,
        y4: 265
      },
      {
        id: '36',
        x4: 265,
        y4: 265
      }
    ],
    metrics: [{}],
    showColorPicker1: false,
    showColorPicker2: false,
    showColorPicker3: false,
    showColorPicker4: false,
    showColorPicker5: false,
    showColorPicker6: false,
    showColorPicker7: false,
    showColorPicker8: false,
    showColorPicker9: false,
    showColorPicker10: false,
    showColorPicker11: false,
    showColorPicker12: false,
    showColorPicker13: false,
    showColorPicker14: false,
    showColorPicker15: false,
    showColorPicker16: false,
    showColorPicker17: false,
    showColorPicker18: false,
    showColorPicker19: false,
    showColorPicker20: false,
    showColorPicker21: false,
    showColorPicker22: false,
    showColorPicker23: false,
    showColorPicker24: false,
    showColorPicker25: false,
    showColorPicker26: false,
    showColorPicker27: false,
    showColorPicker28: false,
    showColorPicker29: false,
    showColorPicker30: false,
    showColorPicker31: false,
    showColorPicker32: false,
    showColorPicker33: false,
    showColorPicker34: false,
    showColorPicker35: false,
    showColorPicker36: false,
    showColorPicker37: false,
    showColorPicker38: false,
    showColorPicker39: false,
    showColorPicker40: false,
    showColorPicker41: false,
    showColorPicker42: false,
    colorData1: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData2: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData3: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData4: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData5: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData6: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData7: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData8: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData9: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData10: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData11: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData12: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData13: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData14: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData15: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData16: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData17: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData18: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData19: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData20: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      
      //色相控制条位置
      barY: 0
    },
    colorData21: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },

      //色相控制条位置
      barY: 0
    },
    colorData22: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },

      //色相控制条位置
      barY: 0
    },
    colorData23: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },

      //色相控制条位置
      barY: 0
    },
    colorData24: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },

      //色相控制条位置
      barY: 0
    },
    colorData25: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },

      //色相控制条位置
      barY: 0
    },
    colorData26: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData27: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData28: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData29: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData30: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData31: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData32: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData33: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData34: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData35: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    colorData36: {
      imgOpacity: 1,
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#bdbcbce0'
      },
      //色相控制条位置
      barY: 0
    },
    rpxRatio: 1 //单位rpx实际像素
    },
  

  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
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
  bindchange1: function (e) {
    this.data.gg = 1
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker1:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId:this.data.gg,
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
  bindchange2: function (e) {
    this.data.gg = 2
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker2:true
      });
    }, 50)
      wx.request({
        url: 'http://120.77.86.240:3002/currentId',
        data: {
          currentId:this.data.gg,
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
  bindchange3: function (e) {
    this.data.gg = 3
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker3:true
      });
    }, 50)
      wx.request({
        url: 'http://120.77.86.240:3002/currentId',
        data: {
          currentId:this.data.gg,
        },
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
        }
      })
    this.onLoad();
  },
  bindchange4: function (e) {
    this.data.gg = 4
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker4:true
      });
    }, 50)
      wx.request({
        url: 'http://120.77.86.240:3002/currentId',
        data: {
          currentId:this.data.gg,
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
  bindchange5: function (e) {
    this.data.gg = 5
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker5:true
      });
    }, 50)
      wx.request({
        url: 'http://120.77.86.240:3002/currentId', 
        data: {
          currentId:this.data.gg,
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
  bindchange6: function (e) {
    this.data.gg = 6
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker6:true
      });
    }, 50)
      wx.request({
        url: 'http://120.77.86.240:3002/currentId',
        data: {
          currentId:this.data.gg,
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
  bindchange7: function (e) {
    this.data.gg = 7
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker7:true
      });
    }, 50)
      wx.request({
        url: 'http://120.77.86.240:3002/currentId',
        data: {
          currentId:this.data.gg,
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
  bindchange8: function (e) {
    this.data.gg = 8
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker8:true
      });
    }, 50)
      wx.request({
        url: 'http://120.77.86.240:3002/currentId',
        data: {
          currentId:this.data.gg,
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
  bindchange9: function (e) {
    this.data.gg = 9
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker9:true
      });
    }, 50)
      wx.request({
        url: 'http://120.77.86.240:3002/currentId',
        data: {
          currentId:this.data.gg,
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
  bindchange10: function (e) {
    this.data.gg = 10
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker10:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange11: function (e) {
    this.data.gg = 11
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker11:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange12: function (e) {
    this.data.gg = 12
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker12:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange13: function (e) {
    this.data.gg = 13
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker13:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange14: function (e) {
    this.data.gg = 14
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker14:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange15: function (e) {
    this.data.gg = 15
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker15:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange16: function (e) {
    this.data.gg = 16
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker16:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange17: function (e) {
    this.data.gg = 17
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker17:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange18: function (e) {
    this.data.gg = 18
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker18:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange19: function (e) {
    this.data.gg = 19
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker19:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange20: function (e) {
    this.data.gg = 20
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker20:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange21: function (e) {
    this.data.gg = 21
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker21:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange22: function (e) {
    this.data.gg = 22
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker22:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange23: function (e) {
    this.data.gg = 23
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker23:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange24: function (e) {
    this.data.gg = 24
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker24:true
      });
    }, 50)
      wx.request({
        url: 'http://120.77.86.240:3002/currentId',
        data: {
          currentId: this.data.gg,
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
  bindchange25: function (e) {
    this.data.gg = 25
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker25:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange26: function (e) {
    this.data.gg = 26
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker26:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange27: function (e) {
    this.data.gg = 27
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker27:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange28: function (e) {
    this.data.gg = 28
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker28:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange29: function (e) {
    this.data.gg = 29
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker29:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange30: function (e) {
    this.data.gg = 30
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker30:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange31: function (e) {
    this.data.gg = 31
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker31:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange32: function (e) {
    this.data.gg = 32
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker32:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange33: function (e) {
    this.data.gg = 33
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker33:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange34: function (e) {
    this.data.gg = 34
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker34:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange35: function (e) {
    this.data.gg = 35
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker35:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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
  bindchange36: function (e) {
    this.data.gg = 36
    timer: setTimeout(() => {
      this.setData({
        gg: this.data.gg,
        showColorPicker36:true
      });
    }, 50)
    wx.request({
      url: 'http://120.77.86.240:3002/currentId',
      data: {
        currentId: this.data.gg,
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


  onLoad() {
    let _this = this
    wx.getSystemInfo({
      success(res) {
        _this.setData({
          rpxRatio: res.screenWidth / 750,
          clientHeight: res.windowHeight - 305
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
  onChangeColor(e) {
    const index = e.target.dataset.id
    this.setData({
      [`colorData${index}`]: e.detail.colorData
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
      [`colorData${this.data.gg}.imgOpacity`]: opa/100
    })
    var opa1=[`colorData${this.data.gg}.imgOpacity`]
    wx.request({
      url: 'http://120.77.86.240:3002/UPDATEopacity',
      data: {
        id:this.data.gg,
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
      [`showColorPicker${index}`]: !this.data[`showColorPicker${index}`]
    })
  },
  closeColorPicker() {
    this.setData({
      showColorPicker1: false,
      showColorPicker2: false,
      showColorPicker3: false,
      showColorPicker4: false,
      showColorPicker5: false,
      showColorPicker6: false,
      showColorPicker7: false,
      showColorPicker8: false,
      showColorPicker9: false,
      showColorPicker10: false,
      showColorPicker11: false,
      showColorPicker12: false,
      showColorPicker13: false,
      showColorPicker14: false,
      showColorPicker15: false,
      showColorPicker16: false,
      showColorPicker17: false,
      showColorPicker18: false,
      showColorPicker19: false,
      showColorPicker20: false,
      showColorPicker21: false,
      showColorPicker22: false,
      showColorPicker23: false,
      showColorPicker24: false,
      showColorPicker25: false,
      showColorPicker26: false,
      showColorPicker27: false,
      showColorPicker28: false,
      showColorPicker29: false,
      showColorPicker30: false,
      showColorPicker31: false,
      showColorPicker32: false,
      showColorPicker33: false,
      showColorPicker34: false,
      showColorPicker35: false,
      showColorPicker36: false,
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

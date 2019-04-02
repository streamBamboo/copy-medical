import Taro, {Component} from '@tarojs/taro'
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss'
import './static/css/iconfont.css'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/order/index',
      'pages/my/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "./static/image/index.png",
          selectedIconPath: "./static/image/index_active.png"
        },
        {
          pagePath: "pages/order/index",
          text: "订单",
          iconPath: "./static/image/order.png",
          selectedIconPath: "./static/image/order_active.png"
        },
        {
          pagePath: "pages/my/index",
          text: "我的",
          iconPath: "./static/image/my.png",
          selectedIconPath: "./static/image/my_active.png"
        }
      ]
    }
  };

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index/>
    )
  }
}

Taro.render(<App/>, document.getElementById('app'))

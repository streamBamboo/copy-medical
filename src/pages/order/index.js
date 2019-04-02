import Taro, {Component} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderMenu: [
        {
          image: require('../../static/image/order.png'),
          text: '待付款',
          num: 0,
        }, {
          image: require('../../static/image/order.png'),
          text: '待使用',
          num: 0,
        }, {
          image: require('../../static/image/order.png'),
          text: '待评价',
          num: 14,
        }, {
          image: require('../../static/image/order.png'),
          text: '退款/售后',
          num: 0,
        }, {
          image: require('../../static/image/order.png'),
          text: '全部订单',
          num: 0,
        },
      ]
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    const {orderMenu} = this.state;
    return (
      <View className="order">
        <View className='order_header'>
          <View className='fs-30 fw-bold text-center'>我的订单</View>
          <View className='at-row at-row__justify--between order_header-menu'>
            {
              orderMenu.map((item, index) => {
                return (
                  <View key={index} className='menu_list text-center'>
                    <View className='menu_image'>
                      {
                        item.num > 0 ? <View className='menu_badge'>{item.num}</View> : null
                      }

                      <Image className='image-100' src={item.image}/>
                    </View>
                    <Text className='fc-0e0e0e'>{item.text}</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
      </View>
    )
  }
}


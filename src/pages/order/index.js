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
      ],
      orderList: [
        {
          classifyName: '光修复眼部护理',
          orderState: '待评价',
          image: require('../../static/image/shop_image.png'),
          icon: require('../../static/image/order_icon.png'),
          orderName: '订单名称',
          allPrice: '总价：￥999.00',
          setMeal: '套餐：套餐名称款式自选进口光疗套餐名称款式自选进口光疗套餐名称款式自选进口光疗',
          state: '评价'
        }, {
          classifyName: '光修复眼部护理',
          orderState: '待评价',
          image: require('../../static/image/shop_image.png'),
          icon: require('../../static/image/order_icon.png'),
          orderName: '订单名称',
          allPrice: '总价：￥999.00',
          setMeal: '套餐：套餐名称款式自选进口光疗',
          state: '评价'
        }, {
          classifyName: '光修复眼部护理',
          orderState: '待评价',
          image: require('../../static/image/shop_image.png'),
          icon: require('../../static/image/order_icon.png'),
          orderName: '订单名称',
          allPrice: '总价：￥999.00',
          setMeal: '套餐：套餐名称款式自选进口光疗',
          state: '评价'
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
    const {orderMenu, orderList} = this.state;
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
        <View className='recent_order'>
          <View className='fs-28 fw-bold '>最近订单</View>
          {
            orderList.map((item, index) => {
              return (
                <View key={index} className='order_list-content'>
                  <View className='list_content-head w-auto at-row at-row__justify--between at-row__align--center'>
                    <View className='at-row at-row__align--center w-auto'>
                      <View className='list_content-icon'><Image className='image-100' src={item.icon}/></View>
                      <Text>{item.classifyName}</Text>
                    </View>
                    <View>{item.orderState}</View>
                  </View>
                  <View className='list_content-content'>
                    <View className='at-row list_content-detail'>
                      <View className='list_content-image'><Image className='image-100' src={item.image}/></View>
                      <View style='flex: 1;width: 80%'>
                        <View style='color: #222;'>{item.orderName}</View>
                        <View style='margin-top: 5px;color: #666;' className='text-overflow'>{item.setMeal}</View>
                        <View style='margin-top: 5px;color: #666;'>{item.allPrice}</View>
                      </View>
                    </View>
                    <View className='list_content-evaluate'>{item.state}</View>
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}


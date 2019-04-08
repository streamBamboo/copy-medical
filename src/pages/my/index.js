import Taro, {Component} from '@tarojs/taro'
import {View, Image, Navigator} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      memberMenu: [
        {
          image: require('../../static/image/collect.png'),
          text: '收藏',
          url: '/pages/my/collect/index'
        }, {
          image: require('../../static/image/evaluate.png'),
          text: '评价',
          url: '/pages/my/evaluate/index'
        }, {
          image: require('../../static/image/footer.png'),
          text: '最近浏览',
          url: '/pages/my/footer/index'
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
    const {memberMenu, orderList} = this.state;
    return (
      <View className="member">
        <View className='member_header'>
          <View className='member_header-content'>
            <View className='member_header-head'>
              <Image className='image-100' src={require('../../static/image/user.png')}/>
            </View>
            <View className='fc-0'>用户ID / 用户名</View>
          </View>
        </View>
        <View className='at-row at-row__justify--between member_menu w-auto'>
          {
            memberMenu.map((item, index) => {
              return (
                <Navigator open-type="navigate" url={item.url} key={index} className='menu_list text-center'>
                  <View className='menu_image'>
                    <Image className='image-100' src={item.image}/>
                  </View>
                  <Text className='fc-3'>{item.text}</Text>
                </Navigator>
              )
            })
          }
        </View>
        <View className='member_content'>
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
                      <Navigator
                        className='list_content-evaluate'
                        openType='navigate'
                        url='/pages/my/evaluateUser/index'
                      >{item.state}</Navigator>
                    </View>
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


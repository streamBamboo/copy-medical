import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text, Input} from '@tarojs/components'
import './index.scss'
import { AtIcon } from 'taro-ui'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      payList: [
        {
          image: require('../../../static/image/shop_image.png'),
          name: '精选特惠 4 人套餐',
          time: '周一至周日',
          price: '￥298'
        },
      ],
      num: 1,
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
    const {payList, num} = this.state;
    return (
      <View className='pay'>
        <View className='pay_content'>
          {
            payList.map((item, index) => {
              return (
                <View key={index} className='pay_shop-list at-row at-row__justify--between w-auto'>
                  <View className='at-row'>
                    <View className='pay_shop-image'><Image className='image-100' src={item.image}/></View>
                    <View>
                      <View className='fs-30 fw-bold fc-3'>{item.name}</View>
                      <View className='pay_shop-time'>{item.time}</View>
                    </View>
                  </View>
                  <Text className='pay_shop-price'>{item.price}</Text>
                </View>
              )
            })
          }
          <View style='padding-left: 20px'>
            <View className='at-row at-row__justify--between at-row__align--center w-auto pay_num'>
              <View>数量</View>
              <View className='at-row at-row__align--center w-auto'>
                <View className='pay_subtract pay_circle'><AtIcon value='subtract' size='18' color='#cacaca' /></View>
                <Text className='pay_num-num'>{num}</Text>
               <View className='pay_add pay_circle'> <AtIcon value='add' size='18' color='#fff' /></View>
              </View>
            </View>
            <View className='at-row at-row__justify--between at-row__align--center w-auto pay_num' style='padding: 12px 11px 12px 0'>
              <View>小计</View>
              <View className='fc-f99108'>￥198</View>
            </View>
          </View>
        </View>
        <View className='at-row at-row__justify--between at-row__align--center w-auto pay_num' style='padding: 12px 11px 12px 20px;background: #fff;'>
          <View>实付金额</View>
          <View className='fc-f99108'>￥198</View>
        </View>
        <View className='at-row at-row__justify--between at-row__align--center w-auto pay_num' style='padding: 12px 11px 12px 20px;background: #fff;'>
          <View>手机号码</View>
          <View className='fc-848484'>13415205710</View>
        </View>
        <View className='pay_submit'><View className='pay_btn'>￥198 提交订单</View></View>
      </View>
    )
  }
}


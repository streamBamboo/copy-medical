import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text, Input, ScrollView} from '@tarojs/components'
import './index.scss'
import {AtRate} from 'taro-ui'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shopSwiper: [
        {
          image: require('../../../static/image/head_bg.png'),
        }, {
          image: require('../../../static/image/head_bg.png'),
        }, {
          image: require('../../../static/image/head_bg.png'),
        }, {
          image: require('../../../static/image/head_bg.png'),
        }, {
          image: require('../../../static/image/head_bg.png'),
        }, {
          image: require('../../../static/image/head_bg.png'),
        }, {
          image: require('../../../static/image/head_bg.png'),
        },
      ],
      setMeal: [
        {
          image: require('../../../static/image/footer.png'),
          text: '到会登记哦京东我就饿得',
          num: '1次',
          price: '20元',
        }, {
          image: require('../../../static/image/footer.png'),
          text: '到会登记哦京东我就饿得',
          num: '1次',
          price: '220元',
        }, {
          image: require('../../../static/image/footer.png'),
          text: '到会登记哦京东我就饿得',
          num: '1次',
          price: '20元',
        }, {
          image: require('../../../static/image/footer.png'),
          text: '到会登记哦京东我就饿得',
          num: '1次',
          price: '20元',
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
    const {shopSwiper, setMeal} = this.state;
    return (
      <View className='shop'>
        <View className='shop_head'>
          <View className='pad-lr-20'>
            <View className='fs-30 fc-3 fw-bold'>U5 beauty日式美甲沙龙（正佳广场店）</View>
            <View className='fc-6 mar-t-20'>5213人评 | ￥78/人</View>
            <View className='close_time at-row at-row__align--center mar-t-20'>
              <View className='close_time_image'>
                <Image className='image-100' src={require('../../../static/image/time.png')}/>
              </View>
              <View className='fc-6'>22:00 打烊</View>
            </View>
          </View>
          <ScrollView
            scrollX
            className='shop_swiper'
          >
            {
              shopSwiper.map((item, index) => {
                return (
                  <View className='shop_swiper_image' key={index}>
                    <Image className='image-100' src={item.image}/>
                  </View>
                )
              })
            }
          </ScrollView>
          <View className='shop_detail at-row at-row__align--center pad-lr-20 w-auto'>
            <View className='shop_location_image'>
              <Image className='image-100' src={require('../../../static/image/location.png')}/>
            </View>
            <View className='shop_location fs-28 fc-3'>
              天河区天河路230-232号万菱汇B区B1层（无印良品对面）
              <Text className='shop_location_distance fc-9'>距您步行30m</Text>
            </View>
            <View className='shop_phone_image'>
              <Image className='image-100' src={require('../../../static/image/phone.png')}/>
            </View>
          </View>
        </View>
        <View className='set_meal pad-l-20'>
          <View className='set_meal_head'>
            套餐
          </View>
          <View className='set_meal_list pad-r-20'>
            {
              setMeal.map((item, index) => {
                return (
                  <View key={index} className='set_meal_item at-row at-row__justify--between'>
                    <View className='at-row w-auto'>
                      <View className='set_meal_image'><Image className='image-100' src={item.image}/></View>
                      <View>{item.text}</View>
                    </View>
                    <View className='at-row w-auto '>
                      <View className='set_meal_item_num'>{item.num}</View>
                      <View className='set_meal_item_price'>{item.price}</View>
                    </View>
                  </View>
                )
              })
            }
          </View>
          <View>

          </View>
        </View>

      </View>
    )
  }
}


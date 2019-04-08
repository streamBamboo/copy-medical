import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collectList: [
        {
          classifyName: '光修复色素减退，色脱疗程',
          image: require('../../../static/image/shop_image.png'),
          allPrice: '￥999.00',
          productPrice: '￥1399.00',
          setMeal: '消除面部色斑，使皮肤变得细嫩、光滑',
          state: '添加到订单'
        }, {
          classifyName: '光修复色素减退，色脱疗程',
          image: require('../../../static/image/shop_image.png'),
          allPrice: '￥999.00',
          productPrice: '￥1399.00',
          setMeal: '消除面部色斑，使皮肤变得细嫩、光滑',
          state: '添加到订单'
        }, {
          classifyName: '光修复色素减退，色脱疗程',
          image: require('../../../static/image/shop_image.png'),
          allPrice: '￥999.00',
          productPrice: '￥1399.00',
          setMeal: '消除面部色斑，使皮肤变得细嫩、光滑',
          state: '添加到订单'
        }, {
          classifyName: '光修复色素减退，色脱疗程',
          image: require('../../../static/image/shop_image.png'),
          allPrice: '￥999.00',
          productPrice: '￥1399.00',
          setMeal: '消除面部色斑，使皮肤变得细嫩、光滑',
          state: '添加到订单'
        }
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
    const {collectList} = this.state;
    return (
      <View className="collect">
        <View className='collect_head'>
          <Image className='image-100' src={require('../../../static/image/head_bg.png')} />
          <View className='collect_head-content at-row '>
            <View className='collect_head-image'>
              <Image className='image-100' src={require('../../../static/image/user.png')}  />
            </View>
            <View >
              <View className='collect_head-id'>用户ID / 用户名</View>
              <View>会员等级： 4</View>
            </View>
          </View>
        </View>
        <View className='collect_list'>
          <View className='collect_list-content'>
            <View className='collect_list-head at-row at-row__justify--between w-auto'>
              <Text className='collect_list-my'>最近浏览</Text>
              <Text className='collect_list-edit'>清空</Text>
            </View>
            {
              collectList.map((item, index) => {
                return (
                  <View key={index} className='collect_list-list at-row at-row__justify--between at-row__align--center'>
                    <View className='at-row w-auto'>
                      <View className='collect_list-image'><Image className='image-100' src={item.image} /></View>
                      <View>
                        <View>{item.classifyName}</View>
                        <View className='fs-18 text-overflow fc-969696'>{item.setMeal}</View>
                        <View className='collect_list-price'>
                          <Text className='all_price'>{item.allPrice}</Text>
                          <Text className='product_price'>{item.productPrice}</Text>
                        </View>
                      </View>
                    </View>
                    <AtIcon prefixClass='iconfont' value='right' size='26' color='#ccc' />
                    {/*<View className='collect_list-btn'>
                      {item.state}
                    </View>*/}
                  </View>
                )
              })
            }

            <View className='collect_list-footer'>已经到底了╮(╯_╰)╭</View>
          </View>
        </View>
      </View>
    )
  }
}


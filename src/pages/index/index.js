import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text, ScrollView} from '@tarojs/components'
import {AtIcon} from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  };

  constructor(props) {
    super(props)
    this.state = {
      leftList: [
        {
          text: '美容化妆',
          id: '1',
        }, {
          text: '推拿理疗',
          id: '2',
        }, {
          text: '月子中心',
          id: '3',
        }, {
          text: '毛发/美甲/纹绣',
          id: '4',
        }, {
          text: '瑜伽/健身/武术/舞蹈',
          id: '5',
        }, {
          text: '学员培训/职业点对点',
          id: '6',
        }, {
          text: '阳光维修助手',
          id: '7',
        },
      ],
      shopList: [
        {
          image: require('../../static/image/shop_image.png'),
          shopName: '光修复色素减退使皮肤变得细嫩',
          shopDetail: '消除面部色斑消除面部色斑，使皮肤变得细嫩使皮肤变得细嫩使皮肤变得细嫩使皮肤变得细嫩、光滑',
          price: '￥999.99',
          productPrice: '￥1399'
        }, {
          image: require('../../static/image/shop_image.png'),
          shopName: '光修复色素减退',
          shopDetail: '消除面部色斑，使皮肤变得细嫩、光滑',
          price: '￥999.99',
          productPrice: '￥1399'
        }, {
          image: require('../../static/image/shop_image.png'),
          shopName: '光修复色素减退',
          shopDetail: '消除面部色斑，使皮肤变得细嫩、光滑',
          price: '￥999.99',
          productPrice: '￥1399'
        }, {
          image: require('../../static/image/shop_image.png'),
          shopName: '光修复色素减退',
          shopDetail: '消除面部色斑，使皮肤变得细嫩、光滑',
          price: '￥999.99',
          productPrice: '￥1399'
        },{
          image: require('../../static/image/shop_image.png'),
          shopName: '光修复色素减退',
          shopDetail: '消除面部色斑，使皮肤变得细嫩、光滑',
          price: '￥999.99',
          productPrice: '￥1399'
        },{
          image: require('../../static/image/shop_image.png'),
          shopName: '光修复色素减退',
          shopDetail: '消除面部色斑，使皮肤变得细嫩、光滑',
          price: '￥999.99',
          productPrice: '￥1399'
        },{
          image: require('../../static/image/shop_image.png'),
          shopName: '光修复色素减退',
          shopDetail: '消除面部色斑，使皮肤变得细嫩、光滑',
          price: '￥999.99',
          productPrice: '￥1399'
        },{
          image: require('../../static/image/shop_image.png'),
          shopName: '光修复色素减退',
          shopDetail: '消除面部色斑，使皮肤变得细嫩、光滑',
          price: '￥999.99',
          productPrice: '￥1399'
        },
      ],
      tabIndex: 0
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

  tab(index) {
    this.setState({
      tabIndex: index
    })
  }

  render() {
    const {leftList, tabIndex, shopList} = this.state;
    return (
      <View className="index">
        <View className="index_header">
          <Image className="image-100" src={require("../../static/image/index_header.png")}/>
        </View>
        <View className="index-content at-row">
          <View className="index_content-left fs-26">
            {
              leftList.map((item, index) => {
                return (
                  <View onClick={this.tab.bind(this, index)}
                        className={["left_item ", index === tabIndex ? 'active' : '']}
                        key={index}
                  >
                    {/*{item.text}*/}
                    <Text className='item_text'>{item.text}</Text>
                  </View>
                )
              })
            }
          </View>
          <View className="index_content-right">
            {
              shopList.map((item, index) => {
                return (
                  <View className='right_shop at-row' key={index}>
                    <View className='right_shop-image'><Image className='image-100' src={item.image}/></View>
                    <View className='right_shop-content'>
                      <View className='fs-28 fc-3 fw-bold text-overflow'>{item.shopName}</View>
                      <View className='fc-96 fs-18 shop_detail textline-overflow2'>{item.shopDetail}</View>
                      <View className='at-row at-row__justify--between at-row__align--center'>
                        <View>
                          <Text className='shop_price'>{item.price}</Text>
                          <Text className='shop_product-price'>{item.productPrice}</Text>
                        </View>
                        <AtIcon prefixClass='iconfont' value='add' size='24' color='#f8b551'/>
                      </View>
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


import search from '@/assets/icons/search.svg'
import arrowRight from '@/assets/icons/arrow-right.svg'
import star from '@/assets/icons/star.svg'
import heart from '@/assets/icons/heart.svg'
import heartRed from '@/assets/icons/heart-red.svg'
import avatar1 from '@/assets/img/avatar/avatar-1.png'
import item1 from '@/assets/img/product/milk1.png'
import {
  Row,
  Col,
  Typography,
  Rate,
  InputNumber,
  Button,
  Tag,
  Descriptions,
  List,
  Avatar,
  Card,
  Space,
  Form,
  Input,
  notification,
} from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useViewDetailProduct } from '@/hooks/customer-hook/product/use-view-detail-product'
import { useParams } from 'react-router-dom'
import { useAddCartItem } from '@/hooks/customer-hook/cart/use-add-cart.item'

const { Title, Paragraph } = Typography

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1)
  const [currentTab, setCurrentTab] = useState('description')
  const [newReview, setNewReview] = useState({ rating: 0, content: '' })
  const { productId }: any = useParams()
  const AddToCartMutation = useAddCartItem()

  console.log(newReview)

  const { data: product } = useViewDetailProduct(productId)
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab)
  }

  function handleAddToCart(productId: number, quantity: number) {
    AddToCartMutation.mutate({ productId, quantity })
  }

  const handleSubmitReview = (values: any) => {
    console.log('New review: ', values)
    setNewReview({ rating: 0, content: '' })
  }

  const reviews = [
    {
      author: 'Jakir Hussen',
      avatar: avatar1,
      content: 'Great product, I love this Coffee Beans',
      rating: 3.5,
    },
    {
      author: 'Alice Johnson',
      avatar: 'https://example.com/avatar2.png',
      content: 'Excellent quality, highly recommended!',
      rating: 5,
    },
    {
      author: 'Bob Smith',
      avatar: 'https://example.com/avatar3.png',
      content: 'Good coffee, but a bit pricey.',
      rating: 4,
    },
  ]

  return (
    <div>
      <main className="product-page">
        <div className="container">
          {/* <!-- Search bar --> */}
          <div className="product-container">
            <div className="search-bar d-none d-md-flex">
              <input type="text" name="" id="" placeholder="Search for item" className="search-bar__input" />
              <button className="search-bar__submit">
                <img src={search} alt="" className="search-bar__icon icon" />
              </button>
            </div>
          </div>

          {/* <!-- Breadcrumbs --> */}
          <div className="product-container">
            <ul className="breadcrumbs">
              <li>
                <a href="#!" className="breadcrumbs__link">
                  Departments
                  <img src={arrowRight} alt="" />
                </a>
              </li>
              <li>
                <a href="#!" className="breadcrumbs__link">
                  Coffee
                  <img src={arrowRight} alt="" />
                </a>
              </li>
              <li>
                <a href="#!" className="breadcrumbs__link">
                  Coffee Beans
                  <img src={arrowRight} alt="" />
                </a>
              </li>
              <li>
                <a href="#!" className="breadcrumbs__link breadcrumbs__link--current">
                  LavAzza
                </a>
              </li>
            </ul>
          </div>

          <div className="container mx-auto px-4 py-8">
            <Row gutter={[32, 32]}>
              <Col xs={24} md={12} className="flex justify-center">
                <img
                  src={product?.productImg}
                  alt={product?.productName}
                  className="h-[600px] w-10/12 object-cover rounded-lg shadow-lg"
                />
              </Col>
              <Col xs={24} md={12}>
                <Title level={2}>{product?.productName}</Title>
                <Title level={4} type="secondary">
                  {product?.productBrand}
                </Title>
                <div className="my-4">
                  <Rate defaultValue={product?.rate} disabled />
                  <span className="ml-2 text-gray-500">(1100 reviews)</span>
                </div>
                <Title level={3} className="text-blue-600">
                  ${product?.productPrice.toFixed(2)}
                </Title>
                <Paragraph className="mt-4">{product?.productDescription}</Paragraph>
                <Descriptions layout="vertical" column={2} className="flex flex-col mt-6">
                  {product?.isPreOrder ? (
                    <Descriptions.Item label="PreOrder Quantity">
                      <Tag color="green">Limited at: {product?.preOrderAmount}</Tag>
                    </Descriptions.Item>
                  ) : (
                    <Descriptions.Item label="Available Quantity">
                      <Tag color="green">{product?.quantity} in stock</Tag>
                    </Descriptions.Item>
                  )}
                  <Descriptions.Item label="Recommended Age">
                    <Tag color="blue">
                      {product?.byAge}-{(product?.byAge || 0) + 2} years old
                    </Tag>
                  </Descriptions.Item>
                </Descriptions>
                <div className="mt-6 flex items-center">
                  <InputNumber
                    min={1}
                    max={product?.quantity}
                    defaultValue={1}
                    onChange={(value) => setQuantity(value as number)}
                    className="mr-4 w-1/4"
                    size="large"
                  />
                  <Button
                    type="primary"
                    icon={<ShoppingCartOutlined />}
                    size="large"
                    className="w-full"
                    onClick={() => handleAddToCart(productId, quantity)}
                  >
                    Add to Cart
                  </Button>
                </div>
                <div>
                  <Descriptions column={1} bordered className="mt-10">
                    <Descriptions.Item label="Payment methods">Ship COD, check goods before paying</Descriptions.Item>
                    <Descriptions.Item label="Transport fee">FREE</Descriptions.Item>
                    <Descriptions.Item label="Commit">Guaranteed genuine</Descriptions.Item>
                    <Descriptions.Item label="Delivery time">2 - 4 days</Descriptions.Item>
                  </Descriptions>
                </div>
              </Col>
            </Row>
          </div>

          {/* <!-- Product content --> */}
          <div className="product-container">
            <div className="prod-tab js-tabs">
              <ul className="prod-tab__list">
                <li
                  className={`prod-tab__item ${currentTab === 'description' ? 'prod-tab__item--current' : ''}`}
                  onClick={() => handleTabChange('description')}
                >
                  Description
                </li>
                <li
                  className={`prod-tab__item ${currentTab === 'review' ? 'prod-tab__item--current' : ''}`}
                  onClick={() => handleTabChange('review')}
                >
                  Review (1100)
                </li>
                <li
                  className={`prod-tab__item ${currentTab === 'similar' ? 'prod-tab__item--current' : ''}`}
                  onClick={() => handleTabChange('similar')}
                >
                  Similar
                </li>
              </ul>
              <div className="prod-tab__contents">
                {/* <!-- Description --> */}
                <div
                  className={`prod-tab__content ${currentTab === 'description' ? 'prod-tab__content--current' : ''}`}
                >
                  <div className="row">
                    <div className="col-8 col-xl-10 col-lg-12">
                      <div className="text-content prod-tab__text-content">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>
                          Lorem ipsum dolor sit amet <a href="#!">consectetur</a> adipisicing elit. Aliquid, cupiditate.
                          Modi, quidem, ullam sint dolorum recusandae voluptates dignissimos similique animi assumenda
                          <a href="#!">praesentium</a> et! Illum dolorem est rem voluptas nam! Voluptatem.
                        </p>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem,
                          ullam sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et!
                          Illum dolorem est rem voluptas nam! Voluptatem.
                        </p>
                        <p>
                          <img src={item1} alt="" />
                          <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</em>
                        </p>
                        <blockquote>
                          <p>
                            Lorem ipsum dolor sit amet <em>consectetur</em>
                            <u>adipisicing</u> elit. Aliquid, cupiditate. Modi, quidem, ullam sint dolorum recusandae
                            voluptates dignissimos similique animi assumenda praesentium et! Illum dolorem est rem
                            voluptas nam! Voluptatem.
                          </p>
                        </blockquote>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem,
                          ullam sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et!
                          Illum dolorem est rem voluptas nam! Voluptatem.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem,
                          ullam sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et!
                          Illum dolorem est rem voluptas nam! Voluptatem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Review tab --> */}
                <div className={`prod-tab__content ${currentTab === 'review' ? 'prod-tab__content--current' : ''}`}>
                  <div className="prod-content">
                    <h2 className="prod-content__heading">What our customers are saying</h2>
                    <div className="row">
                      <div className="container mx-auto px-4 py-8">
                        <List
                          itemLayout="vertical"
                          size="large"
                          dataSource={reviews}
                          renderItem={(item) => (
                            <List.Item key={item.author}>
                              <Card>
                                <Space align="start">
                                  <Avatar src={item.avatar} alt={item.author} />
                                  <Space direction="vertical" size={0}>
                                    <h3>{item.author}</h3>
                                    <Rate disabled defaultValue={item.rating} />
                                  </Space>
                                </Space>
                                <Paragraph style={{ marginTop: 16 }}>{item.content}</Paragraph>
                              </Card>
                            </List.Item>
                          )}
                        />

                        <Card className="mb-8">
                          <h3>Write a Review</h3>
                          <Form onFinish={handleSubmitReview}>
                            <Form.Item name="rating" rules={[{ required: true, message: 'Please rate the product' }]}>
                              <Rate />
                            </Form.Item>
                            <Form.Item name="content" rules={[{ required: true, message: 'Please write your review' }]}>
                              <Input.TextArea rows={4} placeholder="Write your review here" />
                            </Form.Item>
                            <Form.Item>
                              <Button type="primary" htmlType="submit">
                                Submit Review
                              </Button>
                            </Form.Item>
                          </Form>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Similar items --> */}
                <div className={`prod-tab__content ${currentTab === 'similar' ? 'prod-tab__content--current' : ''}`}>
                  <div className="prod-content">
                    <h2 className="prod-content__heading">Similar items you might like</h2>
                    <div className="row row-cols-6 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-2">
                      {/* <!-- Product card 1 --> */}
                      <div className="col">
                        <article className="product-card">
                          <div className="product-card__img-wrap">
                            <a href="./product-detail.html">
                              <img src={item1} alt="" className="product-card__thumb" />
                            </a>
                            <button className="like-btn product-card__like-btn">
                              <img src={heart} alt="" className="like-btn__icon icon" />
                              <img src={heartRed} alt="" className="like-btn__icon--liked" />
                            </button>
                          </div>
                          <h3 className="product-card__title">
                            <a href="./product-detail.html">Coffee Beans - Espresso Arabica and Robusta Beans</a>
                          </h3>
                          <p className="product-card__brand">Lavazza</p>
                          <div className="product-card__row">
                            <span className="product-card__price">$47.00</span>
                            <img src={star} alt="" className="product-card__star" />
                            <span className="product-card__score">4.3</span>
                          </div>
                        </article>
                      </div>

                      {/* <!-- Product card 2 --> */}

                      {/* <!-- Product card 3 --> */}

                      {/* <!-- Product card 4 --> */}

                      {/* <!-- Product card 5 --> */}

                      {/* <!-- Product card 6 --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

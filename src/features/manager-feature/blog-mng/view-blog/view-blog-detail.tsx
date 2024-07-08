import { useState } from 'react'
import { Typography, Button, Modal, Form, Input, InputNumber, Tag, Divider, Rate } from 'antd'
import { EditOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import moment from 'moment'
import { BlogData } from '@/types'
import { useParams } from 'react-router-dom'
import { useViewBlogDetail } from './use-view-blog-detail'

const { Title, Paragraph } = Typography

const sampleBlog1: BlogData = {
  blogId: 1,
  title: 'The Ultimate Guide to Modern Web Development',
  content:
    "Web development has come a long way since the early days of the internet. Today, it's a complex and ever-evolving field that requires a diverse set of skills and knowledge. In this comprehensive guide, we'll explore the latest trends, technologies, and best practices in modern web development.\n\nFirst, we'll dive into frontend development, covering HTML5, CSS3, and JavaScript. We'll discuss popular frameworks like React, Vue, and Angular, and how they're changing the way we build user interfaces.\n\nNext, we'll explore backend development, including server-side languages like Node.js, Python, and Ruby. We'll also cover databases, APIs, and microservices architecture.\n\nFinally, we'll look at DevOps practices, cloud computing, and how they're revolutionizing the way we deploy and maintain web applications.",
  blogImg: 'https://example.com/modern-web-dev.jpg',
  createAt: '2023-07-01T12:00:00Z',
  updateAt: '2023-07-02T14:30:00Z',
  usefulVote: 142,
  notUsefulVote: 15,
  tags: 'web development,frontend,backend,devops',
  userId: 123,
}

export default function ViewBlogDetail() {
  const { blogId } = useParams()
  const { data: sampleBlog } = useViewBlogDetail(Number(blogId))
  console.log(sampleBlog)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const showModal = () => {
    form.setFieldsValue(sampleBlog)
    setIsModalVisible(true)
  }

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log('Updated blog:', values)
        setIsModalVisible(false)
      })
      .catch((info) => {
        console.log('Validate Failed:', info)
      })
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div className="w-10/12 mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Title level={1}>{sampleBlog?.title}</Title>
        <Button type="primary" icon={<EditOutlined />} onClick={showModal} size="large">
          Edit Article
        </Button>
      </div>

      <div className="mb-6">
        <img src={sampleBlog?.blogImg} alt="Blog cover" className="w-full h-96 object-cover rounded-lg shadow-lg" />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4 text-gray-500">
          <span>Published: {moment(sampleBlog?.createAt).format('MMMM Do YYYY, h:mm a')}</span>
          <span>Last updated: {moment(sampleBlog?.updateAt).format('MMMM Do YYYY, h:mm a')}</span>
        </div>

        <Divider />

        <Paragraph className="text-lg leading-relaxed mb-6">{sampleBlog?.content}</Paragraph>

        <Divider />

        <div className="mb-6">
          <Title level={4} className="mb-2">
            Tags
          </Title>
          <div>
            {sampleBlog?.tags.split(',').map((tag: string) => (
              <Tag key={tag} color="blue" className="mr-2 mb-2 text-base py-1 px-3">
                {tag.trim()}
              </Tag>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Button type="text" icon={<LikeOutlined />} size="large">
              {sampleBlog?.usefulVote} Useful
            </Button>
            <Button type="text" icon={<DislikeOutlined />} size="large" className="ml-4">
              {sampleBlog?.notUsefulVote} Not Useful
            </Button>
          </div>
        </div>
      </div>

      <Modal title="Edit Blog Post" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={800}>
        <Form form={form} layout="vertical" name="blogForm">
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input size="large" />
          </Form.Item>
          <Form.Item name="content" label="Content" rules={[{ required: true }]}>
            <Input.TextArea rows={10} />
          </Form.Item>
          <Form.Item name="blogImg" label="Image URL" rules={[{ required: true }]}>
            <Input size="large" />
          </Form.Item>
          <Form.Item name="tags" label="Tags">
            <Input size="large" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

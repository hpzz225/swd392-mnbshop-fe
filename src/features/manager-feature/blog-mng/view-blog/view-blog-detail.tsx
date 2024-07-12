import moment from 'moment'
import { useState } from 'react'
import { Typography, Button, Modal, Form, Input, Divider } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import { useViewBlogDetail } from './use-view-blog-detail'
import { useEditBlog } from '../edit-blog/use-edit-blog'

const { Title, Paragraph } = Typography

export default function ViewBlogDetail() {
  const { blogId } = useParams()
  const { data: blog } = useViewBlogDetail(blogId)
  const editBlogMutation = useEditBlog(blogId)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const showModal = () => {
    form.setFieldsValue(blog)
    setIsModalVisible(true)
  }

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log('Updated blog:', values)
        editBlogMutation.mutate(values as FormData)
        setIsModalVisible(false)
      })
      .catch((info) => {
        console.log('Validate Failed:', info)
      })
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const formatContent = (content: string) => {
    const sections = content.split('\n\n')
    return sections.map((section, index) => {
      if (section.startsWith('# ')) {
        return (
          <Title level={2} key={index} className="mt-8 mb-4">
            {section.slice(2)}
          </Title>
        )
      } else if (section.startsWith('## ')) {
        return (
          <Title level={3} key={index} className="mt-6 mb-3">
            {section.slice(3)}
          </Title>
        )
      } else if (section.startsWith('- ')) {
        const items = section.split('\n')
        return (
          <ul key={index} className="list-disc pl-5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="mb-2">
                {item.slice(2)}
              </li>
            ))}
          </ul>
        )
      } else if (section.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic my-4">
            {section.slice(2)}
          </blockquote>
        )
      } else {
        return (
          <Paragraph key={index} className="mb-4">
            {section}
          </Paragraph>
        )
      }
    })
  }

  return (
    <div className="w-10/12 mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Title level={1}>{blog?.title}</Title>
        <Button type="primary" icon={<EditOutlined />} onClick={showModal} size="large">
          Edit Article
        </Button>
      </div>

      {/* <div className="mb-6">
        <img src={blog?.blogImg} alt="Blog cover" className="w-full h-96 object-cover rounded-lg shadow-lg" />
      </div> */}

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4 text-gray-500">
          <span>Published: {moment(blog?.publishDate).format('MMMM Do YYYY, h:mm a')}</span>
        </div>

        <Divider />

        <article className="prose lg:prose-xl">{formatContent(blog?.content || '')}</article>

        <Divider />
      </div>

      <Modal title="Edit Blog Post" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={800}>
        <Form form={form} layout="vertical" name="blogForm">
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input size="large" />
          </Form.Item>
          <Form.Item name="content" label="Content" rules={[{ required: true }]}>
            <Input.TextArea rows={10} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

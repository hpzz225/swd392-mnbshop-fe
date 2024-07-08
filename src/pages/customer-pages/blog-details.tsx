import React from 'react'
import { Avatar, Tag, Typography, Button, List } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const BlogDetails = () => {
  const blog = {
    title: 'The Journey to mom and baby',
    author: 'Jane Doe',
    date: 'July 3, 2024',
    tags: ['Milk', 'BABY', 'Mommy'],
    image:
      'https://www.parents.com/thmb/QPN9uI8SaoOmLYk3Vt4tNH6xqDA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_1187290291-a8dd877d6ac248f68b13c42758dd693a.jpg',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  }

  const suggestions = [
    {
      title: 'Understanding JavaScript Closures',
      url: '#',
    },
    {
      title: 'Top 10 React Libraries to Use in 2024',
      url: '#',
    },
    {
      title: 'How to Build a Full-Stack App with the MERN Stack',
      url: '#',
    },
  ]

  return (
    <div className="container mx-auto my-10 p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="text-center mb-8">
          <Title level={2} className="mb-2">
            {blog.title}
          </Title>
          <img src={blog.image} alt="blog" className="mx-auto mb-4 w-full md:w-3/4" />
          <Typography className="">
            <Paragraph className="mt-8">{blog.content}</Paragraph>
          </Typography>
          <div className="flex items-center justify-center mb-4 mt-8">
            <Avatar icon={<UserOutlined />} />
            <span className="ml-2">{`By ${blog.author} on ${blog.date}`}</span>
          </div>
          <div className="mt-2">
            {blog.tags.map((tag, index) => (
              <Tag key={index} className="mb-2">
                {tag}
              </Tag>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center space-x-4">
          <Button type="link">Share</Button>
        </div>
      </div>

      <div className="col-span-1">
        <Title level={4}>Suggested</Title>
        <List
          itemLayout="vertical"
          dataSource={suggestions}
          renderItem={(item) => (
            <List.Item>
              <a href={item.url}>{item.title}</a>
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default BlogDetails

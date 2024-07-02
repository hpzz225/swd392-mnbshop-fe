import React from 'react'
import { Card, Avatar, Tag, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Meta } = Card

const BlogDetails = () => {
  const blog = {
    title: 'The Journey to React Mastery',
    author: 'Jane Doe',
    date: 'July 3, 2024',
    tags: ['React', 'JavaScript', 'Web Development'],
    image: 'https://images2.thanhnien.vn/528068263637045248/2024/7/2/messi-1719907218170447457871.jpeg',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  }

  return (
    <div className="container mx-auto my-10 p-4">
      <div className="text-center mb-8">
        <img src={blog.image} alt="blog" className="mx-auto mb-4 w-3/4 md:w-1/2" />
        <h2 className="text-3xl font-bold mb-2">{blog.title}</h2>
        <Meta avatar={<Avatar icon={<UserOutlined />} />} description={`By ${blog.author} on ${blog.date}`} />
        <div className="mt-2">
          {blog.tags.map((tag, index) => (
            <Tag key={index} className="mb-2">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      <Card>
        <p className="mt-4">{blog.content}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Button type="primary">Read More</Button>
          <Button type="link">Share</Button>
        </div>
      </Card>
    </div>
  )
}

export default BlogDetails

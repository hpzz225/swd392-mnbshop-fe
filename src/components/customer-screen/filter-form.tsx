import React from 'react'
import { Slider, Input, Button, Select, Tag } from 'antd'
import { DownOutlined, SearchOutlined } from '@ant-design/icons'
import selectArrow from '@/assets/icons/select-arrow.svg'
import search from '@/assets/icons/search.svg'

const { Option } = Select

export default function FilterForm() {
  return (
    <div>
      <div className="filter-wrap">
        <div className="filter" id="home-filter">
          <h3 className="filter__heading">Filter</h3>
          <form action="" className="filter__form">
            <div className="filter__row filter__content">
              <div className="filter__col">
                <label htmlFor="" className="filter__form-label">
                  Price
                </label>
                <div className="filter__form-group">
                  <Slider range defaultValue={[30, 100]} />
                </div>
                <div className="filter__form-group filter__form-group--inline">
                  <div>
                    <label htmlFor="" className="filter__form-label filter__form-label--small">
                      Minimum
                    </label>
                    <div className=" filter__form-text-input--small">
                      <Input prefix="$" defaultValue="30.00" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="filter__form-label filter__form-label--small">
                      Maximum
                    </label>
                    <div className=" filter__form-text-input--small">
                      <Input prefix="$" defaultValue="100.00" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter__separate"></div>

              <div className="filter__col">
                <label htmlFor="" className="filter__form-label">
                  Made in
                </label>
                <div className="filter__form-group">
                  <Select defaultValue="USA" style={{ width: '100%' }}>
                    <Option value="USA">USA</Option>
                    <Option value="Japan">Japan</Option>
                    <Option value="China">China</Option>
                    <Option value="France">France</Option>
                    <Option value="England">England</Option>
                  </Select>
                </div>
                <div className="filter__form-group">
                  <div className="filter__form-tags">
                    <Tag>Japan</Tag>
                    <Tag>China</Tag>
                    <Tag>France</Tag>
                    <Tag>England</Tag>
                  </div>
                </div>
              </div>

              <div className="filter__separate"></div>

              <div className="filter__col">
                <label htmlFor="" className="filter__form-label">
                  Brand
                </label>
                <div className="filter__form-group">
                  <Input placeholder="Search brand name" prefix={<SearchOutlined />} />
                </div>
                <div className="filter__form-group">
                  <div className="filter__form-tags">
                    <Tag>Ensure</Tag>
                    <Tag>Abbott</Tag>
                    <Tag>Meiji</Tag>
                    <Tag>Yokogold</Tag>
                    <Tag>Similac</Tag>
                    <Tag>Nutifood</Tag>
                  </div>
                </div>
              </div>
            </div>

            <div className="filter__row filter__footer">
              <Button className="btn btn--text filter__cancel js-toggle" toggle-target="#home-filter">
                Cancel
              </Button>
              <Button type="primary" className="btn btn--primary filter__submit js-toggle" toggle-target="#home-filter">
                Show Result
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

import { AccountTableData, BrandTableData, OrderTableData, ProductTableData } from '@/types'
import { Image, TableColumnsType } from 'antd'
import { ViewAccountDropdown, ViewBrandDropdown, ViewOrderDropdown, ViewProductDropdown } from './menu-data'
import Dropdown from '@/components/manager-screen/dropdown'

export const VIEW_PRODUCT_COLS: TableColumnsType<ProductTableData> = [
  {
    title: 'PRODUCT ID',
    dataIndex: 'productId',
    key: 'id',
    width: 160,
    align: 'center',
  },
  {
    title: 'PRODUCT NAME',
    dataIndex: 'productName',
    key: 'name',
    align: 'center',
  },
  {
    title: 'BRAND',
    dataIndex: 'brand',
    key: 'category',
    width: 200,
    align: 'center',
  },
  {
    title: 'PRICE',
    dataIndex: 'price',
    key: 'price',
    width: 140,
    align: 'center',
  },
  {
    title: 'DISCOUNT',
    dataIndex: 'discount',
    key: 'description',
    width: 140,
    align: 'center',
  },
  {
    title: 'QUANTITY',
    dataIndex: 'quantity',
    key: 'image',
    width: 140,
    align: 'center',
  },
  {
    title: 'BY AGE',
    dataIndex: 'byAge',
    key: 'createdAt',
    width: 140,
    align: 'center',
  },
  {
    title: 'Action',
    key: 'operation',
    width: 90,
    align: 'center',

    render: (record) => {
      return <Dropdown items={ViewProductDropdown(record.productName, record.productId)} />
    },
  },
]

export const VIEW_BRAND_COLS: TableColumnsType<BrandTableData> = [
  {
    title: 'BRAND ID',
    dataIndex: 'brandId',
    key: 'brandId',
    width: 160,
    align: 'center',
  },
  {
    title: 'IMAGE',
    dataIndex: 'image',
    key: 'image',
    width: 200,
    align: 'center',
    render: (imageUrl) => <Image src={imageUrl} alt="Brand Image" className="rounded-xl" width={100} />,
  },
  {
    title: 'BRAND NAME',
    dataIndex: 'brandName',
    key: 'brandName',
    align: 'center',
  },
  {
    title: '#PRODUCTS',
    dataIndex: 'numberOfProducts',
    key: 'numberOfProducts',
    width: 200,
    align: 'center',
  },
  {
    title: 'UPDATE AT',
    dataIndex: 'updateAt',
    key: 'updateAt',
    width: 200,
    align: 'center',
  },
  {
    title: 'Action',
    key: 'operation',
    width: 90,
    align: 'center',
    render: (record) => {
      return <Dropdown items={ViewBrandDropdown(record.brandName, record.brandId)} />
    },
  },
]

export const VIEW_ACCOUNT_COLS: TableColumnsType<AccountTableData> = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
    key: 'id',
    align: 'center',
  },
  {
    title: 'FULL NAME',
    dataIndex: 'fullName',
    width: 180,
    key: 'name',
    align: 'center',
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email',
    align: 'center',
  },
  {
    title: 'PHONE',
    dataIndex: 'phone',
    width: 140,
    key: 'phone',
    align: 'center',
  },
  {
    title: 'ADDRESS',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
  },
  {
    title: 'GENDER',
    dataIndex: 'gender',
    width: 90,
    key: 'gender',
    align: 'center',
  },
  {
    title: 'DATE OF BIRTH',
    dataIndex: 'dob',
    width: 140,
    key: 'dob',
    align: 'center',
  },
  {
    title: 'DISABLE',
    dataIndex: 'isDisable',
    key: 'isDisable',
    width: 90,
    align: 'center',
    render: (record) => {
      return record ? 'Yes' : 'No'
    },
  },
  {
    title: 'ROLE',
    dataIndex: 'role',
    width: 100,
    key: 'role',
    align: 'center',
  },
  {
    title: 'Action',
    key: 'operation',
    width: 90,
    align: 'center',
    render: (record) => {
      return <Dropdown items={ViewAccountDropdown(record.fullName, record.id)} />
    },
  },
]

export const VIEW_ORDER_COLS: TableColumnsType<OrderTableData> = [
  {
    title: 'ORDER ID',
    dataIndex: 'orderId',
    key: 'orderId',
    width: 160,
    align: 'center',
  },
  {
    title: 'CUSTOMER NAME',
    dataIndex: 'userId',
    key: 'userId',
    align: 'center',
  },
  {
    title: 'PRODUCTS',
    dataIndex: 'productId',
    key: 'productId',
    align: 'center',
    render: (record) => {
      return record.length
    },
  },
  {
    title: 'ADDRESS',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
  },
  {
    title: 'PHONE',
    dataIndex: 'phone',
    width: 140,
    key: 'phone',
    align: 'center',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    width: 140,
    key: 'status',
    align: 'center',
  },
  {
    title: 'TOTAL PRICE',
    dataIndex: 'totalPrice',
    width: 140,
    key: 'totalPrice',
    align: 'center',
  },
  {
    title: 'ORDER DATE',
    dataIndex: 'orderDate',
    width: 140,
    key: 'orderDate',
    align: 'center',
  },
  {
    title: 'Action',
    key: 'operation',
    width: 90,
    align: 'center',

    render: (record) => {
      return <Dropdown items={ViewOrderDropdown(record.orderId)} />
    },
  },
]

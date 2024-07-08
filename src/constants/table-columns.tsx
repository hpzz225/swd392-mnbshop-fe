import Dropdown from '@/components/manager-screen/dropdown'
import { AccountTableData, BrandTableData, OrderTableData, ProductTableData } from '@/types'
import { Image, TableColumnsType, Tag, Tooltip } from 'antd'
import { ViewAccountDropdown, ViewBrandDropdown, ViewOrderDropdown, ViewProductDropdown } from './menu-data'
import { getTagColor } from '@/utils'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS_MANAGER } from '@/router'
import dayjs from 'dayjs'
import { ROLE_MAPPING } from '.'

export const VIEW_PRODUCT_COLS: TableColumnsType<ProductTableData> = [
  {
    title: 'ID',
    dataIndex: 'productId',
    key: 'productId',
    width: 80,
    align: 'center',
  },
  {
    title: 'IMAGE',
    dataIndex: 'productImg',
    key: 'productImg',
    align: 'center',
    render: (productImg: string) => (
      <Image src={productImg} preview={false} className="rounded-xl" alt="Brand Image" width={80} />
    ),
  },
  {
    title: 'PRODUCT NAME',
    dataIndex: 'productName',
    key: 'name',
    align: 'center',
    render: (name: string, record: ProductTableData) => (
      <Link to={`${ROUTE_PATHS_MANAGER.M_PRODUCT}/${record.productId}`}>{name}</Link>
    ),
  },
  {
    title: 'BRAND',
    dataIndex: 'productBrand',
    key: 'productBrand',
    width: 200,
    align: 'center',
  },
  {
    title: 'PRICE',
    dataIndex: 'productPrice',
    key: 'productPrice',
    width: 140,
    align: 'center',
    render: (price) => <span>${price}</span>,
  },
  {
    title: 'DISCOUNT',
    dataIndex: 'discount',
    key: 'description',
    width: 140,
    align: 'center',
    render: (discount) => <span>{discount}%</span>,
  },
  {
    title: 'QUANTITY',
    dataIndex: 'quantity',
    key: 'image',
    width: 140,
    align: 'center',
    render: (quantity) => <span>{quantity}</span>,
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
    render: (imageUrl) => <Image src={imageUrl} preview={false} className="rounded-xl" alt="Brand Image" width={80} />,
  },
  {
    title: 'BRAND NAME',
    dataIndex: 'brandName',
    key: 'brandName',
    align: 'center',
    render: (name: string, record: BrandTableData) => (
      <Link to={`${ROUTE_PATHS_MANAGER.M_BRAND}/${record.brandId}`}>{name}</Link>
    ),
  },
  {
    title: 'MADE IN',
    dataIndex: 'madeIn',
    key: 'madeIn',
    width: 200,
    align: 'center',
  },
  {
    title: 'Action',
    key: 'operation',
    width: 100,
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
    render: (fullName: string, record: AccountTableData) => (
      <Link to={`${ROUTE_PATHS_MANAGER.M_ACCOUNT}/${record.id}`}>{fullName}</Link>
    ),
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email',
    width: 200,
    align: 'center',
    ellipsis: true,
    render: (email) => (
      <Tooltip title={email}>
        <span>{email}</span>
      </Tooltip>
    ),
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
    width: 150,
    key: 'address',
    align: 'center',
    ellipsis: true,
    render: (address) => <Tooltip title={address}>{address}</Tooltip>,
  },
  {
    title: 'GENDER',
    dataIndex: 'gender',
    width: 90,
    key: 'gender',
    align: 'center',
    render: (gender) => {
      return gender ? <span>Male</span> : <span>Female</span>
    },
  },
  {
    title: 'DATE OF BIRTH',
    dataIndex: 'dateOfBirth',
    width: 140,
    key: 'dateOfBirth',
    align: 'center',
    render: (dateOfBirth) => {
      return <span>{dayjs(dateOfBirth).format('DD/MM/YYYY')}</span>
    },
  },
  {
    title: 'DISABLE',
    dataIndex: 'isDisable',
    key: 'isDisable',
    width: 90,
    align: 'center',
    render: (record) => {
      return record ? <span className="text-red-500">Yes</span> : <span className="text-green-500">No</span>
    },
  },
  {
    title: 'ROLE',
    dataIndex: 'roleId',
    width: 90,
    key: 'roleId',
    align: 'center',
    render: (roleId: string) => {
      const roleName = ROLE_MAPPING[roleId] || 'Unknown'
      return (
        <Tag className="text-center w-36" color={getTagColor(roleId, 'role')}>
          {roleName}
        </Tag>
      )
    },
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
    title: 'ID',
    dataIndex: 'orderId',
    key: 'orderId',
    width: 90,
    align: 'center',
    render: (orderId: string) => <Link to={`${ROUTE_PATHS_MANAGER.M_ORDER}/${orderId}`}>{orderId}</Link>,
  },
  {
    title: 'CUSTOMER NAME',
    dataIndex: 'fullName',
    key: 'fullName',
    align: 'center',
  },
  {
    title: 'ADDRESS',
    dataIndex: 'deliverAddress',
    key: 'deliverAddress',
    align: 'center',
    ellipsis: true,
    render: (deliverAddress) => <Tooltip title={deliverAddress}>{deliverAddress}</Tooltip>,
  },
  {
    title: 'PHONE',
    dataIndex: 'phone',
    key: 'phone',
    align: 'center',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (status: string) => {
      return (
        <Tag className="text-center w-36" color={getTagColor(status, 'status')}>
          {status.toUpperCase()}
        </Tag>
      )
    },
  },
  {
    title: 'TOTAL PRICE',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    align: 'center',
    render: (totalPrice: string) => {
      return <span>{totalPrice}$</span>
    },
  },
  {
    title: 'ORDER DATE',
    dataIndex: 'orderDate',
    key: 'orderDate',
    align: 'center',
    render: (orderDate) => {
      return <span>{dayjs(orderDate).format('DD/MM/YYYY')}</span>
    },
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

export const VIEW_ORDER_DETAIL = []

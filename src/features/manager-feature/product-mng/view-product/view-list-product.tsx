import TableData from '@/components/manager-screen/table'
import data1 from '@/mock/products-list.json'
import { VIEW_PRODUCT_COLS } from '@/constants/table-columns'
import { ProductTableData } from '@/types'
// import { useAppSelector } from '@/lib/redux-toolkit/hook'
import { useViewProductList } from './use-view-product'

export default function ViewListProduct() {
  // const pagination = useAppSelector((state) => state.pagination)
  const { data, isLoading } = useViewProductList()

  console.log(data?.message)

  const addKeyToData = (dataArray: ProductTableData[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: ProductTableData) => {
      return {
        ...item,
        key: item.productId,
      }
    })
  }
  const dataWithKeys: ProductTableData[] = (data1 && addKeyToData(data1)) || []

  return (
    <div>
      <TableData<ProductTableData>
        columns={VIEW_PRODUCT_COLS}
        data={dataWithKeys}
        total={data1?.length}
        scrollX={1400}
        scrollY={620}
        hasRowSelection
        isLoading={isLoading}
      />
    </div>
  )
}

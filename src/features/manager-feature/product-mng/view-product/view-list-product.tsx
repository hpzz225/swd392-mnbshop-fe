import TableData from '@/components/manager-screen/table'
import { VIEW_PRODUCT_COLS } from '@/constants/table-columns'
import { ProductDetail, ProductTableData } from '@/types'
import { useViewProductList } from './use-view-product'

export default function ViewListProduct() {
  const { data, isLoading } = useViewProductList()

  const addKeyToData = (dataArray: ProductTableData[] | ProductDetail[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: ProductTableData | ProductDetail) => {
      return {
        ...item,
        key: item.productId,
      }
    })
  }
  const dataWithKeys: any = (data && addKeyToData(data)) || []

  return (
    <div>
      <TableData<ProductTableData>
        columns={VIEW_PRODUCT_COLS}
        data={dataWithKeys}
        total={data?.length}
        scrollX={1400}
        scrollY={620}
        hasRowSelection
        isLoading={isLoading}
      />
    </div>
  )
}

import TableData from '@/components/manager-screen/table'
import { BlogData, BlogTableData } from '@/types'
import { useViewBlogList } from './use-view-blog-list'
import { VIEW_BLOG_COLS } from '@/constants/table-columns'

export default function ViewBlogList() {
  const { data, isLoading } = useViewBlogList()
  const addKeyToData = (dataArray: BlogTableData[] | BlogData[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: BlogTableData | BlogData) => {
      return {
        ...item,
        key: item.blogId,
      }
    })
  }
  const dataWithKeys: BlogTableData[] = (data && addKeyToData(data)) || []
  return (
    <div>
      <TableData<BlogTableData>
        columns={VIEW_BLOG_COLS}
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

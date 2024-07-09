import ConfigAntdTheme from '@/lib/antd/config-theme'
import { POPUP_TITLE } from '@/constants'
import { DefaultButtonStyle } from '@/lib/antd/antd-styles'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'
import { Button, Typography } from 'antd'

interface DeletePromotionProps {
  promotionName: string
  promotionId: string
}

export default function DeletePromotion({ promotionName, promotionId }: DeletePromotionProps) {
  const dispatch = useAppDispatch()
  const handleDelete = () => {
    console.log(promotionId)
    dispatch(closePopup(POPUP_TITLE.DELETE_PROMOTION))
  }
  return (
    <>
      <Typography.Text>Are you sure to delete promotion: {promotionName}?</Typography.Text>
      <div className="flex items-center justify-end mt-4">
        <Button danger type="text" className="mr-2" onClick={() => dispatch(closePopup(POPUP_TITLE.DELETE_PROMOTION))}>
          Cancel
        </Button>
        <ConfigAntdTheme theme={DefaultButtonStyle}>
          <Button type="primary" onClick={handleDelete}>
            Delete
          </Button>
        </ConfigAntdTheme>
      </div>
    </>
  )
}

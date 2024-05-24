import { TOKEN_KEY } from '@/lib/axios'
import { DecodedToken } from '@/types'
import { jwtDecode } from 'jwt-decode'

export const hasAuthority = (authority: string) => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (!token) return false
  const decodedToken: DecodedToken = jwtDecode(token)
  return decodedToken.role === authority
}

export interface User {
  created_at: string
  email: string
  email_verified_at: string
  id: number
  investment_markets: []
  investment_preferences: object
  investment_sectors: []
  is_active: number
  phones: []
  profile: {
    full_name: string
    image: string | null
    theme: string | null
    birth_date: string | null
    gender: string | null
    identity: []
    country: 'UA'
    city: string | null
    zip_code: string | null
    address_line_1: string | null
    address_line_2: string | null
  }
  roles: []
  updated_at: string | null
}

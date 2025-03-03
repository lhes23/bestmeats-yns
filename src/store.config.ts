import MeatImage from '@/images/meats-category.webp'
import SeafoodImage from '@/images/seafoods-category.webp'

export const config = {
  categories: [
    { name: 'Meats', slug: 'meats', image: MeatImage },
    { name: 'Seafoods', slug: 'seafoods', image: SeafoodImage }
  ],

  social: {
    facebook: 'https://facebook.com/yourstore'
  },

  contact: {
    email: 'support@yourstore.com',
    phone: '+1 (555) 111-4567',
    address: '123 Store Street, City, Country'
  }
}

export type StoreConfig = typeof config
export default config

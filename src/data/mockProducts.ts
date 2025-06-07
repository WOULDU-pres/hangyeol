import type { Product } from '../types/Product.ts'

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Rose Face Lotion',
    category: 'Face Care',
    price: 185.00,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center',
    featured: false
  },
  {
    id: '2',
    name: 'Jasmine Body Spray',
    category: 'Body Care',
    price: 245.00,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center',
    featured: false
  },
  {
    id: '3',
    name: 'Makeup Fixing Cream',
    category: 'Face Care',
    price: 129.90,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center',
    rating: 4.8,
    featured: true
  },
  {
    id: '4',
    name: 'Indelible Perfume',
    category: 'Body Care',
    price: 327.00,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center',
    rating: 4.9,
    featured: true
  },
  {
    id: '5',
    name: 'Hydrating Serum',
    category: 'Face Care',
    price: 89.50,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&crop=center',
    rating: 4.7,
    featured: false
  },
  {
    id: '6',
    name: 'Nourishing Hair Mask',
    category: 'Hair Care',
    price: 156.00,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop&crop=center',
    featured: false
  }
] 
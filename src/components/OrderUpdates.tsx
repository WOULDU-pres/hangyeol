import type { OrderUpdate } from '../types/SearchTypes'
import styles from './OrderUpdates.module.css'

interface OrderUpdatesProps {
  orders: OrderUpdate[]
}

export function OrderUpdates({ orders }: OrderUpdatesProps) {
  if (orders.length === 0) return null

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Order updates</h2>
      </div>
      
      {orders.map((order) => (
        <div key={order.id} className={styles.orderCard}>
          <img 
            src={order.image} 
            alt={order.brand}
            className={styles.orderImage}
          />
          <div className={styles.orderContent}>
            <div className={styles.brandName}>{order.brand}</div>
            <div className={styles.orderStatus}>{order.title}</div>
            <div className={styles.shippingMethod}>{order.shipping}</div>
          </div>
        </div>
      ))}
    </section>
  )
} 
import styles from "./Product.module.css"

function Product() {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="https://via.placeholder.com/300x220"
          alt="Product"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>Wireless Headphones</h3>
        <p className={styles.description}>
          High quality wireless headphones with noise cancellation and long battery life.
        </p>

        <div className={styles.footer}>
          <span className={styles.price}>$129</span>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </article>
  )
}

export default Product

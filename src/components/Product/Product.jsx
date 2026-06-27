import styles from "./Product.module.css";

function Product({ title, imgSrc, description, price }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imgSrc} alt={title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.footer}>
          <span className={styles.price}>${price}</span>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </article>
  );
}

export default Product;

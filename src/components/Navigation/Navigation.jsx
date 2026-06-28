import styles from "./Navigation.module.css"

function Navigation() {
  const cartItems = [
    {
      id: 1,
      name: "Nike Air Max",
      price: 3200000,
      image: "/images/product-1.png",
    },
    {
      id: 2,
      name: "Leather Bag",
      price: 1850000,
      image: "/images/product-2.png",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 2750000,
      image: "/images/product-3.png",
    },
  ]

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  const formatPrice = (price) => {
    return price.toLocaleString("fa-IR")
  }

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <button className={styles.navItem}>
          <img src="/Images/home.png" alt="home" />
        </button>

        <button className={styles.navItem}>
          <img src="/Images/profile.png" alt="profile" />
        </button>

        <div className={styles.cartBox}>
          <button className={styles.navItem}>
            <img src="/Images/cart.png" alt="cart" />
          </button>

          <div className={styles.cartPopup}>
            <div className={styles.cartHeader}>Cart</div>

            <div className={styles.cartItems}>
              {cartItems.map((item) => (
                <div className={styles.cartCard} key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.productImage}
                  />

                  <div className={styles.productInfo}>
                    <p className={styles.productName}>{item.name}</p>
                    <span className={styles.productPrice}>
                      {formatPrice(item.price)} تومان
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.cartFooter}>
              <span>جمع کل</span>
              <strong>{formatPrice(totalPrice)} تومان</strong>
            </div>
          </div>
        </div>

        <button className={styles.navItem}>
          <img src="/Images/favorite.png" alt="favorite" />
        </button>

      </div>
    </nav>
  )
}

export default Navigation

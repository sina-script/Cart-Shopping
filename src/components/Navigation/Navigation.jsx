import styles from "./Navigation.module.css";

function Navigation({ cart ,removeFromCart}) {
  const totalPrice = () => {
    const total = cart.reduce((total, product) => {
      return total + product.price;
    }, 0);

    return total.toLocaleString();
  };

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
              {cart.map((cartItem) => {
                return (
                  <div className={styles.cartCard}>
                    <img
                      src={cartItem.imgSrc}
                      alt="product"
                      className={styles.productImage}
                    />

                    <div className={styles.productInfo}>
                      <p className={styles.productName}>{cartItem.title}</p>
                      <span className={styles.productPrice}>
                        $ {cartItem.price.toLocaleString()}
                      </span>
                    </div>

                    <button className={styles.trashBtn} onClick={()=>removeFromCart(cartItem.id)}>
                      <img src="/Images/trash.png" alt="delete" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className={styles.cartFooter}>
              <span>Total</span>
              <strong>$ {totalPrice()}</strong>
            </div>
          </div>
        </div>

        <button className={styles.navItem}>
          <img src="/Images/favorite.png" alt="favorite" />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;

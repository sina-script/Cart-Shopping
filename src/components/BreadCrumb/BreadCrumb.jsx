import styles from "./BreadCrumb.module.css"

function BreadCrumb() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumb}>
        <a href="/">Home</a>
        <a href="/projects">Shop</a>
        <span>Cars</span>
      </div>
    </div>
  )
}

export default BreadCrumb

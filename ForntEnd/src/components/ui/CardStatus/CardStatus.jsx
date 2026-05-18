import styles from "./CardStatus.module.css"

function CardStatus({counter,title,icon}) {
  return(
    <>
       <div className={`${styles.cardStatus} d-flex align-items-center`}>
        {/* Icon */}
        <div className={`${styles.icon} d-flex align-items-center w-100`}>
          <i className={icon}></i>
        </div>

        <div className={`${styles.info} w-100 d-flex align-items-center gap-2`}>
          <span className={`${styles.counter}`}>{counter}</span>
          <span className={`${styles.title}`}>{title}</span>
        </div>
      </div>
    </>
  )
}

export default CardStatus;

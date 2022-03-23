import styles from './Box.module.css'

export default function Box (props) {
    return (
        <div className={styles.box}>
            <h3 className={styles.title}>{props.title}</h3>
            {props.children}
        </div>
    )
}


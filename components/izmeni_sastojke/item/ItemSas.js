import styles from './itemsas.module.css'

export default function ItemSas(props){
	return(
			<div className={styles.container}>

				<div className={styles.okv}>
			
					<div className={styles.child}>
					<div onClick={() => props.clickFunc(props.id)} className={styles.btn}>
					<img  src="/images/deletesas1.svg" />
				</div>
						<span>{props.name}</span>
						<img src={props.img} />
					</div>
				</div>
			</div>
		)
}
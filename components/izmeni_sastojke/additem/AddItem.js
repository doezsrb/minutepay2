import styles from './additem.module.css'

export default function AddItem(props){

	return(
		<div className={styles.container} >
			<div className={styles.itemokv}>
				<div className={styles.item} onClick={() => props.clickFunc(props.id)}>
						<span>{props.name}</span>
						<img src={props.img} />
				</div>
			</div>
		</div>
		)
}
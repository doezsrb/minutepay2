import styles from './purplebutton.module.css'
export default function PurpleButton(props){

	return(
		<div className={styles.container}>
			<div className={styles.dot} />
			<div className={styles.top} >
				<span>+15 Novih Dodataka</span>
			</div>
			<div className={styles.btn}>
			<span>Izmeni Sastojke</span>
				<img src="/images/arrow_purple.svg" width="20px" />
			</div>
		</div>
		)
}
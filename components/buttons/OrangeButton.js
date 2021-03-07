import styles from './orangebutton.module.css'
export default function OrangeButton(props){

	return(
		<div className={styles.container}>
		 	<div className={styles.btn}>
		 		<span>Naruči</span>
		 	</div>
		</div>
		)
}
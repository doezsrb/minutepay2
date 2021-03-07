import styles from './simplebutton.module.css'
export default function SimpleButton(props){

	return(
		<div className={styles.container}>
			<div className={styles.btn}>
				<span>Nutritivna Tabela</span>
				<img src="/images/arrow_down.svg" width="20px" />
			</div>
		</div>
		)
}
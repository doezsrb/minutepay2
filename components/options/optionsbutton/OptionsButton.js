import styles from './optionsbutton.module.css';

export default function OptionsButton({children}){
	return(
		<div className={styles.optionsBorder}>
			{children}
		</div>
		)
}
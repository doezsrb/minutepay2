import styles from './redlist.module.css'

export default function RedList(props){
	return(
		<div className={styles.parent}>

			<div className={styles.redot}></div>
			<div className={styles.container}>
			<div className={styles.top}><span>+500 ml Coca Cola</span></div>
				<div className={styles.child}>
					<div className={styles.image}>
						<img src="/images/fatboy1.png" height="80px" />
					</div>
					<div className={styles.name}>
					<span>"Tiny Cheese"</span>
					</div>
					<div className={styles.name2}>
					<span>Pileći Burger</span>
					</div>
					<div className={styles.price}>
						<span>389</span>
					</div>
					<div className={styles.valuta}>
						<span>RSD</span>
					</div>
				</div>
			</div>
		</div>
		)
}
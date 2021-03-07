import styles from './customlist.module.css'

export default function CustomList(props){
	return(
		<div className={styles.parent}>


			<div className={styles.container}>
			
				<div className={styles.child}>
					<div className={styles.image}>
						<img src="/images/float_burger1.png" height="80px" />
					</div>
					<div className={styles.name}>
					<span>"Sastavi Sam"</span>
					</div>
					<div className={styles.name2}>
					<span>Pileći Burger</span>
					</div>
					<div className={styles.price}>
						<span>15+</span>
					</div>
					<div className={styles.valuta}>
						<span>Sastojka</span>
					</div>
				</div>
			</div>
		</div>
		)
}
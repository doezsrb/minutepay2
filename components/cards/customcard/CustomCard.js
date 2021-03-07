import styles from './customcard.module.css'


export default function CustomCard(props){
	return(
		<div className={styles.cardparent}>
			<div className={styles.image}>
						<img src="/images/float_burger1.png" width="100px" />
					</div>
			<div className={styles.card}>
				<div className={styles.subcard}>
					
					
					
					<div className={styles.sastojciNumb}>
						<span>15+</span>
					</div>
					<div className={styles.sastojciText}>
						<span>Sastojka</span>
					</div>
					<div className={styles.name1}>
						<span>"Sastavi sam"</span>
					</div>
					<div className={styles.name2}>
						<span>Pileći Burger</span>
					</div>
				</div>
			</div>
		</div>
		)
}
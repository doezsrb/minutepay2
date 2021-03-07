import styles from './orangecard.module.css'


export default function OrangeCard(props){
	return(
		<div className={styles.cardparent}>
			<div className={styles.redot}></div>
			<div className={styles.card}>
				<div className={styles.subcard}>
					<div className={styles.topborder}>
						<span>+500 ml Coca Cola</span>
					</div>
					<div className={styles.price}>
						<span>289<sup>99</sup></span>
					</div>
					<div className={styles.image}>
						<img src="/images/chees1.png" width="150px" />
					</div>
					<div className={styles.valuta}>
						<span>RSD</span>
					</div>
					<div className={styles.name1}>
						<span>"Big Boy"</span>
					</div>
					<div className={styles.name2}>
						<span>Pileći Burger</span>
					</div>
				</div>
			</div>
		</div>
		)
}
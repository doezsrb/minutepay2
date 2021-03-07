import styles from './item.module.css'
import PurpleButton from '../buttons/PurpleButton'
import SimpleButton from '../buttons/SimpleButton'
import OrangeButton from '../buttons/OrangeButton'
import Link from 'next/link'
import IzmeniSastojke from '../izmeni_sastojke/IzmeniSastojke'
import {useState} from 'react'
export default function Item(props){
	const [viewSas,setViewSas] = useState(false)
	function openSas(){
		setViewSas(true)
	}
	function closeSas(){
		setViewSas(false)
	}
		return(
			
		<div className={styles.container}>
			{viewSas == true ? <div className={styles.contSas}> <IzmeniSastojke closeFunc={closeSas} /> </div>: null}
			<div className={styles.noblurchild}>
				<div className={styles.back}>
					<Link href="/page2"><a><img src="/images/arrow_back.svg" width="20px" /></a></Link>
				</div>
				<h2>"Fat Boy"</h2>
			</div>
			<div className={styles.blurchild}>
					<div className={styles.top}>
						<img src="/images/fatboy2.png" width="90%" />
						<div className={styles.price}>
							<span className={styles.pricenumb}>389</span>
							<span>RSD</span>
						</div>
					</div>
					<div className={styles.mid}>
						<div className={styles.leftmid}>
							<img src="/images/scale.svg" width="40vw" />
							<h4>450g</h4>
						</div>
						<div className={styles.midmid}>
							<img src="/images/chicken.svg" width="40vw" />
							<h4>Pileće Meso</h4>
						</div>
						<div className={styles.rightmid}>
							<img src="/images/chronometer.svg" width="40vw" />
							<h4>38' min</h4>
						</div>
					</div>
					<div className={styles.middown} >
						<h2>"Fat Boy"</h2>
						<span>Pileće Meso, Crveni Luk, IveBerg Salata, Topi Kačkavalj, Slanina, Senf</span>
					</div>
					<div className={styles.btns}>
						<SimpleButton />
						<div onClick={openSas}><PurpleButton /></div>
						<OrangeButton />
					</div>
			</div>
			<div className={styles.noblurchild2}>
			</div>
		</div>
		)
}



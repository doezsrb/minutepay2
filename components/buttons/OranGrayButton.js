import styles from './orangraybutton.module.css'
import {useState,useEffect} from 'react'
import Link from 'next/link'
export default function OranGrayButton({col,children}){
	const [klasa,setKlasa] = useState();
	useEffect(()=>{
		if(col == "orange"){
			setKlasa(styles.orangebtn)
		}else{
			setKlasa(styles.graybtn)
		}
	},[])
	return(
		<>
		<Link href="/page2"><a><button className={klasa}>
			{children}
		</button></a></Link>
		</>
		)
}
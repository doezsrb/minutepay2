import styles from './orangraybutton.module.css'
import {useState,useEffect} from 'react'
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
		<button className={klasa}>
			{children}
		</button>
		)
}
import styles from './izmenisastojke.module.css'
import ItemSas from './item/ItemSas'
import AddItem from './additem/AddItem'
import {useState} from 'react'
export default function IzmeniSastojke(props){
	const [popup,setPopup] = useState(false)
	const [selected,setSelected] = useState([{id:5,name:"Posla Lepinja",img:"/images/bread1.png"},
		{id:3,name:"Kačkavalj",img:"/images/kack1.png"}])
	const [notselected,setNotSelected] = useState([{id:1,name:"Susam",img:"/images/sesame1.png"},
		{id:2,name:"IceBerg Salata",img:"/images/lettuce1.png"},
		{id:4,name:"Paradajz",img:"/images/tomato1.png"}
		])
	function openPopup(){
		setPopup(true)
	}
	function closePopup(){
		setPopup(false)
	}
	function addSelected(id){
		var select = notselected[id]
		var niz = notselected
		niz.splice(id,1)
	
		setNotSelected([...niz])
		var niz2 = selected
		niz2.push(select)

		setSelected([...niz2])
	}
	function removeSelected(id){
		var select = selected[id]
		var niz = selected
		niz.splice(id,1)
		setSelected([...niz])

		var niz2 = notselected
		niz2.push(select)
		setNotSelected([...niz2])
	}
	return(
			<div className={styles.container}>
			{popup == true ? <div className={styles.popup}>
				<div className={styles.popupAdd}>
					<div className={styles.headerPopup}>
						<div className={styles.closebtn} onClick={closePopup}>
							<img src="/images/deletesas1.svg" />
						</div>
					</div>
					<div className={styles.allitems}>
						{
						notselected.map((item,index) => <AddItem clickFunc={addSelected} id={index} key={index} name={item.name} img={item.img} />)
					}
				
					</div>
				</div>
			</div> : null}
				<div className={styles.items}>
					{
						selected.map((item,index) => <ItemSas clickFunc={removeSelected} id={index} key={index} name={item.name} img={item.img} />)
					}
					
				</div>
				<div className={styles.btns}>
					<button className={styles.leftbtn} onClick={openPopup}>Dodaci</button>
					<button className={styles.rightbtn} onClick={props.closeFunc}>Naruči</button>
				</div>
			</div>
		)
}
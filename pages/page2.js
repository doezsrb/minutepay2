import Layout from '../components/layout'
import FoodTButtons from '../components/foodtbuttons/FoodTButtons'
import RedCard from '../components/cards/redcard/RedCard'
import OrangeCard from '../components/cards/orangecard/OrangeCard'
import SimpleCard from '../components/cards/simplecard/SimpleCard'
import CustomCard from '../components/cards/customcard/CustomCard'
import RedList from '../components/lists/redlist/RedList'
import OrangeList from '../components/lists/orangelist/OrangeList'
import SimpleList from '../components/lists/simplelist/SimpleList'
import CustomList from '../components/lists/customlist/CustomList'
import Item from '../components/item/Item'
import IzmeniSastojke from '../components/izmeni_sastojke/IzmeniSastojke'
import styles from '../styles/page2.module.css'
import {useRef,useEffect,useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import url from 'url'
export default function page2(props){
	const [clickevent,setClickevent] = useState()
	const [btnclass1,setBtnclass1] = useState()
	const [btnclass2,setBtnclass2] = useState()
	const [sortType,setSortType] = useState("card");
	const [showItem,setShowItem] = useState(false)
	var cardbtnref = useRef();
	var router = useRouter();
	var okvwidth = 0;
	var fullwidth = 0;
	var globalfinish = 0;
	var globalright = 0;
	var globalright_click = 0;
	var left = 0;
	var sliderokv = useRef();
	var leftbtn = useRef();
	var rightbtn = useRef();

	useEffect(()=>{
		var urlparse = url.parse(router.asPath,true)
		if(urlparse.query.item != undefined){
			setShowItem(true)
		}else{
			setShowItem(false)
		}
		cardbtnref.current.click()
			fullwidth = sliderokv.current.scrollWidth;
			okvwidth = sliderokv.current.clientWidth;
		function moveleft() {

			var finish	
			
			globalright_click = okvwidth;

			if(fullwidth <= 0){
				return
			}
			if(fullwidth > okvwidth){
				finish = fullwidth - okvwidth
				if(finish > okvwidth){
					globalfinish = globalfinish - okvwidth+(-2.5)
					fullwidth = fullwidth - okvwidth
					globalright+=okvwidth+(-2.5);

				}else{
					globalfinish = globalfinish - okvwidth+(-2.5)
					fullwidth = fullwidth - okvwidth
					globalright+=okvwidth+(-2.5);

				}
			}else{
				return
			}

		    function frame() {

		        left = left - 3
		        sliderokv.current.style.marginLeft = left + 'px'
		        if (left <= globalfinish)  
		            clearInterval(id)
		    }
		    var id = setInterval(frame, 0.1) 
		}
		function moveright() {
			
				if(globalright <= 0){
					return;
				}
				
				fullwidth = fullwidth + okvwidth
				globalfinish = globalfinish + okvwidth-(-2.5)
				globalright = globalright-(globalright_click)
				var left_ = left + (globalright_click-(-2.5))
			
		    function frame() {
		    	
		    	
		        left = left + 3
		        sliderokv.current.style.marginLeft = left + 'px'
		        if (left >= left_)  
		            clearInterval(id2)
		    }
		    var id2 = setInterval(frame,0.1) 
		}
		rightbtn.current.addEventListener('click',moveleft)
		leftbtn.current.addEventListener('click',moveright)
	},[router.asPath])
	function functionNavClick(e){
		setClickevent("click_"+Math.random())
	}
	function selectList(e){
		setBtnclass1(styles.selectbtnlist)
		setBtnclass2(styles.notselectbtncard)
		setSortType("list")
	}
	function selectCard(e){
		setBtnclass1(styles.notselectbtnlist)
		setBtnclass2(styles.selectbtncard)
		setSortType("card")
	}

	return (
		<Layout>
			{showItem == true ? <Item /> : null}
			<div className={styles.container}>
				<div className={styles.containerSlider}>
					<div ref={sliderokv}  className={styles.navbtns}>
						<FoodTButtons firstClick="1" clickEvent={clickevent} functionClickNav={e => functionNavClick(e)} />
						<FoodTButtons clickEvent={clickevent} functionClickNav={e => functionNavClick(e)} />
						<FoodTButtons clickEvent={clickevent} functionClickNav={e => functionNavClick(e)} />
						<FoodTButtons clickEvent={clickevent} functionClickNav={e => functionNavClick(e)} />
						<FoodTButtons clickEvent={clickevent} functionClickNav={e => functionNavClick(e)} />
						<FoodTButtons clickEvent={clickevent} functionClickNav={e => functionNavClick(e)} />
						<FoodTButtons clickEvent={clickevent} functionClickNav={e => functionNavClick(e)} />
						<FoodTButtons clickEvent={clickevent} functionClickNav={e => functionNavClick(e)} />
					</div>
				</div>
				<div>
					<button className={styles.rightbutton} ref={rightbtn}><img src="/images/arrow_r.svg" /></button>
					<button className={styles.leftbutton} ref={leftbtn}><img src="/images/arrow_l.svg" /></button>
				</div>
				<div className={styles.list_card}>
					<div onClick={e => selectList(e)} className={styles.listbtn+" "+btnclass1}>
						<span>Lista</span><img src="/images/listicon.svg" width="20px" />
					</div>
					<div ref={cardbtnref} onClick={e => selectCard(e)} className={styles.cardbtn+" "+btnclass2}>
						<span>Kartica</span><img src="/images/cardicon.svg" width="20px" />
					</div>
				</div>
				<div className={styles.parentcards}>
					
					{sortType == "card" ? <>
						<Link href="/page2?item=1"><a><SimpleCard /></a></Link>
						<Link href="/page2?item=1"><a><OrangeCard /></a></Link>
						<Link href="/page2?item=1"><a><RedCard /></a></Link>
						<Link href="/page2?item=1"><a><CustomCard /></a></Link></> : <>	
						<Link href="/page2?item=1"><a><SimpleList /></a></Link>
						<Link href="/page2?item=1"><a><OrangeList /></a></Link>
						<Link href="/page2?item=1"><a><RedList /></a></Link>
						<Link href="/page2?item=1"><a><CustomList /></a></Link></>}
					
				</div>
			</div>
		</Layout>
		)
}
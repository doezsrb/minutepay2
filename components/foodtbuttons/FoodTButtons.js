import styles from './foodtbuttons.module.css'
import {useEffect,useState,useRef} from 'react'

var load = false;
export default function FootTButtons(props){
	const [col,setCol] = useState()
	const [showTimer,setShowTimer] = useState()
	const [selfClickV,setSelfClickV] = useState("false")
	const divRef = useRef()
	
	useEffect(()=>{


		function moveright() {
			var hg = 100;
			var mb = 20;
			var finishHeight = 145;
			var finishBottom = 0;
		    function frame() {
		        hg++
		        mb--
		        divRef.current.style.height = hg + 'px'
		        divRef.current.style.marginBottom = mb + 'px'
		        if (hg >= finishHeight)  
		            clearInterval(id)
		    }
		    var id = setInterval(frame,3) 
		}


		
		if(selfClickV != "true"){
			divRef.current.style.height = 100 + 'px'
			divRef.current.style.marginBottom = 20 + 'px'
		setCol(styles.graybtn)
		setShowTimer()
		}else{
			

		moveright()
		setShowTimer(styles.showTimer)
		setCol(styles.orangebtn)
		setSelfClickV("false")
		}
		if(props.firstClick != undefined && load == false){
			moveright()
			setShowTimer(styles.showTimer)
		setCol(styles.orangebtn)
		setSelfClickV("false")
		load = true
		}
	},[props.clickEvent])
	function selfClick(){
		setSelfClickV("true")
	}
	
	return(
		<div className={styles.minText+" "+showTimer}>
		<h3><img src="/images/stopwatch.svg" width="14px" />45' min.</h3>
		<div ref={divRef} className={styles.btn+" "+col} onClick={() => { props.functionClickNav();selfClick();}}>
			
			<h2>Test</h2>
			<img src="/images/burger1.png" width="120"  />
		</div>
		</div>
		)
}
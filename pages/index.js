import styles from '../styles/home.module.css'
import Layout from '../components/layout'
import OptionsButton from '../components/options/optionsbutton/OptionsButton'
import OranGrayButton from '../components/buttons/OranGrayButton'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.whtext}>
          <img src="/images/location-pin.svg" /><span>Za Minut Na Stolu Restoran</span>
        </div>

        <div className={styles.optionsrow}>
          <OptionsButton>
            <select>  
              <option value="">Srpski</option>
              <option value="">Engleski</option>
            </select>
          </OptionsButton>
        </div>

        <div className={styles.imgcenter}>
          <img src="/images/illustration.svg" />
        </div>

        <div className={styles.textcenter}>
          <span>    
              <h2>Dobrodošli,</h2>
              <h5>uspešno ste očitali NFC sa vašeg stola! Sada imate pristup Minute Meni sistemu, 
              odaberite pojedinačnu ili grupnu porudžbinu i uživajte u ponudi restorana!</h5>
          </span>
        </div>


        <div className={styles.btns}>
          <OranGrayButton col="gray">
            Prvi put naručujem, upomoć!
          </OranGrayButton>
         <OranGrayButton col="orange">
          Nastavi na Minute Meni 
          </OranGrayButton>
        </div>
      </div>
    </Layout>
  )
}

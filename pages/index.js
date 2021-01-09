import Head from 'next/head'
import styles from '../styles/Home.module.css'
import jscript from '../styles/js/jsku.js'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adin Yahya</title>
        <link rel="shortcut icon" href="top.png" type="image/x-icon"/>
      </Head>

      <main className={styles.main}>
        <div className={styles.w} id={jscript.textDestination}>
	
      </div> 
      </main>
     
    </div>
  )
}

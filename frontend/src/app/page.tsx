import Image from 'next/image'
import styles from './page.module.css'
import UnderMaintenance from './UnderMaintenance/UnderMaintenance'

export default function Home() {
  return (
    <main className={styles.main}>
      <UnderMaintenance />
    </main>
  )
}

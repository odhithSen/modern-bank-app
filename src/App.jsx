import React from 'react'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.padding} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
            NavBar
         </div>
      </div>
    </div>
  )
}

export default App
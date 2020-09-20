import header from 'next/head'
import styles from './App.module.css'

import Header from '../comps/Header';

export default function Home() {
  return (
    <div className={styles.container}>

      <div>
        <div className={styles.header1}>
          <h3>Average Income</h3>
          <p>The amount of money an individual, family, or household makes in Canada.</p>
        </div>
        <div className={styles.middle1}>
          <div className={styles.middle2}>
            <div>
              <span className={styles.square_blue}></span>
              <span className={styles.header2}>Average Income for the Region</span>
              <span className={styles.square_yellow}></span>
              <span className={styles.header2}>Average Income National</span>
            </div>

            <div className={styles.box}>$52,023</div>

            <span className={styles.rect_blue}></span>
            <span className={styles.rect_yellow}></span>
            <span className={styles.h_line}></span>
            <div className={styles.vectors}>
              <span className={styles.vector1}></span>
              <span className={styles.vector2}></span>
              <span className={styles.vector3}></span>
              <span className={styles.vector4}></span>
              <span className={styles.vector5}></span>
              <span className={styles.vector6}></span>
              <span className={styles.vector7}></span>
            </div>
            <div className={styles.nums}>
              <span className={styles.num1}>0</span>
              <span className={styles.num2}>10,000</span>
              <span className={styles.num3}>20,000</span>
              <span className={styles.num4}>30,000</span>
              <span className={styles.num5}>40,000</span>
              <span className={styles.num6}>50,000</span>
              <span className={styles.num7}>60,000</span>
              <span className={styles.num8}>70,000</span>
            </div>


          </div>
        </div>
      </div>
    </div>


  )
}

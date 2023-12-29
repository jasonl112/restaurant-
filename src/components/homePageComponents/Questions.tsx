import styles from "../styles/Questions.module.css"
import Image from "next/image";

const Questions= () => {
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.questions}>
        <div className={styles.question}>
          <h1 className={styles.questionText}>Lorem ipsum dolor sit amet, adipiscing elit?</h1>
          <p className={styles.answer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className={styles.question}>
          <h1 className={styles.questionText}>Lorem ipsum dolor sit amet, adipiscing elit?</h1>
          <p className={styles.answer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className={styles.question}>
          <h1 className={styles.questionText}>Lorem ipsum dolor sit amet, adipiscing elit?</h1>
          <p className={styles.answer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className={styles.question}>
          <h1 className={styles.questionText}>Lorem ipsum dolor sit amet, adipiscing elit?</h1>
          <p className={styles.answer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className={styles.question}>
          <h1 className={styles.questionText}>Lorem ipsum dolor sit amet, adipiscing elit?</h1>
          <p className={styles.answer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className={styles.question}>
          <h1 className={styles.questionText}>Lorem ipsum dolor sit amet, adipiscing elit?</h1>
          <p className={styles.answer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      </div>
    </div>
  )
}


export default Questions;
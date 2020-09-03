import React from 'react';
import styles from './App.module.pcss';

function App() {
  return (
    <div className={styles.app}>
        <input className={styles.appInput} value='Enter your text here'></input>
        <button className={styles.appButton}>Translate</button>
        <input className={styles.appOutput}></input>
    </div>
  );
}

export default App;

import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.Logo}>Ezzy</div>
        <div className={styles.text}>© All right reserved.</div>
      </div>
    </div>
  );
};

export default Footer;

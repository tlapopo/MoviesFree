import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <Link to='/' className={styles.link}>
      <h1 className={styles.header}>Movies Free</h1>
    </Link>
  );
};

export default memo(Header);

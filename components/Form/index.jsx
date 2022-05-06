import React from 'react';
import styles from './styles.module.css';

export default function Form({ children }) {
  return (
    <form className={styles.container}>
      {children}
    </form>
  );
}

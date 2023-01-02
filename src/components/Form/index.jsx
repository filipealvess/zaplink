import React from 'react';
import styles from './styles.module.css';

export default function Form({ children, onSubmit = () => {} }) {
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

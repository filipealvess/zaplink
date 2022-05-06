import React from 'react';
import styles from './styles.module.css';

export default function Input({ type = 'text', placeholder, label }) {
  return (
    <label className={styles.container}>
      <span className={styles.label}>{label}:</span>
      <input type={type} placeholder={placeholder}  className={styles.input} />
    </label>
  );
}

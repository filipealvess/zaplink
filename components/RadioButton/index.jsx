import React from 'react';
import styles from './styles.module.css';

export default function RadioButton({ label, checked = false, onChange = () => {} }) {
  return (
    <label>
      <input type="radio" checked={checked} onChange={onChange} />
      <span className={styles.label}>{label}</span>
    </label>
  );
}

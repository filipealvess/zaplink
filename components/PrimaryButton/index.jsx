import React from 'react';
import styles from './styles.module.css';

export default function PrimaryButton({ text, onClick = () => {} }) {
  return (
    <button className={styles.container} onClick={onClick}>
      {text}
    </button>
  );
}

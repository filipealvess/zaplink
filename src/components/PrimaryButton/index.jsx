import React from 'react';
import styles from './styles.module.css';

export default function PrimaryButton({
  text,
  disabled,
  onClick = () => {}
}) {
  return (
    <button
      className={styles.container}
      onClick={onClick}
      disabled={disabled}
    >{text}</button>
  );
}

import React from 'react';
import styles from './styles.module.css';

export default function RadioButton({
  label,
  checked = false,
  onChange = () => {},
  name,
  value
}) {
  return (
    <label>
      <input
        type="radio"
        defaultChecked={checked}
        name={name}
        onChange={onChange}
        value={value}
      />

      <span className={styles.label}>{label}</span>
    </label>
  );
}

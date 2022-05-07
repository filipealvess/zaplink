import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';

export default function Introduction() {
  return (
    <header className={styles.container}>
      <Image
        src="/logo.svg"
        alt="Logo do ZapLink. Círculo que representa uma conversa, com um ícone ao centro que representa um link."
        width={80}
        height={80}
      />
      <h1 className={styles.title}>ZapLink</h1>
      <p className={styles.description}>Gerador de link para WhatsApp</p>
    </header>
  );
}

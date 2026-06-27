import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.text}>The page you are looking for doesn't exist.</p>
        <button className={styles.btn} onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    </div>
  );
};

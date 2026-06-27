import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styles from './Unauthorized.module.css';

export const Unauthorized: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (user) {
      navigate(`/${user.role.toLowerCase()}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>403</h1>
        <h2 className={styles.subtitle}>Access Denied</h2>
        <p className={styles.text}>You do not have permission to view this page.</p>
        <button className={styles.btn} onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

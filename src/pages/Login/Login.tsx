import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ROLES } from '../../constants/roles';
import styles from './Login.module.css';

export const Login: React.FC = () => {
  const { user, login } = useAuth();

  if (user) {
    return <Navigate to={`/${user.role.toLowerCase()}`} replace />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>(Authentication will be implemented in F2)</p>
        
        <div className={styles.buttonGroup}>
          <button 
            className={styles.loginBtn}
            onClick={() => login({ id: '1', name: 'Recruiter User', role: ROLES.RECRUITER })}
          >
            Login as Recruiter
          </button>
          <button 
            className={styles.loginBtn}
            onClick={() => login({ id: '2', name: 'Captain User', role: ROLES.CAPTAIN })}
          >
            Login as Captain
          </button>
          <button 
            className={styles.loginBtn}
            onClick={() => login({ id: '3', name: 'Admin User', role: ROLES.ADMIN })}
          >
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

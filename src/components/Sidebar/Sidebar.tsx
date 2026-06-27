import React from 'react';
import { NavLink } from 'react-router-dom';
import type { UserRole } from '../../types/auth';
import { ROLES } from '../../constants/roles';
import styles from './Sidebar.module.css';

interface SidebarProps {
  role: UserRole;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ role, isOpen, onClose }) => {
  const getDashboardPath = () => {
    switch (role) {
      case ROLES.RECRUITER: return '/recruiter';
      case ROLES.CAPTAIN: return '/captain';
      case ROLES.ADMIN: return '/admin';
      default: return '/';
    }
  };

  const getPanelTitle = () => {
    return `${role} Panel`;
  };

  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} onClick={onClose} />
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2>{getPanelTitle()}</h2>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <nav className={styles.nav}>
          <NavLink 
            to={getDashboardPath()} 
            end
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            onClick={() => {
              if (window.innerWidth <= 1024) onClose();
            }}
          >
            Dashboard
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

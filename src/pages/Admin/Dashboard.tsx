import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '1rem', color: 'var(--color-text-primary)' }}>Admin Dashboard</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Welcome, {user?.name}</p>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>Role: {user?.role}</p>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          onClick={() => navigate("/recruiter")}
          style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--color-accent)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Test Recruiter Route
        </button>

        <button 
          onClick={() => navigate("/captain")}
          style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--color-accent)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Test Captain Route
        </button>
      </div>
    </div>
  );
};

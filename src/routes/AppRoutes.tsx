import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ROLES } from '../constants/roles';

// Components
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';

// Layouts
import { RecruiterLayout } from '../layouts/RecruiterLayout';
import { CaptainLayout } from '../layouts/CaptainLayout';
import { AdminLayout } from '../layouts/AdminLayout';

// Pages
import { Login } from '../pages/Login/Login';
import { Unauthorized } from '../pages/Unauthorized/Unauthorized';
import { NotFound } from '../pages/NotFound/NotFound';

import { Dashboard as RecruiterDashboard } from '../pages/Recruiter/Dashboard';
import { Dashboard as CaptainDashboard } from '../pages/Captain/Dashboard';
import { Dashboard as AdminDashboard } from '../pages/Admin/Dashboard';

const RootRedirect: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to={`/${user?.role.toLowerCase()}`} replace />;
};

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      
      {/* Root Redirect */}
      <Route path="/" element={<RootRedirect />} />

      {/* Recruiter Routes */}
      <Route
        path="/recruiter"
        element={
          <ProtectedRoute allowedRoles={[ROLES.RECRUITER]}>
            <RecruiterLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<RecruiterDashboard />} />
      </Route>

      {/* Captain Routes */}
      <Route
        path="/captain"
        element={
          <ProtectedRoute allowedRoles={[ROLES.CAPTAIN]}>
            <CaptainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<CaptainDashboard />} />
      </Route>

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

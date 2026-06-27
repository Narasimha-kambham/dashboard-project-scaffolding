import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { ROLES } from '../constants/roles';

export const AdminLayout: React.FC = () => <DashboardLayout role={ROLES.ADMIN} />;
export default AdminLayout;

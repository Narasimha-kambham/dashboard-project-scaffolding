import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { ROLES } from '../constants/roles';

export const CaptainLayout: React.FC = () => <DashboardLayout role={ROLES.CAPTAIN} />;
export default CaptainLayout;

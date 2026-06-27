import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { ROLES } from '../constants/roles';

export const RecruiterLayout: React.FC = () => <DashboardLayout role={ROLES.RECRUITER} />;
export default RecruiterLayout;

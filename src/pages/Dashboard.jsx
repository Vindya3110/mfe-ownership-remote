import React from 'react';
import ModernAuthorization from '../components/LabourHourHold';
import SecurityPackage from '../components/MobileService';


const Dashboard = () => {
    return (
        <div style={styles.dashboard}>
            <ModernAuthorization />
            <SecurityPackage />
        </div>
    );
};

const styles = {
    dashboard: {
        display: 'flex',
        padding: '20px',
        backgroundColor: '#1e1e1e',
        minHeight: '100vh',
        gap: '20px',
    },
};

export default Dashboard;
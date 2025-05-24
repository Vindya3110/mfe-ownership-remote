import React from 'react';

const Card = ({ topic, description }) => {
    return (
        <div style={styles.cardContainer}>
            <div style={styles.cardContent}>
                <h2 style={styles.topic}>{topic}</h2>
                <p style={styles.description}>{description}</p>
            </div>
        </div>
    );
};

const styles = {
    cardContainer: {
        // flex: 1,
        width: '300px',
        margin: '10px',
        backgroundColor: '#f0f0f0',
        color: '#333',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        position: 'relative',
        height:'500px', // Maintain square shape
        overflow: 'hidden',
    },
    cardContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    topic: {
        fontSize: '20px',
        color: '#111',
        marginBottom: '10px',
    },
    description: {
        fontSize: '16px',
        color: '#555',
    },
};

export default Card;
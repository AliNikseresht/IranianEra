'use client';

import React from 'react';

// Define the styles as a constant object with appropriate types
const spinnerContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
};

const spinnerStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    position: 'relative',
};

const dotStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#ab9273',
    position: 'absolute',
    top: '0',
    left: '0',
    animation: 'bounce 1.5s infinite ease-in-out',
};

const dot1Style: React.CSSProperties = {
    ...dotStyle,
    animationDelay: '0s',
};

const dot2Style: React.CSSProperties = {
    ...dotStyle,
    animationDelay: '0.3s',
};

const dot3Style: React.CSSProperties = {
    ...dotStyle,
    animationDelay: '0.6s',
};

const Spinner: React.FC = () => (
    <div style={spinnerContainerStyle}>
        <div style={spinnerStyle}>
            <div style={{ ...dotStyle, ...dot1Style }}></div>
            <div style={{ ...dotStyle, ...dot2Style }}></div>
            <div style={{ ...dotStyle, ...dot3Style }}></div>
        </div>
    </div>
);

export default Spinner;

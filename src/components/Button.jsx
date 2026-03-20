import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = 'btn d-inline-flex align-items-center justify-content-center gap-2 rounded-3 px-4 py-2 fw-medium shadow-sm transition';

    const variants = {
        primary: 'btn-primary text-white',
        secondary: 'btn-outline-secondary bg-body text-body',
        outline: 'btn-outline-primary',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;

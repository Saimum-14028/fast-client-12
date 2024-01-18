import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion"

const Payment = () => {
    return (
        <div>
            <Helmet>
                <title>Fast | Payment</title>
            </Helmet>

            <motion.div animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}>
                    <h1 className="text-3xl font-bold my-2 text-center">Please Pay</h1>
            </motion.div>
        </div>
    );
};

export default Payment;
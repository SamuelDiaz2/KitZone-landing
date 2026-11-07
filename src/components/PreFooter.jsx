import React, { useState } from 'react';
import LeadForm from './LeadForm';
export default function PreFooter() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <LeadForm/>
    );
}
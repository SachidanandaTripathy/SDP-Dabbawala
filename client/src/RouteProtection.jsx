import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export function AdminAccess({ children }) {
    const auth = useAuth();
    const current_user = auth.user ? auth.user.role : 'customer';
    //   const navigate = useNavigate();

    if (current_user === 'admin') {
        return <>{children}</>;
    } else {
        return (
            <h6>page not found</h6>
  
        )
    }
}

export function CustomerAccess({ children }) {
    const auth = useAuth();
    const current_user = auth.user ? auth.user.role : 'customer';
    console.log(current_user)
    //   const navigate = useNavigate();

    if (current_user === 'customer') {
        return <>{children}</>;
    } else {
        return (
            <h6>page not foundjbnjk</h6>
        )
    }
}

export function DabbawalaAccess({ children }) {
    const auth = useAuth();
    const current_user = auth.user ? auth.user.role : 'customer';
    //   const navigate = useNavigate();

    if (current_user === 'Dabbawala') {
        return <>{children}</>;
    } else {
        return (
            <h6>page not found</h6>
        )
    }
}

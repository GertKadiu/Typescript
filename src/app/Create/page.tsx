import React from 'react';
import Button from '@/components/Header';

const Create = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "100vh",
        }}>
            <div style={{ width: "400px" }}>
                <div style={{ width: "100%", marginBottom: "10px" }}>Create User</div>
                <input placeholder='username' id='username' type='text' style={{ width: "100%", marginBottom: "10px" }} /> {/* Adjust input styles */}
                <input placeholder='email' id='email' type='email' style={{ width: "100%", marginBottom: "10px" }} /> {/* Adjust input styles */}
                <Button />
            </div>
        </div>
    );
};

export default Create;

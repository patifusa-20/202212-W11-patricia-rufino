import { useState } from 'react';
import { FormType } from '../../../models/form';

export function Login({
    data,
    handleUpdate,
}: {
    data: FormType;
    handleUpdate: (data: FormType) => void;
}) {
    const initialFormData: FormType = data;
    const [formData, setFormData] = useState(initialFormData);

    const handleBtnSubmit = () => {
        formData.step3 = true;
        setFormData({ ...formData });
        handleUpdate(formData);
    };

    return (
        <>
            <h2>Login</h2>
            <div>
                <label htmlFor="userName">Username</label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Introduce your username"
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Introduce your password"
                    required
                />
            </div>
            <div>
                <button type="submit" onClick={handleBtnSubmit}>
                    Login
                </button>
            </div>
        </>
    );
}

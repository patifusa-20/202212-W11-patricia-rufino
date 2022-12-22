import { SyntheticEvent, useState } from 'react';
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

    const handleUserName = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        if (element.value !== formData.userNameAccess) {
            formData.dataError = true;
        } else {
            formData.dataError = false;
        }
        setFormData({ ...formData, [element.name]: element.value });
        handleUpdate(formData);
    };
    const handleUserPass = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        if (element.value !== formData.password) {
            formData.dataError = true;
        } else {
            formData.dataError = false;
        }
        setFormData({ ...formData, [element.name]: element.value });
        handleUpdate(formData);
    };

    const handleBtnSubmit = () => {
        formData.step4 = true;
        setFormData({ ...formData });
        handleUpdate(formData);
    };

    return (
        <>
            <h2>Login</h2>
            <div>
                <label htmlFor="userLogin">Username</label>
                <input
                    type="text"
                    name="userLogin"
                    id="userLogin"
                    placeholder="Introduce your username"
                    value={formData.userLogin}
                    onInput={handleUserName}
                    required
                />
                {formData.dataError ? (
                    <span className="data-error">Incorrect data</span>
                ) : (
                    ''
                )}
            </div>
            <div>
                <label htmlFor="passLogin">Password</label>
                <input
                    type="password"
                    name="passLogin"
                    id="passLogin"
                    placeholder="Introduce your password"
                    value={formData.passLogin}
                    onInput={handleUserPass}
                    required
                />
                {formData.dataError ? (
                    <span className="data-error">Incorrect data</span>
                ) : (
                    ''
                )}
            </div>
            <div>
                <button type="submit" onClick={handleBtnSubmit}>
                    Login
                </button>
            </div>
        </>
    );
}

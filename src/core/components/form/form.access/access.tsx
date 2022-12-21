import { SyntheticEvent, useState } from 'react';
import { FormType } from '../../../models/form';
import { Pagination } from '../pagination/pagination';

export function Access({
    data,
    handleUpdate,
}: {
    data: FormType;
    handleUpdate: (data: FormType) => void;
}) {
    const initialFormData: FormType = data;
    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
        handleUpdate(formData);
    };

    const handleAccountTypeChange = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        formData.accountType = element.value;
        setFormData({ ...formData });
        handleUpdate(formData);
    };

    const handleBtnSubmit = () => {
        if (
            formData.userNameAccess !== '' &&
            formData.password !== '' &&
            formData.repeatPass !== '' &&
            formData.accountType !== ''
        ) {
            formData.step2 = true;
            setFormData({ ...formData });
            handleUpdate(formData);
        }
    };

    return (
        <>
            <h2>Access Data</h2>
            <div>
                <label htmlFor="userNameAccess">Username</label>
                <input
                    type="text"
                    name="userNameAccess"
                    id="userNameAccess"
                    placeholder="Introduce your username"
                    value={formData.userNameAccess}
                    onInput={handleInput}
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
                    value={formData.password}
                    onInput={handleInput}
                    required
                />
            </div>
            <div>
                <label htmlFor="repeatPass">Repeat password</label>
                <input
                    type="password"
                    name="repeatPass"
                    id="repeatPass"
                    placeholder="Introduce your password again"
                    value={formData.repeatPass}
                    onInput={handleInput}
                    required
                />
            </div>
            <div>
                <label htmlFor="account-type">Account type</label>
                <select
                    name="account-type"
                    id="type-select"
                    onChange={handleAccountTypeChange}
                >
                    <option value="">--Please choose an option--</option>
                    <option value="personal">Personal</option>
                    <option value="pro">Pro</option>
                    <option value="business">Business</option>
                </select>
            </div>
            <div>
                <Pagination
                    data={formData}
                    handleUpdate={handleUpdate}
                    step={'2'}
                ></Pagination>
                <button type="submit" onClick={handleBtnSubmit}>
                    Save
                </button>
            </div>
        </>
    );
}

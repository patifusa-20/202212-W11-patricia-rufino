import { SyntheticEvent, useState } from 'react';
import { FormType } from '../../../models/form';

export function Pagination({
    data,
    handleUpdate,
    step,
}: {
    data: FormType;
    handleUpdate: (data: FormType) => void;
    step: string;
}) {
    const initialFormData: FormType = data;
    const [formData, setFormData] = useState(initialFormData);

    const handleBtnSubmit = () => {
        const prevStep = 'step' + step;
        //formData[prevStep] = false;
        setFormData({ ...formData });
        handleUpdate(formData);
    };
    return (
        <>
            <button type="button" onClick={handleBtnSubmit}>
                Prev
            </button>
        </>
    );
}

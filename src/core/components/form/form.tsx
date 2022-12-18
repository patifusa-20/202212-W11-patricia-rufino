import { SyntheticEvent } from 'react';
import { Personal } from './form.personal/personal';

export function Form() {
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
    };
    return (
        <section>
            <form className="add-task" onSubmit={handleSubmit}>
                <Personal></Personal>
            </form>
        </section>
    );
}

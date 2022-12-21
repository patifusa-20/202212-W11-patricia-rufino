import { FormType } from '../models/form';

// Como estamos simulando situaciones reales, haremos que la recepción de los datos sea asíncrono
// export const getUserData = async () => {
//     // Para tener PERSISTENCIA en el local storage lo hacemos así ->

//     const data: FormType = localStorage.getItem('User Data');
//     // // Si no hay nada en el local storage, guarda TASKS
//     // if (!data) {
//     //     localStorage.setItem('Tasks', JSON.stringify(TASKS));
//     //     return TASKS;
//     // }
//     // //
//     return JSON.parse(data);
// };

export const saveUserData = (userData: FormType) => {
    localStorage.setItem('UserData', JSON.stringify(userData));
};

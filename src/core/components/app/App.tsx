import React from 'react';
import { Footer } from '../footer/footer';
import { Form } from '../form/form';
import { Header } from '../header/header';
import './App.css';

function App() {
    return (
        <>
            <Header></Header>
            <main>
                <Form></Form>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";

import {ProductProvider} from "./context/Context";

ReactDOM.render(
    <ProductProvider>
        <React.StrictMode>
            <Router>
                <AuthContextProvider>
                    <App/>
                </AuthContextProvider>
            </Router>
        </React.StrictMode>
    </ProductProvider>,

    document.getElementById('root')
);

reportWebVitals();

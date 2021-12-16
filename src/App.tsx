import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer } from 'react';
import { MainPage } from './components/MainPage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SendMailPanel } from './components/panels/SendMailPanel';
import { RemoveMailPanel } from './components/panels/RemoveMailPanel';
import { DispatchContext } from './reducer/DispatchContext';
import { StateContext } from './reducer/StateContext';
import { MailReducerFunction } from './reducer/MailReducerFunction';
import { initialState } from './assets/initialState';

function App() {

    const [state, dispatch] = useReducer(MailReducerFunction, initialState);

    const dispatchValue = {dispatch};
    const stateValue = {state};

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/send-mail" element={
                    <SendMailPanel />
                }
                />
                <Route path="/remove-mail" element={
                    <RemoveMailPanel />
                }
                />
                <Route path="/mainpage" element={
                    <DispatchContext.Provider value={dispatchValue}>
                        <StateContext.Provider value={stateValue}>
                            <MainPage />
                        </StateContext.Provider>
                    </DispatchContext.Provider>
                }
                />
                <Route path="*" element={
                    <Navigate to="/mainpage" />
                }
                />
            </Routes>
        </BrowserRouter>
  );
}

export default App;

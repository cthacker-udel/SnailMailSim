import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { MainPage } from './components/MainPage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SendMailPanel } from './components/panels/SendMailPanel';
import { RemoveMailPanel } from './components/panels/RemoveMailPanel';

function App() {
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
                    <MainPage />
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

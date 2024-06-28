import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'
import StaffLayout from './pages/Staff/StaffLayout';
import Login from "./components/Login"
import SignUp from './components/Signup'
import OrganizationLayout from "./pages/Organizations/OrganizationLayout"

const Index: React.FC = function () {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/sign-up" element={<SignUp/>} />
                    <Route path="/staff/*" element={<StaffLayout />} />
                    <Route path="/org/*" element={<OrganizationLayout />} />
                </Routes>
            </Router>
        </>
    )
}

export default Index

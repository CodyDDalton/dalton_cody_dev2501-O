//Cody Dalton, Interface Programming, dev2501
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Income from './pages/Income';
import Savings from './pages/Savings';
import Spending from './pages/Spending';
import Settings from './pages/Settings'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reports" element={<Reports />} />
        <Route path="income" element={<Income />} />
        <Route path="savings" element={<Savings />} />
        <Route path="spending" element={<Spending />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
export default App;
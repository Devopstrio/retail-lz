import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import RetailDashboard from './pages/RetailDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The retail intelligence engine is currently synchronizing omnichannel telemetry. This module will be available shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<RetailDashboard />} />
          <Route path="/orders" element={<Placeholder name="Order Management Hub" />} />
          <Route path="/inventory" element={<Placeholder name="Global Inventory Control" />} />
          <Route path="/customers" element={<Placeholder name="Customer Data Platform" />} />
          <Route path="/analytics" element={<Placeholder name="Retail Performance Analytics" />} />
          <Route path="/supply-chain" element={<Placeholder name="Supply Chain Orchestration" />} />
          <Route path="/costs" element={<Placeholder name="Retail FinOps & Cloud Costs" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import InspectionRequest from './pages/InspectionRequest';
import SurveyStatus from './pages/SurveyStatus';
import Certificates from './pages/Certificates';
import History from './pages/History';
import Support from './pages/Support';

const App = () => {
  return (
    <Router>
      <div dir="rtl" className="flex bg-gray-100 min-h-screen text-gray-900 font-sans">
        <Sidebar />
        <div className="flex-1 pr-64 p-6">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/request" element={<InspectionRequest />} />
            <Route path="/status" element={<SurveyStatus />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/history" element={<History />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const NotFound = () => (
  <div className="text-center text-red-500 mt-20 text-xl">
    صفحه‌ای با این آدرس یافت نشد ❌
  </div>
);

export default App;

import { NavLink } from 'react-router-dom';
import { FiHome, FiFileText, FiSearch, FiAward, FiClock, FiHelpCircle } from 'react-icons/fi';

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-3 rounded-md transition ${
      isActive ? 'bg-violet-600 text-white' : 'hover:bg-gray-700 text-gray-300'
    }`;

  return (
    <div className="w-64 h-screen bg-gray-900 shadow-lg p-4 fixed">
      <div className="text-white text-2xl font-bold mb-8">🚢 Client Portal</div>
      <nav className="flex flex-col space-y-1 text-sm">
        <NavLink to="/" className={linkClass}><FiHome /> داشبورد</NavLink>
        <NavLink to="/request" className={linkClass}><FiFileText /> درخواست بازرسی</NavLink>
        <NavLink to="/status" className={linkClass}><FiSearch /> وضعیت بازرسی</NavLink>
        <NavLink to="/certificates" className={linkClass}><FiAward /> گواهینامه‌ها</NavLink>
        <NavLink to="/history" className={linkClass}><FiClock /> تاریخچه</NavLink>
        <NavLink to="/support" className={linkClass}><FiHelpCircle /> پشتیبانی</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

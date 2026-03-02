import { FaRegBell } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="w-full h-20 bg-[#536CB3] flex items-center justify-between px-20 shadow-md">
      
      {/* Left - Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Hospital Logo"
          className="h-12 object-contain"
        />
      </div>

      {/* Right - Notification + User */}
      <div className="flex items-center gap-6 text-white">
        
        {/* Notification */}
        <button className="relative hover:scale-110 transition">
          <FaRegBell/>
          
          {/* Notification Dot */}
          <span className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full border-2 border-indigo-600"></span>
        </button>

        {/* User Info */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>

      </div>
    </nav>
  );
}

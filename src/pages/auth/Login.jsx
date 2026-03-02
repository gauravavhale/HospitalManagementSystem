import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // ✅ Validation Function
  const validate = () => {
  let newErrors = {};

  if (!user.email) {
    newErrors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
    newErrors.email = "Enter valid email";
  }

  if (!user.password) {
    newErrors.password = "Password is required";
  } else if (user.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }

  if (!user.role) {
    newErrors.role = "Please select a role";
  }

  return newErrors;
};

  // ✅ Handle Input Change
  const handleChange = (e) => {
  const { name, value } = e.target;

  setUser((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => {
    const newErrors = { ...prev };

    if (name === "password") {
      if (!value) {
        newErrors.password = "Password is required";
      } else if (value.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      } else {
        delete newErrors.password; // ✅ remove error properly
      }
    }

    if (name === "email") {
      if (!value) {
        newErrors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(value)) {
        newErrors.email = "Enter valid email";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "role") {
      if (!value) {
        newErrors.role = "Please select a role";
      } else {
        delete newErrors.role;
      }
    }

    return newErrors;
    });
  };

  const fnLogin = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("User Data", user);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "RECEPTION") {
        navigate("/reception/dashboard");
      } else if (user.role === "PATIENT") {
        navigate("/patient/dashboard");
      } else if (user.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else if (user.role === "DOCTOR") {
        navigate("/doctor/dashboard");
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 py-16 px-4">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/image 2.png')",
        }}
      />

      {/* Card */}
      <div className="relative bg-white/80 backdrop-blur-md shadow-2xl rounded-xl w-full max-w-md p-8">
        
        <div className="text-center mb-6">
          <img src="/logo.png" alt="Hospital Logo" width={180} className="mx-auto" />
          <p className="text-gray-600 mt-2">Login Your Account</p>
        </div>

        <form className="space-y-4" onSubmit={fnLogin}>
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={user.email}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 outline-none ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={user.password}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 outline-none ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-500"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Role Selection */}
          <div>
            <p className="text-sm font-medium mb-2">Login As</p>
            <div className="flex flex-wrap gap-4 text-sm">
              {["RECEPTION", "PATIENT", "ADMIN", "DOCTOR"].map((r) => (
                <label key={r} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value={r}
                    checked={user.role === r}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  {r.charAt(0) + r.slice(1).toLowerCase()}
                </label>
              ))}
            </div>
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={!user.email || !user.password || !user.role}
            className={`w-full py-2 rounded-md text-white ${
            !user.email || !user.password || !user.role
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Login
          </button>

          <p className="text-center text-sm mt-4">
            New here?{" "}
            <a href="/register" className="text-blue-600 font-medium hover:underline">
              Register Now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
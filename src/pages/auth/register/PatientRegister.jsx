import { useState } from "react";

export default function PatientRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    age: "",
    weight: "",
    bloodPressure: "",
    gender: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Validation Function
  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required";

    if (!formData.mobile) {
        newErrors.mobile = "Mobile number is required";
    } else if (formData.mobile.length !== 10) {
      newErrors.mobile = "Mobile number must be 10 digits";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid Indian mobile number";
    }

    if (!formData.age)
      newErrors.age = "Age is required";
    else if (formData.age <= 0)
      newErrors.age = "Enter valid age";

    if (!formData.weight)
      newErrors.weight = "Weight is required";
    else if (formData.weight <= 0)
      newErrors.weight = "Enter valid weight";

    if (!formData.bloodPressure.trim())
      newErrors.bloodPressure = "Blood pressure is required";

    if (!formData.gender)
      newErrors.gender = "Please select gender";

    if (!formData.dob)
      newErrors.dob = "Date of birth is required";

    return newErrors;
  };

  // ✅ Handle Change
  const handleChange = (e) => {
  const { name, value } = e.target;
  let newValue = value;

  // Special handling for mobile
  if (name === "mobile") {
    newValue = value.replace(/\D/g, "").slice(0, 10);
  }

  setFormData((prev) => ({
    ...prev,
    [name]: newValue,
  }));

  // Real-time validation for that field
  let errorMessage = "";

  switch (name) {
    case "fullName":
      if (!newValue.trim()) errorMessage = "Full name is required";
      break;

    case "mobile":
      if (!newValue)
        errorMessage = "Mobile number is required";
      else if (newValue.length !== 10)
        errorMessage = "Mobile number must be 10 digits";
      else if (!/^[6-9]\d{9}$/.test(newValue))
        errorMessage = "Enter valid Indian mobile number";
      break;

    case "age":
      if (!newValue)
        errorMessage = "Age is required";
      else if (newValue <= 0)
        errorMessage = "Enter valid age";
      break;

    case "weight":
      if (!newValue)
        errorMessage = "Weight is required";
      else if (newValue <= 0)
        errorMessage = "Enter valid weight";
      break;

    case "bloodPressure":
      if (!newValue.trim())
        errorMessage = "Blood pressure is required";
      break;

    case "gender":
      if (!newValue)
        errorMessage = "Please select gender";
      break;

    case "dob":
      if (!newValue)
        errorMessage = "Date of birth is required";
      break;

    default:
      break;
  }

  setErrors((prev) => ({
    ...prev,
    [name]: errorMessage,
  }));
};

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Patient Registered Successfully ✅");
      console.log(formData);
    }
  };

  return (
    <div
     className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-16 px-4"
     style={{
     backgroundImage: "url('/image 2.png')",
     }}
    >
      
        <div className="absolute inset-0 bg-white/70"></div>

        <div className="relative z-10 bg-white/90 backdrop-blur-sm w-[420px] rounded-xl shadow-lg px-8 py-10">

        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Hospital Logo" className="w-40" />
        </div>

        <h2 className="text-center text-lg font-semibold mb-6">
          Patient Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* Full Name */}
          <Input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />

          {/* Mobile */}
          <Input
            name="mobile"
            type="tel"
            placeholder="Mobile Number"
            maxLength="10"
            value={formData.mobile}
            onChange={handleChange}
            error={errors.mobile}
          />

          {/* Age */}
          <Input
            name="age"
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            error={errors.age}
          />

          {/* Weight */}
          <Input
            name="weight"
            type="number"
            placeholder="Weight"
            value={formData.weight}
            onChange={handleChange}
            error={errors.weight}
          />

          {/* Blood Pressure */}
          <Input
            name="bloodPressure"
            placeholder="Blood Pressure"
            value={formData.bloodPressure}
            onChange={handleChange}
            error={errors.bloodPressure}
          />

          {/* Gender */}
          <div>
            <div className="flex gap-6 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                Male
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                Female
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-xs mt-1">
                {errors.gender}
              </p>
            )}
          </div>

          {/* Date of Birth */}
          <Input
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            error={errors.dob}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#4F67B0] hover:bg-[#3f55a0] text-white py-2 rounded-md text-sm mt-3"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
}

// Reusable Input Component
const Input = ({
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  maxLength,
}) => (
  <div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);
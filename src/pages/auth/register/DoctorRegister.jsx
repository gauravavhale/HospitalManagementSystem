import { useState } from "react";

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    doctorName: "",
    fatherName: "",
    contactNumber: "",
    address: "",
    dob: "",
    ageGender: "",
    email: "",
    qualification: "",
    specialization: "",
    experience: "",
    registrationNumber: "",
    consultationFees: "",
    availability: "",
  });

  const [errors, setErrors] = useState({});

  const specializations = [
    "Cardiologist",
    "Dermatologist",
    "Orthopedic",
    "Neurologist",
    "Pediatrician",
    "General Physician",
  ];

  // ✅ Field Validation Function (Single Field)
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "doctorName":
        if (!value.trim()) error = "Doctor name is required";
        break;

      case "fatherName":
        if (!value.trim()) error = "Father name is required";
        break;

      case "contactNumber":
        if (!value) error = "Contact number is required";
        else if (!/^[6-9]\d{9}$/.test(value))
          error = "Enter valid 10 digit mobile number";
        break;

      case "email":
        if (!value) error = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(value))
          error = "Invalid email format";
        break;

      default:
        if (!value) error = "This field is required";
    }

    return error;
  };

    // ✅ Handle Change with Validation
    const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    // ✅ Prevent non-numeric input for contact number
    if (name === "contactNumber") {
        newValue = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({
        ...prev,
        [name]: newValue,
    }));

    // Validate instantly
    const error = validateField(name, newValue);

    setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Doctor Registered Successfully ✅");
      console.log(formData);
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
        ></div>

        {/* Form Card */}
        <div className="relative bg-white/90 backdrop-blur-sm w-[420px] rounded-xl shadow-lg px-8 py-10">

        <div className="flex justify-center mb-4">
            <img
            src="/logo.png"
            alt="Hospital Logo"
            className="w-40 object-contain"
            />
        </div>

        <h2 className="text-center text-lg font-semibold mb-6">
            Doctor Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <Input name="doctorName" placeholder="Doctor Name"
            value={formData.doctorName} onChange={handleChange} error={errors.doctorName}
          />

          <Input name="fatherName" placeholder="Father Name"
            value={formData.fatherName} onChange={handleChange} error={errors.fatherName}
          />

          {/* Contact Number */}
          <Input name="contactNumber" placeholder="Contact Number"
            type="text"
            maxLength="10"
            value={formData.contactNumber}
            onChange={handleChange}
            error={errors.contactNumber}
          />

          <Input name="address" placeholder="Address"
            value={formData.address} onChange={handleChange} error={errors.address}
          />

          <Input name="dob" type="date"
            value={formData.dob} onChange={handleChange} error={errors.dob}
          />

          <Input name="ageGender" placeholder="Age/Gender"
            value={formData.ageGender} onChange={handleChange} error={errors.ageGender}
          />

          <Input name="email" placeholder="Email Address"
            value={formData.email} onChange={handleChange} error={errors.email}
          />

          <Input name="qualification" placeholder="Education/Qualification"
            value={formData.qualification} onChange={handleChange} error={errors.qualification}
          />

          {/* Specialization */}
          <div>
            <select
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md text-sm ${
                errors.specialization ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Doctor Specialization</option>
              {specializations.map((spec, index) => (
                <option key={index} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
            {errors.specialization && (
              <p className="text-red-500 text-xs mt-1">
                {errors.specialization}
              </p>
            )}
          </div>

          <Input name="experience" placeholder="Experience (Type: Number)"
            type="number"
            value={formData.experience}
            onChange={handleChange}
            error={errors.experience}
          />

          <Input name="registrationNumber"
            placeholder="Registration Number (MCI/NMC)"
            value={formData.registrationNumber}
            onChange={handleChange}
            error={errors.registrationNumber}
          />

          <Input name="consultationFees"
            placeholder="Consultation Fees"
            type="number"
            value={formData.consultationFees}
            onChange={handleChange}
            error={errors.consultationFees}
          />

          <Input name="availability"
            placeholder="Availability (Days & Time Slot)"
            value={formData.availability}
            onChange={handleChange}
            error={errors.availability}
          />

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
};

const Input = ({ name, placeholder, type = "text", value, onChange, error, maxLength }) => (
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

export default DoctorRegister;
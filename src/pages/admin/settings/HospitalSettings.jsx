import { useState } from "react";

const HospitalSettings = () => {
  const [hospitalData, setHospitalData] = useState({
    hospitalName: "City Hospital",
    address:
      "City Hospital 123, ABC Road, Andheri West, Mumbai – 400058 Maharashtra, India",
    phone: "+91 98765 43210",
    email: "info@cityhospital.com",
    whatsappApiKey: "",
    opdFee: "50",
  });

  const [logoPreview, setLogoPreview] = useState(null);

  const [pdfSettings, setPdfSettings] = useState({
    includeLetterhead: true,
    includeSignature: false,
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Toggle Change
  const handleToggle = (name) => {
    setPdfSettings((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Handle Logo Upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLogoPreview(imageUrl);
    }
  };

  // Save (API ready)
  const handleSave = () => {
    const payload = {
      ...hospitalData,
      ...pdfSettings,
    };

    console.log("Sending to API:", payload);

    alert("Hospital Settings Saved (Frontend Only)");
  };

  return (  
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-blue-700">
            Hospital Setting
          </h1>
          <p className="text-sm text-gray-600">
            Manage hospital Information, Performance And Integration
          </p>
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-5 py-2 text-sm rounded"
        >
          Save Settings
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* LEFT PANEL */}
        <div className="space-y-6">
          {/* Consultation Fees */}
          <div className="bg-white border p-4 text-sm space-y-3">
            <h3 className="font-semibold">
              Consultation Fees Defaults
            </h3>

            <div>
              <label>Default OPD Consultation Fee</label>
              <input
                type="number"
                name="opdFee"
                value={hospitalData.opdFee}
                onChange={handleChange}
                className="w-full border p-2 mt-1"
              />
            </div>
          </div>

          {/* WhatsApp Integration */}
          <div className="bg-white border p-4 text-sm space-y-2">
            <h3 className="font-semibold">
              WhatsApp Integration
            </h3>

            <input
              type="text"
              name="whatsappApiKey"
              value={hospitalData.whatsappApiKey}
              onChange={handleChange}
              placeholder="Enter WhatsApp API Key"
              className="w-full border p-2"
            />

            <p className="text-xs text-gray-500">
              Enter API key provided by WhatsApp Business API.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="col-span-2 space-y-6">
          {/* Hospital Profile */}
          <div className="bg-white border p-6 space-y-4">
            <h3 className="font-semibold text-lg">
              Hospital Profile
            </h3>

            {/* Hospital Name */}
            <div>
              <label className="text-sm">Hospital Name</label>
              <input
                type="text"
                name="hospitalName"
                value={hospitalData.hospitalName}
                onChange={handleChange}
                className="w-full border p-2 mt-1"
              />
            </div>

            {/* Logo Section */}
            <div>
              <label className="text-sm">Logo</label>

              <div className="flex items-center gap-6 mt-3">
                <div className="border p-4 w-40 h-32 flex items-center justify-center">
                  {logoPreview ? (
                    <img
                      src={logoPreview}
                      alt="Logo Preview"
                      className="max-h-28"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">
                      No Logo
                    </span>
                  )}
                </div>

                <label className="border px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                  Upload New Logo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="text-sm">Address</label>
              <input
                type="text"
                name="address"
                value={hospitalData.address}
                onChange={handleChange}
                className="w-full border p-2 mt-1"
              />
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={hospitalData.phone}
                  onChange={handleChange}
                  className="w-full border p-2 mt-1"
                />
              </div>

              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={hospitalData.email}
                  onChange={handleChange}
                  className="w-full border p-2 mt-1"
                />
              </div>
            </div>
          </div>

          {/* Prescription PDF Settings */}
          <div className="bg-white border p-6">
            <h3 className="font-semibold mb-4 text-lg">
              Prescription PDF Settings
            </h3>

            <div className="flex justify-between items-center mb-4">
              <span>Include Letterhead</span>
              <input
                type="checkbox"
                checked={pdfSettings.includeLetterhead}
                onChange={() =>
                  handleToggle("includeLetterhead")
                }
              />
            </div>

            <div className="flex justify-between items-center">
              <span>Include Doctor Signature Automatically</span>
              <input
                type="checkbox"
                checked={pdfSettings.includeSignature}
                onChange={() =>
                  handleToggle("includeSignature")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalSettings;
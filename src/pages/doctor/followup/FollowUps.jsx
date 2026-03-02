const followUpDummyData = [
  {
    id: 1,
    name: "Rahul Sharma",
    patientId: "PT10045",
    date: "15 Jan 2026",
    time: "11:00AM",
    doctor: "Dr. Mehta",
    visitType: "OPD Visit",
    phone: "2134555679",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    patientId: "PT10045",
    date: "15 Jan 2026",
    time: "11:00AM",
    doctor: "Dr. Mehta",
    visitType: "OPD Visit",
    phone: "2134555679",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    patientId: "PT10045",
    date: "15 Jan 2026",
    time: "11:00AM",
    doctor: "Dr. Mehta",
    visitType: "OPD Visit",
    phone: "2134555679",
  },
];

const FollowUps = () => {
  return (
    <div className="bg-white min-h-screen p-6">
      <div className="bg-white max-w-6xl mx-auto p-6 shadow rounded">

        {/* Page Title */}
        <h2 className="text-xl font-semibold text-[#536CB3] mb-6">
          Follow -Ups
        </h2>

        {/* Date & Filter */}
        <div className="mb-6 text-sm">
          <p>
            <span className="font-semibold">Date</span> &nbsp;
            1 Jan 2026 - 21 Jan 2026
          </p>

          <p className="mt-2">
            Quick Filter <span className="font-semibold">Next 7 Days</span>
          </p>
        </div>

        {/* Table Header */}
        <div className="border bg-gray-200 text-sm font-semibold grid grid-cols-5 p-3">
          <div>Patient Name</div>
          <div>Follow Up date</div>
          <div>Doctor</div>
          <div>Visit Type</div>
          <div>Phone</div>
        </div>

        {/* Table Rows */}
        {followUpDummyData.map((item) => (
          <div
            key={item.id}
            className="border border-t-0 grid grid-cols-5 p-3 text-sm"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-600">{item.patientId}</p>
              <p className="text-gray-600">{item.patientId}</p>
            </div>

            <div>
              <p>{item.date}</p>
              <p>{item.time}</p>
              <p>{item.date}</p>
            </div>

            <div className="flex items-center">
              {item.doctor}
            </div>

            <div className="flex items-center">
              {item.visitType}
            </div>

            <div className="flex items-center font-medium">
              {item.phone}
            </div>
          </div>
        ))}

        {/* Bottom Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="bg-[#536CB3] text-white px-8 py-2 rounded text-sm">
            Generate PDF
          </button>

          <button className="bg-green-600 text-white px-8 py-2 rounded text-sm">
            Send via Whatsapp
          </button>

          <button className="bg-red-200 text-red-700 px-8 py-2 rounded text-sm">
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default FollowUps;
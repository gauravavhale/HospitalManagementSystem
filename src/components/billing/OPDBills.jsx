const OPDBills = () => {
  const data = [
    {
      id: "APPT-1001",
      patient: "Rohan Smith",
      doctor: "Dr. Anita Sharma",
      date: "15 Jan 2025",
      amount: "₹600",
      status: "Paid",
    },
  ];

  return (
    <table className="w-full border text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">Appointment ID</th>
          <th className="border p-2">Patient Name</th>
          <th className="border p-2">Doctor</th>
          <th className="border p-2">Date</th>
          <th className="border p-2">Amount</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border p-2">{item.id}</td>
            <td className="border p-2">{item.patient}</td>
            <td className="border p-2">{item.doctor}</td>
            <td className="border p-2">{item.date}</td>
            <td className="border p-2">{item.amount}</td>
            <td className="border p-2 text-green-600">
              {item.status}
            </td>
            <td className="border p-2 text-blue-600 cursor-pointer">
              View
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OPDBills;

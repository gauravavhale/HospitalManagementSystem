const IPDInvoices = () => {
  const data = [
    {
      admissionId: "38732923",
      patient: "Ram Verma",
      admissionDate: "15/01/2025",
      dischargeDate: "18/01/2025",
      doctor: "Dr. Anita Mehta",
      ward: "Single room",
      amount: "₹25,000",
      status: "Paid",
    },
  ];

  return (
    <table className="w-full border text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">Admission Id</th>
          <th className="border p-2">Patient Name</th>
          <th className="border p-2">Admission & Discharge</th>
          <th className="border p-2">Doctor</th>
          <th className="border p-2">Ward</th>
          <th className="border p-2">Amount</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border p-2">{item.admissionId}</td>
            <td className="border p-2">{item.patient}</td>
            <td className="border p-2">
              {item.admissionDate} - {item.dischargeDate}
            </td>
            <td className="border p-2">{item.doctor}</td>
            <td className="border p-2">{item.ward}</td>
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

export default IPDInvoices;

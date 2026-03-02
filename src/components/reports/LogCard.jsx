import React from "react";

const LogCard = ({ title, logs }) => {
  return (
    <div className="border p-5">
      <h3 className="font-medium mb-4">{title}</h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500">
            <th className="text-left">Time</th>
            <th className="text-left">Activity</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.time}</td>
              <td>{log.activity}</td>
              <td className={log.statusColor}>
                {log.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogCard;

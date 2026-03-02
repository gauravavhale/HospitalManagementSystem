const StatCard = ({ title, value, bgColor }) => {
  return (
    <div
      className={`rounded-lg p-6 text-white shadow-md ${bgColor}`}
    >
      <h4 className="text-sm font-medium">{title}</h4>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default StatCard;

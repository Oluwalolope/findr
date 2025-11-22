const RevenueBreakdown = () => {
  const revenueBreakdown = [
    { period: "Today", amount: "$450" },
    { period: "This Week", amount: "$1,230" },
    { period: "This Month", amount: "$3,450" },
    { period: "All Time", amount: "$28,900" },
  ];
  return (
    <div className="space-y-4">
      <p className="text-gray-600">Your revenue breakdown:</p>
      <div className="space-y-2">
        {revenueBreakdown.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <span className="text-gray-900">{item.period}</span>
            <span className="text-green-600">{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueBreakdown;

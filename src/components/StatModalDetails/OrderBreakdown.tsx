const OrderBreakdown = () => {
  const todayOrders = [
    {
      id: "#1234",
      customer: "John Doe",
      amount: "$89.99",
      status: "Completed",
    },
    {
      id: "#1235",
      customer: "Jane Smith",
      amount: "$199.99",
      status: "Processing",
    },
    {
      id: "#1236",
      customer: "Bob Johnson",
      amount: "$45.99",
      status: "Completed",
    },
    {
      id: "#1237",
      customer: "Alice Brown",
      amount: "$12.99",
      status: "Completed",
    },
  ];
  return (
    <div className="space-y-4">
      <p className="text-gray-600">Today's orders:</p>
      <div className="space-y-2">
        {todayOrders.map((order, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-900">{order.id}</span>
              <span className="text-gray-900">{order.amount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{order.customer}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  order.status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBreakdown;

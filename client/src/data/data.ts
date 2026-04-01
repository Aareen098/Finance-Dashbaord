
export const kpis = [
  {
    _id: "1",
    totalProfit: 25000,
    totalRevenue: 280000,
    totalExpenses: 150000,
    expensesByCategory: {
        salaries: 60000,
        supplies: 30000,
        services: 40000,
    },
    monthlyData: [
      { month: "January", revenue: 10000, expenses: 8000, operationalExpenses: 5000, nonOperationalExpenses: 3000 },
      { month: "February", revenue: 12000, expenses: 9000, operationalExpenses: 5500, nonOperationalExpenses: 3500 },
      { month: "March", revenue: 15000, expenses: 10000, operationalExpenses: 6000, nonOperationalExpenses: 4000 },
      { month: "April", revenue: 13000, expenses: 9500, operationalExpenses: 5800, nonOperationalExpenses: 3700 },
      { month: "May", revenue: 16000, expenses: 11000, operationalExpenses: 6200, nonOperationalExpenses: 4800 },
      { month: "June", revenue: 18000, expenses: 12000, operationalExpenses: 6500, nonOperationalExpenses: 5500 },
      { month: "July", revenue: 20000, expenses: 13000, operationalExpenses: 7000, nonOperationalExpenses: 6000 },
      { month: "August", revenue: 19000, expenses: 12500, operationalExpenses: 6800, nonOperationalExpenses: 5700 },
      { month: "September", revenue: 22000, expenses: 14000, operationalExpenses: 7200, nonOperationalExpenses: 6800 },
      { month: "October", revenue: 25000, expenses: 15000, operationalExpenses: 7500, nonOperationalExpenses: 7500 },
      { month: "November", revenue: 23000, expenses: 14500, operationalExpenses: 7300, nonOperationalExpenses: 7200 },
      { month: "December", revenue: 28000, expenses: 16000, operationalExpenses: 8000, nonOperationalExpenses: 8000 },
    ],
  },
];

export const products = [
    { _id: "1", price: 120.50, expense: 80.25 },
    { _id: "2", price: 150.75, expense: 95.50 },
    { _id: "3", price: 99.99, expense: 65.75 },
    { _id: "4", price: 200.00, expense: 150.00 },
    { _id: "5", price: 75.25, expense: 45.99 },
    { _id: "6", price: 300.50, expense: 220.75 },
    { _id: "7", price: 50.99, expense: 30.50 },
    { _id: "8", price: 180.25, expense: 120.00 },
    { _id: "9", price: 450.00, expense: 350.50 },
    { _id: "10", price: 999.99, expense: 750.25 },
];

export const transactions = [
    { _id: "1", buyer: "John Doe", amount: 120.50, productIds: ["1"] },
    { _id: "2", buyer: "Jane Smith", amount: 150.75, productIds: ["2"] },
    { _id: "3", buyer: "Peter Jones", amount: 99.99, productIds: ["3"] },
    { _id: "4", buyer: "Mary Williams", amount: 200.00, productIds: ["4"] },
    { _id: "5", buyer: "David Brown", amount: 75.25, productIds: ["5"] },
    { _id: "6", buyer: "Susan Miller", amount: 300.50, productIds: ["6"] },
    { _id: "7", buyer: "Robert Davis", amount: 50.99, productIds: ["7"] },
    { _id: "8", buyer: "Karen Garcia", amount: 180.25, productIds: ["8"] },
    { _id: "9", buyer: "Michael Rodriguez", amount: 450.00, productIds: ["9"] },
    { _id: "10", buyer: "Linda Martinez", amount: 999.99, productIds: ["10"] },
];

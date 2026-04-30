import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import { 
  TrendingUp, 
  ShoppingCart, 
  Package, 
  Users,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  DollarSign,
  Clock
} from 'lucide-react';

const salesData = [
  { name: 'Mon', revenue: 42000, orders: 450 },
  { name: 'Tue', revenue: 38000, orders: 390 },
  { name: 'Wed', revenue: 45000, orders: 480 },
  { name: 'Thu', revenue: 52000, orders: 540 },
  { name: 'Fri', revenue: 61000, orders: 620 },
  { name: 'Sat', revenue: 75000, orders: 780 },
  { name: 'Sun', revenue: 68000, orders: 710 },
];

const KPI_CARDS = [
  { title: 'Total Revenue (24h)', value: '$68.4k', trend: '+12% vs LW', color: 'blue', icon: DollarSign },
  { title: 'Active Orders', value: '1,284', trend: 'Processing', color: 'emerald', icon: ShoppingCart },
  { title: 'POS Sync Status', value: '100%', trend: '98 Stores', color: 'blue', icon: Zap },
  { title: 'Avg Order Value', value: '$97.35', trend: 'Stable', color: 'slate', icon: TrendingUp },
];

const RetailDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Omnichannel Intelligence Dashboard</h1>
          <p className="text-slate-400">Strategic oversight of global retail operations and customer engagement.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Generate Retail Report
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Update Inventory
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color}-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-400`} />
              </div>
              <div className={`text-xs font-medium ${card.trend.includes('+') ? 'text-emerald-400' : 'text-slate-400'}`}>
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Trend Graph */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Omnichannel Sales Revenue (Weekly)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="url(#colorRevenue)" name="Total Revenue" />
                <Area type="monotone" dataKey="orders" stroke="#10b981" fill="transparent" strokeDasharray="5 5" name="Order Count" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Regional Performance */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6">Regional Conversion Leaders</h3>
          <div className="flex-1 space-y-6">
            {[
              { name: 'North America (NA-East)', value: 4.8, color: 'bg-blue-500' },
              { name: 'Europe (EU-Central)', value: 4.2, color: 'bg-emerald-500' },
              { name: 'Asia Pacific (APAC-Syd)', value: 3.9, color: 'bg-indigo-500' },
              { name: 'Latin America (LATAM)', value: 3.5, color: 'bg-slate-500' },
            ].map((region) => (
              <div key={region.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">{region.name}</span>
                  <span className="text-slate-400">{region.value}% Conv.</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${region.color}`} style={{ width: `${(region.value/5)*100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-time Order Stream */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Live Omnichannel Order Stream</h3>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">View All Orders</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Order ID</th>
                <th className="px-6 py-4 font-semibold">Channel</th>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { id: '#ORD-9942', channel: 'E-COMMERCE', customer: 'Sarah Jenkins', amount: '$142.50', status: 'PROCESSING' },
                { id: '#ORD-9941', channel: 'STORE-104', customer: 'Michael Chen', amount: '$89.00', status: 'COMPLETED' },
                { id: '#ORD-9940', channel: 'MOBILE-APP', customer: 'Elena Rodriguez', amount: '$215.75', status: 'SHIPPED' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-medium text-slate-300">{row.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-mono text-slate-400">{row.channel}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{row.customer}</td>
                  <td className="px-6 py-4 text-sm font-bold text-white">{row.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded border ${
                      row.status === 'COMPLETED' ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10' : 'text-blue-400 border-blue-500/20 bg-blue-500/10'
                    }`}>{row.status}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-400 hover:text-blue-300 text-xs font-bold uppercase tracking-wider">
                      Track Order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RetailDashboard;

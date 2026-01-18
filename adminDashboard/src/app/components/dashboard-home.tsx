import { useEffect, useState } from "react";
import { DashboardLayout } from "@/app/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Users, UserCheck, MessageSquare, TrendingUp } from "lucide-react";
import { fetchDashboardStats } from "@/app/services/api";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function DashboardHome() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await fetchDashboardStats();
      setStats(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <DashboardLayout title="Dashboard">
        <div className="p-8 text-center text-gray-500">Loading dashboard...</div>
      </DashboardLayout>
    );
  }

  const cards = [
    {
      title: "Total Leads",
      value: stats.total,
      icon: Users,
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      title: "New Leads",
      value: stats.newLeads,
      icon: MessageSquare,
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      title: "Contacted",
      value: stats.contacted,
      icon: UserCheck,
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100",
    },
    {
      title: "Converted",
      value: stats.converted,
      icon: TrendingUp,
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
    },
  ];

  // Build chart data from recent leads
  const chartMap: Record<string, number> = {};
  stats.recent.forEach((lead: any) => {
    const day = new Date(lead.createdAt).toLocaleDateString();
    chartMap[day] = (chartMap[day] || 0) + 1;
  });

  const chartData = Object.keys(chartMap).map((day) => ({
    day,
    leads: chartMap[day],
  }));

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((stat) => (
            <Card key={stat.title} className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.bgGradient}`}>
                  <stat.icon className={`w-5 h-5 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Leads Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="leads" stroke="#6366f1" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Leads */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Recent Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recent.map((lead: any) => (
                <div key={lead._id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-sm text-gray-500">{lead.email}</p>
                  </div>
                  <div className="text-xs font-medium capitalize px-3 py-1 rounded-full bg-gray-200">
                    {lead.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

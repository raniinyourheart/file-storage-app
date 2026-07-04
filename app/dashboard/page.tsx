"use client";

import Sidebar from "../components/Sidebar";

import {
  FileText,
  Star,
  Trash2,
  Clock3,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const uploadData = [
  { month: "Jan", files: 20 },
  { month: "Feb", files: 35 },
  { month: "Mar", files: 50 },
  { month: "Apr", files: 42 },
  { month: "May", files: 65 },
  { month: "Jun", files: 80 },
];

const fileTypeData = [
  { name: "PDF", value: 40 },
  { name: "DOCX", value: 25 },
  { name: "PPT", value: 20 },
  { name: "Images", value: 15 },
];

const COLORS = [
  "#2563eb",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back 👋
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-2xl shadow-lg">
          <FileText size={28} />
          <h3 className="text-3xl font-bold mt-4">124</h3>
          <p>Total Files</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 rounded-2xl shadow-lg">
          <Star size={28} />
          <h3 className="text-3xl font-bold mt-4">18</h3>
          <p>Favorites</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-2xl shadow-lg">
          <Clock3 size={28} />
          <h3 className="text-3xl font-bold mt-4">12</h3>
          <p>Recent Files</p>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-6 rounded-2xl shadow-lg">
          <Trash2 size={28} />
          <h3 className="text-3xl font-bold mt-4">4</h3>
          <p>Trash</p>
        </div>

      </div>

      {/* CHARTS */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* LINE CHART */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">

          <h2 className="font-bold text-lg mb-5">
            Upload Activity
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <LineChart data={uploadData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="files"
                stroke="#2563eb"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

        {/* DONUT CHART */}
        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="font-bold text-lg mb-5">
            File Types
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <PieChart>

              <Pie
                data={fileTypeData}
                dataKey="value"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
              >
                {fileTypeData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* QUICK ACCESS */}
      <div>

        <h2 className="text-xl font-bold mb-4">
          Quick Access
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold">
              📄 Proposal Seminar.pdf
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              Last opened 2 hours ago
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold">
              📊 PPT Sidang.pptx
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              Last opened yesterday
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold">
              📋 Meeting Notes.docx
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              Last opened 3 days ago
            </p>
          </div>

        </div>

      </div>

      {/* RECENT FILES TABLE */}
      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-xl font-bold mb-4">
          Recent Files
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">
                  Name
                </th>

                <th className="text-left py-3">
                  Type
                </th>

                <th className="text-left py-3">
                  Date
                </th>

                <th className="text-left py-3">
                  Size
                </th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="py-4">
                  Proposal Seminar.pdf
                </td>

                <td>PDF</td>

                <td>11 Jun 2026</td>

                <td>2.4 MB</td>
              </tr>

              <tr className="border-b">
                <td className="py-4">
                  PPT Sidang.pptx
                </td>

                <td>PPTX</td>

                <td>10 Jun 2026</td>

                <td>8.1 MB</td>
              </tr>

              <tr>
                <td className="py-4">
                  Meeting Notes.docx
                </td>

                <td>DOCX</td>

                <td>08 Jun 2026</td>

                <td>1.2 MB</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}
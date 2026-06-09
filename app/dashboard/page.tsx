import {
  FileText,
  Star,
  Trash2,
  Clock3
} from "lucide-react";
import FileList from '../components/FileList';
import MyFiles from '../components/MyFiles';

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back 👋
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <FileText className="text-blue-600 mb-3" />
          <h3 className="text-2xl font-bold">124</h3>
          <p>Total Files</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <Star className="text-yellow-500 mb-3" />
          <h3 className="text-2xl font-bold">18</h3>
          <p>Favorites</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <Clock3 className="text-green-500 mb-3" />
          <h3 className="text-2xl font-bold">12</h3>
          <p>Recent Files</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <Trash2 className="text-red-500 mb-3" />
          <h3 className="text-2xl font-bold">4</h3>
          <p>Trash</p>
        </div>

      </div>

      <div>

        <h2 className="font-bold text-xl mb-4">
          Quick Access
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-white p-5 rounded-xl shadow">
            📄 Proposal Seminar.pdf
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            📊 PPT Sidang.pptx
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            📋 Meeting Notes.docx
          </div>

        </div>

      </div>

    </div>
  );
}
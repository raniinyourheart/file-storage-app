import Sidebar from "../components/Sidebar"; 

export default function FilesPage() {
  return (
    <div>

      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold">
          My Files
        </h1>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
          Upload File
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow p-6">

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left py-4">
                Name
              </th>
              <th className="text-left py-4">
                Type
              </th>
              <th className="text-left py-4">
                Date
              </th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="py-4">
                Proposal.pdf
              </td>
              <td>PDF</td>
              <td>02 Jun 2026</td>
            </tr>

            <tr>
              <td className="py-4">
                PPT Seminar.pptx
              </td>
              <td>PPT</td>
              <td>01 Jun 2026</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
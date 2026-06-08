'use client';

import { useState } from 'react';
import { Clock, FileText, Image } from 'lucide-react';

const recentFiles = [
  { id: '1', name: 'Proposal Seminar.pdf', type: 'pdf', size: '2.4 MB', accessedAt: '2 menit lalu' },
  { id: '2', name: 'PPT Sidang.pptx', type: 'doc', size: '5.1 MB', accessedAt: '1 jam lalu' },
  { id: '3', name: 'Meeting Notes.docx', type: 'doc', size: '128 KB', accessedAt: '3 jam lalu' },
  { id: '4', name: 'Foto Wisuda.jpg', type: 'image', size: '3.2 MB', accessedAt: 'kemarin' },
];

export default function RecentPage() {
  const [recent] = useState(recentFiles);

  const getIcon = (type: string) => {
    if (type === 'image') return <Image className="w-5 h-5 text-green-500" />;
    return <FileText className="w-5 h-5 text-blue-500" />;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Recent Files</h1>
        <p className="text-gray-500 mt-1">File yang baru saja diakses</p>
      </div>

      <div className="space-y-2">
        {recent.map(file => (
          <div key={file.id} className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-sm transition">
            <div className="flex items-center gap-3">
              {getIcon(file.type)}
              <div>
                <p className="font-medium text-gray-900">{file.name}</p>
                <p className="text-sm text-gray-500">{file.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock size={14} />
              {file.accessedAt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
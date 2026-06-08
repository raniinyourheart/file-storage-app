'use client';

import { useState } from 'react';
import { Trash2, Folder, FileText, RotateCcw } from 'lucide-react';

const deletedFiles = [
  { id: 'del1', name: 'Old Document.pdf', type: 'pdf', size: '1.2 MB', deletedAt: '2 hari lalu' },
  { id: 'del2', name: 'Temporary File.txt', type: 'doc', size: '45 KB', deletedAt: '5 hari lalu' },
];

export default function TrashPage() {
  const [trash, setTrash] = useState(deletedFiles);

  const restoreFile = (id: string) => {
    alert(`File ${id} dikembalikan`);
    setTrash(prev => prev.filter(f => f.id !== id));
  };

  const deletePermanently = (id: string) => {
    if (confirm('Hapus permanen? File tidak bisa dikembalikan')) {
      setTrash(prev => prev.filter(f => f.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Trash</h1>
        <p className="text-gray-500 mt-1">{trash.length} file di sampah</p>
      </div>

      {trash.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <Trash2 size={48} className="mx-auto text-gray-400 mb-3" />
          <p className="text-gray-500">Sampah kosong</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 text-left text-sm font-medium text-gray-600">Nama</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">Ukuran</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">Dihapus</th>
                <th className="p-4 w-32"></th>
              </tr>
            </thead>
            <tbody>
              {trash.map(file => (
                <tr key={file.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 flex items-center gap-3">
                    <FileText size={20} className="text-gray-400" />
                    <span className="font-medium text-gray-600 line-through">{file.name}</span>
                  </td>
                  <td className="p-4 text-gray-400">{file.size}</td>
                  <td className="p-4 text-gray-400">{file.deletedAt}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button onClick={() => restoreFile(file.id)} className="text-blue-600 hover:text-blue-700">
                        <RotateCcw size={18} />
                      </button>
                      <button onClick={() => deletePermanently(file.id)} className="text-red-600 hover:text-red-700">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
'use client';

import { useState } from 'react';
import { Star, FileText, Image, Folder, Music } from 'lucide-react';

// Data sementara (nanti bisa pake state global)
const mockFiles = [
  { id: '1', name: 'Proposal Seminar.pdf', type: 'pdf', size: '2.4 MB', modifiedAt: '2 jam lalu', isStarred: true },
  { id: '3', name: 'Meeting Notes.docx', type: 'doc', size: '128 KB', modifiedAt: '1 hari lalu', isStarred: true },
  { id: '6', name: 'Background Music.mp3', type: 'music', size: '3.8 MB', modifiedAt: '2 minggu lalu', isStarred: true },
];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(mockFiles);

  const toggleStar = (id: string) => {
    setFavorites(prev => prev.filter(f => f.id !== id));
  };

  const getIcon = (type: string) => {
    const icons = {
      folder: <Folder className="w-5 h-5 text-yellow-500" />,
      pdf: <FileText className="w-5 h-5 text-red-500" />,
      doc: <FileText className="w-5 h-5 text-blue-500" />,
      image: <Image className="w-5 h-5 text-green-500" />,
      music: <Music className="w-5 h-5 text-purple-500" />,
    };
    return icons[type as keyof typeof icons] || icons.doc;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Favorites</h1>
        <p className="text-gray-500 mt-1">{favorites.length} file favorit</p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <Star size={48} className="mx-auto text-gray-400 mb-3" />
          <p className="text-gray-500">Belum ada file favorit</p>
          <p className="text-sm text-gray-400">Beri bintang pada file untuk menandainya</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 text-left text-sm font-medium text-gray-600">Nama</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">Ukuran</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">Diubah</th>
                <th className="p-4 w-16"></th>
              </tr>
            </thead>
            <tbody>
              {favorites.map(file => (
                <tr key={file.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 flex items-center gap-3">
                    {getIcon(file.type)}
                    <span className="font-medium">{file.name}</span>
                  </td>
                  <td className="p-4 text-gray-500">{file.size}</td>
                  <td className="p-4 text-gray-500">{file.modifiedAt}</td>
                  <td className="p-4">
                    <button onClick={() => toggleStar(file.id)}>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </button>
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
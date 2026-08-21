// app/components/FileList.tsx
'use client';
import { useState } from 'react';
import { Star, Folder, FileText, Image, Music } from 'lucide-react';
import Sidebar from "../components/Sidebar"; 

interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'pdf' | 'image' | 'doc' | 'other';
  size: string;
  modifiedAt: string;
  isStarred: boolean;
}

export default function FileList() {
  const [files, setFiles] = useState<FileItem[]>([
    { id: '1', name: 'Proposal Seminar.pdf', type: 'pdf', size: '2.4 MB', modifiedAt: '2 jam lalu', isStarred: true },
    { id: '2', name: 'PPT Sidang.pptx', type: 'doc', size: '5.1 MB', modifiedAt: '5 jam lalu', isStarred: false },
    { id: '3', name: 'Meeting Notes.docx', type: 'doc', size: '128 KB', modifiedAt: '1 hari lalu', isStarred: true },
    { id: '4', name: 'Foto Wisuda.jpg', type: 'image', size: '3.2 MB', modifiedAt: '3 hari lalu', isStarred: false },
    { id: '5', name: 'Folder Tugas', type: 'folder', size: '-', modifiedAt: '1 minggu lalu', isStarred: false },
  ]);

  const toggleStar = (id: string) => {
    setFiles(prev => prev.map(f => 
      f.id === id ? { ...f, isStarred: !f.isStarred } : f
    ));
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'folder': return <Folder className="w-5 h-5 text-yellow-500" />;
      case 'pdf': return <FileText className="w-5 h-5 text-red-500" />;
      case 'image': return <Image className="w-5 h-5 text-green-500" />;
      default: return <FileText className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-semibold">My Files</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700">+ Upload</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="text-left text-sm text-gray-500 border-b">
            <tr>
              <th className="p-4">Nama</th>
              <th className="p-4">Ukuran</th>
              <th className="p-4">Diubah</th>
              <th className="p-4 w-16"></th>
            </tr>
          </thead>
          <tbody>
            {files.map(file => (
              <tr key={file.id} className="border-b hover:bg-gray-50">
                <td className="p-4 flex items-center gap-3">
                  {getIcon(file.type)}
                  <span className="font-medium">{file.name}</span>
                </td>
                <td className="p-4 text-gray-500">{file.size}</td>
                <td className="p-4 text-gray-500">{file.modifiedAt}</td>
                <td className="p-4">
                  <button onClick={() => toggleStar(file.id)}>
                    <Star className={`w-4 h-4 ${file.isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
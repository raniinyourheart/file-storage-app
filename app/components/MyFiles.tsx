'use client';

import { useState, useMemo } from 'react';
import { 
  Star, 
  Grid3x3, 
  List, 
  Upload, 
  Folder, 
  FileText, 
  Image as ImageIcon, 
  Music, 
  Video, 
  MoreVertical,
  Download,
  Trash2,
  Share2,
  X,
  Search,
  Filter
} from 'lucide-react';

interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'pdf' | 'image' | 'doc' | 'music' | 'video' | 'other';
  size: string;
  modifiedAt: string;
  isStarred: boolean;
  url?: string;
}

export default function MyFiles() {
  const [files, setFiles] = useState<FileItem[]>([
    { id: '1', name: 'Proposal Seminar.pdf', type: 'pdf', size: '2.4 MB', modifiedAt: '2 jam lalu', isStarred: true },
    { id: '2', name: 'PPT Sidang.pptx', type: 'doc', size: '5.1 MB', modifiedAt: '5 jam lalu', isStarred: false },
    { id: '3', name: 'Meeting Notes.docx', type: 'doc', size: '128 KB', modifiedAt: '1 hari lalu', isStarred: true },
    { id: '4', name: 'Foto Wisuda.jpg', type: 'image', size: '3.2 MB', modifiedAt: '3 hari lalu', isStarred: false },
    { id: '5', name: 'Graduation Video.mp4', type: 'video', size: '45.7 MB', modifiedAt: '1 minggu lalu', isStarred: false },
    { id: '6', name: 'Background Music.mp3', type: 'music', size: '3.8 MB', modifiedAt: '2 minggu lalu', isStarred: true },
    { id: '7', name: 'Folder Kampus', type: 'folder', size: '-', modifiedAt: '1 bulan lalu', isStarred: false },
    { id: '8', name: 'Sertifikat Webinar.pdf', type: 'pdf', size: '856 KB', modifiedAt: '3 hari lalu', isStarred: false },
  ]);

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterType, setFilterType] = useState<'all' | 'starred' | 'document' | 'image' | 'folder'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [showContextMenu, setShowContextMenu] = useState<string | null>(null);

  // Filter dan search logic
  const filteredFiles = useMemo(() => {
    let filtered = files;

    // Filter by type
    if (filterType === 'starred') {
      filtered = filtered.filter(f => f.isStarred);
    } else if (filterType === 'document') {
      filtered = filtered.filter(f => ['pdf', 'doc'].includes(f.type));
    } else if (filterType === 'image') {
      filtered = filtered.filter(f => f.type === 'image');
    } else if (filterType === 'folder') {
      filtered = filtered.filter(f => f.type === 'folder');
    }

    // Search by name
    if (searchQuery) {
      filtered = filtered.filter(f => 
        f.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [files, filterType, searchQuery]);

  const toggleStar = (id: string) => {
    setFiles(prev => prev.map(f => 
      f.id === id ? { ...f, isStarred: !f.isStarred } : f
    ));
    setShowContextMenu(null);
  };

  const deleteFile = (id: string) => {
    if (confirm('Yakin ingin menghapus file ini?')) {
      setFiles(prev => prev.filter(f => f.id !== id));
      setShowContextMenu(null);
    }
  };

  const getIcon = (type: string, size = 20) => {
    const icons = {
      folder: <Folder size={size} className="text-yellow-500" />,
      pdf: <FileText size={size} className="text-red-500" />,
      doc: <FileText size={size} className="text-blue-500" />,
      image: <ImageIcon size={size} className="text-green-500" />,
      music: <Music size={size} className="text-purple-500" />,
      video: <Video size={size} className="text-orange-500" />,
      other: <FileText size={size} className="text-gray-500" />
    };
    return icons[type as keyof typeof icons] || icons.other;
  };

  const getFileColor = (type: string) => {
    const colors = {
      folder: 'bg-yellow-50 border-yellow-200',
      pdf: 'bg-red-50 border-red-200',
      doc: 'bg-blue-50 border-blue-200',
      image: 'bg-green-50 border-green-200',
      music: 'bg-purple-50 border-purple-200',
      video: 'bg-orange-50 border-orange-200',
      other: 'bg-gray-50 border-gray-200'
    };
    return colors[type as keyof typeof colors] || colors.other;
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newFile: FileItem = {
        id: Date.now().toString(),
        name: file.name,
        type: getFileType(file.name),
        size: formatBytes(file.size),
        modifiedAt: 'Baru saja',
        isStarred: false,
      };
      setFiles(prev => [newFile, ...prev]);
      setShowUploadModal(false);
    }
  };

  const getFileType = (filename: string): FileItem['type'] => {
    const ext = filename.split('.').pop()?.toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext || '')) return 'image';
    if (['mp3', 'wav', 'ogg'].includes(ext || '')) return 'music';
    if (['mp4', 'avi', 'mkv', 'mov'].includes(ext || '')) return 'video';
    if (['pdf'].includes(ext || '')) return 'pdf';
    if (['doc', 'docx', 'txt', 'pptx', 'xlsx'].includes(ext || '')) return 'doc';
    return 'other';
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const filterButtons = [
    { id: 'all', label: 'Semua', icon: null },
    { id: 'starred', label: 'Favorit', icon: <Star size={16} className="fill-yellow-400" /> },
    { id: 'document', label: 'Dokumen', icon: <FileText size={16} /> },
    { id: 'image', label: 'Gambar', icon: <ImageIcon size={16} /> },
    { id: 'folder', label: 'Folder', icon: <Folder size={16} /> },
  ] as const;

  return (
    <div className="space-y-6">
      {/* Header with search and actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Files</h1>
          <p className="text-gray-500 text-sm mt-1">
            {filteredFiles.length} file • {files.filter(f => f.isStarred).length} favorit
          </p>
        </div>
        
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          <Upload size={18} />
          Upload File
        </button>
      </div>

      {/* Filter and view controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {filterButtons.map(filter => (
            <button
              key={filter.id}
              onClick={() => setFilterType(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                filterType === filter.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1 sm:flex-initial">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari file..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
            />
          </div>
          
          <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
            >
              <Grid3x3 size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* File display area */}
      {filteredFiles.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <Folder size={48} className="mx-auto text-gray-400 mb-3" />
          <p className="text-gray-500">Tidak ada file ditemukan</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredFiles.map(file => (
            <div
              key={file.id}
              className={`relative group border rounded-xl p-4 ${getFileColor(file.type)} hover:shadow-lg transition-all cursor-pointer`}
              onContextMenu={(e) => {
                e.preventDefault();
                setShowContextMenu(showContextMenu === file.id ? null : file.id);
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {getIcon(file.type, 24)}
                </div>
                <button
                  onClick={() => toggleStar(file.id)}
                  className="opacity-0 group-hover:opacity-100 transition"
                >
                  <Star 
                    size={18} 
                    className={file.isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'} 
                  />
                </button>
              </div>
              
              <div className="space-y-1">
                <p className="font-medium text-gray-900 truncate" title={file.name}>
                  {file.name}
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{file.size}</span>
                  <span>{file.modifiedAt}</span>
                </div>
              </div>

              {/* Context menu */}
              {showContextMenu === file.id && (
                <div className="absolute right-2 top-12 bg-white rounded-lg shadow-lg border py-1 z-10 min-w-[140px]">
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2">
                    <Download size={14} /> Download
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2">
                    <Share2 size={14} /> Share
                  </button>
                  <button 
                    onClick={() => deleteFile(file.id)}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-red-600 flex items-center gap-2"
                  >
                    <Trash2 size={14} /> Hapus
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 text-left text-sm font-medium text-gray-600">Nama</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">Ukuran</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">Diubah</th>
                <th className="p-4 w-20"></th>
              </tr>
            </thead>
            <tbody>
              {filteredFiles.map(file => (
                <tr key={file.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      {getIcon(file.type, 20)}
                      <span className="font-medium text-gray-900">{file.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{file.size}</td>
                  <td className="p-4 text-gray-600">{file.modifiedAt}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button onClick={() => toggleStar(file.id)}>
                        <Star size={18} className={file.isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'} />
                      </button>
                      <button onClick={() => deleteFile(file.id)}>
                        <Trash2 size={18} className="text-gray-400 hover:text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowUploadModal(false)}>
          <div className="bg-white rounded-xl w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Upload File</h2>
              <button onClick={() => setShowUploadModal(false)}>
                <X size={20} />
              </button>
            </div>
            
            <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center block cursor-pointer hover:border-blue-500 transition">
              <Upload size={40} className="mx-auto text-gray-400 mb-3" />
              <p className="text-gray-600">Klik atau drag file ke sini</p>
              <p className="text-sm text-gray-400 mt-1">Maksimal 10MB</p>
              <input type="file" className="hidden" onChange={handleUpload} />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
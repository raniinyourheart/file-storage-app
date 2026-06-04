"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  Folder,
  Star,
  Clock3,
  Trash2,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-blue-950 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        Vaultly
      </h1>

      <nav className="space-y-3">

        <Link
          href="/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="/files"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
        >
          <Folder size={20} />
          My Files
        </Link>

        <Link
          href="/favorites"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
        >
          <Star size={20} />
          Favorites
        </Link>

        <Link
          href="/recent"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
        >
          <Clock3 size={20} />
          Recent Files
        </Link>

        <Link
          href="/trash"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
        >
          <Trash2 size={20} />
          Trash
        </Link>

      </nav>

    </aside>
  );
}
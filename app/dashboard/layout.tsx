'use client';
import React from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen sm:flex-col">
      <div className="w-[256px] sm:w-full">
        <SideNav />
      </div>
      <div className="p-[48px] flex-grow">{children}</div>
    </div>
  );
}

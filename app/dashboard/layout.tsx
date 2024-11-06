'use client';
import React from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen pl-[256px] sm:flex-col sm:pl-0">
      <div className="w-[256px] fixed left-0 top-0 h-screen sm:w-full sm:static sm:h-auto">
        <SideNav />
      </div>
      <div className="p-[48px] sm:p-6">{children}</div>
    </div>
  );
}

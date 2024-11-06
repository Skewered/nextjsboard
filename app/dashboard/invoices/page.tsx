import { lusitana } from '@/app/ui/fonts';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Table from '@/app/ui/invoices/table';
import Search from '@/app/ui/search';
import React, { Suspense } from 'react';
import InvoicesTable from '@/app/ui/invoices/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

export default async function InvoicesPage({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const params = await searchParams;
  const query = params?.query || '';
  const currentPage = Number(params?.page) || 1;

  return (
    <div>
      <h2 className={`${lusitana.className} text-[24px]`}> Invoices </h2>
      <div className="flex gap-2 mt-8 sm:mt-2">
        <Search placeholder="Search Invoices" />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}

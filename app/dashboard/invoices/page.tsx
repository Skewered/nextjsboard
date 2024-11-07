import { lusitana } from '@/app/ui/fonts';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Table from '@/app/ui/invoices/table';
import Search from '@/app/ui/search';
import React, { Suspense } from 'react';
import InvoicesTable from '@/app/ui/invoices/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import Pagination from '@/app/ui/invoices/pagination';
import { fetchInvoicesPages } from '@/app/lib/data';

export default async function InvoicesPage({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  // 비동기코드가 작업 완료될 때까지 기다려서, 순차적으로 실행되도록 함.
  const params = await searchParams;
  const query = params?.query || '';
  const currentPage = Number(params?.page) || 1;
  // 검색된 데이터 갯수 기준 페이지 수
  const totalPages = await fetchInvoicesPages(query);

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
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

import { customers } from '@/app/lib/placeholder-data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/edit-form';
import React from 'react';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';

export default async function Editpage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const getId = await params;
  const id = getId?.id || '';
  // 송장, 고객 데이터 병렬로 가져오기
  const [invoice, customer] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}

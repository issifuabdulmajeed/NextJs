import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// import {fetchCardData} from '@/app/lib/data';
import { Suspense } from 'react';
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();

  // var CardDataObject  = await fetchCardData();
  // const totalPaidInvoices = CardDataObject.totalPaidInvoices;
  // const totalPendingInvoices = CardDataObject.totalPendingInvoices
  // const numberOfInvoices = CardDataObject.numberOfInvoices
  // const numberOfCustomers = CardDataObject.numberOfCustomers
  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton/>}>
          <CardWrapper/>
        </Suspense>
        </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        <Suspense fallback = {<RevenueChartSkeleton/>}>
          <RevenueChart/>
        </Suspense>
        <Suspense fallback = {<LatestInvoicesSkeleton/>}>
          <LatestInvoices />
        </Suspense>
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}
/** 
 * This page is an asyc server component. It allows the use of await to fetch data from the server.
*/

import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// Import the server side functions from the data file.
import {
    fetchRevenue,
    fetchLatestInvoices,
    fetchCardData,
  } from '@/app/lib/data';

export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    /*
        The commented code is one way of doing it.
        But there is a better way.
        First when we import we can do a big chunk (check line 9 to 13).
        In that import we can import all the functions we need at once.
        Next, we need to call them in this async function (lines 34 to 39).
        This way we can get all the data we need at once 
        (This fetchCardData function is executed as soon as the user clicks on the dashboard page).

    */
    // const cardData = await fetchCardData();
    // const totalPaidInvoices = await cardData.totalPaidInvoices;
    // const totalPendingInvoices = await cardData.totalPendingInvoices;
    // const numberOfInvoices = (totalPaidInvoices + totalPendingInvoices);
    // const numberOfCustomers = await cardData.numberOfCustomers
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
    } = await fetchCardData();
    
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card is defined in cards.tsx in the ui/dashboard */}
        {/* The way it is defined it has its own styling so we do not have to do it here. */}
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
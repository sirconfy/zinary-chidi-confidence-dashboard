import { Layout } from '@/components/custom/layout'
import { useState } from 'react'
import Cards from './components/cards'
import TopNav from './components/topNav'
import Overviews from './components/overviews'
import TableTabs from './components/tabs'

export default function Dashboard() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <TopNav />

      {/* ===== Main ===== */}
      <Layout.Body>
        <Overviews />
        <hr className='mt-4 h-2' />

        <Cards />

        <TableTabs />
      </Layout.Body>
    </Layout>
  )
}

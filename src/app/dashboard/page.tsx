import React from 'react';
import SideBar from '../_components/SideBar';
import Header from '../_components/Header';
import OrganizationInfo from '../_components/OrganizationInfo';
import KPISection from '@/app/_components/KPISection';
import Notifications from '../_components/Notifications';
import ProgramsTable from '../_components/ProgramsTable';



function Dashboard() {
    return (
        <div className='flex bg-gray-50'>
            <div className='w-2/12 pt-8 flex justify-center'>
                <SideBar />
            </div>
            <div className="flex overflow-hidden flex-col items-start px-10 pt-8 pb-20  max-md:px-5 w-10/12">
                <div className="flex flex-wrap gap-4 self-stretch text-sm font-bold text-right text-zinc-600 max-md:max-w-full">
                    <Header />
                </div>
                <div className="mt-20 w-full max-md:max-w-full ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch grid-flow-row auto-rows-max ">
                        {/* <div className="flex gap-5 max-md:flex-col"> */}
                        <div className="flex flex-col">
                            <OrganizationInfo />
                        </div>
                        <div className="flex flex-col ">
                            <KPISection />
                        </div>
                        <div className="flex flex-col ">
                            <Notifications />
                        </div>
                    </div>
                </div>
                <ProgramsTable />
            </div>

        </div>
    )
}

export default Dashboard

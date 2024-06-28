import React from 'react'

const OrganizationHome: React.FC = function () {
    return (
        <>
            <header className="flex justify-between items-center p-5 bg-white shadow-md">
                <div className="flex items-center space-x-3">
                    <input type="text" placeholder="Search devices" className="border border-gray-300 p-2 rounded" />
                </div>
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-3">
                        <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">Image</div>
                        <span>John Doe</span>
                    </div>
                </div>
            </header>
            <div className='grid grid-cols-2 my-5 gap-3'>
                <span className='text-2xl font-bold'>Good Evening{"Company Name"},</span>
                <button className='row-span-2 self-center justify-self-end bg-blue-500 rounded-md text-white p-3'><span className='text-2xl mx-3 inline-block'>+</span>Request Maintenance</button>
                <span>Get an overview of all your devices</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
                <div className="bg-white p-6 rounded-md"><div className='flex flex-col gap-3'><span>0</span> <span>Devices</span></div></div>
                <div className="bg-white p-6 rounded-md"><div className='flex flex-col gap-3'><span>0</span> <span>Staffs</span></div></div>
                <div className="bg-white p-6 rounded-md"><div className='flex flex-col gap-3'><span>0</span> <span>Faulty Devices</span></div> </div>
                <div className="bg-white p-6 rounded-md"><div className='flex flex-col gap-3'><span>0</span> <span>Healthy Devices</span></div></div>
                <div className="bg-white p-6 rounded-md"><div className='flex flex-col gap-3'><span>0</span> <span>On Maintenance</span></div></div>
            </div>
            <div className="bg-white p-6 rounded shadow-md mt-5">
                <h2 className="text-lg font-semibold">Device Reports</h2>
                <div className="bg-gray-200 w-full h-48 mt-4 flex items-center justify-center">Image</div>
            </div>
            <div className="bg-white p-6 rounded shadow-md mt-5">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Device Inventory</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Add New Device</button>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Upload CSV</button>
                    <input type="text" placeholder="Search" className="border border-gray-300 p-2 rounded" />
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto overflow-x-auto mb-8">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Device Name</th>
                                <th className="border px-4 py-2">Device ID</th>
                                <th className="border px-4 py-2">Category</th>
                                <th className="border px-4 py-2">IP Address</th>
                                <th className="border px-4 py-2">MAC ID</th>
                                <th className="border px-4 py-2">Device Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Add rows dynamically here */}
                            <tr>
                                <td className="border px-4 py-2">EliteBook</td>
                                <td className="border px-4 py-2">J7FX91</td>
                                <td className="border px-4 py-2">Desktop</td>
                                <td className="border px-4 py-2">192.168.0.1</td>
                                <td className="border px-4 py-2">4C:75:F1:BC:4F:4F</td>
                                <td className="border px-4 py-2 text-yellow-600">Warning</td>
                            </tr>
                            {/* Repeat for more rows */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default OrganizationHome

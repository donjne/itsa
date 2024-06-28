import React, { useState } from 'react';

interface MaintenanceRequest {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  location: string;
  issueDescription: string;
  deviceName: string;
  photo: string;
}

const MaintenanceRequestForm: React.FC = () => {
  const [maintenanceRequest, setMaintenanceRequest] = useState<MaintenanceRequest>({
    name: '',
    phoneNumber: '',
    emailAddress: '',
    location: '',
    issueDescription: '',
    deviceName: '',
    photo: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMaintenanceRequest({
      ...maintenanceRequest,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submit the form data here
    console.log(maintenanceRequest);
    setMaintenanceRequest({
      name: '',
      phoneNumber: '',
      emailAddress: '',
      location: '',
      issueDescription: '',
      deviceName: '',
      photo: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Submit a Maintenance Request</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md px-2 py-2"
              value={maintenanceRequest.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number:
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md px-2 py-2"
              value={maintenanceRequest.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
              Email Address:
            </label>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md px-2 py-2"
              value={maintenanceRequest.emailAddress}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location:
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md px-2 py-2"
              value={maintenanceRequest.location}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <h2 className="text-xl font-bold mt-4">Your Request Details</h2>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-70">Issue Description:</label>
              <input type="text" id='issueDescription' name='issueDescription' value={maintenanceRequest.issueDescription} onChange={handleChange} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md px-2 py-2' />
            </div>
            <div>
              <label htmlFor="">Name of Device</label>
              <input type="text" id={"deviceName"} name={"deviceName"} value={maintenanceRequest.deviceName} onChange={handleChange} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md px-2 py-2' />
            </div>
            <div className='col-span-2 flex flex-col gap-3'>
              <label htmlFor="photo">Photos</label>
              <input type="file" name="photo" id="photo" accept='image/*' onChange={(e)=>{handleChange(e); console.log(e.target.value)}} className='text-black w-full p-5 hidden'  />
              <label htmlFor="photo" className='w-full mb-9 flex justify-center items-center bg-white p-6 rounded-md border border-gray-400'>
                {maintenanceRequest.photo === ""? "Click to Select File": maintenanceRequest.photo}
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>)
}

export default MaintenanceRequestForm
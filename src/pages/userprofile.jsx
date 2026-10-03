import React from "react";

import {User,Mail,Phone,MapPin,Edit} from "lucide-react";


const Userprofile = () => {
   return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-3xl mx-auto">

        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">

          <div className="flex items-center gap-5">

           
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <User size={45} className="text-gray-500" />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                User Name
              </h1>

              <p className="text-gray-500">
                user@gmail.com
              </p>
            </div>

          </div>

        </div>


        
        <div className="bg-white rounded-lg shadow-md p-6">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">
              Personal Information
            </h2>

            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
              <Edit size={18} />
              Edit
            </button>

          </div>


          
          <div className="flex items-center gap-4 border-b py-4">
            <User size={22} className="text-gray-500" />

            <div>
              <p className="text-sm text-gray-500">
                Name
              </p>

              <p className="font-medium">
                User Name
              </p>
            </div>
          </div>


         
          <div className="flex items-center gap-4 border-b py-4">
            <Mail size={22} className="text-gray-500" />

            <div>
              <p className="text-sm text-gray-500">
                Email
              </p>

              <p className="font-medium">
                user@gmail.com
              </p>
            </div>
          </div>


          
          <div className="flex items-center gap-4 border-b py-4">
            <Phone size={22} className="text-gray-500" />

            <div>
              <p className="text-sm text-gray-500">
                Phone
              </p>

              <p className="font-medium">
                01XXXXXXXXX
              </p>
            </div>
          </div>


          
          <div className="flex items-center gap-4 py-4">
            <MapPin size={22} className="text-gray-500" />

            <div>
              <p className="text-sm text-gray-500">
                Address
              </p>

              <p className="font-medium">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Userprofile;

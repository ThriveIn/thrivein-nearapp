import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Layout from "components/Layout";

const Profile = () => {
  return (
    <Layout>
      <div className='flex h-full'>
        <div className='w-[400px] bg-white xl:w-[300px]' />
        <div className='bg-main rounded-tl-[30px] p-10 flex-grow'>
          <div className='flex gap-36 px-10 py-8 bg-white rounded-[30px] xl:gap-10 xl:px-5 xl:py-4'>
            <div className='flex items-start gap-8 flex-shrink-0'>
              <div className='flex flex-col justify-center items-center gap-4'>
                <img
                  className='w-52 h-52 rounded-full xl:w-32 xl:h-32'
                  src='/assets/images/default_avatar.png'
                />
                <button className='px-10 py-2 rounded-full border border-button text-input text-xs font-semibold'>
                  Edit
                </button>
              </div>
              <div>
                <div>
                  <div className='text-input opacity-50 text-2xl font-semibold cursor-pointer border border-dashed border-input border-opacity-50 inline-block'>
                    Name
                  </div>
                </div>
                <div className='w-full min-w-[265px] h-0 mt-4 mb-4 border border-input opacity-50 xl:min-w-[150px]' />
                <div>
                  <div className='text-input opacity-50 text-lg cursor-pointer border border-dashed border-input border-opacity-50 inline-block'>
                    Job
                  </div>
                </div>
                <div className='mt-2'>
                  <div className='text-button inline-flex items-center gap-1.5 cursor-pointer border border-dashed border-input border-opacity-50'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <div className='text-button opacity-50 text-xs'>
                      {" "}
                      Location{" "}
                    </div>
                  </div>
                </div>
                <div className='mt-9'>
                  <div className='text-input opacity-50 font-semibold text-xs border border-dashed border-input border-opacity-50 cursor-pointer inline-block'>
                    Talents/Interests
                  </div>
                </div>
                <div className='mt-8'>
                  <div className='text-input opacity-50 font-semibold text-xs border border-dashed border-input border-opacity-50 cursor-pointer inline-block'>
                    Link Social Media
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <div className='w-full h-full border border-dashed border-input border-opacity-50 text-input opacity-50'>
                Bio
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

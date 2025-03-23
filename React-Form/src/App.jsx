import React from 'react';

const AdmissionForm = () => {
  return (
    <>
      <div className="flex justify-center items-center" style={{ height: '100vh' }}>
        <div className="relative flex flex-col my-6 shadow-xl bg-black border text-white rounded-xl" style={{ width: '90%' }}>
          <div className="px-3 flex justify-between items-center border-b border-white py-3">
            <div className="font-bold text-xl text-center uppercase">Fill Form for Admission in IGNOU</div>
            <div>
              <a href="records/">
                <button
                  type="button"
                  className="group relative inline-flex py-1 items-center justify-center overflow-hidden rounded-0 bg-blue-600 px-2 py-1 md:px-4 font-medium text-neutral-200"
                >
                  <span className="flex justify-center items-center">
                    <i className="fa-solid fa-list md:mr-3"></i>
                    <span className="hidden md:flex">All Students</span>
                  </span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-white/20"></div>
                  </div>
                </button>
              </a>
            </div>
          </div>

          <div className="p-4 overflow-y-scroll pb-6" style={{ height: '70vh' }}>
            <form id="admissionForm" method="POST" encType="multipart/form-data" action="submit-form/">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="first-name" className="font-medium text-gray-600">
                    First name <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      autoFocus
                      name="firstName"
                      placeholder="Enter first name"
                      id="first-name"
                      className="w-full bg-white px-4 h-8 border border-gray-300 rounded-md text-black"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="last-name" className="block font-medium text-gray-600">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="Enter last name"
                      name="lastName"
                      id="last-name"
                      className="w-full bg-white px-4 h-8 border border-gray-300 rounded-md text-black"
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="phone-number" className="block font-medium text-gray-600">
                    Phone number <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="Enter Phone number"
                      name="number"
                      id="phone-number"
                      className="w-full bg-white px-4 h-8 border border-gray-300 rounded-md text-black"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="email" className="font-medium text-gray-600">
                    Email address <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      placeholder="Enter email address"
                      type="email"
                      autoComplete="email"
                      className="w-full bg-white px-4 h-8 border border-gray-300 rounded-md text-black"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-2 relative">
                  <label htmlFor="course" className="font-medium text-gray-600">
                    Select course <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <select
                      id="course"
                      name="course"
                      className="w-full bg-white px-4 h-8 border border-gray-300 rounded-md cursor-pointer text-black"
                      required
                    >
                      <option value="" selected>
                        -- Select course --
                      </option>
                      <option value="BCA">BCA</option>
                      <option value="MCA">MCA</option>
                      <option value="BA">BA</option>
                      <option value="MA">MA</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full sm:col-span-2 relative">
                  <label htmlFor="study-center" className="font-medium text-gray-600">
                    Select study center <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <select
                      id="study-center"
                      name="studyCenter"
                      className="w-full bg-white px-4 h-8 border border-gray-300 rounded-md cursor-pointer text-black"
                      required
                    >
                      <option value="" selected>
                        -- Select study center --
                      </option>
                      <option value="MERIT">MERIT</option>
                      <option value="DU">DU</option>
                      <option value="JNU">JNU</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full sm:col-span-2">
                  <label className="font-medium text-gray-600">
                    Gender <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2 flex gap-10">
                    <div className="inline-flex items-center relative">
                      <input
                        type="radio"
                        name="gender"
                        value="m"
                        id="male"
                        className="h-5 w-5 cursor-pointer rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                      />
                      <label className="ml-2 text-sm text-slate-600" htmlFor="male">
                        Male
                      </label>
                    </div>

                    <div className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="f"
                        id="female"
                        className="h-5 w-5 cursor-pointer rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                      />
                      <label className="ml-2 text-sm text-slate-600" htmlFor="female">
                        Female
                      </label>
                    </div>

                    <div className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="o"
                        id="other"
                        className="h-5 w-5 cursor-pointer rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                      />
                      <label className="ml-2 text-sm text-slate-600" htmlFor="other">
                        Other
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-span-full sm:col-span-2 mt-4 md:mt-0">
                  <label className="font-medium text-gray-600">
                    Checked Sports Activity <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-3 flex gap-x-3 flex-wrap">
                    <input type="hidden" name="sportsActivity" id="hidden" />
                    <div className="inline-flex items-center relative">
                      <input
                        type="checkbox"
                        name="sports"
                        value="Cricket"
                        className="h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="cricket"
                      />
                      <label className="cursor-pointer ml-2 text-sm" htmlFor="cricket">
                        Cricket
                      </label>
                    </div>
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="sports"
                        value="Basketball"
                        className="h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="basketball"
                      />
                      <label className="cursor-pointer ml-2 text-sm" htmlFor="basketball">
                        Basketball
                      </label>
                    </div>
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="sports"
                        value="Football"
                        className="h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="football"
                      />
                      <label className="cursor-pointer ml-2 text-sm" htmlFor="football">
                        Football
                      </label>
                    </div>
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="sports"
                        value="Hockey"
                        className="h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="hockey"
                      />
                      <label className="cursor-pointer ml-2 text-sm" htmlFor="hockey">
                        Hockey
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-span-full mt-3">
                  <label htmlFor="photo" className="font-medium text-gray-600">
                    Upload Photo <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <svg className="text-gray-300" width="80px" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="text-gray-600 flex flex-col">
                      <input id="file-upload" name="photo" type="file" className="" accept="image/png, image/jpeg, image/jpg" required />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="flex justify-between">
                    <label htmlFor="about" className="font-medium text-gray-600">
                      Description <span className="text-red-600">*</span>
                    </label>
                    <label className="text-xs align-bottom">
                      <span className="text-length">0</span> / 300
                    </label>
                  </div>
                  <div className="mt-2">
                    <textarea
                      name="description"
                      id="about"
                      rows="3"
                      placeholder="Write a few sentences about yourself."
                      className="w-full bg-white px-4 py-2 text-black border border-gray-300 rounded-md"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="inline-flex items-center relative">
                    <input
                      type="checkbox"
                      name="termsCondition"
                      className="h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id="terms"
                      required
                    />
                    <label className="cursor-pointer ml-2 text-sm font-medium text-gray-600" htmlFor="terms">
                      Accept all terms and conditions
                    </label>
                  </div>
                </div>

                <div className="col-span-full mt-4 flex justify-between">
                  <button
                    type="submit"
                    name="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-400"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionForm;

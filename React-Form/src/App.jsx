import React, { useState } from 'react';
import classNames from 'classnames';
import { toast } from 'react-toastify';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    jobTitle: '',
    jobRole: '',
    address: '',
    gender: '',
    skills: [],
    resume: null,
    description: '',
    termsCondition: false,
  });

  const [validationErrors, setValidationErrors] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    jobTitle: '',
    jobRole: '',
    address: '',
    gender: '',
    skills: '',
    resume: '',
    description: '',
    termsCondition: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setValidationErrors({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      jobTitle: '',
      jobRole: '',
      address: '',
      gender: '',
      skills: '',
      resume: '',
      description: '',
      termsCondition: '',
    });

    // Validation flag
    let hasError = false;
    const newValidationErrors = { ...validationErrors };

    // Validation for firstName
    if (!formData.firstName.trim()) {
      newValidationErrors.firstName = 'First name is required!';
      hasError = true;
    } else if (formData.firstName.trim().length > 10) {
      newValidationErrors.firstName = 'First name must have at most 10 characters!';
      hasError = true;
    }

    // Validation for lastName
    if (formData.lastName.trim().length > 10) {
      newValidationErrors.lastName = 'Last name must have at most 10 characters!';
      hasError = true;
    }

    // Validation for phoneNumber
    if (!formData.phoneNumber.trim()) {
      newValidationErrors.phoneNumber = 'Phone number is required!';
      hasError = true;
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      newValidationErrors.phoneNumber = 'Phone number must be numeric!';
      hasError = true;
    } else if (formData.phoneNumber.trim().length != 10) {
      newValidationErrors.phoneNumber = 'Please enter a valid number!';
      hasError = true;
    }

    // Validation for email
    if (!formData.email.trim()) {
      newValidationErrors.email = 'Email address is required!';
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newValidationErrors.email = 'Invalid email address!';
      hasError = true;
    }

    // Validation for course
    if (!formData.jobRole.trim()) {
      newValidationErrors.jobRole = 'Job Role selection is required!';
      hasError = true;
    }

    // Validation for studyCenter
    if (!formData.jobTitle.trim()) {
      newValidationErrors.jobTitle = 'Job Title selection is required!';
      hasError = true;
    }

    // Validation for gender
    if (!formData.gender) {
      newValidationErrors.gender = 'Please select your gender!';
      hasError = true;
    }

    // Validation for sports
    if (formData.skills.length === 0) {
      newValidationErrors.skills = 'Please select at least one skill!';
      hasError = true;
    }

    // Validation for termsCondition
    if (!formData.termsCondition) {
      newValidationErrors.termsCondition = 'You must accept the terms and conditions!';
      hasError = true;
    }

    // Validation for address
    if (!formData.address) {
      newValidationErrors.address = 'Please enter your address!';
      hasError = true;
    }

    // Validation for photo upload
    if (!formData.resume) {
      newValidationErrors.resume = 'Please upload your cv!';
      hasError = true;
    }

    // Validation for description
    if (!formData.description.trim()) {
      newValidationErrors.description = 'Description is required!';
      hasError = true;
    }

    // Update validation errors state
    setValidationErrors(newValidationErrors);

    if (!hasError) {
      // Handle form submission (e.g., send data to the server)
      console.log('Form submitted:', formData);
    }

    if (hasError) {
      toast.error('Please fill required details!');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSportsChange = (e) => {
    const { value, checked } = e.target;
    setFormData({
      ...formData,
      sports: checked
        ? [...formData.sports, value]
        : formData.sports.filter((sport) => sport !== value),
    });
  };

  const [charCount, setCharCount] = useState(0);
  const countLength = (e) => {
    const newText = e.target.value;
    setCharCount(newText.length);
    if (newText.length > 300) {
      toast.error("Your text exceed more than 300 charcter!");
      e.target.value = newText.slice(0, 300);
      setCharCount(300);
    } else {
      setCharCount(newText.length);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center" style={{ height: '100vh' }}>
        <div className="relative flex flex-col my-6 shadow-xl bg-white border border-black text-black rounded-xl" style={{ width: '90%' }}>
          <div className="px-3 flex justify-between items-center border-b border-black py-3">
            <div className="font-bold text-xl text-center uppercase">Submit this form for get the job</div>
            <div>
              <button
                type="button" onClick={() => toast.info("This page is not available!")}
                className="cursor-pointer group relative inline-flex py-1 items-center justify-center overflow-hidden rounded-md bg-black px-2 py-2 md:px-4 font-medium text-neutral-200"
              >
                <span className="flex justify-center items-center">
                  <i className="fa-solid fa-list md:mr-3"></i>
                  <span className="hidden md:flex">All Records</span>
                </span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20"></div>
                </div>
              </button>
            </div>
          </div>

          <div className="p-4 overflow-y-scroll pb-6" style={{ height: '70vh' }}>
            <form id="admissionForm" method="POST" onSubmit={handleSubmit} encType="multipart/form-data" action="submit-form/">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="first-name" className="font-medium text-md text-gray-600">
                    First name <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      autoFocus
                      name="firstName"
                      placeholder="Enter first name"
                      id="first-name"
                      onChange={handleChange}
                      className={classNames(
                        "w-full bg-white px-4 h-10 border border-gray-300 rounded-md text-black",
                        { "border-red-600 my-shadow": validationErrors.termsCondition }
                      )}
                    />
                    {validationErrors.firstName && (
                      <p className="error text-red-600 mt-1"><i className="fa-solid fa-circle-info me-2"></i>{validationErrors.firstName}</p>
                    )}
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
                      className={classNames(
                        "w-full bg-white px-4 h-10 border border-gray-300 rounded-md text-black",
                        { "border-red-600 my-shadow": validationErrors.lastName }
                      )}
                    />
                    {validationErrors.lastName && (
                      <p className='error text-red-600 mt-1'><i className="fa-solid fa-circle-info me-2"></i>{validationErrors.lastName}</p>
                    )}
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
                      name="phoneNumber"
                      id="phone-number"
                      className={classNames(
                        "w-full bg-white px-4 h-10 border border-gray-300 rounded-md text-black",
                        { "border-red-600 my-shadow": validationErrors.phoneNumber }
                      )}
                    />
                    {validationErrors.phoneNumber && (
                      <p className='error text-red-600 mt-1'><i className="fa-solid fa-circle-info me-2"></i>{validationErrors.phoneNumber}</p>
                    )}
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
                      className={classNames(
                        "w-full bg-white px-4 h-10 border border-gray-300 rounded-md text-black",
                        { "border-red-600 my-shadow": validationErrors.email }
                      )}
                    />
                    {validationErrors.email && (
                      <p className='error text-red-600 mt-1'><i className="fa-solid fa-circle-info me-2"></i>{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="jobTitle" className="font-medium text-gray-600">
                    Select job title <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <select
                      id="jobTitle"
                      name="jobTitle"
                      className={classNames(
                        "w-full bg-white px-4 h-10 border border-gray-300 rounded-md text-black",
                        { "border-red-600 my-shadow": validationErrors.jobTitle }
                      )}
                    >
                      <option defaultValue>
                        -- Select job title --
                      </option>
                      <option value="Web developer">Web developer</option>
                      <option value="Back-end developer">Back-end developer</option>
                      <option value="Front-end developer">Front-end developer</option>
                      <option value="Software developer">Software developer</option>
                      <option value="Wordpress developer">Wordpress developer</option>
                    </select>
                    {validationErrors.jobTitle && (
                      <p className='error text-red-600 mt-1'><i className="fa-solid fa-circle-info me-2"></i>{validationErrors.jobTitle}</p>
                    )}
                  </div>
                </div>

                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="jobRole" className="font-medium text-gray-600">
                    Select job role <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <select
                      id="jobRole"
                      name="jobRole"
                      className={classNames(
                        "w-full bg-white px-4 h-10 border border-gray-300 rounded-md text-black",
                        { "border-red-600 my-shadow": validationErrors.jobRole }
                      )}
                    >
                      <option defaultValue>
                        -- Select job role --
                      </option>
                      <option value="work from home">Work From Home</option>
                      <option value="work from office">Work From Office</option>
                      <option value="remote">Remote</option>
                      <option value="field job">Field job</option>
                    </select>
                    {validationErrors.jobRole && (
                      <p className='error text-red-600 mt-1'><i className="fa-solid fa-circle-info me-2"></i>{validationErrors.jobRole}</p>
                    )}
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="flex justify-between">
                    <label htmlFor="address" className="font-medium text-gray-600">
                      Your Address <span className="text-red-600">*</span>
                    </label>
                  </div>
                  <div className="mt-2">
                    <textarea
                      name="address"
                      id="address"
                      rows="3"
                      placeholder="Enter your address"
                      className={classNames(
                        "w-full bg-white px-4 py-2 text-black border border-gray-300 rounded-md",
                        { "border-red-600 my-shadow": validationErrors.address }
                      )}
                    ></textarea>
                    {validationErrors.address && (
                      <p className='error text-red-600 mt-1'><i className="fa-solid fa-circle-info me-2"></i>{validationErrors.address}</p>
                    )}
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
                        value="male"
                        id="male"
                        className={classNames(
                          "h-5 w-5 cursor-pointer rounded-full border border-slate-300 checked:border-slate-400 transition-all", 
                          { "border-red-600 my-shadow": validationErrors.gender }
                        )}
                      />
                      <label className="ml-2 text-sm text-slate-600" htmlFor="male">
                        Male
                      </label>
                    </div>

                    <div className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
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
                        value="other"
                        id="other"
                        className="h-5 w-5 cursor-pointer rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                      />
                      <label className="ml-2 text-sm text-slate-600" htmlFor="other">
                        Other
                      </label>
                    </div>
                  </div>
                  {validationErrors.gender && (
                    <p className='error text-red-600 mt-1'><i className="fa-solid fa-circle-info me-2"></i>{validationErrors.gender}</p>
                  )}
                </div>

                <div className="col-span-full sm:col-span-2 mt-4 md:mt-0">
                  <label className="font-medium text-gray-600">
                    Skills <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-3 flex gap-3 flex-wrap">
                    <input type="hidden" name="skills" id="hidden" />
                    <div className="inline-flex items-center relative">
                      <input
                        type="checkbox"
                        name="skills"
                        value="html"
                        className="h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="html"
                      />
                      <label className="cursor-pointer ml-2 text-sm" htmlFor="html">
                        HTML
                      </label>
                    </div>
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="skills"
                        value="css"
                        className="h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="css"
                      />
                      <label className="cursor-pointer ml-2 text-sm" htmlFor="css">
                        CSS
                      </label>
                    </div>
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="skills"
                        value="java-script"
                        className="h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="java-script"
                      />
                      <label className="cursor-pointer ml-2 text-sm" htmlFor="java-script">
                        JavaScript
                      </label>
                    </div>
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="skills"
                        value="python"
                        className="h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="python"
                      />
                      <label className="cursor-pointer ml-2 text-sm" htmlFor="python">
                        Python
                      </label>
                    </div>
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="skills"
                        value="php"
                        className="h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="php"
                      />
                      <label className="cursor-pointer ml-2 text-sm" htmlFor="php">
                        PHP
                      </label>
                    </div>
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="skills"
                        value="c++"
                        className="h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="c++"
                      />
                      <label className="cursor-pointer ml-2 text-sm" htmlFor="c++">
                        C++
                      </label>
                    </div>
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="skills"
                        value="java"
                        className="h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="java"
                      />
                      <label className="cursor-pointer ml-2 text-sm" htmlFor="jav">
                        Java
                      </label>
                    </div>
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="skills"
                        value="react-js"
                        className="h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="react-js"
                      />
                      <label className="cursor-pointer ml-2 text-sm" htmlFor="react-js">
                        React Js
                      </label>
                    </div>
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="skills"
                        value="node-js"
                        className="h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="node-js"
                      />
                      <label className="cursor-pointer ml-2 text-sm" htmlFor="node-js">
                        Node Js
                      </label>
                    </div>
                  </div>
                  {validationErrors.skills && (
                    <p className='error text-red-600 mt-1'><i className="fa-solid fa-circle-info me-2"></i>{validationErrors.skills}</p>
                  )}
                </div>

                <div className="col-span-full mt-3">
                  <label htmlFor="resume" className="font-medium text-gray-600">
                    Upload CV <span className="text-red-600">*</span>
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
                      <input
                        id="resume"
                        name="resume"
                        type="file"
                        className={classNames(
                          "w-full bg-white px-4 pt-1 h-9 border border-gray-300 rounded-md text-black",
                          { "border-red-600 my-shadow": validationErrors.resume }
                        )}
                        accept="application/pdf"
                      />
                      {validationErrors.resume && (
                        <p className='error text-red-600 mt-1'><i className="fa-solid fa-circle-info me-2"></i>{validationErrors.resume}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="flex justify-between">
                    <label htmlFor="description" className="font-medium text-gray-600">
                      Description <span className="text-red-600">*</span>
                    </label>
                    <label className="text-xs align-bottom">
                      <span className="textLength">{charCount}</span> / 300
                    </label>
                  </div>
                  <div className="mt-2">
                    <textarea
                      name="description"
                      id="description"
                      rows="3"
                      onChange={countLength}
                      placeholder="Write a few sentences about yourself."
                      className={classNames(
                        "w-full bg-white px-4 py-2 text-black border border-gray-300 rounded-md",
                        { "border-red-600 my-shadow": validationErrors.description }
                      )}
                    ></textarea>
                    {validationErrors.description && (
                      <p className='error text-red-600 mt-1'><i className="fa-solid fa-circle-info me-2"></i>{validationErrors.description}</p>
                    )}
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="inline-flex items-center relative">
                    <input
                      type="checkbox"
                      name="termsCondition"
                      className={classNames("h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800",
                        { "border-red-600 my-shadow": validationErrors.termsCondition }
                      )}
                      id="termsCondition"
                    />
                    <label className="cursor-pointer ml-2 text-sm font-medium text-gray-600" htmlFor="termsCondition">
                      Accept all terms and conditions
                    </label>
                  </div>
                  {validationErrors.termsCondition && (
                    <p className='error text-red-600 mt-1'><i className="fa-solid fa-circle-info me-2"></i>{validationErrors.termsCondition}</p>
                  )}
                </div>

                <div className="col-span-full mt-4 flex justify-between">
                  <button
                    type="submit"
                    name="submit"
                    className="inline-flex justify-center items-center rounded-md border cursor-pointer border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-400"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Apply Now
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

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

  const [isButtonHidden, setIsButtonHidden] = useState(false);
  const [isButtonLoader, setIsButtonLoader] = useState(true);
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
      setIsButtonHidden(true);
      setIsButtonLoader(false);
      toast.success('Form submit successfully!');
      console.log('Form submitted:', formData);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }

    if (hasError) {
      toast.error('Please fill required details!');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Reset specific error if the value is corrected
    let newValidationErrors = { ...validationErrors };

    if (name === 'firstName') {
      if (!value.trim()) {
        newValidationErrors.firstName = 'First name is required!';
      } else if (value.trim().length > 10) {
        newValidationErrors.firstName = 'First name must have at most 10 characters!';
      } else {
        newValidationErrors.firstName = '';
      }
    }

    if (name === 'lastName') {
      if (value.trim().length > 10) {
        newValidationErrors.lastName = 'Last name must have at most 10 characters!';
      } else {
        newValidationErrors.lastName = '';
      }
    }

    if (name === 'gender') {
      if (!value.trim()) {
        newValidationErrors.gender = 'Please select your gender!';
      } else {
        newValidationErrors.gender = '';
      }
    }

    if (name === 'phoneNumber') {
      if (!value.trim()) {
        newValidationErrors.phoneNumber = 'Phone number is required!';
      } else if (!/^\d+$/.test(value)) {
        newValidationErrors.phoneNumber = 'Phone number must be numeric!';
      } else if (value.trim().length !== 10) {
        newValidationErrors.phoneNumber = 'Please enter a valid number!';
      } else {
        newValidationErrors.phoneNumber = '';
      }
    }

    if (name === 'email') {
      if (!value.trim()) {
        newValidationErrors.email = 'Email address is required!';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newValidationErrors.email = 'Invalid email address!';
      } else {
        newValidationErrors.email = '';
      }
    }

    if (name === 'address') {
      if (!value.trim()) {
        newValidationErrors.address = 'Please enter your address!';
      } else {
        newValidationErrors.address = '';
      }
    }

    if (name === 'jobRole') {
      if (!value.trim()) {
        newValidationErrors.jobRole = 'Job role selection is required!';
      } else {
        newValidationErrors.jobRole = '';
      }
    }

    if (name === 'jobTitle') {
      if (!value.trim()) {
        newValidationErrors.jobTitle = 'Job title selection is required!';
      } else {
        newValidationErrors.jobTitle = '';
      }
    }

    if (name === 'description') {
      if (!value.trim()) {
        newValidationErrors.description = 'Description is required!';
      } else {
        newValidationErrors.description = '';
      }
    }

    // Update formData and validationErrors
    setFormData({
      ...formData,
      [name]: value,
    });

    setValidationErrors(newValidationErrors);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    // Reset specific error if the value is corrected
    let newValidationErrors = { ...validationErrors };

    if (name === 'termsCondition') {
      if (!checked) {
        newValidationErrors.termsCondition = 'You must accept the terms and conditions!';
      } else {
        newValidationErrors.termsCondition = '';  // No error
      }
    }

    setFormData({
      ...formData,
      [name]: checked,
    });

    setValidationErrors(newValidationErrors);
  };

  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;
    let newSkills = checked
      ? [...formData.skills, value]
      : formData.skills.filter((skill) => skill !== value);

    let newValidationErrors = { ...validationErrors };

    if (newSkills.length === 0) {
      newValidationErrors.skills = 'Please select at least one skill!';
    } else {
      newValidationErrors.skills = '';
    }

    setFormData({
      ...formData,
      skills: newSkills,
    });

    setValidationErrors(newValidationErrors);
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    // Perform file validation (e.g., file type and size)
    if (file) {
      const allowedTypes = ["application/pdf"];
      const maxSize = 5 * 1024 * 1024; // 5 MB

      if (!allowedTypes.includes(file.type)) {
        setValidationErrors({
          ...validationErrors,
          resume: "Only PDF files are allowed.",
        });
        return;
      }

      if (file.size > maxSize) {
        setValidationErrors({
          ...validationErrors,
          resume: "File size must be less than 5 MB.",
        });
        return;
      }

      // If validation passes, update the form data
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        resume: "", // Clear any previous validation errors
      }));
    }
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
            <form id="admissionForm" method="POST" onSubmit={handleSubmit} encType="multipart/form-data" action="#">
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
                        { "border-red-600 my-shadow": validationErrors.firstName }
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                      className={classNames(
                        "w-full bg-white px-4 h-10 border border-gray-300 rounded-md text-black",
                        { "border-red-600 my-shadow": validationErrors.jobTitle }
                      )}
                    >
                      <option defaultValue value="">
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
                      onChange={handleChange}
                      className={classNames(
                        "w-full bg-white px-4 h-10 border border-gray-300 rounded-md text-black",
                        { "border-red-600 my-shadow": validationErrors.jobRole }
                      )}
                    >
                      <option defaultValue value="">
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
                      onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                        className={classNames(
                          "h-5 w-5 cursor-pointer rounded-full border border-slate-300 checked:border-slate-400 transition-all",
                          { "border-red-600 my-shadow": validationErrors.gender }
                        )}
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
                        onChange={handleChange}
                        className={classNames(
                          "h-5 w-5 cursor-pointer rounded-full border border-slate-300 checked:border-slate-400 transition-all",
                          { "border-red-600 my-shadow": validationErrors.gender }
                        )}
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
                        onChange={handleSkillsChange}
                        className={classNames(
                          "h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800",
                          { "border-red-600 my-shadow": validationErrors.skills }
                        )}
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
                        onChange={handleSkillsChange}
                        className={classNames(
                          "h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800",
                          { "border-red-600 my-shadow": validationErrors.skills }
                        )}
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
                        onChange={handleSkillsChange}
                        className={classNames(
                          "h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800",
                          { "border-red-600 my-shadow": validationErrors.skills }
                        )}
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
                        onChange={handleSkillsChange}
                        className={classNames(
                          "h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800",
                          { "border-red-600 my-shadow": validationErrors.skills }
                        )}
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
                        onChange={handleSkillsChange}
                        className={classNames(
                          "h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800",
                          { "border-red-600 my-shadow": validationErrors.skills }
                        )}
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
                        onChange={handleSkillsChange}
                        className={classNames(
                          "h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800",
                          { "border-red-600 my-shadow": validationErrors.skills }
                        )}
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
                        onChange={handleSkillsChange}
                        className={classNames(
                          "h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800",
                          { "border-red-600 my-shadow": validationErrors.skills }
                        )}
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
                        onChange={handleSkillsChange}
                        className={classNames(
                          "h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800",
                          { "border-red-600 my-shadow": validationErrors.skills }
                        )}
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
                        onChange={handleSkillsChange}
                        className={classNames(
                          "h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800",
                          { "border-red-600 my-shadow": validationErrors.skills }
                        )}
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
                        onChange={handleFileChange}
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
                      onChange={(e) => {
                        handleChange(e);
                        countLength(e);
                      }}
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
                      onChange={handleCheckboxChange}
                      className={classNames("h-5 w-5 cursor-pointer border border-slate-300 checked:bg-slate-800 checked:border-slate-800",
                        { "border-red-600 my-shadow": validationErrors.termsCondition }
                      )}
                      id="termsCondition"
                    />
                    <label className="cursor-pointer ml-2 text-md font-medium text-gray-600" htmlFor="termsCondition">
                      Accept all terms & conditions
                    </label>
                  </div>
                  {validationErrors.termsCondition && (
                    <p className='error text-red-600 mt-1'><i className="fa-solid fa-circle-info me-2"></i>{validationErrors.termsCondition}</p>
                  )}
                </div>

                <div className="col-span-full mt-4 flex justify-center">
                  <button
                    type="submit"
                    name="submit"
                    className={classNames(
                      "w-full flex justify-center items-center submitsbtn rounded-md border cursor-pointer border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-400",
                      { "hidden": isButtonHidden }
                    )}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Apply Now
                  </button>
                  <button
                    className={classNames(
                      "w-full group flex loaderBtn py-2 rounded-md items-center justify-center bg-indigo-400 font-bold px-4",
                      { "hidden": isButtonLoader }
                    )}
                    disabled
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 animate-spin text-white">
                      <path d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg><span className='text-white'>Loading....</span>
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

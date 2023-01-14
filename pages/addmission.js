import React from "react";
import Head from "next/head";
import Image from "next/image";
const Addmission = () => {
  return (
    <>
    <Head>
        <title>Addmission - MTS School</title>
        <meta name="description" content="mtsschool.com we provide better education" />
        <link rel="icon" href="/logo/favicon.png" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <div className="glass text-center p-2">
        <h1 className="ubuntu text-3xl text-gray-700">MTS Addmission Form 📑</h1>
      </div>
    {/* <form
  name="aspnetForm"
  method="post"
  action="./PSP_StudentProfileDataEntry.aspx"
  onsubmit="javascript:return WebForm_OnSubmit();"
  id="aspnetForm"
  autoComplete="off"
> */}
  <form className="border-none outline-none glass-blur mb-24"> 
          <div className="glass-blur m-3 p-1 bg-red-500 text-white">All fields marked with * are mandatory / सभी * द्वारा मार्क किए गए फील्ड अनिवार्य हैं</div>
            <fieldset>
              <div className="w-full grid md:grid-cols-2 md:gap-2 grid-cols-1 gap-1 m-1">
                <div className="saprate flex p-2 items-center">
                  <span className="Josefin text-xl">Student's AADHAAR Number</span>
                  <input type="text" className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2" maxLength={12}/>
                  </div>
                <div className="saprate flex  p-2 items-center ">
                  <span className="Josefin text-xl">Student Name</span>
                  <span style={{ color: "Red" }}>*</span>
                  <input type="text" className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2" maxLength={50}/>
                  </div>
              </div>  
              <div className="w-full grid md:grid-cols-2 md:gap-2 grid-cols-1 gap-1 m-1">
                <div className="saprate flex p-2 items-center">
                  <span className="Josefin text-xl">Father's Name</span>
                  <span style={{ color: "Red" }}>*</span>
                  <input type="text" className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2" maxLength={12}/>
                  </div>
                <div className="saprate flex  p-2 items-center ">
                  <span className="Josefin text-xl">Mother's Name</span>
                  <span style={{ color: "Red" }}>*</span>
                  <input type="text" className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2" maxLength={50}/>
                  </div>
              </div>  
              <div className="w-full grid md:grid-cols-2 md:gap-2 grid-cols-1 gap-1">
                <div className="saprate flex p-2 items-center">
                  <span className="Josefin text-xl">Date of Birth</span>
                  <input type="date"  className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2" maxLength={12}/>
                  </div>
                <div className="saprate flex  p-2 items-center ">
                  <span className="Josefin text-xl">Gender</span>
                  <span style={{ color: "Red" }}>*</span>
                  <select className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2">
                    <option selected="true" disabled>--Select --</option>
                    <option value="boy">BOY</option>
                    <option value="girl">GIRL</option>
                  </select>
                  </div>
              </div>  
              <div className="w-full grid md:grid-cols-2 md:gap-2 grid-cols-1 gap-1">
              <div className="saprate flex  p-2 items-center ">
                  <span className="Josefin text-xl">Caste Category</span>
                  <span style={{ color: "Red" }}>*</span>
                  <select className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2">
                    <option selected="true" disabled>--Select --</option>
                    <option value="sbc">SBC</option>
                    <option value="gen">GEN</option>
                    <option value="sc">SC</option>
                    <option value="st">ST</option>  
                    <option value="obc">OBC</option>
                  </select>
                  </div>
                  <div className="saprate flex  p-2 items-center ">
                  <span className="Josefin text-xl">Religion</span>
                  <span style={{ color: "Red" }}>*</span>
                  <select className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2">
                    <option selected="true" disabled>--Select --</option>
                    <option value="hindu">Hindu</option>
                    <option value="muslim">Muslim</option>
                    <option value="christian">Christian</option>
                    <option value="sikh">Sikh</option>
                    <option value="buddhist">Buddhist</option>
                    <option value="parsi">Parsi</option>
                    <option value="jain">Jain</option>
                    <option value="others">Others</option>
                  </select>
                  </div>
              </div>
              <div className="w-full grid md:grid-cols-2 md:gap-2 grid-cols-1 gap-1">
              <div className="saprate flex  p-2 items-center ">
                  <span className="Josefin text-xl">Mother Tongue</span>
                  <span style={{ color: "Red" }}>*</span>
                  <select className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2">
                    <option selected="true" disabled>--Select --</option>
                    <option value="hindi">Hindi</option>
                    <option value="english">English</option>
                  </select>
                  </div>
                  <div className="saprate flex  p-2 items-center ">
                  <span  className="Josefin text-xl">
                    Jan Aadhar No.
                  </span>
                  <input maxLength={20} className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2"/>
              </div>
              </div>
              <div className="w-full grid md:grid-cols-2 md:gap-2 grid-cols-1 gap-1">
              <div className="saprate flex  p-2 items-center ">
                  <span className="Josefin text-xl">Rural/Urban
</span>
                  <span style={{ color: "Red" }}>*</span>
                  <select className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2">
                    <option selected="true" disabled>--Select --</option>
                    <option value="rural">Rural</option>
                    <option value="urban">Urban</option>
                  </select>
                  </div>
                  <div className="saprate flex  p-2 items-center ">
                  <span  className="Josefin text-xl">
                  Address
                  </span>
                  <input maxLength={20} className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2"/>
              </div>
              </div>  
              <div className="w-full grid md:grid-cols-2 md:gap-2 grid-cols-1 gap-1">
                <div className="saprate flex p-2 items-center">
                  <span className="Josefin text-xl">Date of Admission</span>
                  <input type="date"  className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2" maxLength={12}/>
                  </div>
                <div className="saprate flex  p-2 items-center ">
                  <span className="Josefin text-xl">Admission No. / SR No</span>
                  <span style={{ color: "Red" }}>*</span>
                  <input className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2" />
                  </div>
              </div>
              <div className="w-full grid md:grid-cols-2 md:gap-2 grid-cols-1 gap-1">
                <div className="saprate flex p-2 items-center">
                  <span className="Josefin text-xl">Getting free education as per RTE</span>
                  <select className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2">
                    <option selected="true" disabled>--Select --</option>
                    <option value="yes">YES</option>
                    <option value="no">NO</option>
                  </select>
                  </div>
                <div className="saprate flex  p-2 items-center ">
                  <span className="Josefin text-xl">Studying in class</span>
                  <span style={{ color: "Red" }}>*</span>
                  <select className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2" >
                    <option selected="true" disabled>--Select --</option>
                    <option value="0.3">PP.3+</option>
                    <option value="0.4">PP.4+</option>
                    <option value="0.5">PP.5+</option>
                    <option value="1">First</option>
                    <option value="2">Second</option>
                    <option value="3">Third</option>
                    <option value="4">Fourth</option>
                    <option value="5">Fifth</option>
                    <option value="6">Sixth</option>
                    <option value="7">Seventh</option>
                    <option value="8">Eigth</option>
                    <option value="9">Ninth</option>
                    <option value="10">Tenth</option>
                    <option value="11">Eleventh</option>
                    <option value="12">Twelth</option>
                  </select>
                  </div>
              </div>
              <div className="w-full grid md:grid-cols-2 md:gap-2 grid-cols-1 gap-1">
                <div className="saprate flex  p-2 items-center ">
                  <span className="Josefin text-xl">Class studied previous year</span>
                  <span style={{ color: "Red" }}>*</span>
                  <select className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2" >
                    <option selected="true" disabled>--Select --</option>
                    <option value="0.3">PP.3+</option>
                    <option value="0.4">PP.4+</option>
                    <option value="0.5">PP.5+</option>
                    <option value="1">First</option>
                    <option value="2">Second</option>
                    <option value="3">Third</option>
                    <option value="4">Fourth</option>
                    <option value="5">Fifth</option>
                    <option value="6">Sixth</option>
                    <option value="7">Seventh</option>
                    <option value="8">Eigth</option>
                    <option value="9">Ninth</option>
                    <option value="10">Tenth</option>
                    <option value="11">Eleventh</option>
                    <option value="12">Twelth</option>
                  </select>
                  </div>
                  <div className="saprate flex p-2 items-center">
                  <span className="Josefin text-xl">Previous School</span>
                  <select className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2">
                    <option selected="true" disabled>--Select --</option>
                    <option value="not_applicable">NOT APPLICABLE</option>
                    <option value="same_school">SAME SCHOOL</option>
                    <option value="another_school">ANOTHER SCHOOL</option>
                    <option value="anganwadi">ANGANWADI/ECCE</option>
                    <option value="none">NONE</option>
                  </select>
                  </div>
              </div>  
              <div className="w-full grid md:grid-cols-2 md:gap-2 grid-cols-1 gap-1">
                <div className="saprate flex  p-2 items-center ">
                  <span className="Josefin text-xl">Medium</span>
                  <span style={{ color: "Red" }}>*</span>
                  <select className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2" >
                    <option selected="true" disabled>--Select --</option>
                    <option value="hindi">Hindi</option>
                    <option value="english">English</option>
                  </select>
                  </div>
                  <div className="saprate flex  p-2 items-center ">
                  <span className="Josefin text-xl">Stream (grades 11 &amp; 12)</span>
                  <select className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2" >
                    <option selected="true" disabled>--Select --</option>
                    <option value={0}>Not Applicable</option>
                    <option value={1}>Arts</option>
                    <option value={2}>Science</option>
                    <option value={3}>Commerce</option>
                    <option value={4}>Vocational</option>
                    <option value={5}>Other stream</option>
                  </select>
                  </div>
    </div>
    <div className="w-full grid grid-cols-2 gap-2 m-1">
                <div className="saprate flex p-2 items-center">
                  <span className="Josefin text-xl">Phone number</span>
                  <span style={{ color: "Red" }}>*</span>
                  <input type="text" className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2" maxLength={10}/>
                  </div>
                <div className="saprate flex  p-2 items-center ">
                  <span className="Josefin text-xl">Email</span>
                  <input type="text" className="glass-blur outline-none text-gray-700 p-1 ml-2 w-1/2" maxLength={100}/>
                  </div>
              </div>
              <div className="text-center">
                <input className="glass p-2 poppins cursor-pointer hover:-translate-y-2 transition-all" type="submit" value="submit" />
                </div>
            </fieldset>
</form>
<div className="text-transparent ">hidden</div>
</>
  );
};

export default Addmission;

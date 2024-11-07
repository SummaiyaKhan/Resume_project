
import { FaCog, FaGraduationCap,  FaPhone, FaUser } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdEmail, MdGroup } from "react-icons/md";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-700 w-full flex">
        <div>
      {/* first section{} */}
      <div >
        <div className="bg-slate-900 w-80 py-10 ml-40 mt-5">
          <div>
          <div className="flex justify-center items-center">
            <div className="w-48 h-48 bg-gray-300 rounded-full border-4 border-gray-400 flex justify-center items-center">
              <div className="w-44 h-44 bg-gray-400 rounded-full border-4 border-gray-700 flex justify-center items-center">
                <h2 className="font-serif text-center text-xl">Your Photo Here</h2>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-gray-200 text-2xl font-bold mx-[60px] mt-3">NAME SURNAME</h1>
            <h2 className="text-gray-200 text-xl font-medium mx-[90px]">Web Developer</h2>
          </div>

          {/* Profile Section */}
          <div className="mx-8 mt-10 flex ">
            <div className="bg-white p-[7px] rounded-full flex justify-center items-center">
              <FaUser size={25} className="text-slate-900" />
            </div>
            <h2 className="mx-5 text-gray-200 font-medium text-xl flex justify-center items-center">PROFILE</h2>
          </div>
          <p className="h-1 w-[215px] bg-slate-100 rounded-full mx-[92px]"></p>
          <p className="ml-8 text-slate-100 text-start mt-5">
            Lorem ipsum dolor sit ullam, amet consectetur adipisicing. Eaque sunt quibusdam nulla elit repellendus sit.
          </p>

          {/* Phone Section */}   
          <div className="mx-8 mt-10 flex ">
            <div className="bg-white p-[7px] rounded-full flex justify-center items-center">
              <FaPhone size={25} className="text-slate-900" />
            </div>
            <h2 className="mx-5 text-gray-200 font-medium text-xl flex justify-center items-center">PHONE</h2>
          </div>
          <p className="h-1 w-[215px] bg-slate-100 rounded-full mx-[92px]"></p>
          <p className="text-white mt-5">
            <Link href="tel:+11234567890" className="text-white block w-40 ml-8">+1 (123) 456-7890</Link>
            <Link href="tel:+447123456789" className="text-white block w-40 ml-8">+44 7123 456789</Link>
          </p>

          {/* Email Section */}
          <div className="mx-8 mt-10 flex">
            <div className="bg-white p-[7px] rounded-full flex justify-center items-center">
              <MdEmail size={25} className="text-slate-900" />
            </div>
            <h2 className="mx-5 text-gray-200 font-medium text-xl flex justify-center items-center">EMAIL</h2>
          </div>
          <p className="h-1 w-[215px] bg-slate-100 rounded-full mx-[92px]"></p>
          <p className="w-40 ml-8 justify-start mt-5">
            <Link href="mailto:example1@email.com" className="text-white block">example1@email.com</Link>
            <Link href="mailto:example2@email.com" className="text-white block">example2@email.com</Link>
          </p>

          {/* Reference Section */}
          <div className="mx-8 mt-10 flex ">
            <div className="bg-white p-[7px] rounded-full flex justify-center items-center">
              <MdGroup size={25} className="text-slate-900" />
            </div>
            <h2 className="mx-5 text-gray-200 font-medium text-xl flex justify-center items-center">REFERENCE</h2>
          </div>
          <p className="h-1 w-[215px] bg-slate-100 rounded-full mx-[92px] "></p>
          <div className="mb-6 ml-8 text-slate-100 text-start mt-5">
            <p className="font-bold text-white">John Doe</p>
            <p className="text-white">Senior Developer | XYZ Corporation</p>
            <p className="text-white">Email: <Link href="mailto:johndoe@example.com" className="text-gray-300">johndoe@example.com</Link></p>
            <p className="text-white">Phone: <Link href="tel:+11234567890" className="text-gray-300">+1 (123) 456-7890</Link></p>
            <p className="text-white">Relationship: Former Manager</p>
          </div>
     </div>
          
     </div>
    </div>


    </div>







  {/* Additional sections here */}
  <div>
          <div className="mt-5 bg-white w-[600px] ml-0 pt-3 pb-6">
  <div className="flex items-center">
    <div className="bg-slate-900 ml-14 p-2 rounded-full flex items-center justify-center">
      <FaGraduationCap size={25} className="text-white" />
    </div>
    <h2 className="text-slate-900 mx-3 text-xl font-bold">EDUCATION</h2>
  </div>
  <div className="h-[2px] w-[470px] bg-slate-900 rounded-full mx-[107px] my-2"></div>

  {/* First Education Entry */}
  <div className="flex items-start mt-3">
    <div className="flex items-start space-x-3">
      <span className="text-gray-700 ml-20">2019 - 2023</span>
      <div>
        <p className="text-slate-900 font-medium">Bachelor of Science in Computer Science</p>
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </div>

  {/* Second Education Entry */}
  <div className="flex items-start mt-3">
    <div className="flex items-start space-x-3">
      <span className="text-gray-700 ml-20">2017 - 2019</span>
      <div>
        <p className="text-slate-900 font-medium">Diploma in Web Development</p>
        <p className="text-gray-700 text-sm">
          Phasellus euismod justo vitae ante cursus, at volutpat orci.
        </p>
      </div>
    </div>
  </div>


{/* {work experience} */}
  <div className="flex items-center mt-3">
    <div className="bg-slate-900 ml-14 p-2 rounded-full flex items-center justify-center">
      <FaBuildingColumns size={25} className="text-white" />
    </div>
    <h2 className="text-slate-900 mx-3 text-xl font-bold">WORK EXPERINCE</h2>
  </div>
  <div className="h-[2px] w-[470px] bg-slate-900 rounded-full mx-[107px] my-2"></div>

  <div className="flex items-start ml-10 mt-5">
    <div className="flex items-start space-x-3">
      <span className="text-gray-700 ml-10">2017 - 2019</span>
      <div>
        <p className="text-slate-900 font-medium">WORK-1</p>
        <p className="text-gray-700 text-sm w-[400px]">
          Phasellus euismod justo vitae ante cursus, at volutpat orci.
          Phasellus euismod justo vitae ante cursus, at volutpat orci.
          at volutpat orci.
        </p>
      </div>
    </div>
  </div>


  <div className="flex items-start ml-10 mt-3">
    <div className="flex items-start space-x-3">
      <span className="text-gray-700 ml-10">2017 - 2019</span>
      <div>
        <p className="text-slate-900 font-medium">WORK-2</p>
        <p className="text-gray-700 text-sm w-[400px]">
          Phasellus euismod justo vitae ante cursus, at volutpat orci.
          Phasellus euismod justo vitae ante cursus, at volutpat orci.
          at volutpat orci.
        </p>
      </div>
    </div>
  </div>




  <div className="flex items-start ml-10 mt-3">
    <div className="flex items-start space-x-3">
      <span className="text-gray-700 ml-10">2017 - 2019</span>
      <div>
        <p className="text-slate-900 font-medium">WORK-3</p>
        <p className="text-gray-700 text-sm w-[400px]">
          Phasellus euismod justo vitae ante cursus, at volutpat orci.
          Phasellus euismod justo vitae ante cursus, at volutpat orci.
          at volutpat orci.
        </p>
      </div>
    </div>
  </div>


  <div className="flex items-start ml-10 mt-3">
    <div className="flex items-start space-x-3">
      <span className="text-gray-700 ml-10">2017 - 2019</span>
      <div>
        <p className="text-slate-900 font-medium">WORK-4</p>
        <p className="text-gray-700 text-sm w-[400px]">
          Phasellus euismod justo vitae ante cursus, at volutpat orci.
          Phasellus euismod justo vitae ante cursus, at volutpat orci.
          at volutpat orci.
        </p>
      </div>
    </div>
  </div>


  {/* Skill section */}
<div className="flex items-center mt-0">
  <div className="bg-slate-900 ml-14 p-2 rounded-full flex items-center justify-center">
    <FaCog size={25} className="text-white" />
  </div>
  <h2 className="text-slate-900 mx-3 text-xl font-bold">SKILL</h2>
</div>
<div className="h-[2px] w-[470px] bg-slate-900 rounded-full mx-[107px] my-2"></div>

<div className="text-slate-900 font-thin ml-14 text-base w-[200px]">
  <div className="flex justify-between">
  
    {/* Software Section */}
    <div className="">
      <h2 className="font-medium">SOFTWARE</h2>
      <div className="h-[2px] w-[210px] bg-slate-900 rounded-full my-2"></div>
      <ul className="mt-3 w-[210px]">
        <li>Adobe Photoshop</li>
        <div className="flex-grow mr-5">
          <div className="relative h-2 w-[210px] bg-slate-300 rounded-xl">
            <div className="absolute bg-slate-900 rounded-xl h-full w-[92%]"></div>
          </div>
        </div>
        <li className="mt-3">Microsoft Excel</li>
        <div className="flex-grow mr-5">
          <div className="relative h-2 w-[210px] bg-slate-300 rounded-xl">
            <div className="absolute bg-slate-900 rounded-xl h-full w-[87%]"></div>
          </div>
        </div>
        <li className="mt-3">Slack</li>
        <div className="flex-grow mr-5">
          <div className="relative h-2 w-[210px] bg-slate-300 rounded-xl">
            <div className="absolute bg-slate-900 rounded-xl h-full w-[65%]"></div>
          </div>
        </div>
      </ul>
      
      <h2 className="font-medium mt-16">LANGUAGE</h2>
      <div className="h-[2px] w-[170px] bg-slate-900 rounded-full my-2"></div>
      <ul>
        <li className="mt-3">Urdu</li>
        <div className="flex-grow mr-5">
          <div className="relative h-2 w-[210px] bg-slate-300 rounded-xl">
            <div className="absolute bg-slate-900 rounded-xl h-full w-[95%]"></div>
          </div>
        </div>
        <li className="mt-3">English</li>
        <div className="flex-grow mr-5">
          <div className="relative h-2 w-[210px] bg-slate-300 rounded-xl">
            <div className="absolute bg-slate-900 rounded-xl h-full w-[90%]"></div>
          </div>
        </div>
      </ul>
    </div>

 {/* Skills Section */}
  <div className=" ml-20">
    <h2 className="font-medium text-slate-900 text-xl">Skills</h2>
    <div className="h-[2px] w-full bg-slate-900 rounded-full my-2"></div>
    <ul className="text-slate-900 text-base font-thin w-[210px] mt-5">
      <li className="mt-3">Data Analysis</li>
      <div className="flex-grow mr-5">
        <div className="relative h-2 w-[210px] bg-slate-300 rounded-xl">
          <div className="absolute bg-slate-900 rounded-xl h-full w-[94%]"></div>
        </div>
      </div>
      <li className="mt-3">Machine Learning</li>
      <div className="flex-grow mr-5">
        <div className="relative h-2 w-[210px] bg-slate-300 rounded-xl">
          <div className="absolute bg-slate-900 rounded-xl h-full w-[82%]"></div>
        </div>
      </div>
      <li className="mt-3">Web Development</li>
      <div className="flex-grow mr-5">
        <div className="relative h-2 w-[210px] bg-slate-300 rounded-xl">
          <div className="absolute bg-slate-900 rounded-xl h-full w-[75%]"></div>
        </div>
      </div>
      <li className="mt-3">Graphic Design</li>
      <div className="flex-grow mr-5">
        <div className="relative h-2 w-[210px] bg-slate-300 rounded-xl">
          <div className="absolute bg-slate-900 rounded-xl h-full w-[71%]"></div>
        </div>
      </div>
      <li className="mt-3">Project Management</li>
      <div className="flex-grow mr-5">
        <div className="relative h-2 w-[210px] bg-slate-900 rounded-xl">
          <div className="absolute bg-slate-900 rounded-xl h-full w-[60%]"></div>
        </div>
      </div>
      <li className="mt-3">Digital Marketing</li>
      <div className="flex-grow mr-5">
        <div className="relative h-2 w-[210px] bg-slate-300 rounded-xl">
          <div className="absolute bg-slate-900 rounded-xl h-full w-[55%]"></div>
        </div>
      </div>
      <li className="mt-3">Cloud Computing</li>
      <div className="flex-grow mr-5">
        <div className="relative h-2 w-[210px] bg-slate-300 rounded-xl">
          <div className="absolute bg-slate-900 rounded-xl h-full w-[50%]"></div>
        </div>
      </div>
    </ul>
  </div>

  </div>
</div>



 
</div>
        </div>



    </div>    
     
  );
}

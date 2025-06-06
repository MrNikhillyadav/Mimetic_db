import type { FC } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const teamMembers = [
    {
        name: "Akanksha Kulshreshtha",
        image: '/assets/4.png',
        title: "Assistant Professor",
        department: "Department of Biological Sciences and Engineering",
        institution: "Netaji Subhas University of Technology (NSUT)",
        location: "New Delhi-110078, India",
        email: "akankshak@nsut.ac.in",
    },
    {
        name: "Avinash Pandey",
        image: '/assets/2.png',
        title: "B.Tech (BIOTECHNOLOGY)",
        institution: "Netaji Subhas University of Technology (NSUT)",
        location: "New Delhi-110078, India",
        email: "avinash.pandey.ug21@nsut.ac.in",
        linkedin : "https://www.linkedin.com/in/aryabhatoham24/"
    },
    {
        name: "Aditi Gupta",
        title: "B.Tech (BIOTECHNOLOGY)",
        image: '/assets/1.png',
        institution: "Netaji Subhas University of Technology (NSUT)",
        location: "New Delhi-110078, India",
        email: "aditi.gupta.ug21@nsut.ac.in",
    },
    {
        name: "Harsh Mishra",
        title: "B.Tech (BIOTECHNOLOGY)",
        image: '/assets/3.png',
        institution: "Netaji Subhas University of Technology (NSUT)",
        location: "New Delhi-110078, India",
        email: "harsh.mishra.ug21@nsut.ac.in",
    },
];

const TeamPage: FC = () => {
    return (
        <div className="max-w-6xl rounded-t-lg mx-auto px-6  py-10 bg-gray-50">
             <div className="flex flex-col justify-center items-center gap-2">
                <Image
                                src={'/assets/nsutLogo.png'}
                                alt={`nsut logo`}
                                width={50}
                                height={50}
                                style={{ objectFit: "contain", width: "50%", height: "120px" }}
                                />
            <h1 className="text-center text-4xl font-bold text-gray-900 mb-2">
                We are the people who make up Our Team
            </h1>
             </div>
            <p className="text-center text-lg text-gray-700 mb-10">
            Research in carbohydrate and protein mimetics for targeted therapeutic interventions in cancer, diabetes, and beyond..
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {teamMembers.map((member, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="relative w-full h-56">
                           <Image
                                src={member.image}
                                alt={`${member.name} profile`}
                                width={300}
                                height={224}
                                style={{ objectFit: "cover", width: "100%", height: "200px" }}
                                className="w-full"
                                />
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                {member.name}
                            </h2>
                            <p className="text-gray-600 mb-1">{member.title}</p>
                            {member.department && (
                                <p className="text-gray-500 text-sm mb-1">
                                    {member.department}
                                </p>
                            )}
                            <p className="text-gray-500 text-sm mb-2">
                                {member.institution}
                            </p>
                            <div className="mt-4">
                                <a 
                                    href={`mailto:${member.email}`} 
                                    className="text-blue-600 hover:text-blue-800 hover:underline block truncate"
                                >
                                    {member.email}
                                </a>
                                {member.linkedin && (
                                    <div className="text-gray-500 p-1 max-w-fit shadow-md cursor-pointer hover:scale-105 duration-200 text-sm mt-1">
                                       <a href={`${member.linkedin}`}>  <Linkedin className="text-blue-600"/> </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamPage;

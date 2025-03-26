import type { FC } from "react";
import Image from "next/image";
import profilePic from "@/assets/image.png";

const teamMembers = [
    {
        name: "Akanksha Kulshreshtha",
        image: './assets/image.png',
        title: "Assistant Professor",
        department: "Department of Biological Sciences and Engineering",
        institution: "Netaji Subhas University of Technology (NSUT)",
        location: "New Delhi-110078, India",
        email: "akankshak@nsut.ac.in",
        phone: "+919818896326",
    },
    {
        name: "Avinash Pandey",
        image: './assets/image.png',
        title: "B.Tech (BIOTECHNOLOGY)",
        institution: "Netaji Subhas University of Technology (NSUT)",
        location: "New Delhi-110078, India",
        email: "avinash.pandey.ug21@nsut.ac.in",
    },
    {
        name: "Aditi Gupta",
        title: "B.Tech (BIOTECHNOLOGY)",
        image: './assets/image.png',
        institution: "Netaji Subhas University of Technology (NSUT)",
        location: "New Delhi-110078, India",
        email: "aditi.gupta.ug21@nsut.ac.in",
    },
    {
        name: "Harsh Mishra",
        title: "B.Tech (BIOTECHNOLOGY)",
        image: './assets/image.png',
        institution: "Netaji Subhas University of Technology (NSUT)",
        location: "New Delhi-110078, India",
        email: "harsh.mishra.ug21@nsut.ac.in",
    },
];

const TeamPage: FC = () => {
    return (
        <div className="max-w-6xl rounded-lg mx-auto px-6  py-16 bg-gray-50">
            <h1 className="text-center text-4xl font-bold text-gray-900 mb-8">
                We are the people who make up Our Team
            </h1>
            <p className="text-center text-lg text-gray-700 mb-12">
            Research in carbohydrate and protein mimetics for targeted therapeutic interventions in cancer, diabetes, and beyond..
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {teamMembers.map((member, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="relative w-full h-56">
                            <Image
                                src={profilePic}
                                alt={`${member.name} profile`}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
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
                                {member.phone && (
                                    <p className="text-gray-500 text-sm mt-1">
                                        {member.phone}
                                    </p>
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

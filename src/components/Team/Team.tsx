import React from 'react';
import SectionHeader from '../Section/SectionHeader';
import Image from 'next/image';

const teamMembers = [
  {
    image: '/img/team-1.jpg',
    name: 'Isaiah Nyandwaro',
    role: 'Executive Director',
  },
  {
    image: '/img/team-6.jpg',
    name: 'Mike Dimo',
    role: 'Operations and Finance',
  },
  {
    image: '/img/team-3.jpg',
    name: 'Phostine Ondimu',
    role: 'Human Resources',
  },
  {
    image: '/img/team-5.jpg',
    name: 'Daniel Mogaka',
    role: 'Programmes Coordinator',
  },
  {
    image: '/img/team-2.jpg',
    name: 'Linet Awuor',
    role: 'Administrator',
  },
  {
    image: '/img/team-4.jpg',
    name: 'Noel Osiro',
    role: 'ICT Engineer',
  },
];

const Team = () => {
  return (
    <section className="relative py-18 lg:py-16 bg-white  w-full">
      <div className="container mx-auto px-5  sm:px-10 md:px-12 lg:px-5">
        <SectionHeader
          title="Meet Our Team"
          text="Awesome guys behind our charity activities"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg" key={index}>
              <Image className="w-full h-96 object-cover object-center" src={member.image} alt={member.name} height={200} width={200} />
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-center">
                  <a href="/twitt" title='social' className="text-gray-700 hover:text-gray-900 mx-2"><i className="fab fa-twitter"></i></a>
                  <a href="/twitt" title='social' className="text-gray-700 hover:text-gray-900 mx-2"><i className="fab fa-facebook-f"></i></a>
                  <a href="/twitt" title='social' className="text-gray-700 hover:text-gray-900 mx-2"><i className="fab fa-linkedin-in"></i></a>
                  <a href="/twitt" title='social' className="text-gray-700 hover:text-gray-900 mx-2"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;

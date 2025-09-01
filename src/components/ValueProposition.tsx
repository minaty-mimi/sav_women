import React from 'react';

const ValueProposition: React.FC = () => {
  const valueProps = [
    {
      title: 'Empowerment',
      description: 'Building confidence and self-worth through mentorship, workshops, and personal development programs.'
    },
    {
      title: 'Community',
      description: 'Connecting young women with like-minded peers, mentors, and role models in a supportive environment.'
    },
    {
      title: 'Growth Tools',
      description: 'Access to resources, scholarships, career guidance, and leadership development opportunities.'
    },
  ];

  return (
    <section className="min-h-screen py-16 md:py-24 flex items-center bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden" id="about">
      {/* Enhanced background elements - optimized for mobile */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23047857%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 leading-tight">
            Empowering the{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Next Generation
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Building <span className="text-green-600 font-semibold">confidence</span>, fostering{' '}
            <span className="text-emerald-600 font-semibold">leadership</span>, and creating{' '}
            <span className="text-teal-600 font-semibold">lasting community connections</span>.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {valueProps.map((valueProp, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-md rounded-xl p-4 sm:p-6 
                shadow-lg hover:shadow-xl transition-all duration-500 transform 
                hover:-translate-y-1 sm:hover:-translate-y-2 sm:hover:rotate-1 overflow-hidden"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-400 
                to-teal-400 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl">
              </div>
              <div className="absolute inset-[2px] bg-white rounded-2xl"></div>

              {/* Content */}
              <div className="relative z-10">

                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-600 
                  transition-colors">
                  {valueProp.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {valueProp.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-green-400 
                  to-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity 
                  duration-500 animate-pulse">
                </div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-br from-emerald-400 
                  to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity 
                  duration-500 animate-pulse delay-300">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
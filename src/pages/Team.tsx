import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Linkedin, 
  Twitter, 
  Mail
} from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: '/light%20skined.png',
      bio: 'Passionate about empowering women through education and mentorship.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@savwomen.org'
      },
      skills: ['Leadership', 'Strategy', 'Mentorship'],
      featured: true
    },
    {
      name: 'Aisha Patel',
      role: 'Community Director',
      image: '/muslim.png',
      bio: 'Building bridges and fostering meaningful connections in our community.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'aisha@savwomen.org'
      },
      skills: ['Community Building', 'Event Planning', 'Networking'],
      featured: true
    },
    {
      name: 'Maria Garcia',
      role: 'Program Manager',
      image: '/black%20lady.png',
      bio: 'Dedicated to creating impactful programs that drive real change.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'maria@savwomen.org'
      },
      skills: ['Program Development', 'Impact Assessment', 'Training'],
      featured: true
    }
  ];

  const advisors = [
    {
      name: 'Dr. Lisa Chen',
      role: 'Academic Advisor',
      specialization: 'Leadership Development',
      organization: 'Stanford University'
    },
    {
      name: 'Michelle Taylor',
      role: 'Business Advisor',
      specialization: 'Entrepreneurship',
      organization: 'Women in Business Network'
    },
    {
      name: 'Grace Williams',
      role: 'Community Advisor',
      specialization: 'Social Impact',
      organization: "Global Women's Initiative"
    }
  ];

  const stats = [
    { label: 'Team Members', value: '15+' },
    { label: 'Years Experience', value: '25+' },
    { label: 'Women Mentored', value: '500+' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-neutral-100 text-neutral-900 px-4 py-1 text-sm font-semibold">
              Our People
            </Badge>
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Meet Our Team
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Meet the passionate individuals dedicated to empowering women and creating positive change in our community.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-neutral-900 mb-2">{stat.value}</div>
                  <div className="text-neutral-600 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Leadership Team</h2>
              <p className="text-neutral-600">The visionaries guiding our mission forward</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">{member.name}</h3>
                    <p className="text-neutral-600 mb-2">{member.role}</p>
                    <p className="text-neutral-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-neutral-100 text-neutral-800">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(member.social.linkedin, '_blank')}
                        className="hover:bg-neutral-50"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(member.social.twitter, '_blank')}
                        className="hover:bg-neutral-50"
                      >
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`mailto:${member.social.email}`)}
                        className="hover:bg-neutral-50"
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advisors */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Advisory Board</h2>
              <p className="text-neutral-600">Expert guidance shaping our strategic direction</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {advisors.map((advisor, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 mx-auto rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                        <span className="text-lg font-semibold text-neutral-600">
                          {advisor.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900">{advisor.name}</h3>
                      <p className="text-neutral-600">{advisor.role}</p>
                    </div>
                    
                    <div className="text-center border-t border-neutral-100 pt-4">
                      <p className="text-neutral-600 mb-1">{advisor.specialization}</p>
                      <p className="text-sm text-neutral-500">{advisor.organization}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Join the Team CTA */}
          <Card className="text-center mt-16 bg-neutral-50 border-0 shadow-none">
            <CardContent className="py-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Join Our Growing Team
              </h2>
              <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
                We're always looking for passionate individuals who share our vision
                of empowering women and creating positive change.
              </p>
              <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800 text-white">
                View Open Positions
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Women Empowered', value: '500+' },
    { icon: Target, label: 'Programs Completed', value: '50+' },
    { icon: Heart, label: 'Communities Reached', value: '25+' },
    { icon: Award, label: 'Success Stories', value: '200+' }
  ];

  const milestones = [
    { year: '2024', title: 'Founded', description: 'SAV WOMEN initiative launched' },
    { year: '2025', title: 'First Program', description: '50 women completed leadership training' },
    { year: '2025', title: 'Community Growth', description: 'Expanded to 10 communities' },
    { year: '2025', title: 'Digital Platform', description: 'Launched online resources and tools' },
    { year: '2025', title: 'Global Reach', description: 'Supporting women across 25+ communities' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-green-800">SAV WOMEN</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering young women and girls through confidence-building, leadership development, 
              and community engagement to create lasting positive change and inspire transformation.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                SAV WOMEN is dedicated to creating a supportive ecosystem where young women 
                can develop their leadership skills, build confidence, and access the resources 
                they need to thrive in their personal and professional lives.
              </p>
              <p className="text-gray-600">
                Through mentorship, community engagement, and practical tools, we help women 
                echo their brilliance, create positive impact in their communities, and inspire change.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Empowerment through education and support</li>
                <li>• Inclusive community building</li>
                <li>• Leadership development at every level</li>
                <li>• Sustainable personal and professional growth</li>
                <li>• Authentic storytelling and shared experiences</li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-green-800 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-800 text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
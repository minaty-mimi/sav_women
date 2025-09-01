import React from 'react';
import Navigation from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import PageHero from '@/components/ui/page-hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { 
  Users, 
  Target, 
  Heart, 
  Award, 
  GraduationCap, 
  Sparkles, 
  Globe, 
  Clock, 
  ArrowRight 
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Women Empowered', value: '500+' },
    { label: 'Programs Completed', value: '50+' },
    { label: 'Communities Reached', value: '25+' },
    { label: 'Success Stories', value: '200+' }
  ];

  const milestones = [
    { year: '2024', title: 'Founded', description: 'SAV WOMEN initiative launched' },
    { year: '2025', title: 'First Program', description: '50 women completed leadership training' },
    { year: '2025', title: 'Community Growth', description: 'Expanded to 10 communities' },
    { year: '2025', title: 'Digital Platform', description: 'Launched online resources and tools' },
    { year: '2025', title: 'Global Reach', description: 'Supporting women across 25+ communities' }
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

          <PageHero 
            badge={{
              text: "Our Story",
              icon: <Users className="w-4 h-4" />
            }}
            title={{
              main: "About",
              highlight: "SAV WOMEN"
            }}
            description="Empowering young women through confidence-building, leadership development, and community engagement to create lasting positive change and inspire transformation."
          />

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-neutral-900">
                  <Target className="w-6 h-6 text-neutral-600" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-600">
                  SAV WOMEN is dedicated to creating a supportive ecosystem where young women 
                  can develop their leadership skills, build confidence, and access the resources 
                  they need to thrive in their personal and professional lives.
                </p>
                <p className="text-neutral-600">
                  Through mentorship, community engagement, and practical tools, we help women 
                  echo their brilliance, create positive impact in their communities, and inspire change.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-neutral-900">
                  <Heart className="w-6 h-6 text-neutral-600" />
                  <span>Our Values</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Empowerment through education and support',
                    'Inclusive community building',
                    'Leadership development at every level',
                    'Sustainable personal and professional growth',
                    'Authentic storytelling and shared experiences'
                  ].map((value, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-lg bg-neutral-100 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-4 h-4 text-neutral-600" />
                      </div>
                      <span className="text-neutral-600">{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-neutral-600" />
                  </div>
                  <div className="text-2xl font-bold text-neutral-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline Section */}
          <Card className="mb-16 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-3xl">
                <Clock className="w-8 h-8 text-green-600" />
                <span>Our Journey</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-12 relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-600 to-green-800" />
                
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-8 group/item">
                    {/* Year bubble */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg transform group-hover/item:scale-110 transition-transform">
                        {milestone.year}
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute -inset-2 border-2 border-green-200 rounded-full animate-pulse opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg transform group-hover/item:-translate-y-1 transition-all duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center space-x-2">
                        <span>{milestone.title}</span>
                        <ArrowRight className="w-5 h-5 text-green-600 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
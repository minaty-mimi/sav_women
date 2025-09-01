import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Users, Heart, Star, Globe, CheckCircle, PlusCircle, Sparkles } from 'lucide-react';

const JoinCommunity: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Supportive Network',
      description: 'Connect with like-minded women who support and inspire each other.'
    },
    {
      icon: Star,
      title: 'Exclusive Events',
      description: 'Get priority access to workshops, webinars, and networking events.'
    },
    {
      icon: Heart,
      title: 'Mentorship',
      description: 'Access mentorship opportunities from experienced professionals.'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Be part of a diverse, global network of empowered women.'
    }
  ];

  const membershipLevels = [
    {
      title: 'Basic Membership',
      price: 'Free',
      features: [
        'Access to community forum',
        'Monthly newsletter',
        'Basic resource library',
        'Community events access'
      ],
      recommended: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      title: 'Pro Member',
      price: '$9.99/month',
      features: [
        'All Basic features',
        'Priority event access',
        'Mentorship program',
        'Premium resources',
        'Private networking groups'
      ],
      recommended: true,
      gradient: 'from-green-600 to-green-700'
    },
    {
      title: 'Elite Circle',
      price: '$24.99/month',
      features: [
        'All Pro features',
        '1-on-1 mentoring sessions',
        'Leadership workshops',
        'Exclusive mastermind groups',
        'Speaking opportunities'
      ],
      recommended: false,
      gradient: 'from-purple-600 to-purple-700'
    }
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
            <Badge className="mb-4 px-4 py-2 bg-green-100 text-green-800 rounded-full inline-flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Join Our Growing Community
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              Become Part of
              <span className="block bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Something Special
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join a community of ambitious women supporting each other's growth, sharing experiences, 
              and creating lasting positive change.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-6 h-6 text-green-800" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Membership Levels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Journey</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {membershipLevels.map((level, index) => (
                <Card
                  key={index}
                  className={`relative group overflow-hidden ${
                    level.recommended 
                      ? 'border-green-400 shadow-xl' 
                      : 'hover:border-green-200'
                  } transition-all duration-300 transform hover:-translate-y-1`}
                >
                  {level.recommended && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-400 text-yellow-900">
                        Recommended
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="flex flex-col items-center">
                      <span className="text-xl mb-2">{level.title}</span>
                      <span className="text-3xl font-bold">{level.price}</span>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {level.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                      <Button
                        className={`w-full mt-6 bg-gradient-to-r ${level.gradient} text-white
                          hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        Get Started
                        <PlusCircle className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>

                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${level.gradient} 
                    opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                </Card>
              ))}
            </div>
          </div>

          {/* Join Form */}
          <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Start Your Journey Today</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="you@example.com" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Why do you want to join?</label>
                  <Textarea 
                    placeholder="Tell us about your goals and what you hope to achieve in our community..."
                    className="min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800
                    text-white font-semibold py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinCommunity;

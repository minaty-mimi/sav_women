import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Download, ExternalLink, FileText, Video, Link as LinkIcon } from 'lucide-react';

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Scholarships', 'Mentorship', 'Toolkits', 'Mental Health'];

  const resources = [
    {
      id: 1,
      title: 'Leadership Development Toolkit',
      description: 'Comprehensive guide with exercises and templates for developing leadership skills.',
      category: 'Toolkits',
      type: 'PDF',
      icon: FileText,
      downloadUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Scholarship Opportunities Database',
      description: 'Curated list of scholarships and grants specifically for young women.',
      category: 'Scholarships',
      type: 'Link',
      icon: LinkIcon,
      downloadUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Mental Health Resources Guide',
      description: 'Support resources, helplines, and self-care strategies for mental wellness.',
      category: 'Mental Health',
      type: 'PDF',
      icon: FileText,
      downloadUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Mentorship Program Overview',
      description: 'Video guide on how to make the most of mentorship opportunities.',
      category: 'Mentorship',
      type: 'Video',
      icon: Video,
      downloadUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Career Planning Workbook',
      description: 'Step-by-step workbook for planning and advancing your career goals.',
      category: 'Toolkits',
      type: 'PDF',
      icon: FileText,
      downloadUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Confidence Building Exercises',
      description: 'Practical exercises and affirmations to build lasting self-confidence.',
      category: 'Mental Health',
      type: 'PDF',
      icon: FileText,
      downloadUrl: '#',
      featured: false
    }
  ];

  const toolkitSections = [
    {
      title: 'Leadership Development',
      items: [
        'Leadership Assessment Tool',
        'Goal Setting Templates',
        'Communication Skills Guide',
        'Team Building Activities'
      ]
    },
    {
      title: 'Career Advancement',
      items: [
        'Resume Templates',
        'Interview Preparation Guide',
        'Networking Strategies',
        'Salary Negotiation Tips'
      ]
    },
    {
      title: 'Personal Development',
      items: [
        'Self-Assessment Worksheets',
        'Time Management Tools',
        'Stress Management Techniques',
        'Mindfulness Exercises'
      ]
    }
  ];

  const filteredResources = resources.filter(resource => 
    selectedCategory === 'All' || resource.category === selectedCategory
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF': return 'bg-red-100 text-red-800';
      case 'Video': return 'bg-blue-100 text-blue-800';
      case 'Link': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Resource <span className="text-green-800">Directory</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access curated resources, tools, and opportunities to support your personal and professional growth.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-green-800 hover:bg-green-900' : ''}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.filter(r => r.featured).map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow border-green-200">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getTypeColor(resource.type)}>
                        {resource.type}
                      </Badge>
                      <resource.icon className="h-5 w-5 text-green-800" />
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <Button 
                      className="w-full bg-green-800 hover:bg-green-900"
                      onClick={() => window.open(resource.downloadUrl, '_blank')}
                    >
                      {resource.type === 'Link' ? (
                        <>Access Resource <ExternalLink className="ml-2 h-4 w-4" /></>
                      ) : (
                        <>Download <Download className="ml-2 h-4 w-4" /></>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.filter(r => !r.featured).map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getTypeColor(resource.type)}>
                        {resource.type}
                      </Badge>
                      <resource.icon className="h-5 w-5 text-gray-600" />
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open(resource.downloadUrl, '_blank')}
                    >
                      {resource.type === 'Link' ? (
                        <>Access <ExternalLink className="ml-2 h-4 w-4" /></>
                      ) : (
                        <>Download <Download className="ml-2 h-4 w-4" /></>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Toolkit Accordion */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Toolkits</h2>
            <Accordion type="single" collapsible className="w-full">
              {toolkitSections.map((section, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
                          <FileText className="h-4 w-4 text-green-800" />
                          <span className="text-gray-700">{item}</span>
                          <Button size="sm" variant="ghost" className="ml-auto">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
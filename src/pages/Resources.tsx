import React, { useState } from 'react';
import Navigation from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import PageHero from '@/components/ui/page-hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { 
  Download, 
  ExternalLink, 
  FileText, 
  Video, 
  Link as LinkIcon,
  Book,
  Sparkles,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Users,
  Heart
} from 'lucide-react';

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
              text: "Knowledge Hub",
              icon: <Book className="w-4 h-4" />
            }}
            title={{
              main: "Resource",
              highlight: "Directory"
            }}
            description="Access curated resources, tools, and opportunities to support your personal and professional growth journey."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="lg"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "transition-colors",
                  selectedCategory === category 
                    ? 'bg-neutral-900 hover:bg-neutral-800 text-white' 
                    : 'hover:bg-neutral-100'
                )}
              >
                {category === 'All' && <FileText className="w-4 h-4 mr-2" />}
                {category === 'Scholarships' && <GraduationCap className="w-4 h-4 mr-2" />}
                {category === 'Mentorship' && <Users className="w-4 h-4 mr-2" />}
                {category === 'Toolkits' && <FileText className="w-4 h-4 mr-2" />}
                {category === 'Mental Health' && <Heart className="w-4 h-4 mr-2" />}
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Resources */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Featured Resources</h2>
              <p className="text-neutral-600">Essential tools for your growth journey</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.filter(r => r.featured).map((resource) => (
                <Card key={resource.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-neutral-100 text-neutral-800">
                        {resource.type}
                      </Badge>
                      <resource.icon className="h-5 w-5 text-neutral-600" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{resource.title}</h3>
                    <p className="text-neutral-600 mb-4 text-sm">{resource.description}</p>
                    <Button 
                      className="w-full bg-neutral-900 hover:bg-neutral-800 text-white"
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
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">All Resources</h2>
              <p className="text-neutral-600">Browse our complete collection</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.filter(r => !r.featured).map((resource) => (
                <Card key={resource.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-neutral-100 text-neutral-800">
                        {resource.type}
                      </Badge>
                      <resource.icon className="h-5 w-5 text-neutral-600" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{resource.title}</h3>
                    <p className="text-neutral-600 mb-4 text-sm">{resource.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-neutral-200 hover:bg-neutral-100"
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
          <Card className="bg-white shadow-md">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-neutral-900 mb-2">Comprehensive Toolkits</CardTitle>
              <p className="text-neutral-600">Complete guides for your development journey</p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {toolkitSections.map((section, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-neutral-200"
                  >
                    <AccordionTrigger className="text-lg font-bold text-neutral-900 hover:text-neutral-600">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center">
                          <FileText className="w-4 h-4 text-neutral-600" />
                        </div>
                        <span>{section.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2 gap-4 p-4">
                        {section.items.map((item, itemIndex) => (
                          <div 
                            key={itemIndex} 
                            className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg"
                          >
                            <span className="flex-1 text-neutral-600 text-sm">{item}</span>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="hover:bg-neutral-200"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
import React, { useState } from 'react';
import Navigation from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import PageHero from '@/components/ui/page-hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Search, Calendar, BookOpen, User } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Wellness', 'Career', 'Mindset', 'Leadership'];
  
  const blogPosts = [
    {
      id: 1,
      title: 'Building Confidence in Your Career Journey',
      excerpt: 'Discover practical strategies to overcome imposter syndrome and build lasting confidence in your professional life.',
      category: 'Career',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      image: '/placeholder.svg',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Power of Mindful Leadership',
      excerpt: 'Learn how mindfulness practices can transform your leadership style and create positive team dynamics.',
      category: 'Leadership',
      author: 'Maria Garcia',
      date: '2024-01-10',
      image: '/placeholder.svg',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Wellness Practices for Busy Women',
      excerpt: 'Simple yet effective wellness routines that fit into your busy schedule and promote overall well-being.',
      category: 'Wellness',
      author: 'Dr. Aisha Patel',
      date: '2024-01-05',
      image: '/placeholder.svg',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Developing a Growth Mindset',
      excerpt: 'Transform challenges into opportunities with proven mindset strategies that fuel personal growth.',
      category: 'Mindset',
      author: 'Lisa Chen',
      date: '2024-01-01',
      image: '/placeholder.svg',
      readTime: '6 min read'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>

          <PageHero 
            title={{
              main: "Blog",
              highlight: "Stories & Insights"
            }}
            description="Discover inspiring stories, practical advice, and expert insights to support your journey of growth and empowerment."
          />

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-6 text-lg bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white transition-all duration-300 rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "rounded-full transition-all duration-300 transform hover:scale-105",
                    selectedCategory === category 
                      ? 'bg-green-800 hover:bg-green-900 shadow-lg' 
                      : 'hover:border-green-400 hover:text-green-800'
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-white/60 backdrop-blur-sm"
              >
                <div className="aspect-video bg-gradient-to-br from-green-100 to-yellow-100 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-white/90 backdrop-blur-sm text-green-800 shadow-lg"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                      <BookOpen className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-green-800 transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <User className="h-4 w-4 text-green-800" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <Card className="py-16 text-center bg-white/60 backdrop-blur-sm">
              <CardContent>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Search className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Articles Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any articles matching your search. Try adjusting your filters or search terms.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="hover:border-green-400 hover:text-green-800"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
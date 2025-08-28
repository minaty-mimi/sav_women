import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, Video, ExternalLink } from 'lucide-react';

const Events: React.FC = () => {
  const [view, setView] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Leadership Workshop: Finding Your Voice',
      date: '2024-02-15',
      time: '2:00 PM - 4:00 PM EST',
      location: 'Virtual Event',
      type: 'Workshop',
      description: 'Interactive workshop focused on developing authentic leadership voice and communication skills.',
      spots: 25,
      spotsLeft: 8,
      featured: true
    },
    {
      id: 2,
      title: 'Monthly Community Check-in',
      date: '2024-02-20',
      time: '7:00 PM - 8:00 PM EST',
      location: 'WhatsApp Live',
      type: 'Community',
      description: 'Monthly virtual gathering to share updates, celebrate wins, and support each other.',
      spots: 50,
      spotsLeft: 23,
      featured: false
    },
    {
      id: 3,
      title: 'Career Advancement Masterclass',
      date: '2024-02-28',
      time: '1:00 PM - 3:00 PM EST',
      location: 'Virtual Event',
      type: 'Masterclass',
      description: 'Expert-led session on negotiation, networking, and strategic career planning.',
      spots: 30,
      spotsLeft: 12,
      featured: true
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'New Year Goal Setting Workshop',
      date: '2024-01-10',
      time: '2:00 PM - 4:00 PM EST',
      location: 'Virtual Event',
      type: 'Workshop',
      description: 'Collaborative session on setting meaningful goals and creating action plans for 2024.',
      attendees: 45,
      hasRecording: true
    },
    {
      id: 5,
      title: 'Mental Health & Wellness Panel',
      date: '2023-12-15',
      time: '6:00 PM - 7:30 PM EST',
      location: 'Virtual Event',
      type: 'Panel',
      description: 'Expert panel discussion on mental health resources and wellness strategies.',
      attendees: 62,
      hasRecording: true
    },
    {
      id: 6,
      title: 'Holiday Networking Mixer',
      date: '2023-12-08',
      time: '7:00 PM - 9:00 PM EST',
      location: 'Community Center, NYC',
      type: 'Networking',
      description: 'In-person holiday celebration and networking event for NYC-area members.',
      attendees: 35,
      hasRecording: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Workshop': return 'bg-green-100 text-green-800';
      case 'Masterclass': return 'bg-blue-100 text-blue-800';
      case 'Community': return 'bg-green-100 text-green-800';
      case 'Panel': return 'bg-orange-100 text-orange-800';
      case 'Networking': return 'bg-pink-100 text-pink-800';
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
              Events & <span className="text-green-800">Webinars</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our community events, workshops, and webinars designed to inspire, educate, and connect women leaders.
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <Button
                variant={view === 'upcoming' ? 'default' : 'ghost'}
                onClick={() => setView('upcoming')}
                className={view === 'upcoming' ? 'bg-green-800 hover:bg-green-900' : ''}
              >
                Upcoming Events
              </Button>
              <Button
                variant={view === 'past' ? 'default' : 'ghost'}
                onClick={() => setView('past')}
                className={view === 'past' ? 'bg-green-800 hover:bg-green-900' : ''}
              >
                Past Events
              </Button>
            </div>
          </div>

          {/* Upcoming Events */}
          {view === 'upcoming' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className={`hover:shadow-lg transition-shadow ${event.featured ? 'border-green-300 ring-2 ring-green-100' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                        {event.featured && (
                          <Badge variant="secondary" className="bg-gold-100 text-gold-800">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {event.spotsLeft} spots left of {event.spots}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                      
                      <div className="space-y-2">
                        <Button className="w-full bg-green-800 hover:bg-green-900">
                          RSVP Now
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          Add to Calendar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Past Events */}
          {view === 'past' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Past Events</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {event.attendees} attendees
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                      
                      {event.hasRecording ? (
                        <Button variant="outline" className="w-full">
                          <Video className="mr-2 h-4 w-4" />
                          Watch Recording
                        </Button>
                      ) : (
                        <p className="text-sm text-gray-500 text-center py-2">
                          No recording available
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
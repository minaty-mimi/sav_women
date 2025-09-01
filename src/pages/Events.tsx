import React, { useState } from 'react';
import Navigation from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Sparkles, Users, Star, Heart, Globe, Video } from 'lucide-react';

const Events: React.FC = () => {
  const [view, setView] = useState<'upcoming' | 'past'>('upcoming');

  // Simplified header for more professional look
  const renderHeader = () => (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">Events</h1>
      <p className="text-lg text-gray-600">Join our upcoming events or browse past recordings.</p>
    </div>
  );

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
      featured: true,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      icon: Sparkles
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
      featured: false,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      icon: Users
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
      featured: true,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      icon: Star
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
      hasRecording: true,
      gradient: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      icon: Calendar
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
      hasRecording: true,
      gradient: 'from-pink-500 to-rose-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
      icon: Heart
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
      hasRecording: false,
      gradient: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
      icon: Globe
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Workshop': return 'bg-green-100 text-green-800 border-green-200';
      case 'Masterclass': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Community': return 'bg-green-100 text-green-800 border-green-200';
      case 'Panel': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Networking': return 'bg-pink-100 text-pink-800 border-pink-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <BackButton />
          </div>

          {renderHeader()}

          {/* View Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/50">
              <Button
                variant={view === 'upcoming' ? 'default' : 'ghost'}
                onClick={() => setView('upcoming')}
                className={`rounded-xl px-8 py-3 font-semibold transition-all duration-300 ${
                  view === 'upcoming'
                    ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg text-white'
                    : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Upcoming Events
              </Button>
              <Button
                variant={view === 'past' ? 'default' : 'ghost'}
                onClick={() => setView('past')}
                className={`rounded-xl px-8 py-3 font-semibold transition-all duration-300 ${
                  view === 'past'
                    ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg text-white'
                    : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                <Clock className="w-4 h-4 mr-2" />
                Past Events
              </Button>
            </div>
          </div>

          {/* Upcoming Events */}
          {view === 'upcoming' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="border shadow-sm hover:shadow transition-all duration-300"
                >
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline">
                        {event.type}
                      </Badge>
                      {event.featured && (
                        <Badge variant="secondary">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">
                      {event.title}
                    </CardTitle>
                  </CardHeader>                    <CardContent className="relative">
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-5 w-5 mr-3 text-green-600" />
                          <span className="font-medium">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-5 w-5 mr-3 text-blue-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-5 w-5 mr-3 text-purple-600" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-5 w-5 mr-3 text-orange-600" />
                          <span className="font-medium">{event.spotsLeft} spots left of {event.spots}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {event.description}
                      </p>

                      <div className="space-y-3">
                        <Button className={`w-full bg-gradient-to-r ${event.gradient} hover:opacity-90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                          RSVP Now
                        </Button>
                        <Button variant="outline" size="sm" className="w-full border-2 border-gray-200 hover:border-green-400 hover:bg-green-50">
                          <Calendar className="mr-2 h-4 w-4" />
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
              <div className="flex items-center gap-3 mb-8">
                <Clock className="w-6 h-6 text-blue-500" />
                <h2 className="text-3xl font-bold text-gray-900">Past Events</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <Card
                    key={event.id}
                    className={`group ${event.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative`}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={`${getTypeColor(event.type)} border`}>
                          {event.type}
                        </Badge>
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${event.gradient} text-white`}>
                          <event.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-gray-800 transition-colors leading-tight">
                        {event.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2 text-green-600" />
                          <span>
                            {new Date(event.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-blue-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2 text-orange-600" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {event.description}
                      </p>

                      {event.hasRecording ? (
                        <Button variant="outline" className="w-full border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50">
                          <Video className="mr-2 h-4 w-4" />
                          Watch Recording
                        </Button>
                      ) : (
                        <div className="text-center py-3">
                          <p className="text-sm text-gray-500 bg-gray-50 rounded-lg py-2">
                            No recording available
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Simple Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Stay Connected
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our community to get exclusive access to upcoming events and workshops.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">
                Join Our Community
              </Button>
              <Button size="lg" variant="outline">
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
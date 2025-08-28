import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Target, Award, Star, Globe } from 'lucide-react';

const SAVWomenCarousel: React.FC = () => {
  const carouselItems = [
    {
      icon: Users,
      title: "Community Building",
      description: "Creating a supportive network of empowered women who uplift and inspire each other.",
      color: "bg-green-100 border-green-200"
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "Building confidence and leadership skills in young women to create lasting positive change.",
      color: "bg-pink-100 border-pink-200"
    },
    {
      icon: Target,
      title: "Leadership Development",
      description: "Providing tools and mentorship to develop the next generation of powerful women leaders.",
      color: "bg-blue-100 border-blue-200"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Celebrating achievements and recognizing the brilliance of women in all fields.",
      color: "bg-yellow-100 border-yellow-200"
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Fostering creativity and innovative thinking to solve community challenges.",
      color: "bg-purple-100 border-purple-200"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Expanding our reach to support women across communities and create worldwide change.",
      color: "bg-indigo-100 border-indigo-200"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-green-800">SAV WOMEN</span> Initiative
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the core pillars that drive our mission to empower young women and create lasting change
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className={`h-full border-2 ${item.color} hover:shadow-lg transition-shadow duration-300`}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                      <item.icon className="w-8 h-8 text-green-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        <div className="text-center mt-8">
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-green-800">SAV WOMEN</span> - Sound and Vibrant Women Initiative
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Empowering young women to echo brilliance and inspiring change since 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default SAVWomenCarousel;

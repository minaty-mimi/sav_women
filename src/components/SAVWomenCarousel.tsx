import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const SAVWomenCarousel: React.FC = () => {
  const [api, setApi] = React.useState<any>();
  const intervalRef = React.useRef<number>();
  const [isPaused, setIsPaused] = React.useState(false);

  const startAutoplay = React.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      api?.scrollNext();
    }, 3000);
  }, [api]);

  const stopAutoplay = React.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  React.useEffect(() => {
    if (!api || isPaused) {
      return;
    }

    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, [api, isPaused, startAutoplay, stopAutoplay]);

  const carouselItems = [
    {
      title: "Community Building",
      description: "Creating a supportive network where women uplift and inspire each other through shared experiences and collaboration."
    },
    {
      title: "Empowerment",
      description: "Building confidence and leadership skills in young women through personalized mentorship and transformative workshops."
    },
    {
      title: "Leadership Development",
      description: "Providing tools and guidance to develop the next generation of powerful women leaders through structured programs."
    },
    {
      title: "Excellence",
      description: "Celebrating achievements and recognizing the brilliance of women in all fields through awards and recognition programs."
    },
    {
      title: "Innovation",
      description: "Fostering creativity and innovative thinking to solve community challenges through collaborative initiatives."
    },
    {
      title: "Global Impact",
      description: "Expanding our reach to empower women across communities and create meaningful worldwide change through partnerships."
    }
  ];

  return (
    <section className="h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SAV WOMEN Initiative
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the core pillars that drive our mission to empower young women and create lasting change
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
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

        <div className="text-center mt-12">
          <p className="text-lg text-gray-900 font-semibold">
            SAV WOMEN - Sound and Vibrant Women Initiative
          </p>
          <p className="text-gray-600 mt-2">
            Empowering young women and inspiring change since 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default SAVWomenCarousel;

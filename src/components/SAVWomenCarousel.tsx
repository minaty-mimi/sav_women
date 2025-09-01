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
    <section className="min-h-screen py-16 md:py-24 flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            SAV WOMEN Initiative
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
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
          <CarouselContent className="-ml-2 sm:-ml-4">
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-4 sm:left-0 lg:left-4" />
          <CarouselNext className="hidden sm:flex -right-4 sm:right-0 lg:right-4" />
        </Carousel>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg text-gray-900 font-semibold">
            SAV WOMEN - Sound and Vibrant Women Initiative
          </p>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Empowering young women and inspiring change since 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default SAVWomenCarousel;

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  badge?: {
    text: string;
    icon?: React.ReactNode;
  };
  title: {
    main: string;
    highlight?: string;
  };
  description?: string;
  className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  description,
  className
}) => {
  return (
    <div className={cn("text-center mb-16", className)}>
      {badge && (
        <Badge 
          className="mb-4 px-4 py-2 bg-green-100 text-green-800 rounded-full inline-flex items-center"
          variant="secondary"
        >
          {badge.icon && <span className="mr-2">{badge.icon}</span>}
          {badge.text}
        </Badge>
      )}
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
        {title.main}
        {title.highlight && (
          <span className="block bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            {title.highlight}
          </span>
        )}
      </h1>
      {description && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHero;

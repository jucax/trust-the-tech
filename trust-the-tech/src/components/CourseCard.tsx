import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Book } from 'lucide-react';

// Type for Lucide icon components
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

type Course = {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Icons;
};

function isLucideComponent(
  icon: any
): icon is ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>> {
  return typeof icon === 'function' || typeof icon === 'object';
}

export function CourseCard({ course }: { course: Course }) {
  const LucideIcon = Icons[course.icon];
  const IconComponent = isLucideComponent(LucideIcon) ? LucideIcon : Book;
  return (
    <Link to={`/course/${course.id}`} className="block group">
      <Card className="transition-transform group-hover:-translate-y-1 group-hover:shadow-lg h-full">
        <CardHeader className="flex flex-col items-center justify-center gap-2 pb-2">
          <IconComponent className="h-10 w-10 text-primary mb-2" />
          <CardTitle className="text-lg text-center font-semibold text-primary">
            {course.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center min-h-[48px]">{course.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
} 
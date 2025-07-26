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
  level: string; // Added level to the type
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
        <CardContent className="flex-1 flex flex-col">
          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground text-center min-h-[48px]">{course.description}</p>
            <div className="flex flex-col items-center mt-2">
              <span className="text-xs text-gray-500">By: {course.instructor}</span>
              <span className="text-xs text-secondary font-semibold mt-1">Level: {course.level}</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{course.rating}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 
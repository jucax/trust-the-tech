import { CourseCard } from '../components/CourseCard';

const courses = [
  {
    id: 'canva',
    title: 'How to use Canva',
    description: 'Learn the basics of creating beautiful designs with Canva.',
    icon: 'Palette' as const,
    level: 'Beginner',
    instructor: 'Juan Martinez Varela',
    students: 1247,
    rating: 4.8,
  },
  {
    id: 'google-docs',
    title: 'Intro to Google Docs',
    description: 'Master document creation, editing, and sharing in Google Docs.',
    icon: 'FileText' as const,
    level: 'Beginner',
    instructor: 'Juan Martinez Varela',
    students: 2156,
    rating: 4.9,
  },
  {
    id: 'digital-safety',
    title: 'Digital Safety 101',
    description: 'Stay safe online with essential digital safety tips.',
    icon: 'Shield' as const,
    level: 'Beginner',
    instructor: 'Dr. Emily Rodriguez',
    students: 892,
    rating: 4.7,
  },
];

export default function Catalog() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Course Catalog</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
} 
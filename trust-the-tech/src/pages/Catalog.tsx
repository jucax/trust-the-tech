import { CourseCard } from '../components/CourseCard';

const courses = [
  {
    id: 'canva',
    title: 'How to use Canva',
    description: 'Learn the basics of creating beautiful designs with Canva.',
    icon: 'Palette',
  },
  {
    id: 'google-docs',
    title: 'Intro to Google Docs',
    description: 'Master document creation, editing, and sharing in Google Docs.',
    icon: 'FileText',
  },
  {
    id: 'digital-safety',
    title: 'Digital Safety 101',
    description: 'Stay safe online with essential digital safety tips.',
    icon: 'ShieldCheck',
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
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const courseData: Record<string, { title: string; description: string; video?: string }> = {
  'canva': {
    title: 'How to use Canva',
    description: 'Learn the basics of creating beautiful designs with Canva.',
    video: 'https://www.youtube.com/embed/5O6JKCkXg5A',
  },
  'google-docs': {
    title: 'Intro to Google Docs',
    description: 'Master document creation, editing, and sharing in Google Docs.',
    video: 'https://www.youtube.com/embed/eA2F8gBCR6E',
  },
  'digital-safety': {
    title: 'Digital Safety 101',
    description: 'Stay safe online with essential digital safety tips.',
    video: 'https://www.youtube.com/embed/2x0U4F5O4uE',
  },
};

export default function CourseDetail() {
  const { id } = useParams();
  const course = id ? courseData[id] : undefined;

  if (!course) {
    return <div className="text-center py-16">Course not found.</div>;
  }

  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-primary font-bold">{course.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">{course.description}</p>
          {course.video ? (
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow">
              <iframe
                src={course.video}
                title={course.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none"
              />
            </div>
          ) : (
            <div className="text-center text-muted-foreground">Course content coming soon.</div>
          )}
        </CardContent>
      </Card>
    </section>
  );
} 
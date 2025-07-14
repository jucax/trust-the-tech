import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { Star, Users, Clock, Play, CheckCircle, BookOpen } from 'lucide-react';

const courseData: Record<string, {
  title: string;
  description: string;
  instructor: string;
  instructorBio: string;
  instructorImage: string;
  rating: number;
  students: number;
  duration: string;
  level: string;
  video?: string;
  lessons: Array<{ title: string; duration: string; completed?: boolean }>;
}> = {
  'canva': {
    title: 'How to use Canva',
    description: 'Learn the basics of creating beautiful designs with Canva. This comprehensive course will teach you everything from creating social media graphics to designing presentations and marketing materials.',
    instructor: 'Sarah Johnson',
    instructorBio: 'Former senior designer at Adobe with 10+ years teaching digital design. Sarah specializes in making complex design tools accessible to everyone.',
    instructorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    rating: 4.8,
    students: 1247,
    duration: '2 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/5O6JKCkXg5A',
    lessons: [
      { title: 'Introduction to Canva', duration: '10 min', completed: true },
      { title: 'Creating Your First Design', duration: '15 min', completed: true },
      { title: 'Working with Templates', duration: '20 min', completed: true },
      { title: 'Adding and Editing Text', duration: '15 min', completed: true },
      { title: 'Working with Images', duration: '20 min', completed: true },
      { title: 'Using Shapes and Elements', duration: '15 min', completed: true },
      { title: 'Creating Social Media Graphics', duration: '25 min' },
      { title: 'Designing Presentations', duration: '30 min' }
    ]
  },
  'google-docs': {
    title: 'Intro to Google Docs',
    description: 'Master document creation, editing, and sharing in Google Docs. Learn to collaborate effectively and create professional documents.',
    instructor: 'Mike Chen',
    instructorBio: 'Google Workspace certified trainer helping teams work smarter. Mike has trained thousands of users in productivity tools.',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    rating: 4.9,
    students: 2156,
    duration: '1.5 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/eA2F8gBCR6E',
    lessons: [
      { title: 'Getting Started with Google Docs', duration: '10 min', completed: true },
      { title: 'Creating and Editing Documents', duration: '15 min', completed: true },
      { title: 'Formatting Text and Paragraphs', duration: '20 min', completed: true },
      { title: 'Working with Images and Tables', duration: '25 min' },
      { title: 'Sharing and Collaborating', duration: '20 min' },
      { title: 'Advanced Features', duration: '20 min' }
    ]
  },
  'digital-safety': {
    title: 'Digital Safety 101',
    description: 'Stay safe online with essential digital safety tips. Learn to protect your personal information and navigate the internet securely.',
    instructor: 'Dr. Emily Rodriguez',
    instructorBio: 'PhD in Computer Science with focus on digital safety education. Emily is passionate about making cybersecurity accessible to everyone.',
    instructorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    rating: 4.7,
    students: 892,
    duration: '3 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/2x0U4F5O4uE',
    lessons: [
      { title: 'Understanding Online Threats', duration: '15 min', completed: true },
      { title: 'Creating Strong Passwords', duration: '20 min' },
      { title: 'Recognizing Phishing Attempts', duration: '25 min' },
      { title: 'Protecting Personal Information', duration: '30 min' },
      { title: 'Safe Social Media Practices', duration: '25 min' }
    ]
  }
};

export default function CourseDetail() {
  const { id } = useParams();
  const course = id ? courseData[id] : undefined;

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h1>
          <p className="text-gray-600">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{course.description}</p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students} students enrolled</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                  {course.level}
                </span>
              </div>
            </motion.div>

            {/* Video Section */}
            {course.video && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-5 w-5" />
                      Course Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video w-full rounded-lg overflow-hidden shadow">
                      <iframe
                        src={course.video}
                        title={course.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-none"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Course Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Course Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {course.lessons.map((lesson, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          {lesson.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                          )}
                          <span className="font-medium">{lesson.title}</span>
                        </div>
                        <span className="text-sm text-gray-500">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enroll Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="sticky top-6">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Course</h3>
                    <p className="text-gray-600">No payment required</p>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-3 mb-4">
                    Enroll for Free
                  </Button>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Access on mobile and TV</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>30-Day money-back guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Instructor Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={course.instructorImage} 
                      alt={course.instructor} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{course.instructor}</h3>
                      <p className="text-sm text-gray-500">Course Instructor</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{course.instructorBio}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Clock, 
  CheckCircle, 
  Calendar as CalendarIcon,
  TrendingUp,
  Award,
  BookOpen,
  Lightbulb
} from 'lucide-react';

const myCourses = [
  {
    id: 'canva',
    title: 'How to use Canva',
    progress: 75,
    lessonsCompleted: 6,
    totalLessons: 8,
    lastAccessed: '2 days ago',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop'
  },
  {
    id: 'google-docs',
    title: 'Intro to Google Docs',
    progress: 45,
    lessonsCompleted: 3,
    totalLessons: 6,
    lastAccessed: '1 week ago',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop'
  },
  {
    id: 'digital-safety',
    title: 'Digital Safety 101',
    progress: 20,
    lessonsCompleted: 1,
    totalLessons: 5,
    lastAccessed: '3 days ago',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&h=200&fit=crop'
  }
];

const suggestedCourses = [
  {
    id: 'google-sheets',
    title: 'Google Sheets Basics',
    instructor: 'Mike Chen',
    rating: 4.6,
    students: 1567,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop'
  },
  {
    id: 'social-media',
    title: 'Social Media for Beginners',
    instructor: 'Sarah Johnson',
    rating: 4.5,
    students: 2034,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop'
  },
  {
    id: 'video-calls',
    title: 'Video Calling Made Easy',
    instructor: 'Dr. Emily Rodriguez',
    rating: 4.8,
    students: 1789,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop'
  }
];

const upcomingSessions = [
  { date: 'Today', time: '2:00 PM', course: 'How to use Canva', type: 'Live Q&A' },
  { date: 'Tomorrow', time: '10:00 AM', course: 'Digital Safety 101', type: 'Workshop' },
  { date: 'Friday', time: '3:30 PM', course: 'Intro to Google Docs', type: 'Office Hours' }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
        <p className="text-gray-600">You're making great progress. Keep up the excellent work!</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Courses in Progress</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <div className="p-3 bg-secondary/10 rounded-full">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Progress</p>
                  <p className="text-2xl font-bold text-gray-900">47%</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Certificates Earned</p>
                  <p className="text-2xl font-bold text-gray-900">1</p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Courses Section */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  My Courses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {myCourses.map((course) => (
                  <div key={course.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-16 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-500">
                        {course.lessonsCompleted} of {course.totalLessons} lessons completed
                      </p>
                      <div className="mt-2">
                        <Progress value={course.progress} className="h-2" />
                        <p className="text-xs text-gray-500 mt-1">{course.progress}% complete</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Last accessed</p>
                      <p className="text-sm font-medium">{course.lastAccessed}</p>
                      <Button asChild size="sm" className="mt-2 bg-secondary hover:bg-secondary/90 text-white">
                        <Link to={`/courses/${course.id}`}>
                          <Play className="h-4 w-4 mr-1" />
                          Continue
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Calendar Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingSessions.map((session, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{session.date}</span>
                      <span className="text-xs text-gray-500">{session.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{session.course}</p>
                    <span className="inline-block mt-1 text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                      {session.type}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Suggested Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Suggested for You
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {suggestedCourses.map((course) => (
                <div key={course.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">By {course.instructor}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{course.students} students</span>
                      <span className="text-yellow-600">★ {course.rating}</span>
                    </div>
                    <Button asChild size="sm" className="w-full mt-3 bg-secondary hover:bg-secondary/90 text-white">
                      <Link to={`/courses/${course.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
} 
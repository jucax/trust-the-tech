import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Users, Clock, Play, Search, Filter } from 'lucide-react';

const allCourses = [
  {
    id: 'canva',
    title: 'How to use Canva',
    description: 'Learn the basics of creating beautiful designs with Canva.',
    instructor: 'Sarah Johnson',
    rating: 4.8,
    students: 1247,
    duration: '2 hours',
    category: 'Design',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop'
  },
  {
    id: 'google-docs',
    title: 'Intro to Google Docs',
    description: 'Master document creation, editing, and sharing in Google Docs.',
    instructor: 'Mike Chen',
    rating: 4.9,
    students: 2156,
    duration: '1.5 hours',
    category: 'Productivity',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'
  },
  {
    id: 'digital-safety',
    title: 'Digital Safety 101',
    description: 'Stay safe online with essential digital safety tips.',
    instructor: 'Dr. Emily Rodriguez',
    rating: 4.7,
    students: 892,
    duration: '3 hours',
    category: 'Security',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop'
  },
  {
    id: 'google-sheets',
    title: 'Google Sheets Basics',
    description: 'Learn to organize data and create simple spreadsheets.',
    instructor: 'Mike Chen',
    rating: 4.6,
    students: 1567,
    duration: '2.5 hours',
    category: 'Productivity',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
  },
  {
    id: 'social-media',
    title: 'Social Media for Beginners',
    description: 'Navigate social media platforms safely and effectively.',
    instructor: 'Sarah Johnson',
    rating: 4.5,
    students: 2034,
    duration: '2 hours',
    category: 'Communication',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=250&fit=crop'
  },
  {
    id: 'video-calls',
    title: 'Video Calling Made Easy',
    description: 'Master Zoom, Skype, and other video calling platforms.',
    instructor: 'Dr. Emily Rodriguez',
    rating: 4.8,
    students: 1789,
    duration: '1.5 hours',
    category: 'Communication',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop'
  }
];

const categories = ['All', 'Design', 'Productivity', 'Security', 'Communication'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-decorative font-bold text-gray-900 mb-4">Browse All Courses</h1>
          <p className="text-xl text-gray-600">Find the perfect course to boost your digital skills</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search courses, instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Level Filter */}
            <div className="flex gap-2">
              {levels.map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level)}
                  className="whitespace-nowrap"
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {allCourses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>By {course.instructor}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-auto bg-secondary hover:bg-secondary/90 text-white">
                    <Link to={`/courses/${course.id}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedLevel('All');
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
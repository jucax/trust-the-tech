import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { Star, Users, Clock, Play, CheckCircle, BookOpen } from 'lucide-react';

// Add this type above courseDataWithAliases:
type CourseDetail = {
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
  badge?: string;
};

const courseData: Record<string, CourseDetail> = {
  // 1. Wayground
  'course-1': {
    title: 'Wayground',
    description: 'Master the basics of Wayground, a platform for interactive learning paths and digital classroom management.',
    instructor: 'EdTrainerTv',
    instructorBio: 'Educational technology trainer helping teachers integrate digital tools into their classrooms effectively.',
    instructorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    rating: 4.6,
    students: 145,
    duration: '2 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/fi3OJnt0kjo?start=49',
    lessons: [
      { title: 'What is Wayground?', duration: '5 min', completed: true },
      { title: 'Getting Started', duration: '8 min', completed: true },
      { title: 'Creating an Account', duration: '7 min', completed: true },
      { title: 'Signing In', duration: '5 min' },
      { title: 'Understanding the Menu', duration: '10 min' },
      { title: 'Creating Learning Paths', duration: '15 min' },
      { title: 'Managing Your Classroom', duration: '20 min' },
      { title: 'Adding Interactive Elements', duration: '15 min' },
      { title: 'Tracking Student Progress', duration: '15 min' },
      { title: 'Sharing and Collaboration', duration: '10 min' }
    ]
  },
  // 2. Socrative
  'course-2': {
    title: 'Socrative',
    description: 'Learn to use Socrative for real-time quizzes, instant feedback, and student engagement.',
    instructor: 'SocrativeApp',
    instructorBio: 'Official Socrative channel providing tutorials and best practices for using Socrative in education.',
    instructorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    rating: 4.7,
    students: 189,
    duration: '2.5 hours',
    level: 'Intermediate',
    video: 'https://www.youtube.com/embed/zaaSVwq6adU',
    lessons: [
      { title: 'What is Socrative?', duration: '5 min', completed: true },
      { title: 'Getting Started', duration: '8 min', completed: true },
      { title: 'Creating an Account', duration: '7 min', completed: true },
      { title: 'Signing In', duration: '5 min' },
      { title: 'Understanding the Menu', duration: '10 min' },
      { title: 'Classes', duration: '10 min' },
      { title: 'Changing Names', duration: '8 min' },
      { title: 'Sharing Classes', duration: '8 min' },
      { title: 'Home', duration: '10 min' },
      { title: 'Multiple Choice', duration: '12 min' },
      { title: 'True/False Questions', duration: '10 min' },
      { title: 'Short Answer', duration: '12 min' },
      { title: 'Quizzes', duration: '15 min' },
      { title: 'Adding Quizzes', duration: '15 min' },
      { title: 'Configuring Questions', duration: '15 min' },
      { title: 'Sharing Quizzes', duration: '10 min' },
      { title: 'Importing from Excel', duration: '15 min' },
      { title: 'Saving Quizzes', duration: '8 min' },
      { title: 'Managing Quizzes', duration: '12 min' },
      { title: 'Starting Quizzes', duration: '15 min' },
      { title: 'Space Race', duration: '20 min' },
      { title: 'Choosing Teams', duration: '12 min' },
      { title: 'Configuring Settings', duration: '10 min' },
      { title: 'Final Question', duration: '8 min' },
      { title: 'Results', duration: '15 min' },
      { title: 'Sharing Results', duration: '10 min' },
      { title: 'Exporting Results', duration: '12 min' },
      { title: 'Reports', duration: '15 min' },
      { title: 'Searching Reports', duration: '10 min' },
      { title: 'Filtering Reports', duration: '12 min' },
      { title: 'Archiving Reports', duration: '8 min' },
      { title: 'Deleting Reports', duration: '8 min' },
      { title: 'Profile Configuration', duration: '10 min' }
    ]
  },
  // 3. Brainscape
  'course-3': {
    title: 'Brainscape',
    description: 'Boost your memory and study skills with Brainscape\'s smart flashcards and spaced repetition.',
    instructor: 'ferfelixbio',
    instructorBio: 'Educational content creator specializing in biology and study techniques using digital tools.',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    rating: 4.8,
    students: 167,
    duration: '3 hours',
    level: 'Advanced',
    video: 'https://www.youtube.com/embed/LiDIyO54BZk',
    lessons: [
      { title: 'What is Brainscape?', duration: '5 min', completed: true },
      { title: 'Getting Started', duration: '8 min', completed: true },
      { title: 'Creating an Account', duration: '7 min', completed: true },
      { title: 'Signing In', duration: '5 min' },
      { title: 'Understanding the Menu', duration: '10 min' },
      { title: 'Classes', duration: '12 min' },
      { title: 'Creating New Classes', duration: '15 min' },
      { title: 'Customizing Classes', duration: '15 min' },
      { title: 'Adding Videos', duration: '12 min' },
      { title: 'Adding Supplementary Information', duration: '15 min' },
      { title: 'Class Configuration', duration: '12 min' },
      { title: 'Sharing Classes', duration: '10 min' },
      { title: 'Creating Decks', duration: '20 min' },
      { title: 'Cards', duration: '15 min' },
      { title: 'Adding Cards', duration: '15 min' },
      { title: 'Editing Cards', duration: '12 min' },
      { title: 'Previewing Cards', duration: '8 min' },
      { title: 'Playing Cards', duration: '15 min' },
      { title: 'Configuring Games', duration: '12 min' },
      { title: 'Rating Cards', duration: '10 min' },
      { title: 'Analyzing Study Progress', duration: '15 min' },
      { title: 'Students', duration: '12 min' },
      { title: 'Filtering Students', duration: '10 min' },
      { title: 'Modifying Student Permissions', duration: '12 min' },
      { title: 'Viewing Student Profiles', duration: '10 min' },
      { title: 'Adding Students', duration: '12 min' },
      { title: 'Finding Decks', duration: '15 min' },
      { title: 'Selecting Topics', duration: '12 min' },
      { title: 'Finding Decks', duration: '15 min' },
      { title: 'Starting to Study', duration: '10 min' },
      { title: 'Sharing Decks', duration: '12 min' },
      { title: 'Account Configuration', duration: '10 min' }
    ]
  },
  // 4. Genially
  'course-4': {
    title: 'Genially',
    description: 'Create interactive presentations and infographics with Genially, perfect for engaging lessons.',
    instructor: 'NewEdTechClassroom',
    instructorBio: 'Educational technology channel helping teachers integrate digital tools into their classrooms.',
    instructorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    rating: 4.5,
    students: 134,
    duration: '2 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/gwLZhEAxyE0',
    lessons: [
      { title: 'What is Genially?', duration: '5 min', completed: true },
      { title: 'Getting Started', duration: '8 min', completed: true },
      { title: 'Creating an Account', duration: '7 min', completed: true },
      { title: 'Signing In', duration: '5 min' },
      { title: 'Understanding the Menu', duration: '10 min' },
      { title: 'Creating Genially', duration: '15 min' },
      { title: 'Templates', duration: '12 min' },
      { title: 'Gamification', duration: '15 min' },
      { title: 'Quizzes', duration: '15 min' },
      { title: 'Games', duration: '12 min' },
      { title: 'Escape Rooms', duration: '20 min' },
      { title: 'Genially Editor', duration: '15 min' },
      { title: 'Toolbar', duration: '12 min' },
      { title: 'Text', duration: '10 min' },
      { title: 'Images', duration: '12 min' },
      { title: 'Resources', duration: '10 min' },
      { title: 'Elements', duration: '12 min' },
      { title: 'Interactive Elements', duration: '15 min' },
      { title: 'Smartblocks', duration: '12 min' },
      { title: 'Insert', duration: '10 min' },
      { title: 'Background', duration: '8 min' },
      { title: 'Pages', duration: '10 min' },
      { title: 'Preview', duration: '8 min' },
      { title: 'Collaborators', duration: '12 min' },
      { title: 'Ready', duration: '5 min' },
      { title: 'Publishing on the Web', duration: '10 min' },
      { title: 'Sharing Genially', duration: '12 min' },
      { title: 'Link', duration: '8 min' },
      { title: 'Email', duration: '8 min' },
      { title: 'Social Networks', duration: '10 min' },
      { title: 'Google Classroom', duration: '12 min' },
      { title: 'Microsoft Teams', duration: '12 min' },
      { title: 'Creations', duration: '10 min' },
      { title: 'Inspiration', duration: '8 min' },
      { title: 'Account Configuration', duration: '10 min' }
    ]
  },
  // 5. Visme
  'course-5': {
    title: 'Visme',
    description: 'Design beautiful presentations, infographics, and reports with Visme\'s easy-to-use tools.',
    instructor: 'VideoPlastyOfficial',
    instructorBio: 'Professional video and design tutorials helping creators master digital tools.',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 4.6,
    students: 156,
    duration: '2.5 hours',
    level: 'Intermediate',
    video: 'https://www.youtube.com/embed/ABr-qIFmxnU',
    lessons: [
      { title: 'Introduction to Visme', duration: '10 min', completed: true },
      { title: 'Creating Your First Project', duration: '15 min', completed: true },
      { title: 'Working with Templates', duration: '20 min', completed: true },
      { title: 'Adding and Editing Text', duration: '15 min' },
      { title: 'Working with Images', duration: '20 min' },
      { title: 'Using Shapes and Elements', duration: '15 min' },
      { title: 'Creating Charts and Graphs', duration: '25 min' },
      { title: 'Adding Animations', duration: '20 min' },
      { title: 'Collaboration Features', duration: '15 min' },
      { title: 'Exporting and Sharing', duration: '15 min' }
    ]
  },
  // 6. Canva
  'course-6': {
    title: 'Canva',
    description: 'Learn to design graphics, posters, and social media posts with Canva\'s drag-and-drop interface.',
    instructor: 'Juan Martinez Varela',
    instructorBio: 'Founder of Trust the Tech, passionate about making technology accessible to everyone. Juan specializes in digital literacy and helping people master essential tools.',
    instructorImage: '/assets/headshot.jpg',
    rating: 4.8,
    students: 1247,
    duration: '2 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/wCEtWz5imUs?start=44',
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
  // 7. Adobe Express
  'course-7': {
    title: 'Adobe Express',
    description: 'Unlock creative potential with Adobe Express for quick, professional graphics and videos.',
    instructor: 'TeachersTech',
    instructorBio: 'Educational technology channel helping teachers and students master digital tools and software.',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 4.7,
    students: 178,
    duration: '3 hours',
    level: 'Advanced',
    video: 'https://www.youtube.com/embed/3kE_zKEUk2U',
    lessons: [
      { title: 'Introduction to Adobe Express', duration: '10 min', completed: true },
      { title: 'Creating Your First Design', duration: '15 min', completed: true },
      { title: 'Working with Templates', duration: '20 min', completed: true },
      { title: 'Adding and Editing Text', duration: '15 min' },
      { title: 'Working with Images', duration: '20 min' },
      { title: 'Using Shapes and Elements', duration: '15 min' },
      { title: 'Creating Videos', duration: '30 min' },
      { title: 'Advanced Features', duration: '25 min' },
      { title: 'Exporting and Sharing', duration: '15 min' }
    ]
  },
  // 8. Canvas
  'course-8': {
    title: 'Canvas',
    description: 'Navigate Canvas LMS for assignments, grades, and communication in digital classrooms.',
    instructor: 'VirtualTeachingPro',
    instructorBio: 'Professional virtual teaching trainer helping educators master online learning platforms.',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 4.5,
    students: 145,
    duration: '2.5 hours',
    level: 'Intermediate',
    video: 'https://www.youtube.com/embed/IJIP0XCy9s0',
    lessons: [
      { title: 'Introduction to Canvas', duration: '10 min', completed: true },
      { title: 'Creating Your Account', duration: '15 min', completed: true },
      { title: 'Navigating the Dashboard', duration: '20 min', completed: true },
      { title: 'Understanding Courses', duration: '15 min' },
      { title: 'Working with Assignments', duration: '25 min' },
      { title: 'Checking Grades', duration: '15 min' },
      { title: 'Communication Tools', duration: '20 min' },
      { title: 'Calendar and Notifications', duration: '15 min' },
      { title: 'Mobile App Usage', duration: '15 min' }
    ]
  },
  // 9. Google Classroom
  'course-9': {
    title: 'Google Classroom',
    description: 'Set up and manage virtual classrooms, assignments, and feedback with Google Classroom.',
    instructor: 'PocketfulofPrimary',
    instructorBio: 'Primary education specialist helping teachers integrate technology into their classrooms effectively.',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 4.6,
    students: 167,
    duration: '2 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/rCNImsWUxZA',
    lessons: [
      { title: 'Introduction to Google Classroom', duration: '10 min', completed: true },
      { title: 'Creating Your First Class', duration: '15 min', completed: true },
      { title: 'Inviting Students', duration: '15 min', completed: true },
      { title: 'Creating Assignments', duration: '20 min' },
      { title: 'Grading and Feedback', duration: '20 min' },
      { title: 'Using Announcements', duration: '15 min' },
      { title: 'Organizing Materials', duration: '15 min' },
      { title: 'Calendar Integration', duration: '10 min' }
    ]
  },
  // 10. Google Docs
  'course-10': {
    title: 'Google Docs',
    description: 'Collaborate in real time and master document creation with Google Docs.',
    instructor: 'TeachersTech',
    instructorBio: 'Educational technology channel helping teachers and students master digital tools and software.',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    rating: 4.9,
    students: 2156,
    duration: '1.5 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/U2ISJJQ1URw',
    lessons: [
      { title: 'Getting Started with Google Docs', duration: '10 min', completed: true },
      { title: 'Creating and Editing Documents', duration: '15 min', completed: true },
      { title: 'Formatting Text and Paragraphs', duration: '20 min', completed: true },
      { title: 'Working with Images and Tables', duration: '25 min' },
      { title: 'Sharing and Collaborating', duration: '20 min' },
      { title: 'Advanced Features', duration: '20 min' }
    ]
  },
  // 11. Google Suite
  'course-11': {
    title: 'Google Suite',
    description: 'Get productive with Google Suite: Docs, Sheets, Slides, and more for education and work.',
    instructor: 'itGenius_',
    instructorBio: 'Google Workspace experts helping businesses and educators maximize productivity with Google tools.',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 4.7,
    students: 189,
    duration: '3 hours',
    level: 'Intermediate',
    video: 'https://www.youtube.com/embed/FwT6_JFAk5Y',
    lessons: [
      { title: 'Introduction to Google Suite', duration: '10 min', completed: true },
      { title: 'Google Docs Basics', duration: '20 min', completed: true },
      { title: 'Google Sheets Fundamentals', duration: '25 min', completed: true },
      { title: 'Google Slides Creation', duration: '20 min' },
      { title: 'Google Drive Organization', duration: '15 min' },
      { title: 'Google Calendar Management', duration: '15 min' },
      { title: 'Google Meet for Video Calls', duration: '20 min' },
      { title: 'Integration Between Apps', duration: '15 min' }
    ]
  },
  // 12. Powtoon
  'course-12': {
    title: 'Powtoon',
    description: 'Create animated videos and presentations for fun and effective learning with Powtoon.',
    instructor: 'thesocialguide7659',
    instructorBio: 'Social media and digital marketing expert helping creators master video and animation tools.',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 4.5,
    students: 134,
    duration: '2.5 hours',
    level: 'Intermediate',
    video: 'https://www.youtube.com/embed/sK5fOhyUXzk',
    lessons: [
      { title: 'Introduction to Powtoon', duration: '10 min', completed: true },
      { title: 'Creating Your First Video', duration: '15 min', completed: true },
      { title: 'Working with Templates', duration: '20 min', completed: true },
      { title: 'Adding Characters and Props', duration: '20 min' },
      { title: 'Creating Animations', duration: '25 min' },
      { title: 'Adding Music and Sound', duration: '15 min' },
      { title: 'Timeline Management', duration: '20 min' },
      { title: 'Exporting and Sharing', duration: '15 min' }
    ]
  },
  // 13. Moovly
  'course-13': {
    title: 'Moovly',
    description: 'Produce engaging video content and animations with Moovly\'s online platform.',
    instructor: 'helperman_yt',
    instructorBio: 'Digital content creator helping users master video editing and animation software.',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 4.6,
    students: 156,
    duration: '3 hours',
    level: 'Advanced',
    video: 'https://www.youtube.com/embed/Ar5OseTCMrE',
    lessons: [
      { title: 'Introduction to Moovly', duration: '10 min', completed: true },
      { title: 'Creating Your First Project', duration: '15 min', completed: true },
      { title: 'Working with Templates', duration: '20 min', completed: true },
      { title: 'Adding Media Content', duration: '25 min' },
      { title: 'Creating Animations', duration: '30 min' },
      { title: 'Working with Text and Graphics', duration: '20 min' },
      { title: 'Timeline and Keyframes', duration: '25 min' },
      { title: 'Audio and Voiceovers', duration: '20 min' },
      { title: 'Exporting and Publishing', duration: '15 min' }
    ]
  },
  // 14. Duolingo
  'course-14': {
    title: 'Duolingo',
    description: 'Start learning a new language with Duolingo\'s gamified lessons and daily practice.',
    instructor: 'languagejones',
    instructorBio: 'Language learning expert helping students master new languages through effective digital tools.',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 4.8,
    students: 234,
    duration: '2 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/WXHtwQP9DnQ',
    lessons: [
      { title: 'Introduction to Duolingo', duration: '10 min', completed: true },
      { title: 'Creating Your Account', duration: '10 min', completed: true },
      { title: 'Choosing Your Language', duration: '10 min', completed: true },
      { title: 'Understanding Lessons', duration: '15 min' },
      { title: 'Daily Goals and Streaks', duration: '10 min' },
      { title: 'Practice and Review', duration: '15 min' },
      { title: 'Using Stories', duration: '15 min' },
      { title: 'Leaderboards and Friends', duration: '10 min' },
      { title: 'Premium Features', duration: '15 min' }
    ]
  },
  // 15. Google Scholar
  'course-15': {
    title: 'Google Scholar',
    description: 'Find academic articles and research papers efficiently using Google Scholar.',
    instructor: 'DavidLRiceLibrary',
    instructorBio: 'Academic librarian helping students and researchers master scholarly search tools and research methods.',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 4.7,
    students: 167,
    duration: '2 hours',
    level: 'Advanced',
    video: 'https://www.youtube.com/embed/fXMGQgO_KiQ',
    lessons: [
      { title: 'Introduction to Google Scholar', duration: '10 min', completed: true },
      { title: 'Basic Search Techniques', duration: '15 min', completed: true },
      { title: 'Advanced Search Options', duration: '20 min', completed: true },
      { title: 'Filtering Results', duration: '15 min' },
      { title: 'Reading and Saving Articles', duration: '20 min' },
      { title: 'Citation Tools', duration: '15 min' },
      { title: 'Setting Up Alerts', duration: '15 min' },
      { title: 'Library Integration', duration: '10 min' }
    ]
  },
  // 16. Khan Academy
  'course-16': {
    title: 'Khan Academy',
    description: 'Access free courses in math, science, and more with Khan Academy\'s interactive platform.',
    instructor: 'NewEdTechClassroom',
    instructorBio: 'Educational technology channel helping teachers integrate digital tools into their classrooms.',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 4.6,
    students: 189,
    duration: '2.5 hours',
    level: 'Intermediate',
    video: 'https://www.youtube.com/embed/FdB5qhGRSgQ',
    lessons: [
      { title: 'Introduction to Khan Academy', duration: '10 min', completed: true },
      { title: 'Creating Your Account', duration: '10 min', completed: true },
      { title: 'Navigating the Dashboard', duration: '15 min', completed: true },
      { title: 'Finding Courses', duration: '15 min' },
      { title: 'Taking Lessons', duration: '20 min' },
      { title: 'Practice Exercises', duration: '20 min' },
      { title: 'Progress Tracking', duration: '15 min' },
      { title: 'Using the Mobile App', duration: '15 min' },
      { title: 'Parent and Teacher Tools', duration: '20 min' }
    ]
  },
  // Additional courses that were in the original list
  'microsoft-word': {
    title: 'Intro to Microsoft Word',
    description: 'Master document creation, editing, and formatting with Microsoft Word. Learn to create professional documents, reports, and letters.',
    instructor: 'techteachersandstudents',
    instructorBio: 'Technology trainer helping teachers and students master Microsoft Office applications.',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    rating: 4.8,
    students: 1892,
    duration: '2 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/2MCmnr2L50o',
    lessons: [
      { title: 'Getting Started with Microsoft Word', duration: '10 min', completed: true },
      { title: 'Creating and Editing Documents', duration: '15 min', completed: true },
      { title: 'Formatting Text and Paragraphs', duration: '20 min', completed: true },
      { title: 'Working with Styles and Themes', duration: '25 min' },
      { title: 'Adding Images and Tables', duration: '20 min' },
      { title: 'Page Layout and Headers/Footers', duration: '15 min' },
      { title: 'Spell Check and Grammar', duration: '10 min' },
      { title: 'Saving and Sharing Documents', duration: '15 min' }
    ]
  },
  'chatgpt': {
    title: 'How to use ChatGPT efficiently',
    description: 'Master ChatGPT to boost your productivity, creativity, and problem-solving skills. Learn effective prompting techniques and best practices.',
    instructor: 'Juan Martinez Varela',
    instructorBio: 'Founder of Trust the Tech, passionate about making technology accessible to everyone. Juan specializes in digital literacy and helping people master essential tools.',
    instructorImage: '/assets/headshot.jpg',
    rating: 4.9,
    students: 2156,
    duration: '2.5 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/Gaf_jCnA6mc',
    lessons: [
      { title: 'What is ChatGPT?', duration: '10 min', completed: true },
      { title: 'Creating Your First Account', duration: '15 min', completed: true },
      { title: 'Understanding the Interface', duration: '20 min', completed: true },
      { title: 'Basic Prompting Techniques', duration: '25 min' },
      { title: 'Writing Effective Prompts', duration: '30 min' },
      { title: 'Using ChatGPT for Writing', duration: '25 min' },
      { title: 'Using ChatGPT for Problem Solving', duration: '20 min' },
      { title: 'Using ChatGPT for Learning', duration: '20 min' },
      { title: 'Advanced Prompting Strategies', duration: '25 min' },
      { title: 'Best Practices and Safety', duration: '15 min' }
    ]
  },
  'google-sheets': {
    title: 'Google Sheets Basics',
    description: 'Learn to organize data and create simple spreadsheets with Google Sheets. Master formulas, charts, and data analysis.',
    instructor: 'Juan Martinez Varela',
    instructorBio: 'Founder of Trust the Tech, passionate about making technology accessible to everyone. Juan specializes in digital literacy and helping people master essential tools.',
    instructorImage: '/assets/headshot.jpg',
    rating: 4.6,
    students: 1567,
    duration: '2.5 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/TENAbUa-R-w',
    lessons: [
      { title: 'Introduction to Google Sheets', duration: '10 min', completed: true },
      { title: 'Creating Your First Spreadsheet', duration: '15 min', completed: true },
      { title: 'Basic Formulas and Functions', duration: '25 min', completed: true },
      { title: 'Formatting and Styling', duration: '20 min' },
      { title: 'Working with Charts and Graphs', duration: '30 min' },
      { title: 'Data Analysis and Filtering', duration: '25 min' },
      { title: 'Sharing and Collaboration', duration: '20 min' }
    ]
  },
  'social-media': {
    title: 'Social Media for Beginners',
    description: 'Navigate social media platforms safely and effectively. Learn to connect with others while protecting your privacy.',
    instructor: 'neilpatel',
    instructorBio: 'Digital marketing expert helping users master social media platforms and online communication.',
    instructorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    rating: 4.5,
    students: 2034,
    duration: '2 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/E6ZSIZ89Ekg',
    lessons: [
      { title: 'Understanding Social Media', duration: '10 min', completed: true },
      { title: 'Creating Your First Profile', duration: '15 min', completed: true },
      { title: 'Privacy Settings and Security', duration: '20 min', completed: true },
      { title: 'Posting and Sharing Content', duration: '25 min' },
      { title: 'Connecting with Others', duration: '20 min' },
      { title: 'Managing Your Digital Footprint', duration: '25 min' },
      { title: 'Best Practices for Safety', duration: '15 min' }
    ]
  },
  'video-calls': {
    title: 'Video Calling Made Easy',
    description: 'Master Zoom, Skype, and other video calling platforms. Learn to host and join virtual meetings with confidence.',
    instructor: 'Howfinity',
    instructorBio: 'Technology tutorial channel helping users master video calling and communication tools.',
    instructorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    rating: 4.8,
    students: 1789,
    duration: '1.5 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/fMUxzrgZvZQ',
    lessons: [
      { title: 'Introduction to Video Calling', duration: '10 min', completed: true },
      { title: 'Setting Up Your Account', duration: '15 min', completed: true },
      { title: 'Joining a Video Call', duration: '20 min', completed: true },
      { title: 'Hosting Your Own Meeting', duration: '25 min' },
      { title: 'Managing Audio and Video', duration: '20 min' },
      { title: 'Screen Sharing and Collaboration', duration: '20 min' }
    ]
  },
  'digital-safety': {
    title: 'Digital Safety 101',
    description: 'Stay safe online with essential digital safety tips. Learn to protect your personal information and navigate the internet securely.',
    instructor: 'Kaspersky',
    instructorBio: 'Cybersecurity experts helping users stay safe online with practical digital safety tips and best practices.',
    instructorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    rating: 4.7,
    students: 892,
    duration: '3 hours',
    level: 'Beginner',
    video: 'https://www.youtube.com/embed/aO858HyFbKI',
    lessons: [
      { title: 'Understanding Online Threats', duration: '15 min', completed: true },
      { title: 'Creating Strong Passwords', duration: '20 min' },
      { title: 'Recognizing Phishing Attempts', duration: '25 min' },
      { title: 'Protecting Personal Information', duration: '30 min' },
      { title: 'Safe Social Media Practices', duration: '25 min' }
    ]
  },
  'quizizz': {
    title: 'Quizizz: Interactive Quizzes',
    description: 'Master Quizizz for creating, sharing, and analyzing interactive quizzes for any subject or audience.',
    instructor: 'Ana Torres',
    instructorBio: 'EdTech specialist with 7+ years helping teachers use digital tools for engagement.',
    instructorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4.7,
    students: 180,
    duration: '2.5 hours',
    level: 'Beginner',
    badge: '/assets/courses/badges/beginner.png',
    video: 'https://www.youtube.com/embed/5O6JKCkXg5A',
    lessons: [
      { title: 'What is Quizizz?', duration: '5 min', completed: true },
      { title: 'Getting Started', duration: '8 min', completed: true },
      { title: 'Creating an Account', duration: '7 min', completed: true },
      { title: 'Signing In', duration: '5 min' },
      { title: 'Understanding the Menu', duration: '10 min' },
      { title: 'Quiz', duration: '10 min' },
      { title: 'Creating a Quiz', duration: '15 min' },
      { title: 'Creating Questions', duration: '10 min' },
      { title: 'Configuring Questions', duration: '10 min' },
      { title: 'Quiz Settings', duration: '10 min' },
      { title: 'Adding Questions from Quizizz Library', duration: '10 min' },
      { title: 'Importing Questions from Spreadsheet', duration: '10 min' },
      { title: 'Saving Quiz', duration: '5 min' },
      { title: 'Sharing Quiz', duration: '8 min' },
      { title: 'Sharing by Email', duration: '5 min' },
      { title: 'Sharing by Link', duration: '5 min' },
      { title: 'Editing Quiz', duration: '8 min' },
      { title: 'Playing with Quiz', duration: '10 min' },
      { title: 'Modes', duration: '8 min' },
      { title: 'Adjusting Game', duration: '8 min' },
      { title: 'Sharing to Play', duration: '5 min' },
      { title: 'Player View', duration: '7 min' },
      { title: 'Administrator View', duration: '7 min' },
      { title: 'Reviewing Quiz Results', duration: '10 min' },
      { title: 'Library', duration: '8 min' },
      { title: 'Explore', duration: '10 min' },
      { title: 'Playing Other Quizzes', duration: '12 min' },
      { title: 'Saving Other Quizzes', duration: '8 min' },
      { title: 'Sharing Other Quizzes', duration: '8 min' },
      { title: 'Copying and Editing Other Quizzes', duration: '10 min' },
      { title: 'Reports', duration: '12 min' },
      { title: 'Classes', duration: '10 min' },
      { title: 'Creating Classes', duration: '12 min' },
      { title: 'Linking with Google Classroom', duration: '15 min' },
      { title: 'Account Settings', duration: '10 min' }
    ]
  }
};

const courseDataWithAliases: Record<string, CourseDetail> = {
  ...courseData,
  // The courseData already contains all the courses with their correct IDs
  // No additional mapping needed since we've updated all course IDs to match
};

export default function CourseDetail() {
  const { id } = useParams();
  const course = id ? courseDataWithAliases[id] : undefined;

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
              <h1 className="text-4xl font-decorative font-bold text-gray-900 mb-4">{course.title}</h1>
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
                <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs">
                  {course.level}
                </span>
                {course.badge && <img src={course.badge} alt={course.level + ' badge'} className="inline-block h-6 ml-2 align-middle" />}
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
                    {course.lessons.map((lesson: { title: string; duration: string; completed?: boolean }, index: number) => (
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
                  
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg py-3 mb-4">
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
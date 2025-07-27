import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './components/DashboardLayout';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Public routes with Navbar and Footer */}
          <Route path="/" element={
            <>
              <Navbar />
              <main className="flex-1">
                <Outlet />
              </main>
              <Footer />
            </>
          }>
            <Route index element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:id" element={<CourseDetail />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          
          {/* Dashboard routes with DashboardLayout */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

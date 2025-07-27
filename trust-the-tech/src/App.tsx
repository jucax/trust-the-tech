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
import Dashboard2 from './pages/Dashboard2';

function App() {
  return (
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
        <Route path="/dashboard2" element={<DashboardLayout />}>
          <Route index element={<Dashboard2 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

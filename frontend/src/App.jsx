
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import Purchases from "./components/Purchases";
import Buy from "./components/Buy";
import Courses from "./components/Courses";
import AdminSignup from "./admin/AdminSignup";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import CourseCreate from "./admin/CourseCreate";
import UpdateCourse from "./admin/UpdateCourse";
import OurCourses from "./admin/OurCourses";

// ✅ Safely parse user and admin from localStorage
let user = null;
let admin = null;

try {
  user = JSON.parse(localStorage.getItem("user"));
} catch (e) {
  localStorage.removeItem("user");
}

try {
  admin = JSON.parse(localStorage.getItem("admin"));
} catch (e) {
  localStorage.removeItem("admin");
}

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />

        {/* Protected Routes */}
        <Route
          path="/buy/:courseId"
          element={user ? <Buy /> : <Navigate to="/login" />}
        />
        <Route
          path="/purchases"
          element={user ? <Purchases /> : <Navigate to="/login" />}
        />

        {/* Admin Routes */}
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={admin ? <Dashboard /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/create-course"
          element={admin ? <CourseCreate /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/update-course/:id"
          element={admin ? <UpdateCourse /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/our-courses"
          element={admin ? <OurCourses /> : <Navigate to="/admin/login" />}
        />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;

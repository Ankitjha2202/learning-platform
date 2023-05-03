import React from 'react'
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register  from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import CoursePage  from './components/CoursePage/CoursePage';
import Subscribe from './components/Payments/Subscribe';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentFail from './components/Payments/PaymentFail';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Users from './components/Admin/Users/Users';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import AdminCourse from './components/Admin/AdminCourses/AdminCourse';

function App() {
  window.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
  });
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/course/:id' element={<CoursePage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Request' element={<Request/>}/>
        <Route path='/ResetPassword/:token' element={<ResetPassword/>}/>
        <Route path='/subscribe' element={<Subscribe/>}/>
        <Route path='/paymentsuccessfull' element={<PaymentSuccess/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/paymentfail' element={<PaymentFail/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/createcourse' element={<CreateCourse/>}/>
        <Route path='/admin/courses' element={<AdminCourse/>}/>
        <Route path='/admin/users' element={<Users/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/changepassword' element={<ChangePassword/>}/>
        <Route path='/updateprofile' element={<UpdateProfile/>}/>
        
        

      </Routes>
      <Footer/>
     </Router>
  );
}

export default App;

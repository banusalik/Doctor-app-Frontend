import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import DoctorLogin from "./pages/DoctorLogin";
import Tests from "./pages/Tests";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import FindDoctor from "./pages/FindDoctor";
import DoctorDetails from "./pages/DoctorDetails";
import AdminHome from "./pages/Admin/AdminHome";
import AdminPageNotFound from "./pages/Admin/AdminPageNotFound";
import Dashboard from "./pages/Admin/Dashboard";
import AppointmentList from "./pages/Admin/AppointmentList";
import DoctorList from "./pages/Admin/DoctorList";
import PatientList from "./pages/Admin/PatientList";
import Transaction from "./pages/Admin/Transaction";
import BookAppointment from "./pages/BookAppointment";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Profile from "./pages/User/Profile";
import DocProfile from "./pages/Doctor/Profile";
import AddMore from "./components/AddMore";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/doctor/login" element={<DoctorLogin />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/find-doctor" element={<FindDoctor />} exact />
        {/* <Route path="/doctor-details" element={<DoctorDetails />} exact /> */}
        <Route path="/doctor-details/:Doctor_ID" element={<DoctorDetails />} />
        <Route path="/tests" element={<Tests />} exact />
        <Route
          path="/book-appointment/:Doctor_ID"
          element={<BookAppointment />}
          exact
        />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/about" element={<About />} exact />
        {/* admin routing */}
        <Route path="/admin/dashboard" element={<Dashboard />} exact />
        <Route path="/admin/appointment" element={<AppointmentList />} exact />
        <Route path="/admin/doctor" element={<DoctorList />} exact />
        <Route path="/admin/patient" element={<PatientList />} exact />
        <Route path="/admin/transaction" element={<Transaction />} exact />

        <Route path="/*" element={<PageNotFound />} exact />
        <Route path="/admin/*" element={<AdminPageNotFound />} exact />
        {/* user routing */}
        <Route path="/user/profile" element={<Profile />} exact />
        {/* Doctor Routing */}
        <Route path="/doctor/profile" element={<DocProfile />} exact />
        <Route path="/doctor/profile" element={<DocProfile />} exact />
        <Route path="/add-more" element={<AddMore />} exact />
      </Routes>
    </>
  );
}

export default App;

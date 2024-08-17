import { BrowserRouter, Route, Routes } from "react-router-dom";
import Information from "./pages/information/information";
import Home from "./registrationpage/home/home";
import PersonalInfo from "./registrationpage/personalinfo/personalinfo";
import RegisterNavbar from "./registrationpage/navbar/navbar";
import Job from "./registrationpage/job/job";
import PhotoSign from "./registrationpage/photo&sign/photosign";

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Information />} />
      <Route path="/home" element={<Home />} />
      <Route path="/personalinfo" element ={<PersonalInfo />}/>
      <Route path="/register" element={<RegisterNavbar />} />
      <Route path="/photosign" element={<PhotoSign />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

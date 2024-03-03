import CourseList from './CourseList';
import LatestCourseSlider from './LatestCourseSlider';
import HomeTop from './HomeTop';
import Navbar from './Navbar';
import Footer from './Footer';
function App() {
  return (
   <div>
      <Navbar />
      <HomeTop />
      <LatestCourseSlider />
      <CourseList />
      <Footer />
    </div>
  );
}
export default App;

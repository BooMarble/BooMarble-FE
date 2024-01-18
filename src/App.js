import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./pages/main";
import Chat from "./pages/chat";
import ChatDetail from "./pages/chatDetail";
import Community from "./pages/community";
import CommunityDetail from "./pages/communityDetail";
import CommunityPosting from "./pages/communityPosting";
import Cost from "./pages/cost";
import CourseList from "./pages/courseList";
import Info from "./pages/info";
import InfoDetail from "./pages/infoDetail";
import Login from "./pages/login";
import MyPage from "./pages/mypage";
import Review from "./pages/review";
import ReviewDetail from "./pages/reviewDetail";
import ReviewPosting from "./pages/reviewPosting";
import TextDataPage from "./pages/textDataPage";
import Dorm from "./pages/dorm"
import AccGrade from "./pages/accGrade"
import Activity from "./pages/activity"
import Etc from "./pages/etc"
import Message from "./pages/message"
import UnivInfo from "./pages/univInfo"
import Loading from './pages/loading'
import Prediction from "./pages/prediction";
import AfterLogin from "./pages/afterLogin"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Main />}></Route>
        <Route path={`/chat`} element={<Chat />}></Route>
        <Route path={`/chatDetail`} element={<ChatDetail />}></Route>
        <Route path={`/posts`} element={<Community />}></Route>
        <Route path={`/posts/:communityId`} element={<CommunityDetail />}></Route>
        <Route path={`/communityPosting`} element={<CommunityPosting />}></Route>
        <Route path={`/reviews/:universityId/cost`} element={<Cost />}></Route>
        <Route path={`/reviews/:universityId/courseList`} element={<CourseList />}></Route>
        <Route path={`/info`} element={<Info />}></Route>
        <Route path={`/info/:universityId`} element={<InfoDetail />}></Route>
        <Route path={`/login`} element={<Login />}></Route>
        <Route path={`/mypage`} element={<MyPage />}></Route>
        <Route path={`/reviews`} element={<Review />}></Route>
        <Route path={`/reviews/:universityId`} element={<ReviewDetail />}></Route>
        <Route path={`/reviewPosting`} element={<ReviewPosting />}></Route>
        <Route path={`/reviews/:universityId/textDataPage`} element={<TextDataPage />}></Route>
        <Route path={`/reviews/:universityId/dorm`} element={<Dorm/>}></Route>
        <Route path={`/login/oauth2/code/google`} element={<Loading />}></Route>
        <Route path={`/reviews/:universityId/accGrade`} element={<AccGrade/>}></Route>
        <Route path={`/reviews/:universityId/activity`} element={<Activity/>}></Route>
        <Route path={`/reviews/:universityId/etc`} element={<Etc/>}></Route>
        <Route path={`/reviews/:universityId/message`} element={<Message/>}></Route>
        <Route path={`/reviews/:universityId/univinfo`} element={<UnivInfo/>}></Route>
        <Route path={`/prediction`} element={<Prediction />}></Route>
        <Route path={`/afterLogin`} element={<AfterLogin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

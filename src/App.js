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

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Main />}></Route>
        <Route path={`/chat`} element={<Chat />}></Route>
        <Route path={`/chatDetail`} element={<ChatDetail />}></Route>
        <Route path={`/community`} element={<Community />}></Route>
        <Route path={`/communityDetail`} element={<CommunityDetail />}></Route>
        <Route path={`communityPosting`} element={<CommunityPosting />}></Route>
        <Route path={`/cost`} element={<Cost />}></Route>
        <Route path={`/courseList`} element={<CourseList />}></Route>
        <Route path={`/info`} element={<Info />}></Route>
        <Route path={`/infoDetail/`} element={<InfoDetail />}></Route>
        <Route path={`/login`} element={<Login />}></Route>
        <Route path={`/mypage`} element={<MyPage />}></Route>
        <Route path={`/review`} element={<Review />}></Route>
        <Route path={`/reviewDetail`} element={<ReviewDetail />}></Route>
        <Route path={`/reviewPosting`} element={<ReviewPosting />}></Route>
        <Route path={`textDataPage`} element={<TextDataPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

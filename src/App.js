import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import FindID from "./pages/findID";
import FindPW from "./pages/findPW";
import ResMain from "./pages/reservationMain";
import ReservationCheck from "./pages/reservationCheck";
import ReservationUnable from "./pages/reservationUnable";
import ReservationComplete from "./pages/reservationComplete";
import Reservation from "./pages/reservation";
import ReservationNoShow from "./pages/reservationNoShow";
import MyPageStart from "./pages/mypageStart";
import MyPageInfo from "./pages/mypageInfo";
import MyPageInfoEdit from "./pages/mypageInfoEdit";
import MyPageResInquiry from "./pages/mypageResInquiry";
import Home from "./pages/home";
import Lookup from "./pages/lookup";
import FindIDResult from "./pages/findIDResult";
import FindPWResult from "./pages/findPWResult";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/findID" element={<FindID />} />
          <Route path="/findPW" element={<FindPW />} />
          <Route path="/reservationMain" element={<ResMain />} />
          <Route path="/reservationCheck" element={<ReservationCheck />} />
          <Route path="/reservationUnable" element={<ReservationUnable />} />
          <Route
            path="/reservationComplete"
            element={<ReservationComplete />}
          />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservationNoShow" element={<ReservationNoShow />} />
          <Route path="/mypageStart" element={<MyPageStart />} />
          <Route path="/mypageInfo" element={<MyPageInfo />} />
          <Route path="/mypageInfoEdit" element={<MyPageInfoEdit />} />
          <Route path="/mypageResInquiry" element={<MyPageResInquiry />} />
          <Route path="/" element={<Home />} />
          <Route path="/lookup" element={<Lookup />} />
          <Route path="/findIDResult" element={<FindIDResult />} />
          <Route path="/findPWResult" element={<FindPWResult />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

import { FC, memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import { SignIn } from "./components/SignIn/SignIn";
import { Signup } from "./components/Signup/Signup";
import { Verify } from "./components/Verify/Verify";
import { Onboarding } from "./components/Onboarding/Onboarding";
import { ProfileDetails } from "./components/ProfileDetails/ProfileDetails";
import { ForgetPassword } from "./components/ForgetPassword/ForgetPassword";

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Onboarding />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/verify-token" element={<Verify />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
});

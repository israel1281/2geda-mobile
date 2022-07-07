import React, { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Ellipse3Icon } from "./Ellipse3Icon";
import { Ellipse4Icon } from "./Ellipse4Icon";
import classes from "./Onboarding.module.css";
import Logo from "../../Assets/_2GEDA11.png";
import { Splash } from "../Splash/Splash";
import { Slide } from "react-slideshow-image";
import { Carousel } from "antd";

interface Props {
  className?: string;
  classes?: {
    _2GEDA11?: string;
    connectWithBusinessAroundYourL?: string;
    meetProspectiveClientsAndVendo?: string;
    rectangle4?: string;
    ellipse3?: string;
    ellipse4?: string;
    rectangle3?: string;
    openAnAccount?: string;
    rectangle32?: string;
    signIn?: string;
  };
}

export const Onboarding: FC<Props> = memo(function Onboarding(props = {}) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const LandingIntro = [
    {
      title: "Unlock Business and Personal Potentials"
    },
    {
      title: "Connect with Business around your locality"
    },
    {
      title: "Post free ads instantly on the Marketplace"
    }
  ];

  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const delay = 2500;

  const [index, setIndex] = React.useState<number>(0);
  const timeoutRef = React.useRef<any>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const Landing = () => {
    return (
      <div className={`${classes.root} ${props.className || ""}`}>
        <img
          src={Logo}
          alt="logo"
          className={`${classes._2GEDA11} ${props.classes?._2GEDA11 || ""}`}
        />
        <div
          className={`${classes.connectWithBusinessAroundYourL} ${
            props.classes?.connectWithBusinessAroundYourL || ""
          }`}
        >
          {colors.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundColor }}
            ></div>
          ))}
        </div>
        <div
          className={`${classes.meetProspectiveClientsAndVendo} ${
            props.classes?.meetProspectiveClientsAndVendo || ""
          }`}
        >
          Meet prospective clients and vendors for your next product or service
          needs
        </div>
        <div
          className={`${classes.rectangle4} ${props.classes?.rectangle4 || ""}`}
        ></div>
        <Ellipse3Icon
          className={`${classes.ellipse3} ${props.classes?.ellipse3 || ""}`}
        />
        <Ellipse4Icon
          className={`${classes.ellipse4} ${props.classes?.ellipse4 || ""}`}
        />
        <button
          onClick={() => {
            navigate("/signup");
          }}
          className={`${classes.rectangle3} ${props.classes?.rectangle3 || ""}`}
        >
          Open an account
        </button>
        <div
          className={`${classes.openAnAccount} ${
            props.classes?.openAnAccount || ""
          }`}
        >
          Open an account
        </div>
        <button
          onClick={() => {
            navigate("/signin");
          }}
          className={`${classes.rectangle32} ${
            props.classes?.rectangle32 || ""
          }`}
        >
          signIn
        </button>
      </div>
    );
  };

  return <>{isLoading ? <Splash /> : <Landing />}</>;
});

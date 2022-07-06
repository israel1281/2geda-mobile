import React, { FC, memo } from "react";
import Logo from "../../Assets/_2GEDA11.png";
import { useNavigate } from "react-router-dom";
import { BellIcon } from "./BellIcon";
import { CheckCircleIcon } from "./CheckCircleIcon";
import { CheckCircleIcon2 } from "./CheckCircleIcon2";
import { Ellipse17Icon } from "./Ellipse17Icon";
import { Ellipse17Icon2 } from "./Ellipse17Icon2";
import { Ellipse17Icon3 } from "./Ellipse17Icon3";
import { Ellipse17Icon4 } from "./Ellipse17Icon4";
import { Ellipse18Icon } from "./Ellipse18Icon";
import { Ellipse18Icon2 } from "./Ellipse18Icon2";
import { Ellipse19Icon } from "./Ellipse19Icon";
import { Ellipse19Icon2 } from "./Ellipse19Icon2";
import { Ellipse20Icon } from "./Ellipse20Icon";
import { Ellipse20Icon2 } from "./Ellipse20Icon2";
import { Ellipse21Icon } from "./Ellipse21Icon";
import { Ellipse21Icon2 } from "./Ellipse21Icon2";
import { Ellipse21Icon3 } from "./Ellipse21Icon3";
import { Ellipse21Icon4 } from "./Ellipse21Icon4";
import { Ellipse21Icon5 } from "./Ellipse21Icon5";
import { Ellipse22Icon } from "./Ellipse22Icon";
import { Group48Icon } from "./Group48Icon";
import { GroupIcon } from "./GroupIcon";
import { GroupIcon2 } from "./GroupIcon2";
import { GroupIcon3 } from "./GroupIcon3";
import { GroupIcon4 } from "./GroupIcon4";
import { GroupIcon5 } from "./GroupIcon5";
import { GroupIcon6 } from "./GroupIcon6";
import { GroupIcon7 } from "./GroupIcon7";
import { GroupIcon8 } from "./GroupIcon8";
import { GroupIcon9 } from "./GroupIcon9";
import { GroupIcon10 } from "./GroupIcon10";
import { GroupIcon11 } from "./GroupIcon11";
import { GroupIcon12 } from "./GroupIcon12";
import { GroupIcon13 } from "./GroupIcon13";
import { GroupIcon14 } from "./GroupIcon14";
import { GroupIcon15 } from "./GroupIcon15";
import { GroupIcon16 } from "./GroupIcon16";
import { GroupIcon17 } from "./GroupIcon17";
import { GroupIcon18 } from "./GroupIcon18";
import classes from "./Home.module.css";
import { HouseIcon } from "./HouseIcon";
import { Line2Icon } from "./Line2Icon";
import { Line2Icon2 } from "./Line2Icon2";
import { Line2Icon3 } from "./Line2Icon3";
import { Line2Icon4 } from "./Line2Icon4";
import { Line2Icon5 } from "./Line2Icon5";
import { Line2Icon6 } from "./Line2Icon6";
import { OptionsIcon } from "./OptionsIcon";
import { OptionsIcon2 } from "./OptionsIcon2";
import { OptionsIcon3 } from "./OptionsIcon3";
import { OptionsIcon4 } from "./OptionsIcon4";
import { Polygon1Icon } from "./Polygon1Icon";
import { Polygon1Icon2 } from "./Polygon1Icon2";
import { Polygon1Icon3 } from "./Polygon1Icon3";
import { Polygon1Icon4 } from "./Polygon1Icon4";
import { Polygon1Icon5 } from "./Polygon1Icon5";
import { Rectangle37Icon } from "./Rectangle37Icon";
import { Rectangle37Icon2 } from "./Rectangle37Icon2";
import { Rectangle37Icon3 } from "./Rectangle37Icon3";
import { Rectangle37Icon4 } from "./Rectangle37Icon4";
import { Rectangle37Icon5 } from "./Rectangle37Icon5";
import { Rectangle37Icon6 } from "./Rectangle37Icon6";
import { Rectangle38Icon } from "./Rectangle38Icon";
import { Rectangle38Icon2 } from "./Rectangle38Icon2";
import { Rectangle38Icon3 } from "./Rectangle38Icon3";
import { Rectangle38Icon4 } from "./Rectangle38Icon4";
import { Rectangle38Icon5 } from "./Rectangle38Icon5";
import { Rectangle38Icon6 } from "./Rectangle38Icon6";
import { SearchIcon } from "./SearchIcon";
import { Star1Icon } from "./Star1Icon";
import { Star1Icon2 } from "./Star1Icon2";
import { StorefrontIcon } from "./StorefrontIcon";
import { UnsplashE9uj65vwgmeIcon } from "./UnsplashE9uj65vwgmeIcon";
import { UnsplashK84vnnzxmtqIcon } from "./UnsplashK84vnnzxmtqIcon";
import { UsercircleIcon } from "./UsercircleIcon";
import { VectorIcon } from "./VectorIcon";
import { VectorIcon2 } from "./VectorIcon2";
import { VectorIcon3 } from "./VectorIcon3";
import { VectorIcon4 } from "./VectorIcon4";
import { VectorIcon5 } from "./VectorIcon5";
import { VectorIcon6 } from "./VectorIcon6";
import { VectorIcon7 } from "./VectorIcon7";
import { VectorIcon8 } from "./VectorIcon8";
import { VectorIcon9 } from "./VectorIcon9";
import { VectorIcon10 } from "./VectorIcon10";

interface Props {
  className?: string;
  classes?: {
    frame8?: string;
    rectangle35?: string;
    drSalemLawal?: string;
    lagosNigeria?: string;
    _1hrAgo?: string;
    pharmacist?: string;
    thisIsTheOpportunityToJoinTheW?: string;
    unsplashSq5P00L7lXc?: string;
    options?: string;
    line2?: string;
    vector?: string;
    group?: string;
    group2?: string;
    group3?: string;
    _32K?: string;
    _115?: string;
    _5?: string;
    _13K?: string;
    ellipse21?: string;
    polygon1?: string;
    ellipse17?: string;
    rectangle36?: string;
    comment?: string;
    yourCommentGoesHere?: string;
    seeAllComments?: string;
    rectangle37?: string;
    rectangle38?: string;
    post?: string;
    star1?: string;
    checkCircle?: string;
    frame5?: string;
    rectangle352?: string;
    ruthObe?: string;
    lagosNigeria2?: string;
    _1hrAgo2?: string;
    professionalTechConsultant?: string;
    thisIsTheOpportunityToJoinTheW2?: string;
    unsplashXKimW0pke6w?: string;
    options2?: string;
    line22?: string;
    vector2?: string;
    group4?: string;
    group5?: string;
    group6?: string;
    _32K2?: string;
    _1152?: string;
    _52?: string;
    _13K2?: string;
    ellipse212?: string;
    polygon12?: string;
    ellipse172?: string;
    rectangle362?: string;
    comment2?: string;
    yourCommentGoesHere2?: string;
    seeAllComments2?: string;
    rectangle372?: string;
    rectangle382?: string;
    post2?: string;
    frame3?: string;
    rectangle353?: string;
    drSalemLawal2?: string;
    lagosNigeria3?: string;
    _1hrAgo3?: string;
    pharmacist2?: string;
    thisIsTheOpportunityToJoinTheW3?: string;
    unsplashSq5P00L7lXc2?: string;
    options3?: string;
    line23?: string;
    vector3?: string;
    group7?: string;
    group8?: string;
    group9?: string;
    _32K3?: string;
    _1153?: string;
    _53?: string;
    _13K3?: string;
    ellipse213?: string;
    polygon13?: string;
    ellipse173?: string;
    rectangle363?: string;
    comment3?: string;
    yourCommentGoesHere3?: string;
    seeAllComments3?: string;
    rectangle373?: string;
    rectangle383?: string;
    post3?: string;
    star12?: string;
    checkCircle2?: string;
    frame6?: string;
    rectangle354?: string;
    chimamandaOkoye?: string;
    lagosNigeria4?: string;
    _1hrAgo4?: string;
    educationSpecialist?: string;
    thisIsTheOpportunityToJoinTheW4?: string;
    unsplashHpRGrfOIybc?: string;
    ellipse18?: string;
    ellipse19?: string;
    ellipse20?: string;
    line24?: string;
    vector4?: string;
    group10?: string;
    group11?: string;
    group12?: string;
    _32K4?: string;
    _1154?: string;
    _54?: string;
    _13K4?: string;
    ellipse214?: string;
    polygon14?: string;
    unsplashE9uJ65vwGmE?: string;
    rectangle364?: string;
    comment4?: string;
    yourCommentGoesHere4?: string;
    seeAllComments4?: string;
    rectangle374?: string;
    rectangle384?: string;
    post4?: string;
    frame4?: string;
    rectangle355?: string;
    _1hrAgo5?: string;
    checkOutThisAmazingBeachPartyC?: string;
    unsplashU6t80TWJ1DM?: string;
    options4?: string;
    line25?: string;
    vector5?: string;
    group13?: string;
    group14?: string;
    group15?: string;
    _32K5?: string;
    _1155?: string;
    _55?: string;
    _13K5?: string;
    group48?: string;
    beccaTouches?: string;
    abujuNigeria?: string;
    travelsAndTourism?: string;
    ellipse174?: string;
    rectangle365?: string;
    comment5?: string;
    yourCommentGoesHere5?: string;
    seeAllComments5?: string;
    rectangle375?: string;
    rectangle385?: string;
    post5?: string;
    frame7?: string;
    rectangle356?: string;
    tayoAuto?: string;
    lagosNigeria5?: string;
    _1hrAgo6?: string;
    professionalTechConsultant2?: string;
    thisIsTheOpportunityToJoinTheW5?: string;
    unsplash2swaWy4Xhb0?: string;
    ellipse182?: string;
    ellipse192?: string;
    ellipse202?: string;
    line26?: string;
    vector6?: string;
    group16?: string;
    group17?: string;
    group18?: string;
    _32K6?: string;
    _1156?: string;
    _56?: string;
    _13K6?: string;
    ellipse215?: string;
    polygon15?: string;
    unsplashK84vnnzxmTQ?: string;
    rectangle366?: string;
    comment6?: string;
    yourCommentGoesHere6?: string;
    seeAllComments6?: string;
    rectangle376?: string;
    rectangle386?: string;
    post6?: string;
    frame2?: string;
    rectangle43?: string;
    feeds?: string;
    rectangle44?: string;
    agro?: string;
    rectangle442?: string;
    agro2?: string;
    rectangle443?: string;
    foods?: string;
    rectangle444?: string;
    travels?: string;
    rectangle445?: string;
    luxury?: string;
    rectangle34?: string;
    _2GEDA11?: string;
    rectangle45?: string;
    house?: string;
    home?: string;
    storefront?: string;
    outlet?: string;
    messages?: string;
    vector7?: string;
    vector8?: string;
    vector9?: string;
    vector10?: string;
    notification?: string;
    bell?: string;
    profile?: string;
    userCircle?: string;
    rectangle32?: string;
    searchNamesProductsOrServices?: string;
    search?: string;
    easterSales_01v31?: string;
    ellipse22?: string;
    unnamed?: string;
  };
}
export const Home: FC<Props> = memo(function Home(props = {}) {
  const navigate = useNavigate();

  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <div className={`${classes.frame8} ${props.classes?.frame8 || ""}`}>
        <div
          className={`${classes.rectangle35} ${
            props.classes?.rectangle35 || ""
          }`}
        ></div>
        <div
          className={`${classes.drSalemLawal} ${
            props.classes?.drSalemLawal || ""
          }`}
        >
          Dr. Salem Lawal
        </div>
        <div
          className={`${classes.lagosNigeria} ${
            props.classes?.lagosNigeria || ""
          }`}
        >
          Lagos, Nigeria
        </div>
        <div className={`${classes._1hrAgo} ${props.classes?._1hrAgo || ""}`}>
          1hr ago
        </div>
        <div
          className={`${classes.pharmacist} ${props.classes?.pharmacist || ""}`}
        >
          Pharmacist
        </div>
        <div
          className={`${classes.thisIsTheOpportunityToJoinTheW} ${
            props.classes?.thisIsTheOpportunityToJoinTheW || ""
          }`}
        >
          <span className={classes.labelWrapper}>
            <span className={classes.label}>
              This is the Opportunity to Join the World Leading Tech
              Professionals in 2022. All you need do is to register with the
              link below
              <br />
              <br />
            </span>
            <span className={classes.label2}>www.ileifetech.com/freshmen</span>
          </span>
        </div>
        <img
          src={Logo}
          alt="logo"
          className={`${classes.unsplashSq5P00L7lXc} ${
            props.classes?.unsplashSq5P00L7lXc || ""
          }`}
        />
        <OptionsIcon
          className={`${classes.options} ${props.classes?.options || ""}`}
        />
        <Line2Icon
          className={`${classes.line2} ${props.classes?.line2 || ""}`}
        />
        <VectorIcon
          className={`${classes.vector} ${props.classes?.vector || ""}`}
        />
        <GroupIcon
          className={`${classes.group} ${props.classes?.group || ""}`}
        />
        <GroupIcon2
          className={`${classes.group2} ${props.classes?.group2 || ""}`}
        />
        <GroupIcon3
          className={`${classes.group3} ${props.classes?.group3 || ""}`}
        />
        <div className={`${classes._32K} ${props.classes?._32K || ""}`}>
          3.2K
        </div>
        <div className={`${classes._115} ${props.classes?._115 || ""}`}>
          115
        </div>
        <div className={`${classes._5} ${props.classes?._5 || ""}`}>5</div>
        <div className={`${classes._13K} ${props.classes?._13K || ""}`}>
          1.3K
        </div>
        <Ellipse21Icon
          className={`${classes.ellipse21} ${props.classes?.ellipse21 || ""}`}
        />
        <Polygon1Icon
          className={`${classes.polygon1} ${props.classes?.polygon1 || ""}`}
        />
        <img
          src={Logo}
          alt="logo"
          className={`${classes.ellipse17} ${props.classes?.ellipse17 || ""}`}
        />
        <div
          className={`${classes.rectangle36} ${
            props.classes?.rectangle36 || ""
          }`}
        ></div>
        <div className={`${classes.comment} ${props.classes?.comment || ""}`}>
          Comment
        </div>
        <div
          className={`${classes.yourCommentGoesHere} ${
            props.classes?.yourCommentGoesHere || ""
          }`}
        >
          Your comment goes here
        </div>
        <div
          className={`${classes.seeAllComments} ${
            props.classes?.seeAllComments || ""
          }`}
        >
          See all comments
        </div>
        <input
          type="text"
          className={`${classes.rectangle37} ${
            props.classes?.rectangle37 || ""
          }`}
        />
        <Rectangle38Icon
          className={`${classes.rectangle38} ${
            props.classes?.rectangle38 || ""
          }`}
        />
        <div className={`${classes.post} ${props.classes?.post || ""}`}>
          Post
        </div>
        <Star1Icon
          className={`${classes.star1} ${props.classes?.star1 || ""}`}
        />
        <CheckCircleIcon
          className={`${classes.checkCircle} ${
            props.classes?.checkCircle || ""
          }`}
        />
      </div>
      <div
        className={`${classes.rectangle34} ${props.classes?.rectangle34 || ""}`}
      >
        <img
          src={Logo}
          alt="logo"
          className={`${classes._2GEDA11} ${props.classes?._2GEDA11 || ""}`}
        />
        <div
          className={`${classes.rectangle32} ${
            props.classes?.rectangle32 || ""
          }`}
        ></div>
        <SearchIcon
          className={`${classes.search} ${props.classes?.search || ""}`}
        />
      </div>
      <div
        className={`${classes.rectangle45} ${props.classes?.rectangle45 || ""}`}
      ></div>
      <HouseIcon className={`${classes.house} ${props.classes?.house || ""}`} />
      <div className={`${classes.home} ${props.classes?.home || ""}`}>Home</div>
      <StorefrontIcon
        className={`${classes.storefront} ${props.classes?.storefront || ""}`}
      />
      <div className={`${classes.outlet} ${props.classes?.outlet || ""}`}>
        Outlet
      </div>
      <div className={`${classes.messages} ${props.classes?.messages || ""}`}>
        Messages
      </div>
      <VectorIcon7
        className={`${classes.vector7} ${props.classes?.vector7 || ""}`}
      />
      <VectorIcon8
        className={`${classes.vector8} ${props.classes?.vector8 || ""}`}
      />
      <VectorIcon9
        className={`${classes.vector9} ${props.classes?.vector9 || ""}`}
      />
      <VectorIcon10
        className={`${classes.vector10} ${props.classes?.vector10 || ""}`}
      />
      <div
        className={`${classes.notification} ${
          props.classes?.notification || ""
        }`}
      >
        Notification
      </div>
      <BellIcon className={`${classes.bell} ${props.classes?.bell || ""}`} />
      <div className={`${classes.profile} ${props.classes?.profile || ""}`}>
        Profile
      </div>
      <UsercircleIcon
        className={`${classes.userCircle} ${props.classes?.userCircle || ""}`}
      />
      <SearchIcon
        className={`${classes.search} ${props.classes?.search || ""}`}
      />
      <div
        className={`${classes.easterSales_01v31} ${
          props.classes?.easterSales_01v31 || ""
        }`}
      ></div>
      <Ellipse22Icon
        onClick={() => {
          navigate("/upload");
        }}
        className={`${classes.ellipse22} ${props.classes?.ellipse22 || ""}`}
      />
      <div
        onClick={() => {
          navigate("/upload");
        }}
        className={`${classes.unnamed} ${props.classes?.unnamed || ""}`}
      >
        +
      </div>
    </div>
  );
});

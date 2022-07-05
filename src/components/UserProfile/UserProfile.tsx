import React, { FC, memo } from "react";

import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { CheckCircleIcon } from "./CheckCircleIcon";
import { CheckCircleIcon2 } from "./CheckCircleIcon2";
import { DotsthreecircleIcon } from "./DotsthreecircleIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
import { Ellipse17Icon } from "./Ellipse17Icon";
import { Ellipse17Icon2 } from "./Ellipse17Icon2";
import { Ellipse21Icon } from "./Ellipse21Icon";
import { Ellipse21Icon2 } from "./Ellipse21Icon2";
import { Ellipse72Icon } from "./Ellipse72Icon";
import { GroupIcon } from "./GroupIcon";
import { GroupIcon2 } from "./GroupIcon2";
import { GroupIcon3 } from "./GroupIcon3";
import { GroupIcon4 } from "./GroupIcon4";
import { GroupIcon5 } from "./GroupIcon5";
import { GroupIcon6 } from "./GroupIcon6";
import { Line2Icon } from "./Line2Icon";
import { Line2Icon2 } from "./Line2Icon2";
import { Line2Icon3 } from "./Line2Icon3";
import { Line13Icon } from "./Line13Icon";
import { OptionsIcon } from "./OptionsIcon";
import { OptionsIcon2 } from "./OptionsIcon2";
import { Polygon1Icon } from "./Polygon1Icon";
import { Polygon1Icon2 } from "./Polygon1Icon2";
import { Rectangle37Icon } from "./Rectangle37Icon";
import { Rectangle37Icon2 } from "./Rectangle37Icon2";
import { Rectangle38Icon } from "./Rectangle38Icon";
import { Rectangle38Icon2 } from "./Rectangle38Icon2";
import { Star1Icon } from "./Star1Icon";
import { Star1Icon2 } from "./Star1Icon2";
import classes from "./UserProfile.module.css";
import { VectorIcon } from "./VectorIcon";
import { VectorIcon2 } from "./VectorIcon2";
import { useNavigate } from "react-router-dom"
import { successAlert, errorAlert } from '../../utils/Alert'

interface Props {
  className?: string;
  classes?: {
    ellipse72?: string;
    rectangle187?: string;
    posts570?: string;
    followers18m?: string;
    following23k?: string;
    ruthObe?: string;
    lagosNigeria?: string;
    professionalTechConsultant?: string;
    rectangle196?: string;
    following?: string;
    rectangle1962?: string;
    directMessage?: string;
    posts560?: string;
    outlet?: string;
    line2?: string;
    line13?: string;
    line12?: string;
    unsplashBQMZ5ligqps?: string;
    frame8?: string;
    rectangle35?: string;
    drSalemLawal?: string;
    lagosNigeria2?: string;
    _1hrAgo?: string;
    pharmacist?: string;
    thisIsTheOpportunityToJoinTheW?: string;
    unsplashSq5P00L7lXc?: string;
    options?: string;
    line22?: string;
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
    frame9?: string;
    rectangle352?: string;
    drSalemLawal2?: string;
    lagosNigeria3?: string;
    _1hrAgo2?: string;
    pharmacist2?: string;
    thisIsTheOpportunityToJoinTheW2?: string;
    unsplashSq5P00L7lXc2?: string;
    options2?: string;
    line23?: string;
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
    star12?: string;
    checkCircle2?: string;
    rectangle214?: string;
    profile?: string;
    dotsThreeCircle?: string;
    ellipse14?: string;
    arrowLeft?: string;
  };
}

interface initialState {
  email: string | null;
  password: string;
  first_name: string;
  surname: string;
  username: string;
}
export const UserProfile: FC<Props> = memo(function UserProfile(props = {}) {
  const [userData, setUserData] = React.useState<Partial<initialState>>({
    email: localStorage.getItem("email"),
    password: "",
    first_name: "",
    surname: "",
    username: ""
  })
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <Ellipse72Icon
        className={`${classes.ellipse72} ${props.classes?.ellipse72 || ""}`}
      />
      <div
        className={`${classes.rectangle187} ${
          props.classes?.rectangle187 || ""
        }`}
      ></div>
      <div className={`${classes.posts570} ${props.classes?.posts570 || ""}`}>
        <span className={classes.labelWrapper}>
          <span className={classes.label}>
            Posts
            <br />
          </span>
          <span className={classes.label2}>570</span>
        </span>
      </div>
      <div
        className={`${classes.followers18m} ${
          props.classes?.followers18m || ""
        }`}
      >
        <span className={classes.labelWrapper2}>
          <span className={classes.label3}>
            Followers
            <br />
          </span>
          <span className={classes.label4}>18m</span>
        </span>
      </div>
      <div
        className={`${classes.following23k} ${
          props.classes?.following23k || ""
        }`}
      >
        <span className={classes.labelWrapper3}>
          <span className={classes.label5}>
            Following
            <br />
          </span>
          <span className={classes.label6}>23k</span>
        </span>
      </div>
      <div className={`${classes.ruthObe} ${props.classes?.ruthObe || ""}`}>
        Ruth obe
      </div>
      <div
        className={`${classes.lagosNigeria} ${
          props.classes?.lagosNigeria || ""
        }`}
      >
        Lagos, Nigeria
      </div>
      <div
        className={`${classes.professionalTechConsultant} ${
          props.classes?.professionalTechConsultant || ""
        }`}
      >
        Professional Tech Consultant
      </div>
      <div
        className={`${classes.rectangle196} ${
          props.classes?.rectangle196 || ""
        }`}
      ></div>
      <div className={`${classes.following} ${props.classes?.following || ""}`}>
        Following
      </div>
      <div
        className={`${classes.rectangle1962} ${
          props.classes?.rectangle1962 || ""
        }`}
      ></div>
      <div
        className={`${classes.directMessage} ${
          props.classes?.directMessage || ""
        }`}
      >
        Direct message
      </div>
      <div className={`${classes.posts560} ${props.classes?.posts560 || ""}`}>
        Posts (560)
      </div>
      <div className={`${classes.outlet} ${props.classes?.outlet || ""}`}>
        Outlet (0)
      </div>
      <Line2Icon className={`${classes.line2} ${props.classes?.line2 || ""}`} />
      <Line13Icon
        className={`${classes.line13} ${props.classes?.line13 || ""}`}
      />
      <div className={`${classes.line12} ${props.classes?.line12 || ""}`}></div>
      <div
        className={`${classes.unsplashBQMZ5ligqps} ${
          props.classes?.unsplashBQMZ5ligqps || ""
        }`}
      ></div>
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
          className={`${classes.lagosNigeria2} ${
            props.classes?.lagosNigeria2 || ""
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
          <span className={classes.labelWrapper4}>
            <span className={classes.label7}>
              This is the Opportunity to Join the World Leading Tech
              Professionals in 2022. All you need do is to register with the
              link below
              <br />
              <br />
            </span>
            <span className={classes.label8}>www.ileifetech.com/freshmen</span>
          </span>
        </div>
        <div
          className={`${classes.unsplashSq5P00L7lXc} ${
            props.classes?.unsplashSq5P00L7lXc || ""
          }`}
        ></div>
        <OptionsIcon
          className={`${classes.options} ${props.classes?.options || ""}`}
        />
        <Line2Icon2
          className={`${classes.line22} ${props.classes?.line22 || ""}`}
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
        <Ellipse17Icon
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
        <Rectangle37Icon
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
      <div className={`${classes.frame9} ${props.classes?.frame9 || ""}`}>
        <div
          className={`${classes.rectangle352} ${
            props.classes?.rectangle352 || ""
          }`}
        ></div>
        <div
          className={`${classes.drSalemLawal2} ${
            props.classes?.drSalemLawal2 || ""
          }`}
        >
          Dr. Salem Lawal
        </div>
        <div
          className={`${classes.lagosNigeria3} ${
            props.classes?.lagosNigeria3 || ""
          }`}
        >
          Lagos, Nigeria
        </div>
        <div className={`${classes._1hrAgo2} ${props.classes?._1hrAgo2 || ""}`}>
          1hr ago
        </div>
        <div
          className={`${classes.pharmacist2} ${
            props.classes?.pharmacist2 || ""
          }`}
        >
          Pharmacist
        </div>
        <div
          className={`${classes.thisIsTheOpportunityToJoinTheW2} ${
            props.classes?.thisIsTheOpportunityToJoinTheW2 || ""
          }`}
        >
          <span className={classes.labelWrapper5}>
            <span className={classes.label9}>
              This is the Opportunity to Join the World Leading Tech
              Professionals in 2022. All you need do is to register with the
              link below
              <br />
              <br />
            </span>
            <span className={classes.label10}>www.ileifetech.com/freshmen</span>
          </span>
        </div>
        <div
          className={`${classes.unsplashSq5P00L7lXc2} ${
            props.classes?.unsplashSq5P00L7lXc2 || ""
          }`}
        ></div>
        <OptionsIcon2
          className={`${classes.options2} ${props.classes?.options2 || ""}`}
        />
        <Line2Icon3
          className={`${classes.line23} ${props.classes?.line23 || ""}`}
        />
        <VectorIcon2
          className={`${classes.vector2} ${props.classes?.vector2 || ""}`}
        />
        <GroupIcon4
          className={`${classes.group4} ${props.classes?.group4 || ""}`}
        />
        <GroupIcon5
          className={`${classes.group5} ${props.classes?.group5 || ""}`}
        />
        <GroupIcon6
          className={`${classes.group6} ${props.classes?.group6 || ""}`}
        />
        <div className={`${classes._32K2} ${props.classes?._32K2 || ""}`}>
          3.2K
        </div>
        <div className={`${classes._1152} ${props.classes?._1152 || ""}`}>
          115
        </div>
        <div className={`${classes._52} ${props.classes?._52 || ""}`}>5</div>
        <div className={`${classes._13K2} ${props.classes?._13K2 || ""}`}>
          1.3K
        </div>
        <Ellipse21Icon2
          className={`${classes.ellipse212} ${props.classes?.ellipse212 || ""}`}
        />
        <Polygon1Icon2
          className={`${classes.polygon12} ${props.classes?.polygon12 || ""}`}
        />
        <Ellipse17Icon2
          className={`${classes.ellipse172} ${props.classes?.ellipse172 || ""}`}
        />
        <div
          className={`${classes.rectangle362} ${
            props.classes?.rectangle362 || ""
          }`}
        ></div>
        <div className={`${classes.comment2} ${props.classes?.comment2 || ""}`}>
          Comment
        </div>
        <div
          className={`${classes.yourCommentGoesHere2} ${
            props.classes?.yourCommentGoesHere2 || ""
          }`}
        >
          Your comment goes here
        </div>
        <div
          className={`${classes.seeAllComments2} ${
            props.classes?.seeAllComments2 || ""
          }`}
        >
          See all comments
        </div>
        <Rectangle37Icon2
          className={`${classes.rectangle372} ${
            props.classes?.rectangle372 || ""
          }`}
        />
        <Rectangle38Icon2
          className={`${classes.rectangle382} ${
            props.classes?.rectangle382 || ""
          }`}
        />
        <div className={`${classes.post2} ${props.classes?.post2 || ""}`}>
          Post
        </div>
        <Star1Icon2
          className={`${classes.star12} ${props.classes?.star12 || ""}`}
        />
        <CheckCircleIcon2
          className={`${classes.checkCircle2} ${
            props.classes?.checkCircle2 || ""
          }`}
        />
      </div>
      <div
        className={`${classes.rectangle214} ${
          props.classes?.rectangle214 || ""
        }`}
      ></div>
      <div className={`${classes.profile} ${props.classes?.profile || ""}`}>
        Profile
      </div>
      <DotsthreecircleIcon
        className={`${classes.dotsThreeCircle} ${
          props.classes?.dotsThreeCircle || ""
        }`}
      />
      <Ellipse14Icon
        className={`${classes.ellipse14} ${props.classes?.ellipse14 || ""}`}
      />
      <ArrowLeftIcon
        className={`${classes.arrowLeft} ${props.classes?.arrowLeft || ""}`}
      />
    </div>
  );
});

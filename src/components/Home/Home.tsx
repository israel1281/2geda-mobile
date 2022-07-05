import { FC, memo } from 'react';

import { BellIcon } from './BellIcon';
import { CheckCircleIcon } from './CheckCircleIcon';
import { CheckCircleIcon2 } from './CheckCircleIcon2';
import { Ellipse17Icon } from './Ellipse17Icon';
import { Ellipse17Icon2 } from './Ellipse17Icon2';
import { Ellipse17Icon3 } from './Ellipse17Icon3';
import { Ellipse17Icon4 } from './Ellipse17Icon4';
import { Ellipse18Icon } from './Ellipse18Icon';
import { Ellipse18Icon2 } from './Ellipse18Icon2';
import { Ellipse19Icon } from './Ellipse19Icon';
import { Ellipse19Icon2 } from './Ellipse19Icon2';
import { Ellipse20Icon } from './Ellipse20Icon';
import { Ellipse20Icon2 } from './Ellipse20Icon2';
import { Ellipse21Icon } from './Ellipse21Icon';
import { Ellipse21Icon2 } from './Ellipse21Icon2';
import { Ellipse21Icon3 } from './Ellipse21Icon3';
import { Ellipse21Icon4 } from './Ellipse21Icon4';
import { Ellipse21Icon5 } from './Ellipse21Icon5';
import { Ellipse22Icon } from './Ellipse22Icon';
import { Group48Icon } from './Group48Icon';
import { GroupIcon } from './GroupIcon';
import { GroupIcon2 } from './GroupIcon2';
import { GroupIcon3 } from './GroupIcon3';
import { GroupIcon4 } from './GroupIcon4';
import { GroupIcon5 } from './GroupIcon5';
import { GroupIcon6 } from './GroupIcon6';
import { GroupIcon7 } from './GroupIcon7';
import { GroupIcon8 } from './GroupIcon8';
import { GroupIcon9 } from './GroupIcon9';
import { GroupIcon10 } from './GroupIcon10';
import { GroupIcon11 } from './GroupIcon11';
import { GroupIcon12 } from './GroupIcon12';
import { GroupIcon13 } from './GroupIcon13';
import { GroupIcon14 } from './GroupIcon14';
import { GroupIcon15 } from './GroupIcon15';
import { GroupIcon16 } from './GroupIcon16';
import { GroupIcon17 } from './GroupIcon17';
import { GroupIcon18 } from './GroupIcon18';
import classes from './Home.module.css';
import { HouseIcon } from './HouseIcon';
import { Line2Icon } from './Line2Icon';
import { Line2Icon2 } from './Line2Icon2';
import { Line2Icon3 } from './Line2Icon3';
import { Line2Icon4 } from './Line2Icon4';
import { Line2Icon5 } from './Line2Icon5';
import { Line2Icon6 } from './Line2Icon6';
import { OptionsIcon } from './OptionsIcon';
import { OptionsIcon2 } from './OptionsIcon2';
import { OptionsIcon3 } from './OptionsIcon3';
import { OptionsIcon4 } from './OptionsIcon4';
import { Polygon1Icon } from './Polygon1Icon';
import { Polygon1Icon2 } from './Polygon1Icon2';
import { Polygon1Icon3 } from './Polygon1Icon3';
import { Polygon1Icon4 } from './Polygon1Icon4';
import { Polygon1Icon5 } from './Polygon1Icon5';
import { Rectangle37Icon } from './Rectangle37Icon';
import { Rectangle37Icon2 } from './Rectangle37Icon2';
import { Rectangle37Icon3 } from './Rectangle37Icon3';
import { Rectangle37Icon4 } from './Rectangle37Icon4';
import { Rectangle37Icon5 } from './Rectangle37Icon5';
import { Rectangle37Icon6 } from './Rectangle37Icon6';
import { Rectangle38Icon } from './Rectangle38Icon';
import { Rectangle38Icon2 } from './Rectangle38Icon2';
import { Rectangle38Icon3 } from './Rectangle38Icon3';
import { Rectangle38Icon4 } from './Rectangle38Icon4';
import { Rectangle38Icon5 } from './Rectangle38Icon5';
import { Rectangle38Icon6 } from './Rectangle38Icon6';
import { SearchIcon } from './SearchIcon';
import { Star1Icon } from './Star1Icon';
import { Star1Icon2 } from './Star1Icon2';
import { StorefrontIcon } from './StorefrontIcon';
import { UnsplashE9uj65vwgmeIcon } from './UnsplashE9uj65vwgmeIcon';
import { UnsplashK84vnnzxmtqIcon } from './UnsplashK84vnnzxmtqIcon';
import { UsercircleIcon } from './UsercircleIcon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';
import { VectorIcon6 } from './VectorIcon6';
import { VectorIcon7 } from './VectorIcon7';
import { VectorIcon8 } from './VectorIcon8';
import { VectorIcon9 } from './VectorIcon9';
import { VectorIcon10 } from './VectorIcon10';

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
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.frame8} ${props.classes?.frame8 || ''}`}>
        <div className={`${classes.rectangle35} ${props.classes?.rectangle35 || ''}`}></div>
        <div className={`${classes.drSalemLawal} ${props.classes?.drSalemLawal || ''}`}>Dr. Salem Lawal</div>
        <div className={`${classes.lagosNigeria} ${props.classes?.lagosNigeria || ''}`}>Lagos, Nigeria</div>
        <div className={`${classes._1hrAgo} ${props.classes?._1hrAgo || ''}`}>1hr ago</div>
        <div className={`${classes.pharmacist} ${props.classes?.pharmacist || ''}`}>Pharmacist</div>
        <div
          className={`${classes.thisIsTheOpportunityToJoinTheW} ${props.classes?.thisIsTheOpportunityToJoinTheW || ''}`}
        >
          <span className={classes.labelWrapper}>
            <span className={classes.label}>
              This is the Opportunity to Join the World Leading Tech Professionals in 2022. All you need do is to
              register with the link below
              <br />
              <br />
            </span>
            <span className={classes.label2}>www.ileifetech.com/freshmen</span>
          </span>
        </div>
        <div className={`${classes.unsplashSq5P00L7lXc} ${props.classes?.unsplashSq5P00L7lXc || ''}`}></div>
        <OptionsIcon className={`${classes.options} ${props.classes?.options || ''}`} />
        <Line2Icon className={`${classes.line2} ${props.classes?.line2 || ''}`} />
        <VectorIcon className={`${classes.vector} ${props.classes?.vector || ''}`} />
        <GroupIcon className={`${classes.group} ${props.classes?.group || ''}`} />
        <GroupIcon2 className={`${classes.group2} ${props.classes?.group2 || ''}`} />
        <GroupIcon3 className={`${classes.group3} ${props.classes?.group3 || ''}`} />
        <div className={`${classes._32K} ${props.classes?._32K || ''}`}>3.2K</div>
        <div className={`${classes._115} ${props.classes?._115 || ''}`}>115</div>
        <div className={`${classes._5} ${props.classes?._5 || ''}`}>5</div>
        <div className={`${classes._13K} ${props.classes?._13K || ''}`}>1.3K</div>
        <Ellipse21Icon className={`${classes.ellipse21} ${props.classes?.ellipse21 || ''}`} />
        <Polygon1Icon className={`${classes.polygon1} ${props.classes?.polygon1 || ''}`} />
        <Ellipse17Icon className={`${classes.ellipse17} ${props.classes?.ellipse17 || ''}`} />
        <div className={`${classes.rectangle36} ${props.classes?.rectangle36 || ''}`}></div>
        <div className={`${classes.comment} ${props.classes?.comment || ''}`}>Comment</div>
        <div className={`${classes.yourCommentGoesHere} ${props.classes?.yourCommentGoesHere || ''}`}>
          Your comment goes here
        </div>
        <div className={`${classes.seeAllComments} ${props.classes?.seeAllComments || ''}`}>See all comments</div>
        <Rectangle37Icon className={`${classes.rectangle37} ${props.classes?.rectangle37 || ''}`} />
        <Rectangle38Icon className={`${classes.rectangle38} ${props.classes?.rectangle38 || ''}`} />
        <div className={`${classes.post} ${props.classes?.post || ''}`}>Post</div>
        <Star1Icon className={`${classes.star1} ${props.classes?.star1 || ''}`} />
        <CheckCircleIcon className={`${classes.checkCircle} ${props.classes?.checkCircle || ''}`} />
      </div>
      <div className={`${classes.frame5} ${props.classes?.frame5 || ''}`}>
        <div className={`${classes.rectangle352} ${props.classes?.rectangle352 || ''}`}></div>
        <div className={`${classes.ruthObe} ${props.classes?.ruthObe || ''}`}>Ruth Obe</div>
        <div className={`${classes.lagosNigeria2} ${props.classes?.lagosNigeria2 || ''}`}>Lagos, Nigeria</div>
        <div className={`${classes._1hrAgo2} ${props.classes?._1hrAgo2 || ''}`}>1hr ago</div>
        <div className={`${classes.professionalTechConsultant} ${props.classes?.professionalTechConsultant || ''}`}>
          Professional Tech Consultant
        </div>
        <div
          className={`${classes.thisIsTheOpportunityToJoinTheW2} ${
            props.classes?.thisIsTheOpportunityToJoinTheW2 || ''
          }`}
        >
          <span className={classes.labelWrapper2}>
            <span className={classes.label3}>
              This is the Opportunity to Join the World Leading Tech Professionals in 2022. All you need do is to
              register with the link below
              <br />
              <br />
            </span>
            <span className={classes.label4}>www.ileifetech.com/freshmen</span>
          </span>
        </div>
        <div className={`${classes.unsplashXKimW0pke6w} ${props.classes?.unsplashXKimW0pke6w || ''}`}></div>
        <OptionsIcon2 className={`${classes.options2} ${props.classes?.options2 || ''}`} />
        <Line2Icon2 className={`${classes.line22} ${props.classes?.line22 || ''}`} />
        <VectorIcon2 className={`${classes.vector2} ${props.classes?.vector2 || ''}`} />
        <GroupIcon4 className={`${classes.group4} ${props.classes?.group4 || ''}`} />
        <GroupIcon5 className={`${classes.group5} ${props.classes?.group5 || ''}`} />
        <GroupIcon6 className={`${classes.group6} ${props.classes?.group6 || ''}`} />
        <div className={`${classes._32K2} ${props.classes?._32K2 || ''}`}>3.2K</div>
        <div className={`${classes._1152} ${props.classes?._1152 || ''}`}>115</div>
        <div className={`${classes._52} ${props.classes?._52 || ''}`}>5</div>
        <div className={`${classes._13K2} ${props.classes?._13K2 || ''}`}>1.3K</div>
        <Ellipse21Icon2 className={`${classes.ellipse212} ${props.classes?.ellipse212 || ''}`} />
        <Polygon1Icon2 className={`${classes.polygon12} ${props.classes?.polygon12 || ''}`} />
        <Ellipse17Icon2 className={`${classes.ellipse172} ${props.classes?.ellipse172 || ''}`} />
        <div className={`${classes.rectangle362} ${props.classes?.rectangle362 || ''}`}></div>
        <div className={`${classes.comment2} ${props.classes?.comment2 || ''}`}>Comment</div>
        <div className={`${classes.yourCommentGoesHere2} ${props.classes?.yourCommentGoesHere2 || ''}`}>
          Your comment goes here
        </div>
        <div className={`${classes.seeAllComments2} ${props.classes?.seeAllComments2 || ''}`}>See all comments</div>
        <Rectangle37Icon2 className={`${classes.rectangle372} ${props.classes?.rectangle372 || ''}`} />
        <Rectangle38Icon2 className={`${classes.rectangle382} ${props.classes?.rectangle382 || ''}`} />
        <div className={`${classes.post2} ${props.classes?.post2 || ''}`}>Post</div>
      </div>
      <div className={`${classes.frame3} ${props.classes?.frame3 || ''}`}>
        <div className={`${classes.rectangle353} ${props.classes?.rectangle353 || ''}`}></div>
        <div className={`${classes.drSalemLawal2} ${props.classes?.drSalemLawal2 || ''}`}>Dr. Salem Lawal</div>
        <div className={`${classes.lagosNigeria3} ${props.classes?.lagosNigeria3 || ''}`}>Lagos, Nigeria</div>
        <div className={`${classes._1hrAgo3} ${props.classes?._1hrAgo3 || ''}`}>1hr ago</div>
        <div className={`${classes.pharmacist2} ${props.classes?.pharmacist2 || ''}`}>Pharmacist</div>
        <div
          className={`${classes.thisIsTheOpportunityToJoinTheW3} ${
            props.classes?.thisIsTheOpportunityToJoinTheW3 || ''
          }`}
        >
          <span className={classes.labelWrapper3}>
            <span className={classes.label5}>
              This is the Opportunity to Join the World Leading Tech Professionals in 2022. All you need do is to
              register with the link below
              <br />
              <br />
            </span>
            <span className={classes.label6}>www.ileifetech.com/freshmen</span>
          </span>
        </div>
        <div className={`${classes.unsplashSq5P00L7lXc2} ${props.classes?.unsplashSq5P00L7lXc2 || ''}`}></div>
        <OptionsIcon3 className={`${classes.options3} ${props.classes?.options3 || ''}`} />
        <Line2Icon3 className={`${classes.line23} ${props.classes?.line23 || ''}`} />
        <VectorIcon3 className={`${classes.vector3} ${props.classes?.vector3 || ''}`} />
        <GroupIcon7 className={`${classes.group7} ${props.classes?.group7 || ''}`} />
        <GroupIcon8 className={`${classes.group8} ${props.classes?.group8 || ''}`} />
        <GroupIcon9 className={`${classes.group9} ${props.classes?.group9 || ''}`} />
        <div className={`${classes._32K3} ${props.classes?._32K3 || ''}`}>3.2K</div>
        <div className={`${classes._1153} ${props.classes?._1153 || ''}`}>115</div>
        <div className={`${classes._53} ${props.classes?._53 || ''}`}>5</div>
        <div className={`${classes._13K3} ${props.classes?._13K3 || ''}`}>1.3K</div>
        <Ellipse21Icon3 className={`${classes.ellipse213} ${props.classes?.ellipse213 || ''}`} />
        <Polygon1Icon3 className={`${classes.polygon13} ${props.classes?.polygon13 || ''}`} />
        <Ellipse17Icon3 className={`${classes.ellipse173} ${props.classes?.ellipse173 || ''}`} />
        <div className={`${classes.rectangle363} ${props.classes?.rectangle363 || ''}`}></div>
        <div className={`${classes.comment3} ${props.classes?.comment3 || ''}`}>Comment</div>
        <div className={`${classes.yourCommentGoesHere3} ${props.classes?.yourCommentGoesHere3 || ''}`}>
          Your comment goes here
        </div>
        <div className={`${classes.seeAllComments3} ${props.classes?.seeAllComments3 || ''}`}>See all comments</div>
        <Rectangle37Icon3 className={`${classes.rectangle373} ${props.classes?.rectangle373 || ''}`} />
        <Rectangle38Icon3 className={`${classes.rectangle383} ${props.classes?.rectangle383 || ''}`} />
        <div className={`${classes.post3} ${props.classes?.post3 || ''}`}>Post</div>
        <Star1Icon2 className={`${classes.star12} ${props.classes?.star12 || ''}`} />
        <CheckCircleIcon2 className={`${classes.checkCircle2} ${props.classes?.checkCircle2 || ''}`} />
      </div>
      <div className={`${classes.frame6} ${props.classes?.frame6 || ''}`}>
        <div className={`${classes.rectangle354} ${props.classes?.rectangle354 || ''}`}></div>
        <div className={`${classes.chimamandaOkoye} ${props.classes?.chimamandaOkoye || ''}`}>Chimamanda Okoye</div>
        <div className={`${classes.lagosNigeria4} ${props.classes?.lagosNigeria4 || ''}`}>Lagos, Nigeria</div>
        <div className={`${classes._1hrAgo4} ${props.classes?._1hrAgo4 || ''}`}>1hr ago</div>
        <div className={`${classes.educationSpecialist} ${props.classes?.educationSpecialist || ''}`}>
          Education Specialist
        </div>
        <div
          className={`${classes.thisIsTheOpportunityToJoinTheW4} ${
            props.classes?.thisIsTheOpportunityToJoinTheW4 || ''
          }`}
        >
          <span className={classes.labelWrapper4}>
            <span className={classes.label7}>
              This is the Opportunity to Join the World Leading Tech Professionals in 2022. All you need do is to
              register with the link below
              <br />
              <br />
            </span>
            <span className={classes.label8}>www.ileifetech.com/freshmen</span>
          </span>
        </div>
        <div className={`${classes.unsplashHpRGrfOIybc} ${props.classes?.unsplashHpRGrfOIybc || ''}`}></div>
        <Ellipse18Icon className={`${classes.ellipse18} ${props.classes?.ellipse18 || ''}`} />
        <Ellipse19Icon className={`${classes.ellipse19} ${props.classes?.ellipse19 || ''}`} />
        <Ellipse20Icon className={`${classes.ellipse20} ${props.classes?.ellipse20 || ''}`} />
        <Line2Icon4 className={`${classes.line24} ${props.classes?.line24 || ''}`} />
        <VectorIcon4 className={`${classes.vector4} ${props.classes?.vector4 || ''}`} />
        <GroupIcon10 className={`${classes.group10} ${props.classes?.group10 || ''}`} />
        <GroupIcon11 className={`${classes.group11} ${props.classes?.group11 || ''}`} />
        <GroupIcon12 className={`${classes.group12} ${props.classes?.group12 || ''}`} />
        <div className={`${classes._32K4} ${props.classes?._32K4 || ''}`}>3.2K</div>
        <div className={`${classes._1154} ${props.classes?._1154 || ''}`}>115</div>
        <div className={`${classes._54} ${props.classes?._54 || ''}`}>5</div>
        <div className={`${classes._13K4} ${props.classes?._13K4 || ''}`}>1.3K</div>
        <Ellipse21Icon4 className={`${classes.ellipse214} ${props.classes?.ellipse214 || ''}`} />
        <Polygon1Icon4 className={`${classes.polygon14} ${props.classes?.polygon14 || ''}`} />
        <UnsplashE9uj65vwgmeIcon
          className={`${classes.unsplashE9uJ65vwGmE} ${props.classes?.unsplashE9uJ65vwGmE || ''}`}
        />
        <div className={`${classes.rectangle364} ${props.classes?.rectangle364 || ''}`}></div>
        <div className={`${classes.comment4} ${props.classes?.comment4 || ''}`}>Comment</div>
        <div className={`${classes.yourCommentGoesHere4} ${props.classes?.yourCommentGoesHere4 || ''}`}>
          Your comment goes here
        </div>
        <div className={`${classes.seeAllComments4} ${props.classes?.seeAllComments4 || ''}`}>See all comments</div>
        <Rectangle37Icon4 className={`${classes.rectangle374} ${props.classes?.rectangle374 || ''}`} />
        <Rectangle38Icon4 className={`${classes.rectangle384} ${props.classes?.rectangle384 || ''}`} />
        <div className={`${classes.post4} ${props.classes?.post4 || ''}`}>Post</div>
      </div>
      <div className={`${classes.frame4} ${props.classes?.frame4 || ''}`}>
        <div className={`${classes.rectangle355} ${props.classes?.rectangle355 || ''}`}></div>
        <div className={`${classes._1hrAgo5} ${props.classes?._1hrAgo5 || ''}`}>1hr ago</div>
        <div
          className={`${classes.checkOutThisAmazingBeachPartyC} ${props.classes?.checkOutThisAmazingBeachPartyC || ''}`}
        >
          <span className={classes.labelWrapper5}>
            <span className={classes.label9}>
              Check out this amazing Beach party coming up on the 14th february 2022 at Sychelles East Africa. 14-16th
              February 2022.
              <br />
              Click link below to view details.
              <br />
              <br />
            </span>
            <span className={classes.label10}>www.travelsandtours.com/2022</span>
          </span>
        </div>
        <div className={`${classes.unsplashU6t80TWJ1DM} ${props.classes?.unsplashU6t80TWJ1DM || ''}`}></div>
        <OptionsIcon4 className={`${classes.options4} ${props.classes?.options4 || ''}`} />
        <Line2Icon5 className={`${classes.line25} ${props.classes?.line25 || ''}`} />
        <VectorIcon5 className={`${classes.vector5} ${props.classes?.vector5 || ''}`} />
        <GroupIcon13 className={`${classes.group13} ${props.classes?.group13 || ''}`} />
        <GroupIcon14 className={`${classes.group14} ${props.classes?.group14 || ''}`} />
        <GroupIcon15 className={`${classes.group15} ${props.classes?.group15 || ''}`} />
        <div className={`${classes._32K5} ${props.classes?._32K5 || ''}`}>3.2K</div>
        <div className={`${classes._1155} ${props.classes?._1155 || ''}`}>115</div>
        <div className={`${classes._55} ${props.classes?._55 || ''}`}>5</div>
        <div className={`${classes._13K5} ${props.classes?._13K5 || ''}`}>1.3K</div>
        <Group48Icon className={`${classes.group48} ${props.classes?.group48 || ''}`} />
        <div className={`${classes.beccaTouches} ${props.classes?.beccaTouches || ''}`}>Becca Touches</div>
        <div className={`${classes.abujuNigeria} ${props.classes?.abujuNigeria || ''}`}>Abuju, Nigeria</div>
        <div className={`${classes.travelsAndTourism} ${props.classes?.travelsAndTourism || ''}`}>
          Travels and Tourism
        </div>
        <Ellipse17Icon4 className={`${classes.ellipse174} ${props.classes?.ellipse174 || ''}`} />
        <div className={`${classes.rectangle365} ${props.classes?.rectangle365 || ''}`}></div>
        <div className={`${classes.comment5} ${props.classes?.comment5 || ''}`}>Comment</div>
        <div className={`${classes.yourCommentGoesHere5} ${props.classes?.yourCommentGoesHere5 || ''}`}>
          Your comment goes here
        </div>
        <div className={`${classes.seeAllComments5} ${props.classes?.seeAllComments5 || ''}`}>See all comments</div>
        <Rectangle37Icon5 className={`${classes.rectangle375} ${props.classes?.rectangle375 || ''}`} />
        <Rectangle38Icon5 className={`${classes.rectangle385} ${props.classes?.rectangle385 || ''}`} />
        <div className={`${classes.post5} ${props.classes?.post5 || ''}`}>Post</div>
      </div>
      <div className={`${classes.frame7} ${props.classes?.frame7 || ''}`}>
        <div className={`${classes.rectangle356} ${props.classes?.rectangle356 || ''}`}></div>
        <div className={`${classes.tayoAuto} ${props.classes?.tayoAuto || ''}`}>Tayo Auto</div>
        <div className={`${classes.lagosNigeria5} ${props.classes?.lagosNigeria5 || ''}`}>Lagos, Nigeria</div>
        <div className={`${classes._1hrAgo6} ${props.classes?._1hrAgo6 || ''}`}>1hr ago</div>
        <div className={`${classes.professionalTechConsultant2} ${props.classes?.professionalTechConsultant2 || ''}`}>
          Professional Tech Consultant
        </div>
        <div
          className={`${classes.thisIsTheOpportunityToJoinTheW5} ${
            props.classes?.thisIsTheOpportunityToJoinTheW5 || ''
          }`}
        >
          <span className={classes.labelWrapper6}>
            <span className={classes.label11}>
              This is the Opportunity to Join the World Leading Tech Professionals in 2022. All you need do is to
              register with the link below
              <br />
              <br />
            </span>
            <span className={classes.label12}>www.ileifetech.com/freshmen</span>
          </span>
        </div>
        <div className={`${classes.unsplash2swaWy4Xhb0} ${props.classes?.unsplash2swaWy4Xhb0 || ''}`}></div>
        <Ellipse18Icon2 className={`${classes.ellipse182} ${props.classes?.ellipse182 || ''}`} />
        <Ellipse19Icon2 className={`${classes.ellipse192} ${props.classes?.ellipse192 || ''}`} />
        <Ellipse20Icon2 className={`${classes.ellipse202} ${props.classes?.ellipse202 || ''}`} />
        <Line2Icon6 className={`${classes.line26} ${props.classes?.line26 || ''}`} />
        <VectorIcon6 className={`${classes.vector6} ${props.classes?.vector6 || ''}`} />
        <GroupIcon16 className={`${classes.group16} ${props.classes?.group16 || ''}`} />
        <GroupIcon17 className={`${classes.group17} ${props.classes?.group17 || ''}`} />
        <GroupIcon18 className={`${classes.group18} ${props.classes?.group18 || ''}`} />
        <div className={`${classes._32K6} ${props.classes?._32K6 || ''}`}>3.2K</div>
        <div className={`${classes._1156} ${props.classes?._1156 || ''}`}>115</div>
        <div className={`${classes._56} ${props.classes?._56 || ''}`}>5</div>
        <div className={`${classes._13K6} ${props.classes?._13K6 || ''}`}>1.3K</div>
        <Ellipse21Icon5 className={`${classes.ellipse215} ${props.classes?.ellipse215 || ''}`} />
        <Polygon1Icon5 className={`${classes.polygon15} ${props.classes?.polygon15 || ''}`} />
        <UnsplashK84vnnzxmtqIcon
          className={`${classes.unsplashK84vnnzxmTQ} ${props.classes?.unsplashK84vnnzxmTQ || ''}`}
        />
        <div className={`${classes.rectangle366} ${props.classes?.rectangle366 || ''}`}></div>
        <div className={`${classes.comment6} ${props.classes?.comment6 || ''}`}>Comment</div>
        <div className={`${classes.yourCommentGoesHere6} ${props.classes?.yourCommentGoesHere6 || ''}`}>
          Your comment goes here
        </div>
        <div className={`${classes.seeAllComments6} ${props.classes?.seeAllComments6 || ''}`}>See all comments</div>
        <Rectangle37Icon6 className={`${classes.rectangle376} ${props.classes?.rectangle376 || ''}`} />
        <Rectangle38Icon6 className={`${classes.rectangle386} ${props.classes?.rectangle386 || ''}`} />
        <div className={`${classes.post6} ${props.classes?.post6 || ''}`}>Post</div>
      </div>
      <div className={`${classes.frame2} ${props.classes?.frame2 || ''}`}>
        <div className={`${classes.rectangle43} ${props.classes?.rectangle43 || ''}`}></div>
        <div className={`${classes.feeds} ${props.classes?.feeds || ''}`}>Feeds</div>
        <div className={`${classes.rectangle44} ${props.classes?.rectangle44 || ''}`}></div>
        <div className={`${classes.agro} ${props.classes?.agro || ''}`}>Agro</div>
        <div className={`${classes.rectangle442} ${props.classes?.rectangle442 || ''}`}></div>
        <div className={`${classes.agro2} ${props.classes?.agro2 || ''}`}>Agro</div>
        <div className={`${classes.rectangle443} ${props.classes?.rectangle443 || ''}`}></div>
        <div className={`${classes.foods} ${props.classes?.foods || ''}`}>Foods</div>
        <div className={`${classes.rectangle444} ${props.classes?.rectangle444 || ''}`}></div>
        <div className={`${classes.travels} ${props.classes?.travels || ''}`}>Travels</div>
        <div className={`${classes.rectangle445} ${props.classes?.rectangle445 || ''}`}></div>
        <div className={`${classes.luxury} ${props.classes?.luxury || ''}`}>Luxury</div>
      </div>
      <div className={`${classes.rectangle34} ${props.classes?.rectangle34 || ''}`}></div>
      <div className={`${classes._2GEDA11} ${props.classes?._2GEDA11 || ''}`}></div>
      <div className={`${classes.rectangle45} ${props.classes?.rectangle45 || ''}`}></div>
      <HouseIcon className={`${classes.house} ${props.classes?.house || ''}`} />
      <div className={`${classes.home} ${props.classes?.home || ''}`}>Home</div>
      <StorefrontIcon className={`${classes.storefront} ${props.classes?.storefront || ''}`} />
      <div className={`${classes.outlet} ${props.classes?.outlet || ''}`}>Outlet</div>
      <div className={`${classes.messages} ${props.classes?.messages || ''}`}>Messages</div>
      <VectorIcon7 className={`${classes.vector7} ${props.classes?.vector7 || ''}`} />
      <VectorIcon8 className={`${classes.vector8} ${props.classes?.vector8 || ''}`} />
      <VectorIcon9 className={`${classes.vector9} ${props.classes?.vector9 || ''}`} />
      <VectorIcon10 className={`${classes.vector10} ${props.classes?.vector10 || ''}`} />
      <div className={`${classes.notification} ${props.classes?.notification || ''}`}>Notification</div>
      <BellIcon className={`${classes.bell} ${props.classes?.bell || ''}`} />
      <div className={`${classes.profile} ${props.classes?.profile || ''}`}>Profile</div>
      <UsercircleIcon className={`${classes.userCircle} ${props.classes?.userCircle || ''}`} />
      <div className={`${classes.rectangle32} ${props.classes?.rectangle32 || ''}`}></div>
      <div className={`${classes.searchNamesProductsOrServices} ${props.classes?.searchNamesProductsOrServices || ''}`}>
        Search names, products or services
      </div>
      <SearchIcon className={`${classes.search} ${props.classes?.search || ''}`} />
      <StatusBar />
      <div className={`${classes.easterSales_01v31} ${props.classes?.easterSales_01v31 || ''}`}></div>
      <Ellipse22Icon className={`${classes.ellipse22} ${props.classes?.ellipse22 || ''}`} />
      <div className={`${classes.unnamed} ${props.classes?.unnamed || ''}`}>+</div>
    </div>
  );
});

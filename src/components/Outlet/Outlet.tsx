import { FC, memo } from "react";

import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
import classes from "./Outlet.module.css";
import { SearchIcon } from "./SearchIcon";

interface Props {
  className?: string;
  classes?: {
    trending?: string;
    automobile?: string;
    propertyAndRentals?: string;
    phonesAndAssesories?: string;
    beautyCosmetics?: string;
    clothingsAssesories?: string;
    frame10?: string;
    unsplashZbZ_EJJ4To?: string;
    unsplash5cpBWEl6y6c?: string;
    unsplashVOWXF7lsAN0?: string;
    toyotaCamry7?: string;
    washingMachine?: string;
    _2BedroomFlat?: string;
    _20000?: string;
    _5000?: string;
    _30000PerAnnum?: string;
    lagosNigeria?: string;
    abujaNigeria?: string;
    alakiaIbadan?: string;
    unsplashDvTc58ioYUA?: string;
    unsplashydMz3p5s3M?: string;
    unsplashG4VhA3RBSpQ?: string;
    venza12?: string;
    iphone13Pro?: string;
    pes5?: string;
    _70000?: string;
    _95000?: string;
    _30000?: string;
    lagosNigeria2?: string;
    abujaNigeria2?: string;
    alakiaIbadan2?: string;
    frame11?: string;
    unsplashOUBjd22gF6w?: string;
    unsplashP7tai9P7HS?: string;
    unsplashO6yH_yAc2Ws?: string;
    toyotaCamry72?: string;
    washingMachine2?: string;
    _2BedroomFlat2?: string;
    _200002?: string;
    _50002?: string;
    _30000PerAnnum2?: string;
    lagosNigeria3?: string;
    abujaNigeria3?: string;
    alakiaIbadan3?: string;
    unsplashDvTc58ioYUA2?: string;
    unsplashydMz3p5s3M2?: string;
    unsplashG4VhA3RBSpQ2?: string;
    venza122?: string;
    iphone13Pro2?: string;
    pes52?: string;
    _700002?: string;
    _950002?: string;
    _300002?: string;
    lagosNigeria4?: string;
    abujaNigeria4?: string;
    alakiaIbadan4?: string;
    frame12?: string;
    unsplash2d4lAQAlbDA?: string;
    unsplashWwqZ8CM21gg?: string;
    unsplashKqMaA8gDfl0?: string;
    toyotaCamry73?: string;
    washingMachine3?: string;
    _2BedroomFlat3?: string;
    _200003?: string;
    _50003?: string;
    _30000PerAnnum3?: string;
    lagosNigeria5?: string;
    abujaNigeria5?: string;
    alakiaIbadan5?: string;
    unsplashDvTc58ioYUA3?: string;
    unsplashydMz3p5s3M3?: string;
    unsplashG4VhA3RBSpQ3?: string;
    venza123?: string;
    iphone13Pro3?: string;
    pes53?: string;
    _700003?: string;
    _950003?: string;
    _300003?: string;
    lagosNigeria6?: string;
    abujaNigeria6?: string;
    alakiaIbadan6?: string;
    frame13?: string;
    unsplashBihIFDNJwKY?: string;
    unsplashGtX5DIIHGqE?: string;
    unsplashSHYccVGnAEo?: string;
    toyotaCamry74?: string;
    washingMachine4?: string;
    _2BedroomFlat4?: string;
    _200004?: string;
    _50004?: string;
    _30000PerAnnum4?: string;
    lagosNigeria7?: string;
    abujaNigeria7?: string;
    alakiaIbadan7?: string;
    unsplashDvTc58ioYUA4?: string;
    unsplashydMz3p5s3M4?: string;
    unsplashG4VhA3RBSpQ4?: string;
    venza124?: string;
    iphone13Pro4?: string;
    pes54?: string;
    _700004?: string;
    _950004?: string;
    _300004?: string;
    lagosNigeria8?: string;
    abujaNigeria8?: string;
    alakiaIbadan8?: string;
    frame14?: string;
    unsplashZbZ_EJJ4To2?: string;
    unsplash5cpBWEl6y6c2?: string;
    unsplashVOWXF7lsAN02?: string;
    toyotaCamry75?: string;
    washingMachine5?: string;
    _2BedroomFlat5?: string;
    _200005?: string;
    _50005?: string;
    _30000PerAnnum5?: string;
    lagosNigeria9?: string;
    abujaNigeria9?: string;
    alakiaIbadan9?: string;
    unsplashDvTc58ioYUA5?: string;
    unsplashydMz3p5s3M5?: string;
    unsplashG4VhA3RBSpQ5?: string;
    venza125?: string;
    iphone13Pro5?: string;
    pes55?: string;
    _700005?: string;
    _950005?: string;
    _300005?: string;
    lagosNigeria10?: string;
    abujaNigeria10?: string;
    alakiaIbadan10?: string;
    frame15?: string;
    unsplashZbZ_EJJ4To3?: string;
    unsplash5cpBWEl6y6c3?: string;
    unsplashVOWXF7lsAN03?: string;
    toyotaCamry76?: string;
    washingMachine6?: string;
    _2BedroomFlat6?: string;
    _200006?: string;
    _50006?: string;
    _30000PerAnnum6?: string;
    lagosNigeria11?: string;
    abujaNigeria11?: string;
    alakiaIbadan11?: string;
    unsplashDvTc58ioYUA6?: string;
    unsplashydMz3p5s3M6?: string;
    unsplashG4VhA3RBSpQ6?: string;
    venza126?: string;
    iphone13Pro6?: string;
    pes56?: string;
    _700006?: string;
    _950006?: string;
    _300006?: string;
    lagosNigeria12?: string;
    abujaNigeria12?: string;
    alakiaIbadan12?: string;
    frame2?: string;
    rectangle43?: string;
    auto?: string;
    rectangle44?: string;
    furniture?: string;
    rectangle442?: string;
    food?: string;
    rectangle443?: string;
    services?: string;
    rectangle444?: string;
    property?: string;
    rectangle445?: string;
    jewlery?: string;
    seeAll?: string;
    seeAll2?: string;
    seeAll3?: string;
    seeAll4?: string;
    seeAll5?: string;
    seeAll6?: string;
    seeAll7?: string;
    kongaJobMinE15985367933931?: string;
    rectangle198?: string;
    lekkiLagosNG?: string;
    rectangle197?: string;
    changeLocation?: string;
    rectangle32?: string;
    searchProductServicesWorkEtc?: string;
    search?: string;
    outlet?: string;
    rectangle199?: string;
    rectangle195?: string;
    addYourProduct?: string;
    ellipse14?: string;
    arrowLeft?: string;
    rectangle215?: string;
    myInventory?: string;
  };
}
export const Outlet: FC<Props> = memo(function Outlet(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <div className={`${classes.trending} ${props.classes?.trending || ""}`}>
        Trending
      </div>
      <div
        className={`${classes.automobile} ${props.classes?.automobile || ""}`}
      >
        Automobile
      </div>
      <div
        className={`${classes.propertyAndRentals} ${
          props.classes?.propertyAndRentals || ""
        }`}
      >
        Property and rentals
      </div>
      <div
        className={`${classes.phonesAndAssesories} ${
          props.classes?.phonesAndAssesories || ""
        }`}
      >
        Phones and Assesories
      </div>
      <div
        className={`${classes.beautyCosmetics} ${
          props.classes?.beautyCosmetics || ""
        }`}
      >
        Beauty &amp; Cosmetics
      </div>
      <div
        className={`${classes.clothingsAssesories} ${
          props.classes?.clothingsAssesories || ""
        }`}
      >
        Clothings &amp; Assesories
      </div>
      <div className={`${classes.frame10} ${props.classes?.frame10 || ""}`}>
        <div
          className={`${classes.unsplashZbZ_EJJ4To} ${
            props.classes?.unsplashZbZ_EJJ4To || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplash5cpBWEl6y6c} ${
            props.classes?.unsplash5cpBWEl6y6c || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashVOWXF7lsAN0} ${
            props.classes?.unsplashVOWXF7lsAN0 || ""
          }`}
        ></div>
        <div
          className={`${classes.toyotaCamry7} ${
            props.classes?.toyotaCamry7 || ""
          }`}
        >
          Toyota Camry 07
        </div>
        <div
          className={`${classes.washingMachine} ${
            props.classes?.washingMachine || ""
          }`}
        >
          Washing Machine
        </div>
        <div
          className={`${classes._2BedroomFlat} ${
            props.classes?._2BedroomFlat || ""
          }`}
        >
          2 bedroom flat
        </div>
        <div className={`${classes._20000} ${props.classes?._20000 || ""}`}>
          #2,000,000
        </div>
        <div className={`${classes._5000} ${props.classes?._5000 || ""}`}>
          #50,000
        </div>
        <div
          className={`${classes._30000PerAnnum} ${
            props.classes?._30000PerAnnum || ""
          }`}
        >
          #300,000 per annum
        </div>
        <div
          className={`${classes.lagosNigeria} ${
            props.classes?.lagosNigeria || ""
          }`}
        >
          Lagos, Nigeria
        </div>
        <div
          className={`${classes.abujaNigeria} ${
            props.classes?.abujaNigeria || ""
          }`}
        >
          Abuja, Nigeria
        </div>
        <div
          className={`${classes.alakiaIbadan} ${
            props.classes?.alakiaIbadan || ""
          }`}
        >
          Alakia, Ibadan
        </div>
        <div
          className={`${classes.unsplashDvTc58ioYUA} ${
            props.classes?.unsplashDvTc58ioYUA || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashydMz3p5s3M} ${
            props.classes?.unsplashydMz3p5s3M || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashG4VhA3RBSpQ} ${
            props.classes?.unsplashG4VhA3RBSpQ || ""
          }`}
        ></div>
        <div className={`${classes.venza12} ${props.classes?.venza12 || ""}`}>
          Venza ‘12
        </div>
        <div
          className={`${classes.iphone13Pro} ${
            props.classes?.iphone13Pro || ""
          }`}
        >
          Iphone 13 pro
        </div>
        <div className={`${classes.pes5} ${props.classes?.pes5 || ""}`}>
          Pes 5
        </div>
        <div className={`${classes._70000} ${props.classes?._70000 || ""}`}>
          #7,000,000
        </div>
        <div className={`${classes._95000} ${props.classes?._95000 || ""}`}>
          #950,000
        </div>
        <div className={`${classes._30000} ${props.classes?._30000 || ""}`}>
          #300,000
        </div>
        <div
          className={`${classes.lagosNigeria2} ${
            props.classes?.lagosNigeria2 || ""
          }`}
        >
          Lagos, Nigeria
        </div>
        <div
          className={`${classes.abujaNigeria2} ${
            props.classes?.abujaNigeria2 || ""
          }`}
        >
          Abuja, Nigeria
        </div>
        <div
          className={`${classes.alakiaIbadan2} ${
            props.classes?.alakiaIbadan2 || ""
          }`}
        >
          Alakia, Ibadan
        </div>
      </div>
      <div className={`${classes.frame11} ${props.classes?.frame11 || ""}`}>
        <div
          className={`${classes.unsplashOUBjd22gF6w} ${
            props.classes?.unsplashOUBjd22gF6w || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashP7tai9P7HS} ${
            props.classes?.unsplashP7tai9P7HS || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashO6yH_yAc2Ws} ${
            props.classes?.unsplashO6yH_yAc2Ws || ""
          }`}
        ></div>
        <div
          className={`${classes.toyotaCamry72} ${
            props.classes?.toyotaCamry72 || ""
          }`}
        >
          Toyota Camry 07
        </div>
        <div
          className={`${classes.washingMachine2} ${
            props.classes?.washingMachine2 || ""
          }`}
        >
          Washing Machine
        </div>
        <div
          className={`${classes._2BedroomFlat2} ${
            props.classes?._2BedroomFlat2 || ""
          }`}
        >
          2 bedroom flat
        </div>
        <div className={`${classes._200002} ${props.classes?._200002 || ""}`}>
          #2,000,000
        </div>
        <div className={`${classes._50002} ${props.classes?._50002 || ""}`}>
          #50,000
        </div>
        <div
          className={`${classes._30000PerAnnum2} ${
            props.classes?._30000PerAnnum2 || ""
          }`}
        >
          #300,000 per annum
        </div>
        <div
          className={`${classes.lagosNigeria3} ${
            props.classes?.lagosNigeria3 || ""
          }`}
        >
          Lagos, Nigeria
        </div>
        <div
          className={`${classes.abujaNigeria3} ${
            props.classes?.abujaNigeria3 || ""
          }`}
        >
          Abuja, Nigeria
        </div>
        <div
          className={`${classes.alakiaIbadan3} ${
            props.classes?.alakiaIbadan3 || ""
          }`}
        >
          Alakia, Ibadan
        </div>
        <div
          className={`${classes.unsplashDvTc58ioYUA2} ${
            props.classes?.unsplashDvTc58ioYUA2 || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashydMz3p5s3M2} ${
            props.classes?.unsplashydMz3p5s3M2 || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashG4VhA3RBSpQ2} ${
            props.classes?.unsplashG4VhA3RBSpQ2 || ""
          }`}
        ></div>
        <div className={`${classes.venza122} ${props.classes?.venza122 || ""}`}>
          Venza ‘12
        </div>
        <div
          className={`${classes.iphone13Pro2} ${
            props.classes?.iphone13Pro2 || ""
          }`}
        >
          Iphone 13 pro
        </div>
        <div className={`${classes.pes52} ${props.classes?.pes52 || ""}`}>
          Pes 5
        </div>
        <div className={`${classes._700002} ${props.classes?._700002 || ""}`}>
          #7,000,000
        </div>
        <div className={`${classes._950002} ${props.classes?._950002 || ""}`}>
          #950,000
        </div>
        <div className={`${classes._300002} ${props.classes?._300002 || ""}`}>
          #300,000
        </div>
        <div
          className={`${classes.lagosNigeria4} ${
            props.classes?.lagosNigeria4 || ""
          }`}
        >
          Lagos, Nigeria
        </div>
        <div
          className={`${classes.abujaNigeria4} ${
            props.classes?.abujaNigeria4 || ""
          }`}
        >
          Abuja, Nigeria
        </div>
        <div
          className={`${classes.alakiaIbadan4} ${
            props.classes?.alakiaIbadan4 || ""
          }`}
        >
          Alakia, Ibadan
        </div>
      </div>
      <div className={`${classes.frame12} ${props.classes?.frame12 || ""}`}>
        <div
          className={`${classes.unsplash2d4lAQAlbDA} ${
            props.classes?.unsplash2d4lAQAlbDA || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashWwqZ8CM21gg} ${
            props.classes?.unsplashWwqZ8CM21gg || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashKqMaA8gDfl0} ${
            props.classes?.unsplashKqMaA8gDfl0 || ""
          }`}
        ></div>
        <div
          className={`${classes.toyotaCamry73} ${
            props.classes?.toyotaCamry73 || ""
          }`}
        >
          Toyota Camry 07
        </div>
        <div
          className={`${classes.washingMachine3} ${
            props.classes?.washingMachine3 || ""
          }`}
        >
          Washing Machine
        </div>
        <div
          className={`${classes._2BedroomFlat3} ${
            props.classes?._2BedroomFlat3 || ""
          }`}
        >
          2 bedroom flat
        </div>
        <div className={`${classes._200003} ${props.classes?._200003 || ""}`}>
          #2,000,000
        </div>
        <div className={`${classes._50003} ${props.classes?._50003 || ""}`}>
          #50,000
        </div>
        <div
          className={`${classes._30000PerAnnum3} ${
            props.classes?._30000PerAnnum3 || ""
          }`}
        >
          #300,000 per annum
        </div>
        <div
          className={`${classes.lagosNigeria5} ${
            props.classes?.lagosNigeria5 || ""
          }`}
        >
          Lagos, Nigeria
        </div>
        <div
          className={`${classes.abujaNigeria5} ${
            props.classes?.abujaNigeria5 || ""
          }`}
        >
          Abuja, Nigeria
        </div>
        <div
          className={`${classes.alakiaIbadan5} ${
            props.classes?.alakiaIbadan5 || ""
          }`}
        >
          Alakia, Ibadan
        </div>
        <div
          className={`${classes.unsplashDvTc58ioYUA3} ${
            props.classes?.unsplashDvTc58ioYUA3 || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashydMz3p5s3M3} ${
            props.classes?.unsplashydMz3p5s3M3 || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashG4VhA3RBSpQ3} ${
            props.classes?.unsplashG4VhA3RBSpQ3 || ""
          }`}
        ></div>
        <div className={`${classes.venza123} ${props.classes?.venza123 || ""}`}>
          Venza ‘12
        </div>
        <div
          className={`${classes.iphone13Pro3} ${
            props.classes?.iphone13Pro3 || ""
          }`}
        >
          Iphone 13 pro
        </div>
        <div className={`${classes.pes53} ${props.classes?.pes53 || ""}`}>
          Pes 5
        </div>
        <div className={`${classes._700003} ${props.classes?._700003 || ""}`}>
          #7,000,000
        </div>
        <div className={`${classes._950003} ${props.classes?._950003 || ""}`}>
          #950,000
        </div>
        <div className={`${classes._300003} ${props.classes?._300003 || ""}`}>
          #300,000
        </div>
        <div
          className={`${classes.lagosNigeria6} ${
            props.classes?.lagosNigeria6 || ""
          }`}
        >
          Lagos, Nigeria
        </div>
        <div
          className={`${classes.abujaNigeria6} ${
            props.classes?.abujaNigeria6 || ""
          }`}
        >
          Abuja, Nigeria
        </div>
        <div
          className={`${classes.alakiaIbadan6} ${
            props.classes?.alakiaIbadan6 || ""
          }`}
        >
          Alakia, Ibadan
        </div>
      </div>
      <div className={`${classes.frame13} ${props.classes?.frame13 || ""}`}>
        <div
          className={`${classes.unsplashBihIFDNJwKY} ${
            props.classes?.unsplashBihIFDNJwKY || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashGtX5DIIHGqE} ${
            props.classes?.unsplashGtX5DIIHGqE || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashSHYccVGnAEo} ${
            props.classes?.unsplashSHYccVGnAEo || ""
          }`}
        ></div>
        <div
          className={`${classes.toyotaCamry74} ${
            props.classes?.toyotaCamry74 || ""
          }`}
        >
          Toyota Camry 07
        </div>
        <div
          className={`${classes.washingMachine4} ${
            props.classes?.washingMachine4 || ""
          }`}
        >
          Washing Machine
        </div>
        <div
          className={`${classes._2BedroomFlat4} ${
            props.classes?._2BedroomFlat4 || ""
          }`}
        >
          2 bedroom flat
        </div>
        <div className={`${classes._200004} ${props.classes?._200004 || ""}`}>
          #2,000,000
        </div>
        <div className={`${classes._50004} ${props.classes?._50004 || ""}`}>
          #50,000
        </div>
        <div
          className={`${classes._30000PerAnnum4} ${
            props.classes?._30000PerAnnum4 || ""
          }`}
        >
          #300,000 per annum
        </div>
        <div
          className={`${classes.lagosNigeria7} ${
            props.classes?.lagosNigeria7 || ""
          }`}
        >
          Lagos, Nigeria
        </div>
        <div
          className={`${classes.abujaNigeria7} ${
            props.classes?.abujaNigeria7 || ""
          }`}
        >
          Abuja, Nigeria
        </div>
        <div
          className={`${classes.alakiaIbadan7} ${
            props.classes?.alakiaIbadan7 || ""
          }`}
        >
          Alakia, Ibadan
        </div>
        <div
          className={`${classes.unsplashDvTc58ioYUA4} ${
            props.classes?.unsplashDvTc58ioYUA4 || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashydMz3p5s3M4} ${
            props.classes?.unsplashydMz3p5s3M4 || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashG4VhA3RBSpQ4} ${
            props.classes?.unsplashG4VhA3RBSpQ4 || ""
          }`}
        ></div>
        <div className={`${classes.venza124} ${props.classes?.venza124 || ""}`}>
          Venza ‘12
        </div>
        <div
          className={`${classes.iphone13Pro4} ${
            props.classes?.iphone13Pro4 || ""
          }`}
        >
          Iphone 13 pro
        </div>
        <div className={`${classes.pes54} ${props.classes?.pes54 || ""}`}>
          Pes 5
        </div>
        <div className={`${classes._700004} ${props.classes?._700004 || ""}`}>
          #7,000,000
        </div>
        <div className={`${classes._950004} ${props.classes?._950004 || ""}`}>
          #950,000
        </div>
        <div className={`${classes._300004} ${props.classes?._300004 || ""}`}>
          #300,000
        </div>
        <div
          className={`${classes.lagosNigeria8} ${
            props.classes?.lagosNigeria8 || ""
          }`}
        >
          Lagos, Nigeria
        </div>
        <div
          className={`${classes.abujaNigeria8} ${
            props.classes?.abujaNigeria8 || ""
          }`}
        >
          Abuja, Nigeria
        </div>
        <div
          className={`${classes.alakiaIbadan8} ${
            props.classes?.alakiaIbadan8 || ""
          }`}
        >
          Alakia, Ibadan
        </div>
      </div>
      <div className={`${classes.frame14} ${props.classes?.frame14 || ""}`}>
        <div
          className={`${classes.unsplashZbZ_EJJ4To2} ${
            props.classes?.unsplashZbZ_EJJ4To2 || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplash5cpBWEl6y6c2} ${
            props.classes?.unsplash5cpBWEl6y6c2 || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashVOWXF7lsAN02} ${
            props.classes?.unsplashVOWXF7lsAN02 || ""
          }`}
        ></div>
        <div
          className={`${classes.toyotaCamry75} ${
            props.classes?.toyotaCamry75 || ""
          }`}
        >
          Toyota Camry 07
        </div>
        <div
          className={`${classes.washingMachine5} ${
            props.classes?.washingMachine5 || ""
          }`}
        >
          Washing Machine
        </div>
        <div
          className={`${classes._2BedroomFlat5} ${
            props.classes?._2BedroomFlat5 || ""
          }`}
        >
          2 bedroom flat
        </div>
        <div className={`${classes._200005} ${props.classes?._200005 || ""}`}>
          #2,000,000
        </div>
        <div className={`${classes._50005} ${props.classes?._50005 || ""}`}>
          #50,000
        </div>
        <div
          className={`${classes._30000PerAnnum5} ${
            props.classes?._30000PerAnnum5 || ""
          }`}
        >
          #300,000 per annum
        </div>
        <div
          className={`${classes.lagosNigeria9} ${
            props.classes?.lagosNigeria9 || ""
          }`}
        >
          Lagos, Nigeria
        </div>
        <div
          className={`${classes.abujaNigeria9} ${
            props.classes?.abujaNigeria9 || ""
          }`}
        >
          Abuja, Nigeria
        </div>
        <div
          className={`${classes.alakiaIbadan9} ${
            props.classes?.alakiaIbadan9 || ""
          }`}
        >
          Alakia, Ibadan
        </div>
        <div
          className={`${classes.unsplashDvTc58ioYUA5} ${
            props.classes?.unsplashDvTc58ioYUA5 || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashydMz3p5s3M5} ${
            props.classes?.unsplashydMz3p5s3M5 || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashG4VhA3RBSpQ5} ${
            props.classes?.unsplashG4VhA3RBSpQ5 || ""
          }`}
        ></div>
        <div className={`${classes.venza125} ${props.classes?.venza125 || ""}`}>
          Venza ‘12
        </div>
        <div
          className={`${classes.iphone13Pro5} ${
            props.classes?.iphone13Pro5 || ""
          }`}
        >
          Iphone 13 pro
        </div>
        <div className={`${classes.pes55} ${props.classes?.pes55 || ""}`}>
          Pes 5
        </div>
        <div className={`${classes._700005} ${props.classes?._700005 || ""}`}>
          #7,000,000
        </div>
        <div className={`${classes._950005} ${props.classes?._950005 || ""}`}>
          #950,000
        </div>
        <div className={`${classes._300005} ${props.classes?._300005 || ""}`}>
          #300,000
        </div>
        <div
          className={`${classes.lagosNigeria10} ${
            props.classes?.lagosNigeria10 || ""
          }`}
        >
          Lagos, Nigeria
        </div>
        <div
          className={`${classes.abujaNigeria10} ${
            props.classes?.abujaNigeria10 || ""
          }`}
        >
          Abuja, Nigeria
        </div>
        <div
          className={`${classes.alakiaIbadan10} ${
            props.classes?.alakiaIbadan10 || ""
          }`}
        >
          Alakia, Ibadan
        </div>
      </div>
      <div className={`${classes.frame15} ${props.classes?.frame15 || ""}`}>
        <div
          className={`${classes.unsplashZbZ_EJJ4To3} ${
            props.classes?.unsplashZbZ_EJJ4To3 || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplash5cpBWEl6y6c3} ${
            props.classes?.unsplash5cpBWEl6y6c3 || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashVOWXF7lsAN03} ${
            props.classes?.unsplashVOWXF7lsAN03 || ""
          }`}
        ></div>
        <div
          className={`${classes.toyotaCamry76} ${
            props.classes?.toyotaCamry76 || ""
          }`}
        >
          Toyota Camry 07
        </div>
        <div
          className={`${classes.washingMachine6} ${
            props.classes?.washingMachine6 || ""
          }`}
        >
          Washing Machine
        </div>
        <div
          className={`${classes._2BedroomFlat6} ${
            props.classes?._2BedroomFlat6 || ""
          }`}
        >
          2 bedroom flat
        </div>
        <div className={`${classes._200006} ${props.classes?._200006 || ""}`}>
          #2,000,000
        </div>
        <div className={`${classes._50006} ${props.classes?._50006 || ""}`}>
          #50,000
        </div>
        <div
          className={`${classes._30000PerAnnum6} ${
            props.classes?._30000PerAnnum6 || ""
          }`}
        >
          #300,000 per annum
        </div>
        <div
          className={`${classes.lagosNigeria11} ${
            props.classes?.lagosNigeria11 || ""
          }`}
        >
          Lagos, Nigeria
        </div>
        <div
          className={`${classes.abujaNigeria11} ${
            props.classes?.abujaNigeria11 || ""
          }`}
        >
          Abuja, Nigeria
        </div>
        <div
          className={`${classes.alakiaIbadan11} ${
            props.classes?.alakiaIbadan11 || ""
          }`}
        >
          Alakia, Ibadan
        </div>
        <div
          className={`${classes.unsplashDvTc58ioYUA6} ${
            props.classes?.unsplashDvTc58ioYUA6 || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashydMz3p5s3M6} ${
            props.classes?.unsplashydMz3p5s3M6 || ""
          }`}
        ></div>
        <div
          className={`${classes.unsplashG4VhA3RBSpQ6} ${
            props.classes?.unsplashG4VhA3RBSpQ6 || ""
          }`}
        ></div>
        <div className={`${classes.venza126} ${props.classes?.venza126 || ""}`}>
          Venza ‘12
        </div>
        <div
          className={`${classes.iphone13Pro6} ${
            props.classes?.iphone13Pro6 || ""
          }`}
        >
          Iphone 13 pro
        </div>
        <div className={`${classes.pes56} ${props.classes?.pes56 || ""}`}>
          Pes 5
        </div>
        <div className={`${classes._700006} ${props.classes?._700006 || ""}`}>
          #7,000,000
        </div>
        <div className={`${classes._950006} ${props.classes?._950006 || ""}`}>
          #950,000
        </div>
        <div className={`${classes._300006} ${props.classes?._300006 || ""}`}>
          #300,000
        </div>
        <div
          className={`${classes.lagosNigeria12} ${
            props.classes?.lagosNigeria12 || ""
          }`}
        >
          Lagos, Nigeria
        </div>
        <div
          className={`${classes.abujaNigeria12} ${
            props.classes?.abujaNigeria12 || ""
          }`}
        >
          Abuja, Nigeria
        </div>
        <div
          className={`${classes.alakiaIbadan12} ${
            props.classes?.alakiaIbadan12 || ""
          }`}
        >
          Alakia, Ibadan
        </div>
      </div>
      <div className={`${classes.frame2} ${props.classes?.frame2 || ""}`}>
        <div
          className={`${classes.rectangle43} ${
            props.classes?.rectangle43 || ""
          }`}
        ></div>
        <div className={`${classes.auto} ${props.classes?.auto || ""}`}>
          Auto
        </div>
        <div
          className={`${classes.rectangle44} ${
            props.classes?.rectangle44 || ""
          }`}
        ></div>
        <div
          className={`${classes.furniture} ${props.classes?.furniture || ""}`}
        >
          Furniture
        </div>
        <div
          className={`${classes.rectangle442} ${
            props.classes?.rectangle442 || ""
          }`}
        ></div>
        <div className={`${classes.food} ${props.classes?.food || ""}`}>
          food
        </div>
        <div
          className={`${classes.rectangle443} ${
            props.classes?.rectangle443 || ""
          }`}
        ></div>
        <div className={`${classes.services} ${props.classes?.services || ""}`}>
          Services
        </div>
        <div
          className={`${classes.rectangle444} ${
            props.classes?.rectangle444 || ""
          }`}
        ></div>
        <div className={`${classes.property} ${props.classes?.property || ""}`}>
          Property
        </div>
        <div
          className={`${classes.rectangle445} ${
            props.classes?.rectangle445 || ""
          }`}
        ></div>
        <div className={`${classes.jewlery} ${props.classes?.jewlery || ""}`}>
          Jewlery
        </div>
      </div>
      <div className={`${classes.seeAll} ${props.classes?.seeAll || ""}`}>
        See all
      </div>
      <div className={`${classes.seeAll2} ${props.classes?.seeAll2 || ""}`}>
        See all
      </div>
      <div className={`${classes.seeAll3} ${props.classes?.seeAll3 || ""}`}>
        See all
      </div>
      <div className={`${classes.seeAll4} ${props.classes?.seeAll4 || ""}`}>
        See all
      </div>
      <div className={`${classes.seeAll5} ${props.classes?.seeAll5 || ""}`}>
        See all
      </div>
      <div className={`${classes.seeAll6} ${props.classes?.seeAll6 || ""}`}>
        See all
      </div>
      <div className={`${classes.seeAll7} ${props.classes?.seeAll7 || ""}`}>
        See all
      </div>
      <div
        className={`${classes.kongaJobMinE15985367933931} ${
          props.classes?.kongaJobMinE15985367933931 || ""
        }`}
      ></div>
      <div
        className={`${classes.rectangle198} ${
          props.classes?.rectangle198 || ""
        }`}
      ></div>
      <div
        className={`${classes.lekkiLagosNG} ${
          props.classes?.lekkiLagosNG || ""
        }`}
      >
        Lekki, Lagos NG
      </div>
      <div
        className={`${classes.rectangle197} ${
          props.classes?.rectangle197 || ""
        }`}
      ></div>
      <div
        className={`${classes.changeLocation} ${
          props.classes?.changeLocation || ""
        }`}
      >
        Change location
      </div>
      <div
        className={`${classes.rectangle32} ${props.classes?.rectangle32 || ""}`}
      ></div>
      <div
        className={`${classes.searchProductServicesWorkEtc} ${
          props.classes?.searchProductServicesWorkEtc || ""
        }`}
      >
        Search product, services, work etc
      </div>
      <SearchIcon
        className={`${classes.search} ${props.classes?.search || ""}`}
      />
      <div className={`${classes.outlet} ${props.classes?.outlet || ""}`}>
        Outlet
      </div>
      <div
        className={`${classes.rectangle199} ${
          props.classes?.rectangle199 || ""
        }`}
      ></div>
      <div
        className={`${classes.rectangle195} ${
          props.classes?.rectangle195 || ""
        }`}
      ></div>
      <div
        className={`${classes.addYourProduct} ${
          props.classes?.addYourProduct || ""
        }`}
      >
        Add your product
      </div>
      <Ellipse14Icon
        className={`${classes.ellipse14} ${props.classes?.ellipse14 || ""}`}
      />
      <ArrowLeftIcon
        className={`${classes.arrowLeft} ${props.classes?.arrowLeft || ""}`}
      />
      <div
        className={`${classes.rectangle215} ${
          props.classes?.rectangle215 || ""
        }`}
      ></div>
      <div
        className={`${classes.myInventory} ${props.classes?.myInventory || ""}`}
      >
        My inventory
      </div>
    </div>
  );
});

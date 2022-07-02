import { FC, memo } from "react";

import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
import classes from "./InputProductDetails.module.css";
import { Rectangle216Icon } from "./Rectangle216Icon";
import { Rectangle217Icon } from "./Rectangle217Icon";
import { Rectangle218Icon } from "./Rectangle218Icon";
import { Rectangle219Icon } from "./Rectangle219Icon";

interface Props {
  className?: string;
  classes?: {
    title?: string;
    rectangle5?: string;
    category?: string;
    rectangle52?: string;
    lagosNg?: string;
    rectangle53?: string;
    description?: string;
    rectangle54?: string;
    rectangle6?: string;
    price?: string;
    rectangle55?: string;
    addImages?: string;
    thisProductServiceIsAvailableA?: string;
    addUpTo5ImagesFirstImageOrPict?: string;
    pricesAreInLocalCurrencyStateO?: string;
    rectangle216?: string;
    rectangle217?: string;
    rectangle218?: string;
    rectangle219?: string;
    rectangle220?: string;
    unnamed?: string;
    rectangle221?: string;
    _2GEDA11?: string;
    rectangle199?: string;
    rectangle195?: string;
    publish?: string;
    postOnOutlet?: string;
    ellipse14?: string;
    arrowLeft?: string;
  };
}
export const InputProductDetails: FC<Props> = memo(function InputProductDetails(
  props = {}
) {
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <div className={`${classes.title} ${props.classes?.title || ""}`}>
        Title
      </div>
      <div
        className={`${classes.rectangle5} ${props.classes?.rectangle5 || ""}`}
      ></div>
      <div className={`${classes.category} ${props.classes?.category || ""}`}>
        Category
      </div>
      <div
        className={`${classes.rectangle52} ${props.classes?.rectangle52 || ""}`}
      ></div>
      <div className={`${classes.lagosNg} ${props.classes?.lagosNg || ""}`}>
        Lagos, Ng
      </div>
      <div
        className={`${classes.rectangle53} ${props.classes?.rectangle53 || ""}`}
      ></div>
      <div
        className={`${classes.description} ${props.classes?.description || ""}`}
      >
        Description
      </div>
      <div
        className={`${classes.rectangle54} ${props.classes?.rectangle54 || ""}`}
      ></div>
      <div
        className={`${classes.rectangle6} ${props.classes?.rectangle6 || ""}`}
      ></div>
      <div className={`${classes.price} ${props.classes?.price || ""}`}>
        Price
      </div>
      <div
        className={`${classes.rectangle55} ${props.classes?.rectangle55 || ""}`}
      ></div>
      <div className={`${classes.addImages} ${props.classes?.addImages || ""}`}>
        Add images
      </div>
      <div
        className={`${classes.thisProductServiceIsAvailableA} ${
          props.classes?.thisProductServiceIsAvailableA || ""
        }`}
      >
        This product/service is available and i agree to make it
        <br />
        available upon sale request.
      </div>
      <div
        className={`${classes.addUpTo5ImagesFirstImageOrPict} ${
          props.classes?.addUpTo5ImagesFirstImageOrPict || ""
        }`}
      >
        Add up to 5 images, First image or picture is usually set as the cover
        of the post on outlet
      </div>
      <div
        className={`${classes.pricesAreInLocalCurrencyStateO} ${
          props.classes?.pricesAreInLocalCurrencyStateO || ""
        }`}
      >
        Prices are in local currency,
        <br />
        State otherwise.
      </div>
      <Rectangle216Icon
        className={`${classes.rectangle216} ${
          props.classes?.rectangle216 || ""
        }`}
      />
      <Rectangle217Icon
        className={`${classes.rectangle217} ${
          props.classes?.rectangle217 || ""
        }`}
      />
      <Rectangle218Icon
        className={`${classes.rectangle218} ${
          props.classes?.rectangle218 || ""
        }`}
      />
      <Rectangle219Icon
        className={`${classes.rectangle219} ${
          props.classes?.rectangle219 || ""
        }`}
      />
      <div
        className={`${classes.rectangle220} ${
          props.classes?.rectangle220 || ""
        }`}
      ></div>
      <div className={`${classes.unnamed} ${props.classes?.unnamed || ""}`}>
        +
      </div>
      <div
        className={`${classes.rectangle221} ${
          props.classes?.rectangle221 || ""
        }`}
      ></div>
      <div
        className={`${classes._2GEDA11} ${props.classes?._2GEDA11 || ""}`}
      ></div>
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
      <div className={`${classes.publish} ${props.classes?.publish || ""}`}>
        Publish
      </div>
      <div
        className={`${classes.postOnOutlet} ${
          props.classes?.postOnOutlet || ""
        }`}
      >
        Post on outlet
      </div>
      <Ellipse14Icon
        className={`${classes.ellipse14} ${props.classes?.ellipse14 || ""}`}
      />
      <ArrowLeftIcon
        className={`${classes.arrowLeft} ${props.classes?.arrowLeft || ""}`}
      />
    </div>
  );
});

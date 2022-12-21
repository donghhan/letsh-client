import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faUser,
  faCalendar,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

interface IStackedIcon {
  iconType: "calendar" | "user" | "location";
  style?: React.CSSProperties;
}

export default function StackedIcon({ iconType, style }: IStackedIcon) {
  const getIconTypes = (iconType: string) => {
    if (iconType === "calendar") return faCalendar;
    else if (iconType === "user") return faUser;
    else return faCompass;
  };

  return (
    <span className="fa-stack fa-2x" style={style}>
      <FontAwesomeIcon
        icon={faCircle}
        className="fa-stack-2x"
        style={{ color: "black" }}
      />
      <FontAwesomeIcon
        icon={getIconTypes(iconType)}
        className="fa-stack-1x"
        style={{ color: "white" }}
      />
    </span>
  );
}

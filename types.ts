import { IconType } from "react-icons";

export interface MenuItem {
  id: string;
  Icon: IconType;
  uri: string;
  name: string;
}

export interface SocialItem {
  id: string;
  Icon: IconType;
  url: string;
  color: string;
}

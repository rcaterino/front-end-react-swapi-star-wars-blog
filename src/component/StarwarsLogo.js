import { Image } from "@nextui-org/react";
import starWarsLogo from "../img/star-wars-logo.png";

export function StarwarsLogo() {
  return (
    <Image
      width={"100%"}
      height={"100%"}
      src={starWarsLogo}
      alt="Default Logo"
    ></Image>
  );
}

import { Image } from "@nextui-org/react";
import starWarsLogo from "../img/star-wars-logo.png";

export function StarwarsLogo() {
  return (
    <Image
      width={1024}
      height={443}
      src={starWarsLogo}
      alt="Default Logo"
    ></Image>
  );
}

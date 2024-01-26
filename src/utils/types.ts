import instagram from "/public/instagram.svg?raw"
import tiktok from "/public/tiktok.svg?raw"
import twitterX from "/public/twitterX.svg?raw"

type Social = {
    svg: string;
    link: string;
  }
  
  export const socials: Social[] = [
      { svg: instagram, link: "https://www.instagram.com/real_vvs/" },
      { svg: tiktok, link: "https://www.tiktok.com/@real_vvshawty" },
      { svg: twitterX, link: "https://twitter.com/real_vvs_" },
  ]
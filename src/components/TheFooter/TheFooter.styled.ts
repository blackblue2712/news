import { brightLightBlue, nevadaGrey, paleSky } from "shared/colors";
import styled from "styled-components";

namespace sc {
  export const Container = styled.div`
    position: static;
    z-index: 0;
    bottom: 0px;

    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    border-top: 1px solid rgb(212, 215, 217);
    background-color: rgb(235, 238, 240);

    width: 100vw;
    padding-bottom: 33px;
    padding-top: 41px;
  `;

  export const FooterLogoContainer = styled.div``;

  export const FooterLogo = styled.div`
    width: 200px;
    max-width: 160px;
    height: 40px;
    max-height: 40px;

    background: url(https://blackblue2712.github.io/cv-on/images/logo.png)
      center center no-repeat;
    background-size: contain;
  `;

  export const FooterCopyRight = styled.div`
    color: ${nevadaGrey};
    margin-top: 7px;
    font-size: 16px;
    line-height: 28px;
    margin-left: 15px;
  `;

  export const FooterNavigate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  export const FooterNavigateItem = styled.div`
    font-size: 16px;
    line-height: 21px;
    padding-bottom: 6px;
    color: ${paleSky};
  `;

  export const FooterNavigateItemIcon = styled.div<{ src: string }>``;

  export const SocialContacts = styled.div`
    padding-top: 10px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
  `;

  export const Logo = styled.a`
    &:hover {
      svg > g > g {
        fill: ${brightLightBlue};
      }
    }
  `;
}

export default sc;

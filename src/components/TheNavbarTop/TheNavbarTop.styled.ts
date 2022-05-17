import { solitudeLight, white } from "shared/colors";
import styled from "styled-components";

namespace sc {
  export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 64px;
    height: 64px;

    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;

    background-color: ${white};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.075);
  `;

  export const Left = styled.div`
    flex: 1;
  `;

  export const Right = styled.div`
    flex: 1;
  `;

  export const Logo = styled.div`
    width: 200px;
    max-width: 200px;
    height: 40px;
    max-height: 40px;

    background: url("https://blackblue2712.github.io/cv-on/images/logo.png")
      center center no-repeat;
    cursor: pointer;
  `;
}

export { sc };

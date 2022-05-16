import { solitudeLight } from "shared/colors";
import styled from "styled-components";

namespace sc {
  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 100vw;
    max-width: 100vw;
    height: 100%;
    background-color: ${solitudeLight};
  `;
}

export default sc;

import styled from "styled-components";
import {
  black,
  blue,
  brightLightBlue,
  gray,
  licoriceBlue,
  nevadaGrey,
  white,
} from "../../shared/colors";

namespace sc {
  export const Container = styled.div`
    height: calc(100vh - 64px - 48px);
    min-height: calc(100vh - 64px - 48px);
    margin-top: 48px;
  `;
  export const FeedItem = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column;

    width: 700px;
    max-width: 700px;

    cursor: pointer;
    text-decoration: none;
    color: ${black};

    &:hover {
      text-decoration: none;
    }
  `;
  export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-flow: column;
  `;

  export const Curator = styled.div`
    display: flex;
    align-items: center;

    padding-bottom: 12px;
  `;
  export const CuratorImage = styled.div<{ bg: string }>`
    width: 30px;
    height: 30px;
    max-width: 30px;
    max-height: 30px;

    background: url(${(props) => props.bg}) center center no-repeat;
    background-size: cover;
    border-radius: 50%;

    margin-right: 6px;
  `;

  export const CuratorName = styled.span`
    font-weight: bold;
    color: ${licoriceBlue};
    font-size: 14px;
  `;

  export const Title = styled.div`
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: 0;
  `;

  const Text = styled.span`
    font-size: 16px;
    color: ${nevadaGrey};
    line-height: 20px;

    display: inline-block;
  `;

  export const Description = styled(Text)`
    max-height: 58px;
    min-height: 58px;
    font-size: 16px;
    line-height: 20px;
    color: ${nevadaGrey};

    margin-bottom: 24px;
  `;
  export const Info = styled.div`
    display: flex;
    align-items: center;
  `;
  export const Date = styled(Text)`
    font-size: 12px;
    margin: 4px;
    margin-left: 0;
  `;
  export const TimeToRead = styled(Text)`
    font-size: 12px;
    margin: 4px;
  `;
  export const Tag = styled(Text)`
    padding: 2px 8px;
    border-radius: 100px;
    background-color: ${brightLightBlue}90;
    font-size: 12px;
    margin: 4px;

    color: ${white};
  `;
  export const Thumbnail = styled.div<{ bg: string }>`
    width: 420px;
    max-width: 420px;

    min-width: 420px;
    min-height: 288px;

    background: url(${(props) => props.bg}) center center no-repeat;
    background-size: contain;

    margin: 0 auto;
    border-radius: 4px;
  `;

  export const Line = styled.div`
    height: 1px;
    background-color: ${gray};
    width: 100%;
  `;
}

export default sc;

import sc from './FeedDetail.styled';
import { observer } from 'mobx-react-lite';
import { FeedModel } from '../../stores/FeedModel';

interface IProps {
  driver: FeedModel | null
}



export const FeedDetail = observer((props: IProps) => {
  const driver = props.driver;

  if (!driver) return <></>;

  return <sc.Container>

    <sc.FeedItem>
      <sc.Content>

        <sc.Title>{driver.title}</sc.Title>
        <sc.Thumbnail bg={driver.thumbnail} />

        <sc.Description>
          {driver.description || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, iure?'}
        </sc.Description>

        <sc.Curator>
          <sc.CuratorImage bg={driver.curatorImage} />
          <sc.CuratorName>{driver.curatorName}</sc.CuratorName>
        </sc.Curator>
        <sc.Info>
          <sc.Date>May 16</sc.Date> |
          <sc.TimeToRead>9 min read</sc.TimeToRead> |
          <sc.Tag>Email</sc.Tag>
        </sc.Info>
      </sc.Content>

    </sc.FeedItem>
  </sc.Container>
});


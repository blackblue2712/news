import sc from './FeedDetail.styled';
import { observer } from 'mobx-react-lite';
import { FeedModel } from '../../stores/FeedModel';
import { runInAction } from 'mobx';
import { useTranslation } from 'next-i18next';

interface IProps {
  driver: FeedModel;
}



export const FeedDetail = observer((props: IProps) => {
  const driver = props.driver;

  const { curatorImage } = driver;
  const { t } = useTranslation("Item")

  return <sc.Container>

    <sc.FeedItem>
      <sc.Content>

        <sc.Title>{
          runInAction(() => driver.title)
        }</sc.Title>
        <sc.Thumbnail bg={runInAction(() => driver.thumbnail)} />

        <sc.Description>
          {runInAction(() => driver.description || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, iure?')}
        </sc.Description>

        <sc.Curator>
          <sc.CuratorImage bg={curatorImage} />
          {/* <sc.CuratorImage bg={driver.curatorImage} /> */}
        </sc.Curator>
        <sc.Info>
          <sc.Date>May 16</sc.Date> |
          <sc.TimeToRead>9 min read</sc.TimeToRead> |
          <sc.Tag>Email</sc.Tag>
          <sc.Tag>{t("item")}</sc.Tag>
        </sc.Info>
      </sc.Content>

    </sc.FeedItem>
  </sc.Container>
});


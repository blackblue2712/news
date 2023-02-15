import sc from './Feed.styled';
import { observer } from 'mobx-react-lite';
import { IFeed } from '../../shared/models/Feed';
import { getImageUrl } from '../../shared/helpers/getImageUrl';
import { FeedModel } from '../../stores/FeedModel';
import Link from 'next/link';



export type FeedDriver = Array<FeedModel>

interface IProps {
    driver: FeedDriver
}



export const Feed = observer((props: IProps) => {

    const renderFeed = (item: FeedModel) => {

        return (

            <Link key={item.id} href={"[feedId]"} as={`/${item.id}`} passHref>
                <sc.FeedItem>
                    <sc.Content>
                        <sc.Curator>
                            <sc.CuratorImage bg={item.curatorImage} />
                            <sc.CuratorName>{item.curatorName}</sc.CuratorName>
                        </sc.Curator>

                        <sc.Title>{item.title}</sc.Title>
                        <sc.Description>
                            {item.description || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, iure?'}
                        </sc.Description>
                        <sc.Info>
                            <sc.Date>May 16</sc.Date> |
                            <sc.TimeToRead>9 min read</sc.TimeToRead> |
                            <sc.Tag>Email</sc.Tag>
                        </sc.Info>
                    </sc.Content>
                    <sc.Thumbnail bg={item.thumbnail} />
                </sc.FeedItem>
            </Link>
        )
    }

    return <sc.Container>
        {props.driver.map(item => renderFeed(item))}
    </sc.Container>
});


import React, { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';

import sc from './PageLayout.styled';

export interface IPageLayoutProps {
    renderHeader(): ReactNode;
    renderFooter(): ReactNode;
    renderContent(): ReactNode;
}

export const PageLayout = observer((props: IPageLayoutProps) => {
    return <sc.Container>
        {props.renderHeader()}
        {props.renderContent()}
        {props.renderFooter()}
    </sc.Container>
})
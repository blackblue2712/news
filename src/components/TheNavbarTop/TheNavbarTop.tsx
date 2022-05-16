import React, { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';

import { sc } from './TheNavbarTop.styled';
import Link from 'next/link';

export const TheNavbarTop = observer(() => {
    return (
        <sc.Container>
            <sc.Left>
                <Link href="/" passHref as="/">
                    <sc.Logo />
                </Link>
            </sc.Left>

            <sc.Right>

            </sc.Right>
        </sc.Container>
    )
})
import React from 'react';
import { observer } from 'mobx-react-lite';

import { sc } from './TheNavbarTop.styled';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const TheNavbarTop = observer(() => {
    const { t } = useTranslation("General");
    return (
        <sc.Container>
            <sc.Left>
                <Link href="/" passHref as="/">
                    <sc.Logo />
                </Link>
            </sc.Left>

            <sc.Right>
                <div>{t("general")}</div>
            </sc.Right>
        </sc.Container>
    )
})
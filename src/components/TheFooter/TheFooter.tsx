import { IconSvg } from 'components/IconSvg/IconSvg';
import { brightLightBlue, gray } from 'shared/colors';
import sc from './TheFooter.styled';

export const TheFooter = () => {
    return (
        <sc.Container>
            <sc.FooterLogoContainer>
                <sc.FooterLogo />
                <sc.FooterCopyRight>Copyright © 2022</sc.FooterCopyRight>
            </sc.FooterLogoContainer>

            <sc.FooterNavigate>
                <sc.FooterNavigateItem><b>About us</b></sc.FooterNavigateItem>
                <sc.FooterNavigateItem>Lorem</sc.FooterNavigateItem>
                <sc.FooterNavigateItem>Ipsum</sc.FooterNavigateItem>
                <sc.FooterNavigateItem>Dolor sit</sc.FooterNavigateItem>
                <sc.FooterNavigateItem>Amet consectetur</sc.FooterNavigateItem>
            </sc.FooterNavigate>
            <sc.FooterNavigate>
                <sc.FooterNavigateItem><b>Lorem</b></sc.FooterNavigateItem>
                <sc.FooterNavigateItem>Quae</sc.FooterNavigateItem>
                <sc.FooterNavigateItem>Maiores deleniti tempora</sc.FooterNavigateItem>
                <sc.FooterNavigateItem>Dolor commodi quidem</sc.FooterNavigateItem>
            </sc.FooterNavigate>

            <sc.FooterNavigate>
                <sc.FooterNavigateItem><b>Contact</b></sc.FooterNavigateItem>
                <sc.SocialContacts>
                    <a
                        title="Facebook"
                        href="https://www.facebook.com/btaldt.btaldt/"
                        target="_blank"
                    >
                        <IconSvg
                            icon="facebook-logo"
                            pointer
                            width="20px"
                            height="20px"
                            padding="0"
                            color={gray}
                            hoverColor={brightLightBlue}
                        />
                    </a>
                    <sc.Logo
                        title="Instagram"
                        href="https://www.instagram.com/nghia.dang.ucks/"
                        target="_blank"
                    >
                        <IconSvg
                            icon="instagram-v2"
                            pointer
                            width="20px"
                            height="20px"
                            padding="0"
                            color={gray}
                            hoverColor={brightLightBlue}
                        />
                    </sc.Logo>
                    <sc.Logo
                        title="Email"
                        href="mailto:danghuunghia2712@gmail.com"
                        target="_blank"
                    >
                        <IconSvg
                            icon="email"
                            pointer
                            width="20px"
                            height="20px"
                            padding="0"
                            color={gray}
                            hoverColor={brightLightBlue}
                        />
                    </sc.Logo>
                </sc.SocialContacts>
            </sc.FooterNavigate>


        </sc.Container>
    )
}

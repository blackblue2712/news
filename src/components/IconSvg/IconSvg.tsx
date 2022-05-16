import { observer } from "mobx-react-lite";
import React from "react";
import { black } from "shared/colors";


import sc from "./IconSvg.styled";
import { IconSvgLoader } from "./IconSvgLoader";

interface IProps {
    icon: string;
    position?: string;
    pointer?: boolean;
    opacity?: number;
    width?: string;
    height?: string;
    padding?: string;
    color?: string;
    hoverColor?: string;
    backgroundColor?: string;
    zIndex?: number;
    rotate?: number;
    margin?: string;
    onClick?(): void;
}

export const IconSvg = observer((props: IProps) => {
    const {
        position = "relative",
        opacity = 1,
        width = "32px",
        height = "26.4px",
        padding = "4px",
        color = black,
        pointer = false,
        backgroundColor = "transparent",
        zIndex = 0,
        rotate = 0,
        margin = "0",
        onClick = () => { },
    } = props;

    return (
        <sc.IconSvgContainer
            position={position}
            opacity={opacity}
            width={width}
            height={height}
            padding={padding}
            color={color}
            zIndex={zIndex}
            pointer={pointer ? "pointer" : "default"}
            backgroundColor={backgroundColor}
            hoverColor={props.hoverColor ? props.hoverColor : color}
            rotate={rotate}
            margin={margin}
            onClick={() => onClick()}
        >
            <IconSvgLoader name={props.icon} />
        </sc.IconSvgContainer>
    );
});

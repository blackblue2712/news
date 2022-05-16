import dynamic from "next/dynamic";
import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}
export const IconSvgLoader: React.FC<IconProps> = ({ name, ...rest }): JSX.Element | null => {
  const DynamicComponent = dynamic(() => import(`!svg-react-loader!../../assets/svgs/${name}.svg`));

  if (DynamicComponent) {
    return <DynamicComponent />;
  }

  return null;
};

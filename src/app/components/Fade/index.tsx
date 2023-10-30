import { ReactNode } from "react";
import { Fade as OldFade, FadeProps } from "react-awesome-reveal";

type FadeNewProps = FadeProps & {
  children: ReactNode;
}

export const Fade = (props: FadeNewProps) => {
  return (<OldFade {...props}>
    {props.children}
  </OldFade>)
}
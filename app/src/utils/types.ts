import { SplitText as SplitTextInstance } from 'gsap/all';
import _SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitTextInstance);

// E L E M E N T S
export type El<T extends HTMLElement = HTMLElement> = HTMLElement;

export namespace El {
  export type H    = HTMLHeadingElement;
  export type P    = HTMLParagraphElement;
  export type Li   = HTMLLIElement;
  export type Span = HTMLSpanElement;
  export type Text = HTMLHeadingElement | HTMLParagraphElement | HTMLLIElement | HTMLSpanElement;

  export type Btn  = HTMLButtonElement;
  export type Div  = HTMLDivElement;
  export type A    = HTMLAnchorElement;
}

// R E F S
export type Ref<T extends HTMLElement | null = HTMLElement | null> = React.RefObject<T>;

// I N T E R F A C E S
export interface Children {
    children?: Readonly<React.ReactNode>;
}

export interface LinkProps extends Children {
    href:       string,
    className?: string,
    active?:    boolean,
    visited?:   boolean,
    label?:     string,
    ref?:       React.Ref<El.A>
}

export interface LinkTemplate {
    href:   string;
    label:  string;
}

export interface DeviceSpecs {
    mobile:         boolean,
    lowPowerDevice: boolean,
    mounted:        boolean
}

// G S A P   A N I M A T I O N   T Y P E S
export type GSAPAnimation<T extends Ref<any> = Ref<any>> = (
    el: T | T[],
    options?: gsap.TweenVars
) => gsap.core.Tween | gsap.core.Timeline;

export namespace GSAPAnimation {
    export namespace SplitText {
        export type Prepare = (
            el: Ref<El.Text | null> | Ref<El.Text | null>[],
            options?: gsap.TweenVars
        ) => SplitTextInstance;

        export type Animate = (
            text: SplitTextInstance,
            options?: gsap.TweenVars
        ) => gsap.core.Tween | gsap.core.Timeline;
    }

    export type SplitText = {
        prepare: SplitText.Prepare;
        animate: SplitText.Animate;
    }
}


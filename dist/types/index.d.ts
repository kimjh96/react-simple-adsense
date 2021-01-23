/// <reference types="react" />
declare global {
    interface Window {
        adsbygoogle: {
            push: (p: Record<string, never>) => void;
        };
    }
}
declare type GoogleAdSenseProps = {
    html: string;
};
declare function GoogleAdSense({ html }: GoogleAdSenseProps): JSX.Element;
export default GoogleAdSense;

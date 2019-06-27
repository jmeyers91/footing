import { ComponentProps } from 'react';
import Column from './Column';
export interface Props extends ComponentProps<typeof Column> {
    /**
     * Whether or not to render the overlay directly inside the `body`.
     */
    fixed?: boolean;
    /**
     * The background color of the overlay. Defaults to `rgba(255, 255, 255, 0.7)`.
     */
    color?: string;
}
export declare function Overlay(props: Props): JSX.Element;
export declare function isOverlay(target: HTMLElement): string | undefined;
declare const _default: import("styled-components").StyledComponent<typeof Overlay, any, Props, never>;
export default _default;
//# sourceMappingURL=Overlay.d.ts.map
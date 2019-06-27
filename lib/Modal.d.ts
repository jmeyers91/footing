import { ComponentProps, MouseEvent } from 'react';
import Column from './Column';
export interface Props extends ComponentProps<typeof Column> {
    onOverlayClick?(event: MouseEvent<HTMLDivElement>): any;
}
declare function Modal(props: Props): JSX.Element;
declare const _default: import("styled-components").StyledComponent<typeof Modal, any, {}, never>;
export default _default;
//# sourceMappingURL=Modal.d.ts.map
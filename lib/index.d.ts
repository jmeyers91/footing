/// <reference types="react" />
export { default as Button } from './Button';
export { default as Column } from './Column';
export { default as Form } from './Form';
export { default as Input } from './Input';
export { default as Modal } from './Modal';
export { default as Overlay } from './Overlay';
export { default as Page } from './Page';
export { default as Row } from './Row';
declare const _default: {
  Button: import('styled-components').StyledComponent<'button', any, {}, never>;
  Column: import('styled-components').StyledComponent<'div', any, {}, never>;
  Form: import('styled-components').StyledComponent<
    typeof import('./Form').Form,
    any,
    {},
    never
  >;
  Input: import('styled-components').StyledComponent<
    (
      props: import('react').DetailedHTMLProps<
        import('react').InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >
    ) => JSX.Element,
    any,
    {},
    never
  >;
  Modal: import('styled-components').StyledComponent<
    (props: import('./Modal').Props) => JSX.Element,
    any,
    {},
    never
  >;
  Overlay: import('styled-components').StyledComponent<
    typeof import('./Overlay').Overlay,
    any,
    import('./Overlay').Props,
    never
  >;
  Page: import('styled-components').StyledComponent<'div', any, {}, never>;
  Row: import('styled-components').StyledComponent<'div', any, {}, never>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map

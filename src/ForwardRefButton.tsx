import * as React from 'react';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {}

const ButtonContainer: React.FunctionComponent<IProps> = (props, ref) => (
    <button ref={ref}>Forward ref button</button>
);

const ForwardRefButton = React.forwardRef<HTMLButtonElement, IProps>(ButtonContainer);

export { ForwardRefButton };
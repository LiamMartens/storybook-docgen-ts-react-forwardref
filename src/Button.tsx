import * as React from 'react';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: React.FunctionComponent<IProps> = (props) => (
    <button>Regular button</button>
);

export { Button };
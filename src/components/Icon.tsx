import React from 'react';

import { myIcons } from '../constants/icons';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
}

export const XiAllIcon: React.FunctionComponent = () => {
    return (
        <svg width="0" height="0" className="hidden">
            {myIcons.map(({ id, children }) => (
                <symbol
                    key={id}
                    id={id}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    dangerouslySetInnerHTML={{ __html: children }}
                >
                </symbol>
            ))}
        </svg>
    )
}

export const XiIcon: React.FunctionComponent<IconProps> = ({
    name,
    ...props
}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
}
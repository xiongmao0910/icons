var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { myIcons } from '../constants/icons';
export const XiAllIcon = () => {
    return (React.createElement("svg", { width: "0", height: "0", className: "hidden" }, myIcons.map(({ id, children }) => (React.createElement("symbol", { key: id, id: id, width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", dangerouslySetInnerHTML: { __html: children } })))));
};
export const XiIcon = (_a) => {
    var { name } = _a, props = __rest(_a, ["name"]);
    return (React.createElement("svg", Object.assign({ width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("use", { xlinkHref: `#${name}` })));
};
//# sourceMappingURL=Icon.js.map
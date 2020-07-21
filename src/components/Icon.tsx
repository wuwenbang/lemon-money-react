import React from 'react'
type Props = {
    name: string;
}
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
    requireContext.keys().forEach(requireContext);
try {
    importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
    console.log(error);
}
const Icon = (props: Props) => {
    return (
        <svg className="icon">
            {props.name && <use xlinkHref={'#' + props.name}></use>}
        </svg>
    )
};
export default Icon;
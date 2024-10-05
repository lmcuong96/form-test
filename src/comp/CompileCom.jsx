import { Fragment } from "react";

export const combineComponents = (comps) => ({
    render: () =>
        comps?.map((comp, i) => <Fragment key={i}>{comp.render()}</Fragment>),
    explain: () =>
        comps?.map((comp, i) => <Fragment key={i}>{comp.explain()}</Fragment>),
    invalid: comps.some((comp) => comp.invalid),
    json: () => {
        let data = {};
        for (const comp of comps) {
            data = comp.addData(data);
        }
        return JSON.stringify(data);
    },
    showErrors: () => {
        comps.find((comp) => comp.invalid)?.showErrors();
    },
});

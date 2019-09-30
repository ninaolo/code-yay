import React from "react";
import { useRouteData } from "react-static";
import convert from "htmr";

export default function About() {
    const {about} = useRouteData();
    return (
        <div>
            {convert(about.contents)}
        </div>
    )
}

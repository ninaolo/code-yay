import React from "react"
import { withRouteData } from "react-static"
import convert from "htmr"
import { hot } from "react-hot-loader"

const About = withRouteData(({ about }) => (
    <div>
        {convert(about.contents)}
    </div>
))

export default hot(module)(About)

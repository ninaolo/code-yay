import React from 'react'
import { Button } from 'components';

export default class Learn extends React.Component {

    render() {
        return (
            <div>
                <Button color="primary" variant="contained" box="true">Sorting</Button>
                <Button color="primary" variant="contained" box="true">Problems</Button>
                <Button color="primary" variant="contained" box="true">Datastructures</Button>
                <br/>
                <Button color="primary" variant="contained" box="true">Algorithms</Button>
                <Button color="primary" variant="contained" box="true">Concepts</Button>
                <Button color="primary" variant="contained" box="true">Other</Button>
            </div>
        )
    }
}
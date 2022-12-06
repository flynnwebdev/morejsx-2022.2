import React from "react"
import Card from "./Card"
import Comment from "./Comment"

const App = () => {
    return (
        <section>
            <Comment name="Sue Smith" date="5/12/2022" comment="React is cool!" avatar="https://i.pravatar.cc/60?1" />
            <Card>
                <Comment name="Joe Bloggs" date="12/08/2022" comment="It's hot today" avatar="https://i.pravatar.cc/60?2" />
            </Card>
            <Comment name="Alan Smithee" date="5/11/2021" comment="This is a comment" avatar="https://i.pravatar.cc/60?3" />
        </section>
    )
}

export default App

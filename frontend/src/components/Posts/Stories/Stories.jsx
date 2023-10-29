import Story from "./Story"

const Stories = () => {
  return (
    <div className="stories container">
        <h3>Stories</h3>
        <div className="story-list">
          <Story name="test1"/>
          <Story name="test2"/>
          <Story name="test3"/>
        </div>
    </div>
  )
}

export default Stories
import Dropdown from "../Dropdown/Dropdown";
import Image from "../Image/Image";
import { useState } from "react";
import tagsResponse from "../../mocks/tags.json";
import './Content.css'

function Content() {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelection = (selectedTag) => {
    setSelectedTags([...selectedTags, selectedTag]);
  };

  const handleUntagging = (tagId) => {
    setSelectedTags(selectedTags.filter(tag => tag.id !== tagId));
  };

  return (
    <>
      <h2>Tag this image!!!</h2>
      
      <div className="content">
        <Dropdown onSelectTag={handleTagSelection} selectedTags={selectedTags} />
        <div className="image">
            <Image onUntagging={handleUntagging} selectedTags={selectedTags} />
        </div>
      </div>
    </>
  );
}

export default Content;

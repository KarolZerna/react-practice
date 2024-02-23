import { useEffect, useState } from "react";
import tagsResponse from "../../mocks/tags.json";
import "./Dropdown.css";

function Dropdown({ onSelectTag, selectedTags }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch(tagsResponse)
      .then((res) => res.json)
      .then((data) => setTags(data.tags));
  }, []);

  const handleTagSelection = (e) => {
    const selectedTagId = parseInt(e.target.value);
    const selectedTag = tagsResponse.tags.find(
      (tag) => tag.id === selectedTagId
    );
    onSelectTag(selectedTag);
  };

  return (
    <>
      <div>
        <select className="select" onChange={handleTagSelection}>
          <option value="">Select a tag</option>
          {tagsResponse.tags.map((tag) => (
            <option
              key={tag.id}
              value={tag.id}
              disabled={selectedTags.some(
                (selectedTag) => selectedTag.id === tag.id
              )}
            >
              {tag.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Dropdown;

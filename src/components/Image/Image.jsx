import { useEffect, useState } from "react";
import imageResponse from "../../mocks/image.json";
import "./Image.css";

function Image({ onUntagging, selectedTags }) {
  const [image, setImage] = useState([]);
  const [tags, setTags] = useState(imageResponse.tags);

  useEffect(() => {
    fetch(imageResponse.imageUrl)
      .then((res) => res.json)
      .then((data) => setImage(data.image));
  }, []);

  const handleUntagging = (tagId) => {
    const updatedTags = tags.filter((tag) => tag.id !== tagId);
    setTags(updatedTags);
    onUntagging(tagId);
  };

  return (
    <>
      <div className="image">
        <img src={imageResponse.thumbnailUrl} alt="thumbnail" />
      </div>
      <div className="tags">
        <ul className="tag">
          {selectedTags.map((tag) => (
            <span key={tag.id}>
              {tag.label}
              <button onClick={() => handleUntagging(tag.id)}>x</button>
            </span>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Image;

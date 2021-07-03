import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import image1 from "./webp/_hvd1086.webp";
import image3 from "./webp/_hvd1084.webp";
import image5 from "./webp/_hvd1104_1.webp";
import image18 from "./webp/_hvd1163_1.webp";
import image20 from "./webp/_hvd1170.webp";
import image21 from "./webp/_hvd1176.webp";
import image22 from "./webp/_hvd1199_1.webp";
import image26 from "./webp/_HVD1231_2-min.webp";
import image28 from "./webp/_HVD1247_1-min.webp";
import image29 from "./webp/_HVD1256_1-min.webp";
import image31 from "./webp/_HVD1266_1-min.webp";
import image32 from "./webp/_HVD1270_1-min.webp";
import image36 from "./webp/_HVD1283_2-min.webp";
import image37 from "./webp/_HVD1291_1-min.webp";
import image39 from "./webp/_HVD1294_1-min.webp";
import image40 from "./webp/_hvd1296_1.webp";
import image41 from "./webp/_hvd1304_1.webp";
import image42 from "./webp/_hvd1306_1.webp";
import image43 from "./webp/_hvd1312_1.webp";
import image44 from "./webp/_hvd1315_1.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
const options = {
  //   settings: {
  //     overlayColor: "rgb(25, 136, 124)",
  //     autoplaySpeed: 1500,
  //     transitionSpeed: 900,
  //   },
  //   buttons: {
  //     backgroundColor: "red",
  //     iconColor: "rgba(126, 172, 139, 0.8)",
  //   },
  //   caption: {
  //     captionColor: "#a6cfa5",
  //     captionFontFamily: "Raleway, sans-serif",
  //     captionFontWeight: "300",
  //     captionTextTransform: "uppercase",
  //   },
  //   progressBar: {
  //     height: "20px",
  //     fillColor: "blue",
  //     backgroundColor: "white",
  //   },
};
const images = [
  {
    id: "5",
    imageName: image5,
    tag: "Food",
  },

  {
    id: "18",
    imageName: image18,
    tag: "Food",
  },

  {
    id: "22",
    imageName: image22,
    tag: "Food",
  },

  {
    id: "26",
    imageName: image26,
    tag: "Food",
  },
  {
    id: "20",
    imageName: image20,
    tag: "Outlet",
  },

  {
    id: "29",
    imageName: image29,
    tag: "Food",
  },

  {
    id: "31",
    imageName: image31,
    tag: "Food",
  },

  {
    id: "42",
    imageName: image42,
    tag: "Food",
  },
  {
    id: "43",
    imageName: image43,
    tag: "Food",
  },
  {
    id: "44",
    imageName: image44,
    tag: "Food",
  },
  {
    id: "1",
    imageName: image1,
    tag: "Outlet",
  },
  {
    id: "3",
    imageName: image3,
    tag: "Outlet",
  },

  {
    id: "21",
    imageName: image21,
    tag: "Outlet",
  },
  {
    id: "32",
    imageName: image32,
    tag: "Food",
  },

  {
    id: "28",
    imageName: image28,
    tag: "Food",
  },
  {
    id: "36",
    imageName: image36,
    tag: "Food",
  },
  {
    id: "37",
    imageName: image37,
    tag: "Food",
  },

  {
    id: "39",
    imageName: image39,
    tag: "Food",
  },
  {
    id: "40",
    imageName: image40,
    tag: "Food",
  },
  {
    id: "41",
    imageName: image41,
    tag: "Food",
  },
];

function Gallery() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <SimpleReactLightbox>
      <div className="gallery">
        <div className="tags">
          <TagButton
            name="all"
            tagActive={tag === "all" ? true : false}
            handleSetTag={setTag}
          />{" "}
          /
          <TagButton
            name="Outlet"
            tagActive={tag === "Outlet" ? true : false}
            handleSetTag={setTag}
          />{" "}
          /
          <TagButton
            name="Food"
            tagActive={tag === "Food" ? true : false}
            handleSetTag={setTag}
          />{" "}
          /
          <TagButton
            name="Videos"
            tagActive={tag === "Videos" ? true : false}
            handleSetTag={setTag}
          />
        </div>
        <SRLWrapper options={options}>
          <div className="container-2">
            {filteredImages.map((image) => {
              return (
                <div key={image.id} className="image-card">
                  {image.tag === "Videos" ? (
                    <iframe
                      width="420"
                      height="250"
                      src={image.imageName}
                      title="Youtube video player"
                    />
                  ) : (
                    <a href={image.imageName}>
                      <LazyLoadImage
                        effect="blur"
                        className="image"
                        src={`${image.imageName}`}
                        alt=""
                      />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </SRLWrapper>
      </div>
    </SimpleReactLightbox>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};
export default Gallery;

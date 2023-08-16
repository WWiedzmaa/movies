import React from "react";
import Button from "@mui/material/Button";
import Carousel, { carouselClasses } from "mui-carousel";

function Page({ props }) {
  return (
    <Carousel
      renderPrev={({ disabled }) => <Button disabled={disabled}>Prev</Button>}
      renderNext={({ disabled }) => <Button disabled={disabled}>Next</Button>}
      renderDot={({ current }) => (
        <Button variant={current ? "contained" : "outlined"} />
      )}
      dots={true}
      showSlides={3}
      speed={1000 * 1}
      spacing={5}
      autoPlay={false}
      pauseOnHover
      centerMode
      transitionDuration={1000}
      disableTransition={false}
      sx={{
        [`& .${carouselClasses.list}`]: {
          px: 3,
        },
        [`& .${carouselClasses.item} > *`]: {
          transition: "all 0.5s",
        },
        [`& .${carouselClasses.center} > *`]: {
          transform: "scale(1.2)",
        },
      }}
    >
      {props.children}
    </Carousel>
  );
}

export default Carousel;

import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";

const SectionComponent = ({
  containerRef,
  section,
  currentSection,
  children,
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const scrollToSection = () => {
      if (containerRef.current && sectionRef.current) {
        const container = containerRef.current;
        const child = sectionRef.current;

        // Calculate the offset of the child element relative to the container
        const containerRect = container.getBoundingClientRect();
        const childRect = child.getBoundingClientRect();
        const offset = childRect.top - containerRect.top + container.scrollTop;

        // Set the scroll position of the container
        container.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    };

    if (currentSection === section) {
      scrollToSection();
    }
  }, [containerRef, section, currentSection]);

  return (
    <Box
      ref={sectionRef}
      display={"flex"}
      flexDirection={"column"}
      gap={"10px"}
    >
      {children}
    </Box>
  );
};

export default SectionComponent;

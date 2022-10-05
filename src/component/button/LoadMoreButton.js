import React from "react";
import { Button } from "react-bootstrap";

const LoadMoreButton = ({ setLoadMore }) => {
  const handleMore = () => setLoadMore((current) => current + 6);
  return (
    <Button onClick={handleMore} className="m-auto mb-2 w-75">
      Load More
    </Button>
  );
};

export default LoadMoreButton;

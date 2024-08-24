import React, { Children, useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

function ExpandableText({ children, maxChar = 100 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (maxChar >= children.length) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChar);
  return (
    <p>
      {text}...
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
}

export default ExpandableText;

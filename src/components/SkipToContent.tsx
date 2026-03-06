import React from 'react';

const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-500 text-femsa-primary px-4 py-2 rounded-md font-medium z-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
      style={{ fontFamily: 'DM Sans' }}
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;

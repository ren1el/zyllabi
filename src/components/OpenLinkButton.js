import React from 'react';
import Button from 'react-bootstrap';

const OpenLinkButton = ({ text, url }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Button onClick={() => openInNewTab(url)}>
      {text}
    </Button>
  );
};

export default OpenLinkButton;
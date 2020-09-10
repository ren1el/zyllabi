import React from 'react';
import { Button } from 'react-bootstrap';

const Syllabus = ({ syllabus }) => {
  const iframeSrcMicrosoft =  `https://view.officeapps.live.com/op/embed.aspx?src=${syllabus.url}`;

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="syllabus">
      <div className="syllabus-heading">
        <p className="syllabus-heading-info">{syllabus.instructor} ({syllabus.quarter} {syllabus.year})</p>
        <Button className="syllabus-heading-button" onClick={() => openInNewTab(syllabus.url)} variant="outline-success" size="sm">
          Download
        </Button>
      </div>
      <div className="syllabus-embed">
        {syllabus.type === 'application/pdf' &&
          <iframe title={syllabus.id} className="syllabi-embed" src={syllabus.url}></iframe>
        }
        {syllabus.type !== 'application/pdf' &&
          <iframe title={syllabus.id} src={iframeSrcMicrosoft} className="syllabi-embed"></iframe>
        }
      </div>
    </div>
  );
};

export default Syllabus;
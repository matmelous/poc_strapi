import React from "react";
import { getStaticPages } from "../../services";

const StaticPages = () => {
  const [staticPages, setStaticPages] = React.useState([]);

  React.useEffect(() => {
    getStaticPages().then((staticPages) => {
      setStaticPages(staticPages.data.data);
    });
  }, []);

  return (
    <div>
      {staticPages.map((staticPage) => {
        return (
          <div
            dangerouslySetInnerHTML={{ __html: staticPage.attributes.content }}
          />
        );
      })}
    </div>
  );
};

export default StaticPages;

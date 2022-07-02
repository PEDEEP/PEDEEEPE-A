import { useEffect, useState } from "preact/hooks";
import { PDPAContentInterface } from "../types/pdpa_content";

import sanitizeHtml from "sanitize-html";
const PDPAContent = () => {
  const [pdpa, setPdpa] = useState<Array<PDPAContentInterface>>([]);
  const fectchContent = async () => {
    const fetched = await fetch(
      "https://pedeep.mixkoap.com/file/pdpa.json"
    ).then(async (response) => {
      if (!response.ok) {
        throw "Error อ่ะมึง";
      }
      return (await response.json()) as Array<PDPAContentInterface>;
    });
    setPdpa(fetched);
  };

  useEffect(() => {
    fectchContent();
  }, []);

  const sanitized = (html: string) =>
    sanitizeHtml(html, { allowedTags: ["b", "a", "b", "br"] });

  return (
    <div>
      {pdpa.map((el) => {
        return (
          <div
            key={`index-${el.id}`}
            dangerouslySetInnerHTML={{ __html: sanitized(el.content) }}
          />
        );
      })}
    </div>
  );
};

export default PDPAContent;

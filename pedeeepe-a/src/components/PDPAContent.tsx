import { useEffect, useState } from "preact/hooks";
import {
  PDPACheckInterface,
  PDPAContentInterface,
} from "../types/pdpa_content";

import sanitizeHtml from "sanitize-html";
import Swal from "sweetalert2";

const PDPAContent = () => {
  const [pdpa, setPdpa] = useState<Array<PDPAContentInterface>>([]);
  const [areChecked, setAreChecked] = useState<Array<PDPACheckInterface>>([]);
  const [isAlert, setIsAlert] = useState(false);
  const checkScrollSpeed = (function () {
    // settings = settings || {};

    var lastPos: number | null = 50;
    var newPos: number = 50;
    var timer: number = 50;
    var delta: number = 50;
    var delay = 50; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function () {
      newPos = document.getElementById("pdpa-scroll")!.scrollTop;
      if (lastPos != null) {
        delta = newPos - lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      if (delta != null && delta > 45 && !isAlert) {
        setIsAlert(true);
        Swal.fire({
          title: "คุณได้อ่านบ้างรึป่าว scroll เร็วไปนะ ไปอ่านใหม่",
          confirmButtonText: "ได้ครับ.....",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        }).then(() => {
          document.getElementById("pdpa-scroll")?.scrollTo(0, 0);
          setIsAlert(false);
        });
      }
      return delta;
    };
  })();

  const fectchContent = async () => {
    const fetched = await fetch(
      // ขี้เกียจทำ env
      "https://pedeep.mixkoap.com/file/pdpa.json"
    ).then(async (response) => {
      if (!response.ok) {
        throw "Error อ่ะมึง";
      }
      return (await response.json()) as Array<PDPAContentInterface>;
    });
    setPdpa(fetched);
    let arr: Array<PDPACheckInterface> = [];
    fetched.forEach((element) => {
      arr.push({ id: element.id, is_checked: false });
    });
    setAreChecked(arr);
  };

  const handleChecking = (id: number) =>
    setAreChecked(
      areChecked.map((item) =>
        item.id === id ? { ...item, is_checked: !item.is_checked } : item
      )
    );

  const handleSubmit = (): boolean => {
    const main = document.getElementsByTagName("body")[0];
    if (main) {
      main.style.overflow = "auto";
    }
    return areChecked.find((e) => !e.is_checked) ? false : true;
  };

  useEffect(() => {
    fectchContent();
  }, []);

  const sanitized = (html: string) =>
    sanitizeHtml(html, { allowedTags: ["b", "a", "b", "br"] });

  return (
    <div
      id="pdpa-scroll"
      style={{
        overflowY: "scroll",
        backgroundColor: "white",
        height: "70vh",
        padding: "100px",
        borderRadius: "5px",
      }}
      onScroll={checkScrollSpeed}
    >
      {pdpa.map((el) => {
        return (
          <div
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              border: "1px black solid",
            }}
          >
            <input
              type="checkbox"
              style={{ margin: "20px" }}
              onChange={() => handleChecking(el.id)}
            />
            <div
              style={{
                color: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
              }}
              key={`index-${el.id}`}
              dangerouslySetInnerHTML={{ __html: sanitized(el.content) }}
            />
          </div>
        );
      })}
      <button onClick={() => console.log(handleSubmit())}>Submit</button>
    </div>
  );
};

export default PDPAContent;

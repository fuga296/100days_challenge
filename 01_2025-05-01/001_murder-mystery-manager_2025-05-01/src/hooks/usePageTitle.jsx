import { useEffect } from "react";

function usePageTitle(title) {
  useEffect(() => {
    if (typeof title === "string" && title.length > 0) {
      document.title = title;
    }
  }, [title]);
}

export default usePageTitle;
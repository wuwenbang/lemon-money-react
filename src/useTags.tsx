import { useState } from "react";

const useTags = () => {
    const [tags, setTags] = useState<string[]>(["通用", "饮食", "交通", "住宿"]);
    return { tags, setTags }
}

export default useTags;
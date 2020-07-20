import { useState } from "react";
// 封装一个自定义hook
const useTags = () => {
    const [tags, setTags] = useState<string[]>(["通用", "饮食", "交通", "住宿"]);
    return { tags, setTags }
}

export default useTags;
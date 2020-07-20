import { useState } from "react";
import createId from "lib/createId";

type Tag = {
    id: number
    name: string
}

// 封装一个自定义hook
const useTags = () => {
    const [tags, setTags] = useState<Tag[]>([
        { id: createId(), name: "通用" },
        { id: createId(), name: "饮食" },
        { id: createId(), name: "交通" },
        { id: createId(), name: "住宿" }
    ]);
    return { tags, setTags }
}

export default useTags;
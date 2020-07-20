import { useState } from "react";
import createId from "lib/createId";

type Tag = {
    id: number
    name: string
}

const defaultTags = [
    { id: createId(), name: "通用" },
    { id: createId(), name: "饮食" },
    { id: createId(), name: "交通" },
    { id: createId(), name: "住宿" }
]
// 封装一个自定义hook
const useTags = () => {
    const [tags, setTags] = useState<Tag[]>(defaultTags);
    const findTag = (id: number) => {
        return tags.filter(t => t.id === id)[0]
    }
    return { tags, setTags, findTag }
}

export default useTags;
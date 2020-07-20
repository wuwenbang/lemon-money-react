import React from "react"
import useTags from 'useTags';
import { useParams } from "react-router-dom";
import Layout from '../components/Layout';
type Params = {
    id: string
}
const TagEdit: React.FC = () => {
    const { findTag } = useTags();
    let { id } = useParams<Params>();   //获取路由上的ID
    const tag = findTag(parseInt(id));
    return (
        <Layout>
            <div>{tag.name}</div>
        </Layout>
    )
}

export default TagEdit;
import React from "react"
import useTags from 'useTags';
import { useParams } from "react-router-dom";
import Layout from '../components/Layout';
import styled from 'styled-components';
import Icon from "components/Icon";
import Button from "components/Button";
type Params = {
    id: string
}
const TagEdit: React.FC = () => {
    const { findTag } = useTags();
    let { id } = useParams<Params>();   //获取路由上的ID
    const tag = findTag(parseInt(id));
    return (
        <Layout>
            <TopBar>
                <Icon name="left"></Icon>
                <span>编辑标签</span>
                <Icon name=""></Icon>
            </TopBar>
            <main>
                <label>
                    <span>标签名</span>
                    <input type="text"></input>
                </label>
            </main>
            <div>
                <Button>删除标签</Button>
            </div>
        </Layout>
    )
}

const TopBar = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:white;
    line-height:20px;
    padding:14px;
`

export default TagEdit;
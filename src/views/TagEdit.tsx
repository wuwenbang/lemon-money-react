import React from "react"
import useTags from 'hooks/useTags';
import { useParams, useHistory } from "react-router-dom";
import Layout from '../components/Layout';
import styled from 'styled-components';
import Icon from "components/Icon";
import Button from "components/Button";
import Input from "components/Input";
import Center from 'components/Center';
type Params = {
    id: string
}
const TagEdit: React.FC = () => {
    const { findTag, updateTag, deleteTag } = useTags();
    let { id } = useParams<Params>();   //获取路由上的ID
    const tag = findTag(parseInt(id));
    const history = useHistory();
    const onClickBack = () => {
        history.goBack();
    }
    return (
        <Layout>
            <TopBar>
                <Icon name="left" onClick={onClickBack}></Icon>
                <span>编辑标签</span>
                <Icon name=""></Icon>
            </TopBar>
            <InputWrapper>
                <Input label="标签名" type="text" placeholder="标签名" value={tag.name}
                    onChange={(e) => { updateTag(tag.id, { name: e.target.value }) }} />
            </InputWrapper>
            <Center>
                <DeleteButton onClick={() => { deleteTag(tag.id) }}>删除标签</DeleteButton>
            </Center>
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
`;
const InputWrapper = styled.main`
    background:white;
    margin-top:12px;
    padding: 0 16px;
`;
const DeleteButton = styled(Button)`
    background:#f30;
`
export default TagEdit;
import React from 'react'
import Layout from 'components/Layout';
import useTags from 'useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Center from 'components/Center';


function Tags() {
    const { tags } = useTags();
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <Link to={'/tags/' + tag.id}>
                            {tag.name} <Icon name="right" />
                        </Link>
                    </li>
                )}
            </TagList>
            <Center>
                <Button>新建标签</Button>
            </Center>
        </Layout>
    );
}

const TagList = styled.ol`
    font-size:16px;
    background:white;
    padding-left:16px;

    >li{
        border-bottom: 1px solid #d5d5d9;
        line-height:20px;
        >a{
            padding: 12px 16px 12px 0;
            display:flex;
            justify-content:space-between;
            align-items:center;
        >.icon{
            fill:#666;
        }
        } 
    }
`;




export default Tags;
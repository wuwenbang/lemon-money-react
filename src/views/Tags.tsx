import React from 'react'
import Layout from 'components/Layout';
import useTags from 'useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import themeColor from 'global';
import { Link } from 'react-router-dom';

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

const Button = styled.button`
    font-size:16px;
    border:none;
    padding:10px 16px;
    border-radius:4px;
    color: white;
    background:${themeColor};
`

const Center = styled.div`
    padding-top:32px;
    display:flex;
    align-items:center;
    justify-content:center;

`

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

export default Tags;
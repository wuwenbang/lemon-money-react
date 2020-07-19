import styled from 'styled-components';
import React, { useState } from 'react';

const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(["通用", "饮食", "交通", "住宿"]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const newTag = window.prompt("请输入标签名：");
    if (newTag) {
      setTags([...tags, newTag])
    }
  }
  const onToggleTag = (tag: string) => {
    if (selectedTags.indexOf(tag) >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  const setClass = (tag: string) => {
    return selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
  }
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li
          key={tag}
          onClick={() => onToggleTag(tag)}
          className={setClass(tag)}>
          {tag}</li>)}
      </ol>
      <button onClick={onAddTag}>新建标签</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #FFFFFF; 
  padding: 12px 16px;
  flex-grow: 1; 
  display:flex; 
  flex-direction: column;
  justify-content: flex-end; 
  align-items: flex-start;
  > ol { margin: 0 0px;
    > li{
       background: #D9D9D9; 
       border-radius: 18px;
       display:inline-block; 
       padding: 3px 16px; 
       font-size: 14px; 
       margin: 6px 0px;
       margin-right: 12px;
       &.selected{
         background:#61bafb;
         color:white;
       }
    }
  }
  > button{
    background:none; 
    border: none; 
    padding: 2px 4px;
    border-bottom: 1px solid #333; 
    color: #666;
    margin-top: 8px;
  }

`;

export default TagsSection;
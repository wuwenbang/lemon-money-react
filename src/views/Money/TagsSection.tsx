import styled from 'styled-components';
import React from 'react';
import useTags from 'useTags';
type Props = {
  value: number[],
  onChange: (value: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const { tags, createTag } = useTags();

  const onToggleTag = (tagId: number) => {
    if (props.value.indexOf(tagId) >= 0) {
      props.onChange(props.value.filter(t => t !== tagId));
    } else {
      props.onChange([...props.value, tagId])
    }
  }
  const setClass = (tagId: number) => {
    return props.value.indexOf(tagId) >= 0 ? 'selected' : '';
  }
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li
          key={tag.id}
          onClick={() => onToggleTag(tag.id)}
          className={setClass(tag.id)}>
          {tag.name}</li>)}
      </ol>
      <button onClick={createTag}>新建标签</button>
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
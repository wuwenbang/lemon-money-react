import React from 'react'
import Layout from 'components/Layout';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import NotesSection from './Money/NotesSection';
import TypesSection from './Money/TypesSection';
import NumberPadSection from './Money/NumberPadSection';




const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
function Money() {
    return (
        <MyLayout>
            <TagsSection />
            <NotesSection />
            <TypesSection />
            <NumberPadSection />
        </MyLayout>
    );
}

export default Money;
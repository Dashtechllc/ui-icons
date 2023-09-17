import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { Meta, StoryObj } from '@storybook/react';
import * as icons from '../generated/';

const Wrapper = styled.div`
  margin: 32px;
  display: flex;
  flex-wrap: wrap;
`;

const OuterIcon = styled.div`
  transition: 0.2s ease-in-out all;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: white;
  border: 1px solid #b8c1cd;
  border-radius: 10px;
  margin: 6px;
  &:hover {
    visibility: visible;
    background-color: #b8c1cd;
    box-shadow: #5b697e;
    cursor: pointer;
    border-color: #b8c1cd;
  }
  &:hover svg {
    visibility: visible;
  }
`;
const StyledName = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 20;
  display: flex-start;
  margin-bottom: 30px;
  text-align: center;
  color: black;
  width: 100%;
`;
const StyledCode = styled.div`
  margin-top: 10px;
  visibility: hidden;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const meta = {
  title: 'Icon',
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

export default meta;

type IconFC = FunctionComponent<React.SVGProps<SVGSVGElement>>;
export const DefaultIcon = () => {
  const [copySuccess] = useState('');
  const copyToClipBoard = async (copyMe): Promise<void> => {
    try {
      await navigator.clipboard.writeText(copyMe);
      alert('Code copied');
    } catch (err) {
      alert('Failed to copy :(');
    }
  };

  const Icons = Object.values(icons as { [key: string]: IconFC });
  return (
    <Wrapper>
      {Icons.map((IconComponent) => (
        <OuterIcon
          key={`${IconComponent}`}
          onClick={(): void => {
            copyToClipBoard(`<${IconComponent.name} />`);
          }}
        >
          <IconWrapper>
            <StyledName>{IconComponent.name}</StyledName>
            <IconComponent width={50} />
            <StyledCode></StyledCode>
          </IconWrapper>

          {copySuccess}
        </OuterIcon>
      ))}
    </Wrapper>
  );
};

import MagazineFooter from "components/magazineComp/MagazineFooter";
import MagazineHeader from "components/magazineComp/MagazineHeader";
import React, { ReactChild } from "react";
import styled from "styled-components";

const MagazineLayout = ({
  children,
}: {
  children: ReactChild;
}): JSX.Element => {
  return (
    <Wrapper className="magazine-layout">
      <MagazineHeader />
      <main className="magazine-main">{children}</main>
      <MagazineFooter />
    </Wrapper>
  );
};

export default MagazineLayout;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .magazine-main {
    flex: 1;
  }
`;

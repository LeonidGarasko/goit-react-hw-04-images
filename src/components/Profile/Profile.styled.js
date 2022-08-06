import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 300px;
  padding: ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};

  text-align: center;
`;
export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: ${p => p.theme.radii.round};

  background-color: ${p => p.theme.colors.primary};
`;
export const InfoContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  padding-left: 0px;
`;

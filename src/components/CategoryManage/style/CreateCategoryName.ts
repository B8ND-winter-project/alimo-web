import styled from "styled-components";

export const CreateWrap = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  display: flex;
`;

export const Main = styled.div`
  background: rgba(217, 217, 217, 0.4);
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const InputDialog = styled.div`
  position: absolute;
  width: calc(100vw - 80vw);
  height: calc(100vh - 85vh);

  background: #fff;
  border: none;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  position: relative;
  max-width: 100%;
  margin: 0;
  padding: 0.8em 1em 0;
  color: inherit;
  font-size: 1.875em;
  font-weight: 600;
  text-align: center;
  text-transform: none;
  word-wrap: break-word;
`;

export const InputWrap = styled.input`
  box-sizing: border-box;
  width: auto;
  transition:
    border-color 0.1s,
    box-shadow 0.1s;
  border: 1px solid #d9d9d9;
  border-radius: 0.1875em;
  background: rgba(0, 0, 0, 0);
  box-shadow:
    inset 0 1px 1px rgba(0, 0, 0, 0.06),
    0 0 0 3px rgba(0, 0, 0, 0);
  color: inherit;
  font-size: 1.125em;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ConfirmButton = styled.button`
  width: calc(100vw - 95vw);
  height: calc(100vh - 97vh);

  border: none;
  border-radius: 10px;

  background: #fece23;
`;

export const DenyButton = styled.button`
  width: calc(100vw - 95vw);
  height: calc(100vh - 97vh);

  border: none;
  border-radius: 10px;

  background: #787878;
  color: #fff;
`;

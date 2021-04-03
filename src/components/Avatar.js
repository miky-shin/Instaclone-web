import styled from "styled-components";

const SAvatar = styled.div`
  width: ${(props) => (props.lg ? "30px" : "18px")};
  height: ${(props) => (props.lg ? "30px" : "18px")};
  border-radius: 50%;
  background-color: #2c2c2c;
  overflow: hidden;
`;
const Img = styled.img`
  max-width: 100%;
`;

function Avatar({ url = "", lg = false }) {
  return <SAvatar lg={lg}>{url !== "" ? <Img src={url} /> : null}</SAvatar>;
}
export default Avatar;

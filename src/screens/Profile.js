import { gql, useMutation, useQuery } from "@apollo/client";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";
import styled from "styled-components";
import Button from "../components/auth/Button";
import { PHOTO_FRAGMENT } from "../components/fragments";
import PageTitle from "../components/PageTitle";
import { FatText } from "../components/shared";

const FOLLOW_USER_MUTATION = gql`
  mutation followUser($username: String!) {
    followUser(username: $username) {
      ok
    }
  }
`;

const UN_FOLLOW_USER_MUTATION = gql`
  mutation unfollowUser($username: String!) {
    unfollowUser(username: $username) {
      ok
    }
  }
`;

const SEE_PROFILE_QUERY = gql`
  query seeProfile($username: String!) {
    seeProfile(username: $username) {
      firstName
      lastName
      username
      bio
      avatar
      photos {
        ...PhotoFragment
      }
      totalFollowing
      totalFollowers
      isMe
      isFollowing
    }
  }
  ${PHOTO_FRAGMENT}
`;
const Header = styled.div`
  display: flex;
  margin-top: 60px;
`;
const Avatar = styled.img`
  margin-left: 50px;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  margin-right: 150px;
  background-color: #2c2c2c;
`;
const Column = styled.div``;
const Username = styled.h3`
  font-size: 28px;
  font-weight: 400;
`;
const Row = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  margin-right: 20px;
`;
const Value = styled(FatText)`
  font-size: 18px;
`;
const Name = styled(FatText)`
  font-size: 20px;
`;
const Grid = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
`;
const Photo = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  position: relative;
`;
const Icons = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.span`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 0px 5px;
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`;

const ProfileBtn = styled(Button).attrs({
  as: "span",
})`
  margin-left: 10px;
  margin-top: 0px;
`;

function Profile() {
  
  const { username } = useParams();
  const { data, loading } = useQuery(SEE_PROFILE_QUERY, {
    variables: {
      username,
    },
  });
  const updateunFollowing = (cache, result) => {
    const {
      data: {
        unfollowUser: { ok },
      },
    } = result;
    if (ok) {
      cache.modify({
        id: `User:${username}`,
        fields: {
          totalFollowers(prev) {
            return prev - 1;
          },
          isFollowing() {
            return false;
          }
        },
      });
    }
  };
  const updateFollowing = (cache, result) => {
    const {
      data: {
        followUser: { ok },
      },
    } = result;
    if (ok) {
      cache.modify({
        id: `User:${username}`,
        fields: {
          totalFollowers(prev) {
            return prev + 1;
          },
          isFollowing() {
            return true;
          }
        },
      });
    }
  };
  const [followUserMutation] = useMutation(FOLLOW_USER_MUTATION, {
    variables: {
      username,
    },
    update: updateFollowing,
  });
  const [unfollowUserMutation] = useMutation(UN_FOLLOW_USER_MUTATION, {
    variables: {
      username,
    },
    update: updateunFollowing,
  });
  const onUnfollowClick = () => {
    unfollowUserMutation();
  };

  const onfollowClick = () => {
    followUserMutation();
  };
  const getButton = (seeProfile) => {
    const { isMe, isFollowing } = seeProfile;
    if (isMe) {
      return <ProfileBtn>Edit Profile</ProfileBtn>;
    }
    if (isFollowing) {
      return <ProfileBtn onClick={onUnfollowClick}>Unfollow</ProfileBtn>;
    } else {
      return <ProfileBtn onClick={onfollowClick}>Follow</ProfileBtn>;
    }
  };
  console.log(data);
  console.log(username);

  return (
    <div>
      <PageTitle
        title={
          loading ? "Loading..." : `${data?.seeProfile?.username}'s Profile`
        }
      />
      <Header>
        <Avatar src={data?.seeProfile?.avatar} />
        <Column>
          <Row>
            <Username>{data?.seeProfile?.username}</Username>
            {data?.seeProfile ? getButton(data.seeProfile) : null}
          </Row>
          <Row>
            <List>
              <Item>
                <span>
                  <Value>{data?.seeProfile?.totalFollowers}</Value> followers
                </span>
              </Item>
              <Item>
                <span>
                  <Value>{data?.seeProfile?.totalFollowing}</Value> following
                </span>
              </Item>
            </List>
          </Row>
          <Row>
            <Name>
              {data?.seeProfile?.firstName}
              {"  "}
              {data?.seeProfile?.lastName}
            </Name>
          </Row>
          <Row>{data?.seeProfile?.bio}</Row>
        </Column>
      </Header>
      <Grid>
        {data?.seeProfile?.photos.map((photo) => (
          <Photo key={photo.id} bg={photo.file}>
            <Icons>
              <Icon>
                <FontAwesomeIcon icon={faHeart} />
                {photo.likes}
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faComment} />
                {photo.commentNumber}
              </Icon>
            </Icons>
          </Photo>
        ))}
      </Grid>
    </div>
  );
}

export default Profile;

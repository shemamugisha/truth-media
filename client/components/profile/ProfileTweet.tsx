import { FC } from "react";
import { Post } from "../../components";

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const tweets = [
  {
    displayName: "shema",
    username: "0x9684f2Ef5Dc45EF6DF9A5df2704CC96D72e23E2b",
    avatar: "https://picsum.photos/200/300?random=10",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2022-04-19T10:43:17.738Z",
  },
  {
    displayName: "shema",
    username: "0x9684f2Ef5Dc45EF6DF9A5df2704CC96D72e23E2b",
    avatar: "https://picsum.photos/200/300?random=10",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2022-04-19T10:43:17.738Z",
  },
  {
    displayName: "shema",
    username: "0x9684f2Ef5Dc45EF6DF9A5df2704CC96D72e23E2b",
    avatar: "https://picsum.photos/200/300?random=10",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2022-04-19T10:43:17.738Z",
  },
  {
    displayName: "shema",
    username: "0x9684f2Ef5Dc45EF6DF9A5df2704CC96D72e23E2b",
    avatar: "https://picsum.photos/200/300?random=10",
    text: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
        necessitatibus. Provident minima minus mollitia id sequi cupiditate
        quas dolore ratione hic, nesciunt odit velit blanditiis nam beatae,
        veniam eligendi quaerat?
      `,
    isProfileImageNft: false,
    timestamp: "2022-04-19T10:43:17.738Z",
  },
  {
    displayName: "shema",
    username: "0x9684f2Ef5Dc45EF6DF9A5df2704CC96D72e23E2b",
    avatar: "https://picsum.photos/200/300?random=10",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2022-04-19T10:43:17.738Z",
  },
];

const ProfileTweet: FC = () => {
  return (
    <div className={style.wrapper}>
      {tweets &&
        tweets.map((tweet, index) => (
          <Post
            key={index}
            displayName={tweet.displayName}
            userName={tweet.username}
            avatar={tweet.avatar}
            text={tweet.text}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}
          />
        ))}
    </div>
  );
};

export default ProfileTweet;

/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { RiFileGifLine, RiBarChartHorizontalFill } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";

const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `h-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
};

const TweetBox: FC = () => {
  const [message, setMessage] = useState("");
  return (
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img
          src="https://picsum.photos/200/300?random=1"
          alt="profile img"
          className={style.profileImage}
        />
      </div>
      <div className={style.tweetBoxRight}>
        <form>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's happening"
            className={style.inputField}
          ></textarea>
        </form>
        <div className={style.formLowerContainer}>
          <div className={style.iconsContainer}>
            <BsCardImage className={style.icon} />
            <RiFileGifLine className={style.icon} />
            <RiBarChartHorizontalFill className={style.icon} />
            <BsEmojiSmile className={style.icon} />
            <IoMdCalendar className={style.icon} />
            <MdOutlineLocationOn className={style.icon} />
          </div>
          <button
            type="submit"
            className={`${style.submitGeneral}  ${
              message ? style.activeSubmit : style.inactiveSubmit
            } `}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
